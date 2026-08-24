<template>
  <article class="tasks-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
            <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
            <span aria-hidden="true">/</span>
            <span>{{ $t('tasksPage.breadcrumb') }}</span>
          </nav>
          <h1 v-html="$t('tasksPage.title')"></h1>
          <p v-html="$t('tasksPage.introHtml')"></p>
        </div>
      </div>
    </section>


    <div ref="railScrollRoot" class="container tasks-rail-body">
      <PageRail
        :aside-label="$t('tasksPage.railAside')"
        :title="$t('tasksPage.railTitle')"
        :scroll-root="railScrollRoot"
        :links="asideLinks"
      >
        <section data-nav-anchor="all-tasks-guide" class="guide-section page-body-section">
          <div class="container">
            <div class="guide-prose" v-html="$t('tasksPage.bodyAllTasksHtml')" />
          </div>
        </section>

        <section data-nav-anchor="vostok-border-guide" class="guide-section page-body-section">
          <div class="container">
            <div class="guide-prose" v-html="$t('tasksPage.bodyBorderVostokHtml')" />
          </div>
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
  { label: t('tasksPage.asideAllTasks'), scrollKey: 'all-tasks-guide' },
  { label: t('tasksPage.asideBorderVostok'), scrollKey: 'vostok-border-guide' },
])
</script>

<style scoped>
.tasks-page.page-article {
  padding-bottom: 4rem;
}

.page-hero-content p {
  color: var(--color-muted);
}

.page-body-section {
  padding: 1.5rem 0;
  border-top: 1px solid var(--color-border);
}

.guide-section:first-of-type.page-body-section {
  border-top: none;
}

.guide-prose {
  max-width: 72ch;
}

.guide-prose h2 {
  margin: 0 0 0.75rem;
  font-size: 1.35rem;
  color: var(--color-text);
}

.guide-prose h3 {
  margin: 1.35rem 0 0.5rem;
  font-size: 1.05rem;
  color: var(--color-primary-soft);
}

.guide-prose p {
  margin: 0 0 0.85rem;
  color: var(--color-muted);
  font-size: 0.94rem;
  line-height: 1.6;
}

.guide-prose ul,
.guide-prose ol {
  margin: 0 0 0.85rem;
  padding-left: 1.25rem;
  color: var(--color-muted);
  font-size: 0.94rem;
  line-height: 1.55;
}

.guide-prose li {
  margin-bottom: 0.35rem;
}

.guide-steps {
  list-style-position: outside;
}

.guide-tools {
  margin-top: 1rem !important;
  padding: 0.85rem 1rem;
  border-left: 3px solid var(--color-frost);
  background: color-mix(in srgb, var(--color-panel) 88%, transparent);
  border-radius: 0 6px 6px 0;
  font-size: 0.9rem !important;
}

.guide-tools a {
  color: var(--color-primary-soft);
}

.guide-disclaimer {
  margin-bottom: 0 !important;
  font-size: 0.88rem !important;
  color: var(--color-muted);
  opacity: 0.95;
}
</style>
