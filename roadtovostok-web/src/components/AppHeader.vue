<template>
  <header class="app-header" role="banner">
    <div class="container">
      <div class="app-header-content">
        <a :href="getLocalizedPath('/')" class="brand" :aria-label="$t('site.headerBrandHomeAria')">
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
            <span class="brand-text">{{ $t('site.brandName') }}</span>
          </span>
        </a>
        <div class="header-end">
          <button
            type="button"
            class="nav-toggle"
            :aria-expanded="menuOpen"
            aria-controls="site-nav"
            @click="menuOpen = !menuOpen"
          >
            <span class="sr-only">{{ $t('site.headerToggleMenu') }}</span>
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
          <nav id="site-nav" class="site-nav" :class="{ 'is-open': menuOpen }" :aria-label="$t('site.headerNavMainAria')">
            <a
              v-for="item in nav"
              :key="item.to"
              :href="getLocalizedPath(item.to)"
              class="nav-link"
              :class="{ 'is-active': isNavActive(item.to) }"
              @click="menuOpen = false"
            >
              {{ item.label }}
            </a>
          </nav>
          <div ref="localeRootRef" class="locale-dropdown-wrap">
            <button
              type="button"
              class="locale-dropdown-trigger"
              :aria-expanded="localeMenuOpen"
              :aria-haspopup="true"
              :aria-label="$t('site.localeSwitchAria')"
              @click="localeMenuOpen = !localeMenuOpen"
            >
              <span class="locale-dropdown-current">{{ localeNames[currentLocale] || currentLocale }}</span>
              <svg class="locale-dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <ul
              v-show="localeMenuOpen"
              class="locale-dropdown-menu"
              role="listbox"
              :aria-label="$t('site.localeSwitchAria')"
            >
              <li v-for="loc in supportedLocales" :key="loc" role="option" :aria-selected="currentLocale === loc">
                <button type="button" class="locale-dropdown-item" @click="selectLanguage(loc)">
                  {{ localeNames[loc] || loc }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocalizedPath, stripLocaleFromFullPath, applyLocalePrefix } from '../composables/useLocalizedPath.js'
import { localeNames, supportedLocales } from '../i18n/index.js'

const route = useRoute()
const router = useRouter()
const menuOpen = ref(false)
const localeMenuOpen = ref(false)
const localeRootRef = ref(null)

const { t } = useI18n()
const { getLocalizedPath, getCurrentLocale } = useLocalizedPath()

const currentLocale = computed(() => getCurrentLocale())

function selectLanguage(newLocale) {
  if (newLocale === currentLocale.value) {
    localeMenuOpen.value = false
    return
  }
  const logical = stripLocaleFromFullPath(route.fullPath)
  const target = applyLocalePrefix(logical, newLocale)
  localeMenuOpen.value = false
  menuOpen.value = false
  void router.push(target)
}

function isNavActive(logicalTo) {
  const logicalCurrent = stripLocaleFromFullPath(route.path)
  const segment = logicalTo === '/' ? '/' : logicalTo.replace(/\/$/, '')
  if (segment === '/') {
    return logicalCurrent === '/' || logicalCurrent === ''
  }
  return logicalCurrent === segment || logicalCurrent.startsWith(`${segment}/`)
}

const brandLogoSrc = '/images/logo.webp'

const nav = computed(() => [
  { label: t('site.navHome'), to: '/' },
  { label: t('site.navStartHere'), to: '/getting-started' },
  { label: t('site.navPoster'), to: '/road-to-vostok-poster' },
  { label: t('site.navWiki'), to: '/wiki' },
  { label: t('site.navMap'), to: '/map' },
  { label: t('site.navTasks'), to: '/tasks' },
  { label: t('site.navGuides'), to: '/guides' },
  { label: t('site.navRoadAhead'), to: '/dev-updates' },
  { label: t('site.navMods'), to: '/mods' },
])

function onDocPointerDown(e) {
  const root = localeRootRef.value
  if (!root || !localeMenuOpen.value) return
  if (e.target instanceof Node && !root.contains(e.target)) {
    localeMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('pointerdown', onDocPointerDown, true)
})
onUnmounted(() => {
  document.removeEventListener('pointerdown', onDocPointerDown, true)
})
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

.header-end {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem 0.75rem;
  flex: 1;
  min-width: 0;
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
  flex-shrink: 0;
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
  order: 2;
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
  order: 1;
  flex: 1;
  min-width: 0;
}

.locale-dropdown-wrap {
  position: relative;
  flex-shrink: 0;
  order: 3;
}

.locale-dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.45rem 0.65rem;
  border: 1px solid var(--color-border);
  border-radius: 3px;
  background: color-mix(in srgb, var(--color-panel) 88%, transparent);
  color: var(--color-text);
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
}

.locale-dropdown-trigger:hover,
.locale-dropdown-trigger[aria-expanded='true'] {
  border-color: var(--color-ice);
  background: var(--color-surface);
  box-shadow: 0 0 14px color-mix(in srgb, var(--color-ice) 18%, transparent);
}

.locale-dropdown-chevron {
  opacity: 0.75;
  flex-shrink: 0;
}

.locale-dropdown-trigger[aria-expanded='true'] .locale-dropdown-chevron {
  transform: rotate(180deg);
}

.locale-dropdown-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 4px);
  min-width: 9rem;
  margin: 0;
  padding: 0.35rem;
  list-style: none;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  box-shadow:
    0 12px 36px rgba(0, 0, 0, 0.35),
    0 0 0 1px color-mix(in srgb, var(--color-ice) 12%, transparent);
  z-index: 120;
}

.locale-dropdown-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.5rem 0.6rem;
  border: none;
  border-radius: 3px;
  background: transparent;
  color: var(--color-text);
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: background 0.15s ease;
}

.locale-dropdown-item:hover {
  background: var(--color-panel);
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

@media (max-width: 1023px) {
  .header-end {
    flex-wrap: wrap;
  }

  .nav-toggle {
    display: inline-flex;
  }

  .locale-dropdown-wrap {
    margin-left: auto;
    order: 1;
  }

  .nav-toggle {
    order: 2;
  }

  .site-nav {
    display: none;
    order: 4;
    flex: 1 1 100%;
    flex-direction: column;
    align-items: stretch;
    padding: 0.75rem 0 0;
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
