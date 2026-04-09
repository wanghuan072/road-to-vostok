<template>
  <div class="app-shell">
    <!-- 全站底图：固定 cover + 深色渐变压暗（保证正文可读） -->
    <div class="shell-bg shell-bg-photo" aria-hidden="true" />
    <div class="shell-bg shell-bg-grid" aria-hidden="true" />
    <!-- 氛围层：轻极光 + 暗角 + 颗粒 -->
    <div class="shell-fx" aria-hidden="true">
      <div class="shell-fx-aurora" />
      <div class="shell-fx-vignette" />
      <div class="shell-fx-grain" />
    </div>
    <AppHeader />
    <main id="main-content" class="main-content">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { useRouteSeo } from './seo/composables.js'

useRouteSeo()

const { locale } = useI18n()
watch(
  locale,
  (v) => {
    document.documentElement.lang = v === 'zh' ? 'zh-CN' : 'en'
  },
  { immediate: true },
)
</script>

<style scoped>
.app-shell {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  isolation: isolate;
}

.shell-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.shell-bg-photo {
  background-image:
    linear-gradient(
      168deg,
      color-mix(in srgb, var(--color-bg) 86%, transparent) 0%,
      color-mix(in srgb, var(--color-bg) 72%, transparent) 38%,
      color-mix(in srgb, #0a1520 78%, transparent) 100%
    ),
    url('/images/bg.webp');
  background-size: cover;
  background-position: center 22%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.shell-bg-grid {
  opacity: 1;
  background-image:
    linear-gradient(var(--color-grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-grid-line) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 85% 75% at 50% 42%, black 20%, transparent 72%);
}

@media (max-width: 1023px) {
  .shell-bg-photo {
    background-attachment: scroll;
    
  }
}

@media (prefers-reduced-motion: reduce) {
  .shell-bg-photo {
    background-attachment: scroll;
  }
}

.shell-fx {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.shell-fx-aurora {
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(ellipse 55% 40% at 15% 18%, color-mix(in srgb, var(--color-ice) 11%, transparent), transparent 55%),
    radial-gradient(ellipse 42% 34% at 88% 78%, color-mix(in srgb, var(--color-signal) 8%, transparent), transparent 52%),
    radial-gradient(ellipse 48% 48% at 50% 100%, color-mix(in srgb, var(--color-ice-dim) 6%, transparent), transparent 48%);
  animation: aurora-drift 28s ease-in-out infinite alternate;
}

.shell-fx-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 78% 72% at 50% 44%, transparent 0%, var(--color-bg) 92%);
  opacity: 0.72;
}

.shell-fx-grain {
  position: absolute;
  inset: 0;
  opacity: 0.038;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
}

.main-content {
  position: relative;
  z-index: 2;
  flex: 1;
}

@keyframes aurora-drift {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }

  100% {
    transform: translate(-2%, 1%) rotate(2deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .shell-fx-aurora {
    animation: none;
  }

  .shell-fx-grain {
    opacity: 0.028;
  }
}
</style>
