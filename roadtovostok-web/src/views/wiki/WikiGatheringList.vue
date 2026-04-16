<template>
  <article ref="gatheringAdsRoot" class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <div
          ref="gatheringGptRoot"
          id="div-gpt-ad-1775617033282-0"
          style="min-width: 320px; min-height: 50px"
        ></div>
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
        <aside
          style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center"
        >
          <ins
            class="adsbygoogle"
            style="display: block"
            data-ad-client="ca-pub-9435047454967498"
            data-ad-slot="roadtovostok_Adx_ban1"
            data-ad-format="auto"
            data-full-width-responsive="true"
            data-tag-src="gamtg"
          ></ins>
        </aside>
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
        <aside
          style="width: 100%; margin: 1.25rem auto 0; padding: 1rem; text-align: center"
        >
          <ins
            class="adsbygoogle"
            style="display: block"
            data-ad-client="ca-pub-9435047454967498"
            data-ad-slot="roadtovostok_Adx_ban1"
            data-ad-format="auto"
            data-full-width-responsive="true"
            data-tag-src="gamtg"
          ></ins>
        </aside>
        <div class="cross-links" v-html="$t('wikiGatheringPage.crossLinksHtml')"></div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed, ref, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { getGatheringRows } from '../../data/localeData.js'
import { useLocalizedPath } from '../../composables/useLocalizedPath.js'

const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const rows = computed(() => getGatheringRows(locale.value))

const gatheringAdsRoot = ref(null)
const gatheringGptRoot = ref(null)

function mountGatheringGptDisplay() {
  const root = gatheringGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushGatheringAdx() {
  const root = gatheringAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('Gathering ADX push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountGatheringGptDisplay()
  } catch (e) {
    console.error('Gathering GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushGatheringAdx()
    } catch (e) {
      console.error('Gathering ADX failed:', e)
    }
  })
})
</script>

<style src="./item-db-shared.css"></style>
