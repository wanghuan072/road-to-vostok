<template>
  <article class="page-article">
    <section class="page-hero-section">
      <div class="container">
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
            <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
            <span aria-hidden="true">/</span>
            <span>{{ $t('gettingStartedPage.breadcrumb') }}</span>
          </nav>
          <h1 v-html="$t('gettingStartedPage.title')"></h1>
          <p v-html="$t('gettingStartedPage.introHtml')"></p>
        </div>
      </div>
    </section>

    <div ref="railScrollRoot" class="container getting-started-body">
      <PageRail
        :aside-label="$t('gettingStartedPage.railAside')"
        :title="$t('gettingStartedPage.railTitle')"
        :scroll-root="railScrollRoot"
        :links="asideLinks"
      >
        <section data-nav-anchor="core-loop" class="page-body-section">
          <div class="page-body-content" v-html="$t('gettingStartedPage.sectionCoreHtml')" />
        </section>

        <section data-nav-anchor="controls" class="page-body-section">
          <div class="page-body-content" v-html="$t('gettingStartedPage.sectionControlsHtml')" />
        </section>

        <section data-nav-anchor="weapons-loading" class="page-body-section">
          <div class="page-body-content" v-html="$t('gettingStartedPage.sectionWeaponsHtml')" />
        </section>

        <section data-nav-anchor="medical" class="page-body-section">
          <div class="page-body-content" v-html="$t('gettingStartedPage.sectionMedicalHtml')" />
        </section>

        <section data-nav-anchor="crafting" class="page-body-section">
          <div class="page-body-content" v-html="$t('gettingStartedPage.sectionCraftingHtml')" />
        </section>
      </PageRail>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageRail from '../components/PageRail.vue'
import { useLocalizedPath } from '../composables/useLocalizedPath.js'

const { getLocalizedPath } = useLocalizedPath()

const railScrollRoot = ref(null)

const { t } = useI18n()
const asideLinks = computed(() => [
  { label: t('gettingStartedPage.asideCore'), scrollKey: 'core-loop' },
  { label: t('gettingStartedPage.asideControls'), scrollKey: 'controls' },
  { label: t('gettingStartedPage.asideWeapons'), scrollKey: 'weapons-loading' },
  { label: t('gettingStartedPage.asideMedical'), scrollKey: 'medical' },
  { label: t('gettingStartedPage.asideCrafting'), scrollKey: 'crafting' },
])
</script>

<style scoped>
.page-article {
  padding-bottom: 4rem;
}

.page-hero-content p {
  color: var(--color-muted);
}

.page-body-section {
  padding: 1.5rem 0;
}

.page-body-section + .page-body-section {
  border-top: 1px solid var(--color-border);
}

.page-body-content h2 {
  margin-top: 0;
}

.page-body-content h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary-soft);
}

.page-body-content > p,
.page-body-content > ul {
  color: var(--color-muted);
}

.page-body-content ul {
  padding-left: 1.2rem;
}

.callout {
  margin: 1.25rem 0 0;
  padding: 1rem 1.15rem;
  border-left: 3px solid var(--color-ice);
  background: color-mix(in srgb, var(--color-panel) 88%, transparent);
  border-radius: 0 4px 4px 0;
  color: var(--color-muted);
  font-size: 0.95rem;
}

.callout-warn {
  border-left-color: var(--color-signal);
}

.table-wrap {
  margin: 1.25rem 0;
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: var(--color-panel);
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
  color: var(--color-text);
}

.data-table th,
.data-table td {
  padding: 0.55rem 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
  vertical-align: top;
}

.data-table th {
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.72rem;
  color: var(--color-primary-soft);
  background: color-mix(in srgb, var(--color-surface) 80%, transparent);
}

.data-table tbody tr:last-child td {
  border-bottom: none;
}

.data-table caption {
  caption-side: bottom;
  padding: 0.6rem 0.75rem;
  font-size: 0.78rem;
  color: var(--color-muted);
  text-align: left;
}

.data-table-compact caption {
  caption-side: top;
  padding-bottom: 0.5rem;
}

.page-body-content img {
  margin-top: 1.5rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
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
</style>
