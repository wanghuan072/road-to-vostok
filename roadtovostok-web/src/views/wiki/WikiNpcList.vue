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
            <span>{{ $t('npcListPage.breadcrumb') }}</span>
          </nav>
          <h1>{{ $t('npcListPage.title') }}</h1>
          <p class="lead" v-html="$t('npcListPage.leadHtml')"></p>
        </div>
      </div>
    </section>

    <section class="page-body-section" :aria-label="$t('npcListPage.listAria')">
      <div class="container">
        <ul class="item-db-hub-grid" role="list">
          <li v-for="n in npcList" :key="n.addressBar">
            <a :href="getLocalizedPath(`/wiki/npcs/${n.addressBar}`)" class="item-db-hub-card">
              <span class="kicker">{{ n.role }}</span>
              <h2>{{ n.title }}</h2>
              <p>{{ n.summary }}</p>
              <span class="go">{{ $t('npcListPage.cardGo') }}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getNpcList } from '../../data/localeData.js'
import { useLocalizedPath } from '../../composables/useLocalizedPath.js'

const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const npcList = computed(() => getNpcList(locale.value))
</script>

<style src="./item-db-shared.css"></style>
