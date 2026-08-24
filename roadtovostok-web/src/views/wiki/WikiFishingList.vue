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
            <span>{{ $t('wikiFishingPage.breadcrumb') }}</span>
          </nav>
          <h1>{{ $t('wikiFishingPage.title') }}</h1>
          <p class="lead">
            {{ $t('wikiFishingPage.lead') }}
          </p>
        </div>
      </div>
    </section>

    <section class="page-body-section" :aria-label="$t('wikiFishingPage.checklistAria')">
      <div class="container">
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th scope="col">{{ $t('wikiFishingPage.colTopic') }}</th>
                <th scope="col">{{ $t('wikiFishingPage.colWhatToCheck') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in rows" :key="i">
                <td>{{ row.topic }}</td>
                <td>{{ row.detail }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cross-links" v-html="$t('wikiFishingPage.crossLinksHtml')"></div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getFishingRows } from '../../data/localeData.js'
import { useLocalizedPath } from '../../composables/useLocalizedPath.js'

const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const rows = computed(() => getFishingRows(locale.value))
</script>

<style src="./item-db-shared.css"></style>
