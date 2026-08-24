<template>
  <article class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
            <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
            <span aria-hidden="true"> / </span>
            <a :href="getLocalizedPath('/wiki')">{{ $t('site.navWiki') }}</a>
            <span aria-hidden="true"> / </span>
            <span>{{ $t('wikiCoreTasksPage.breadcrumb') }}</span>
          </nav>
          <h1 v-html="$t('wikiCoreTasksPage.title')"></h1>
          <p class="lead" v-html="$t('wikiCoreTasksPage.leadHtml')"></p>
        </div>
      </div>
    </section>

    <section class="page-body-section" :aria-label="$t('wikiCoreTasksPage.tableAria')">
      <div class="container">
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th scope="col">{{ $t('wikiCoreTasksPage.colItem') }}</th>
                <th scope="col">{{ $t('wikiCoreTasksPage.colRole') }}</th>
                <th scope="col">{{ $t('wikiCoreTasksPage.colRelated') }}</th>
                <th scope="col">{{ $t('wikiCoreTasksPage.colNotes') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in rows" :key="i">
                <td>{{ row.item }}</td>
                <td>{{ row.role }}</td>
                <td>{{ row.taskLink }}</td>
                <td>{{ row.notes }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cross-links" v-html="$t('wikiCoreTasksPage.crossLinksHtml')"></div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getCoreTaskRows } from '../../data/localeData.js'
import { useLocalizedPath } from '../../composables/useLocalizedPath.js'

const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const rows = computed(() => getCoreTaskRows(locale.value))
</script>

<style src="./item-db-shared.css"></style>
