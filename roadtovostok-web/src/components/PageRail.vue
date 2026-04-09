<template>
  <div class="page-rail">
    <div class="page-rail-main">
      <slot />
    </div>
    <aside class="page-rail-aside" :aria-label="asideLabel">
      <div class="aside-stack">
        <div v-if="title || links.length" class="aside-card">
          <p v-if="title" class="aside-card-kicker">{{ title }}</p>
          <nav v-if="links.length" class="aside-nav">
            <div
              v-for="(item, i) in links"
              :key="i"
              class="aside-nav-fragment"
            >
              <a
                v-if="item.to"
                :href="item.to"
                class="aside-nav-link"
              >
                {{ item.label }}
              </a>
              <button
                v-else-if="item.scrollKey"
                type="button"
                class="aside-nav-link aside-nav-btn"
                @click="onScroll(item.scrollKey)"
              >
                {{ item.label }}
              </button>
            </div>
          </nav>
        </div>
        <div class="page-rail-aside-extra-wrap">
          <slot name="aside-extra" />
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { scrollToNavAnchor } from '../composables/scrollToNavAnchor.js'

const props = defineProps({
  asideLabel: { type: String, default: 'Briefing' },
  title: { type: String, default: 'Jump to' },
  /** @type {{ label: string, to?: string, scrollKey?: string }[]} */
  links: { type: Array, default: () => [] },
  /** Ref to element that contains all `[data-nav-anchor]` nodes */
  scrollRoot: { type: Object, default: null },
})

function onScroll(key) {
  scrollToNavAnchor(props.scrollRoot, key)
}
</script>

<style scoped>
.page-rail {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(268px, 320px);
  gap: clamp(1.25rem, 2.8vw, 2.25rem);
  /* stretch：侧栏列必须与主列同高，否则 aside 盒子过短，sticky 无法相对整页“跟屏” */
  align-items: stretch;
}

.page-rail-aside {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.page-rail-aside-extra-wrap {
  width: 100%;
}

.aside-stack {
  position: sticky;
  top: var(--app-header-sticky-offset);
  align-self: flex-start;
  width: 100%;
  max-height: calc(100vh - var(--app-header-sticky-offset) - 0.5rem);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 1023px) {
  .page-rail {
    display: flex;
    flex-direction: column;
  }

  .page-rail-aside {
    order: -1;
  }

  .aside-stack {
    position: static;
    gap: 0.85rem;
    max-height: none;
    overflow: visible;
  }
}

.page-rail-main {
  min-width: 0;
}

.aside-card {
  padding: 1.1rem 1.2rem;
  border-radius: 12px;
  border: 1px solid color-mix(in srgb, var(--color-grid-line) 55%, var(--color-border));
  background: linear-gradient(
    145deg,
    color-mix(in srgb, var(--color-panel) 92%, transparent) 0%,
    color-mix(in srgb, var(--color-surface) 88%, transparent) 100%
  );
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--color-ice) 12%, transparent),
    0 18px 40px rgba(0, 0, 0, 0.28);
}

.aside-card-kicker {
  margin: 0 0 0.65rem;
  font-family: var(--font-journey);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-signal);
}

.aside-nav {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.aside-nav-fragment {
  display: contents;
}

.aside-nav-link {
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-muted);
  padding: 0.45rem 0.5rem;
  margin: 0 -0.5rem;
  border-radius: 6px;
  border: 1px solid transparent;
  transition:
    color 0.18s ease,
    background 0.18s ease,
    border-color 0.18s ease;
}

.aside-nav-btn {
  display: block;
  width: calc(100% + 1rem);
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  background: none;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.aside-nav-link:hover {
  color: var(--color-text);
  background: color-mix(in srgb, var(--color-ice) 10%, var(--color-panel));
  border-color: color-mix(in srgb, var(--color-ice) 28%, var(--color-border));
}
</style>
