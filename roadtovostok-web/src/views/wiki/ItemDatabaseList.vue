<template>
  <article ref="wikiHubAdsRoot" class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <div
          ref="wikiHubGptRoot"
          id="div-gpt-ad-1775617033282-0"
          style="min-width: 320px; min-height: 50px"
        ></div>
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
            <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
            <span aria-hidden="true"> / </span>
            <span>{{ $t('wikiHubPage.breadcrumb') }}</span>
          </nav>
          <h1>{{ $t('wikiHubPage.title') }}</h1>
          <p class="lead" v-html="$t('wikiHubPage.leadHtml')"></p>
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

    <section class="page-body-section" :aria-label="$t('wikiHubPage.categoriesAria')">
      <div class="container">
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
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useLocalizedPath } from '../../composables/useLocalizedPath.js'

const { getLocalizedPath } = useLocalizedPath()

const wikiHubAdsRoot = ref(null)
const wikiHubGptRoot = ref(null)

function mountWikiHubGptDisplay() {
  const root = wikiHubGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushWikiHubAdx() {
  const root = wikiHubAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('WikiHub ADX push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountWikiHubGptDisplay()
  } catch (e) {
    console.error('WikiHub GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushWikiHubAdx()
    } catch (e) {
      console.error('WikiHub ADX failed:', e)
    }
  })
})
</script>

<style src="./item-db-shared.css"></style>
