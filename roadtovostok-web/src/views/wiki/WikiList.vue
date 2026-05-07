<template>
  <article class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
            <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
            <span aria-hidden="true"> / </span>
            <span>{{ $t('wikiHubPage.breadcrumb') }}</span>
          </nav>
          <h1>{{ $t('wikiHubPage.title') }}</h1>
          <p class="lead" v-html="$t('wikiHubPage.leadHtml')"></p>
        </div>
        <GptAdWrap :placement-index="0" />
      </div>
    </section>

    <section class="page-body-section" :aria-label="$t('wikiHubPage.categoriesAria')">
      <div class="container">
        <WikiLootTable :ad-placement-index="1" />
        <GptAdWrap :placement-index="2" />

        <ul class="item-db-hub-grid" role="list">
          <li>
            <a :href="getLocalizedPath('/wiki/core-tasks')" class="item-db-hub-card">
              <span class="kicker" v-html="$t('wikiHubPage.cardCoreKicker')"></span>
              <h2 v-html="$t('wikiHubPage.cardCoreTitle')"></h2>
              <p v-html="$t('wikiHubPage.cardCoreBlurb')"></p>
              <span class="go">{{ $t('wikiHubPage.goOpenTable') }}</span>
            </a>
          </li>
          <li>
            <a :href="getLocalizedPath('/wiki/weapons')" class="item-db-hub-card">
              <span class="kicker" v-html="$t('wikiHubPage.cardWeaponsKicker')"></span>
              <h2 v-html="$t('wikiHubPage.cardWeaponsTitle')"></h2>
              <p v-html="$t('wikiHubPage.cardWeaponsBlurb')"></p>
              <span class="go">{{ $t('wikiHubPage.goOpenTable') }}</span>
            </a>
          </li>
          <li>
            <a :href="getLocalizedPath('/wiki/ammunition')" class="item-db-hub-card">
              <span class="kicker" v-html="$t('wikiHubPage.cardAmmoKicker')"></span>
              <h2 v-html="$t('wikiHubPage.cardAmmoTitle')"></h2>
              <p v-html="$t('wikiHubPage.cardAmmoBlurb')"></p>
              <span class="go">{{ $t('wikiHubPage.goOpenTable') }}</span>
            </a>
          </li>
          <li>
            <a :href="getLocalizedPath('/wiki/fishing')" class="item-db-hub-card">
              <span class="kicker" v-html="$t('wikiHubPage.cardFishKicker')"></span>
              <h2 v-html="$t('wikiHubPage.cardFishTitle')"></h2>
              <p v-html="$t('wikiHubPage.cardFishBlurb')"></p>
              <span class="go">{{ $t('wikiHubPage.goOpenGuideList') }}</span>
            </a>
          </li>
          <li>
            <a :href="getLocalizedPath('/wiki/gathering')" class="item-db-hub-card">
              <span class="kicker" v-html="$t('wikiHubPage.cardGatherKicker')"></span>
              <h2 v-html="$t('wikiHubPage.cardGatherTitle')"></h2>
              <p v-html="$t('wikiHubPage.cardGatherBlurb')"></p>
              <span class="go">{{ $t('wikiHubPage.goOpenTable') }}</span>
            </a>
          </li>
          <li>
            <a :href="getLocalizedPath('/wiki/npcs')" class="item-db-hub-card">
              <span class="kicker" v-html="$t('wikiHubPage.cardNpcKicker')"></span>
              <h2 v-html="$t('wikiHubPage.cardNpcTitle')"></h2>
              <p v-html="$t('wikiHubPage.cardNpcBlurb')"></p>
              <span class="go">{{ $t('wikiHubPage.goOpenNpcWiki') }}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup>
import WikiLootTable from '@/components/WikiLootTable.vue'
import { useLocalizedPath } from '../../composables/useLocalizedPath.js'

const { getLocalizedPath } = useLocalizedPath()
</script>

<style src="./item-db-shared.css"></style>
