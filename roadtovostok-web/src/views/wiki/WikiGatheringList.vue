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
            <span>{{ $t('wikiGatheringPage.breadcrumb') }}</span>
          </nav>
          <h1 v-html="$t('wikiGatheringPage.title')"></h1>
          <p class="lead" v-html="$t('wikiGatheringPage.leadHtml')"></p>
        </div>
        <GptAdWrap :placement-index="0" />
      </div>
    </section>

    <section class="page-body-section" :aria-label="$t('wikiGatheringPage.tableAria')">
      <div class="container">
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th scope="col">{{ $t('wikiGatheringPage.colResource') }}</th>
                <th scope="col">{{ $t('wikiGatheringPage.colSource') }}</th>
                <th scope="col">{{ $t('wikiGatheringPage.colUsedFor') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in rows" :key="i">
                <td>{{ row.resource }}</td>
                <td>{{ row.source }}</td>
                <td>{{ row.usedFor }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cross-links" v-html="$t('wikiGatheringPage.crossLinksHtml')"></div>
        <GptAdWrap :placement-index="1" />
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getGatheringRows } from '../../data/localeData.js'
import { useLocalizedPath } from '../../composables/useLocalizedPath.js'

const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const rows = computed(() => getGatheringRows(locale.value))
</script>

<style src="./item-db-shared.css"></style>
