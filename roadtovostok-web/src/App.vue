<template>
  <div class="app-shell" @click.capture="onContentLinkClick">
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
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { useHtmlContentLinkNavigation } from './composables/htmlContentLinks.js'
import { useRouteSeo } from './seo/composables.js'

useRouteSeo()
const { onContentLinkClick } = useHtmlContentLinkNavigation()
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
  /* fixed 在部分桌面/Lighthouse 下会放大 CLS 与合成成本；与移动策略统一为 scroll */
  background-attachment: scroll;
}

.shell-bg-grid {
  opacity: 1;
  background-image:
    linear-gradient(var(--color-grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-grid-line) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 85% 75% at 50% 42%, black 20%, transparent 72%);
}

.shell-fx {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
  /* 装饰层 paint 隔离，减轻极光动画带来的 CLS 计量 */
  contain: paint;
}

.shell-fx-aurora {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(ellipse 62% 48% at 12% 16%, color-mix(in srgb, var(--color-ice) 12%, transparent), transparent 58%),
    radial-gradient(ellipse 50% 40% at 90% 80%, color-mix(in srgb, var(--color-signal) 9%, transparent), transparent 55%),
    radial-gradient(ellipse 55% 55% at 50% 100%, color-mix(in srgb, var(--color-ice-dim) 7%, transparent), transparent 52%);
  transform: translate3d(0, 0, 0);
  animation: aurora-drift 28s ease-in-out infinite alternate;
}

@media (prefers-reduced-motion: no-preference) {
  .shell-fx-aurora {
    will-change: transform;
  }
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
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  100% {
    transform: translate3d(-1.5%, 0.8%, 0) rotate(1.5deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .shell-fx-aurora {
    animation: none;
    will-change: auto;
  }

  .shell-fx-grain {
    opacity: 0.028;
  }
}
</style>
