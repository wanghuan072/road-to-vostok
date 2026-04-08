<template>
  <article ref="fishingAdsRoot" class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true"> / </span>
          <a href="/wiki">Wiki</a>
          <span aria-hidden="true"> / </span>
          <span>Fishing</span>
        </nav>
        <h1>Road To Vostok Fishing</h1>
        <p class="lead">
          How to fish in Road To Vostok depends on your build: fishing appears on the official
          long-term roadmap. Use this list as a reference and confirm against patch notes and your
          installed build.
        </p>

        <!-- adx-PC 横幅广告-1（与 HomeView 同结构） -->
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

    <div class="container">
      <!-- GAM 广告位 1（与 HomeView 同结构） -->
      <div
        ref="fishingGptRoot"
        id="div-gpt-ad-1775617033282-0"
        style="min-width: 320px; min-height: 50px"
      ></div>
    </div>

    <section class="page-body-section" aria-label="Fishing checklist">
      <div class="container">
        <!-- adx-PC 横幅广告-2（与 HomeView 同结构） -->
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

        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th scope="col">Topic</th>
                <th scope="col">What to check</th>
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
        <div class="cross-links">
          Patch timing:
          <a href="/dev-updates">Road ahead</a>
          ·
          <a href="/getting-started">Start here</a>
        </div>

        <!-- adx-PC 横幅广告-3（与 HomeView 同结构） -->
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
  </article>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import rows from '../../data/item/fishing.js'

const fishingAdsRoot = ref(null)
const fishingGptRoot = ref(null)

function mountFishingGptDisplay() {
  const root = fishingGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushFishingAdx() {
  const root = fishingAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('Fishing ADX push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountFishingGptDisplay()
  } catch (e) {
    console.error('Fishing GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushFishingAdx()
    } catch (e) {
      console.error('Fishing ADX failed:', e)
    }
  })
})
</script>

<style src="./item-db-shared.css"></style>
