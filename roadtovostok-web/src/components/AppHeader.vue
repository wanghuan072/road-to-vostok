<template>
  <header class="app-header" role="banner">
    <div class="container">
      <div class="app-header-content">
        <a href="/" class="brand" aria-label="Road To Vostok Guide Home">
          <img
            class="brand-logo"
            :src="brandLogoSrc"
            width="40"
            height="40"
            alt=""
            decoding="async"
            fetchpriority="high"
          >
          <span class="brand-block">
            <span class="brand-text">Road To Vostok</span>
          </span>
        </a>
        <button
          type="button"
          class="nav-toggle"
          :aria-expanded="menuOpen"
          aria-controls="site-nav"
          @click="menuOpen = !menuOpen"
        >
          <span class="sr-only">Toggle menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              v-if="!menuOpen"
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              v-else
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <nav id="site-nav" class="site-nav" :class="{ 'is-open': menuOpen }" aria-label="Main">
          <a
            v-for="item in nav"
            :key="item.to"
            :href="item.to"
            class="nav-link"
            :class="{ 'is-active': isNavActive(item.to) }"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

function isNavActive(to) {
  const p = route.path
  if (to === '/') return p === '/'
  if (p === to) return true
  if (to !== '/' && p.startsWith(`${to}/`)) return true
  return false
}
/** Public dir; avoid literal /images/... in template (Vite may treat as module). */
const brandLogoSrc = '/images/logo.webp'

const nav = [
  { label: 'Home', to: '/' },
  { label: 'Start here', to: '/getting-started' },
  { label: 'Wiki', to: '/wiki' },
  { label: 'Map', to: '/map' },
  { label: 'Tasks', to: '/tasks' },
  { label: 'Guides', to: '/guides' },
  { label: 'Road ahead', to: '/dev-updates' },
  { label: 'Mods', to: '/mods' },
]
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: color-mix(in srgb, var(--color-surface) 82%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  box-shadow:
    0 1px 0 rgba(0, 0, 0, 0.35),
    0 12px 40px rgba(0, 0, 0, 0.2);
  isolation: isolate;
}

.app-header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 3.75rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
  color: var(--color-text);
  cursor: pointer;
  transition:
    opacity 0.2s ease,
    filter 0.25s ease;
}

.brand:hover {
  opacity: 0.96;
  filter: drop-shadow(0 0 16px color-mix(in srgb, var(--color-ice) 38%, transparent));
}

.brand-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
  background: color-mix(in srgb, var(--color-panel) 70%, transparent);
}

.brand-block {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.brand-text {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.brand-sub {
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.nav-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 2px;
  background: var(--color-panel);
  color: var(--color-text);
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
}

.nav-toggle:hover {
  border-color: var(--color-border-strong);
  background: var(--color-surface);
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.15rem 0.25rem;
}

.nav-link {
  position: relative;
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-muted);
  padding: 0.5rem 0.65rem;
  border: 1px solid transparent;
  border-radius: 2px;
  cursor: pointer;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 4px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-signal), transparent);
  transform: translateX(-50%);
  transition: width 0.25s ease;
  border-radius: 2px;
  pointer-events: none;
}

.nav-link:hover {
  color: var(--color-text);
  background: var(--color-panel);
  border-color: var(--color-border);
}

.nav-link:hover::after {
  width: 55%;
}

.nav-link.is-active {
  color: var(--color-bg);
  background: var(--color-ice-dim);
  border-color: var(--color-ice);
  box-shadow: 0 0 22px color-mix(in srgb, var(--color-ice) 26%, transparent);
}

.nav-link.is-active::after {
  width: 70%;
  background: var(--color-signal-soft);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 767px) {
  .brand-compass {
    display: none;
  }
}

@media (max-width: 1023px) {
  .nav-toggle {
    display: inline-flex;
  }

  .site-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 0.75rem clamp(1rem, 4vw, 1.75rem) 1rem;
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    gap: 0.25rem;
  }

  .site-nav.is-open {
    display: flex;
  }

  .nav-link {
    padding: 0.65rem 0.75rem;
  }
}
</style>
