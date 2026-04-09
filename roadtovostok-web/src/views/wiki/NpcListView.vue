<template>
  <article ref="npcListAdsRoot" class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <div
          ref="npcListGptRoot"
          id="div-gpt-ad-1775617033282-0"
          style="min-width: 320px; min-height: 50px"
        ></div>
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true"> / </span>
            <a href="/wiki">Wiki</a>
            <span aria-hidden="true"> / </span>
            <span>NPCs</span>
          </nav>
          <h1>Road To Vostok NPCs &amp; Hubs</h1>
          <p class="lead">
            <strong>Bandits</strong>, <strong>Generalist</strong>, and <strong>Doctor</strong> — community-sourced summaries
            for Road To Vostok. Cross-check tasks and stock in your build; map pins link here where marked.
            Zone walkthroughs (e.g. Apartments, Minefield) live under <a href="/guides">Guides</a>.
          </p>
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

    <section class="page-body-section" aria-label="NPC articles">
      <div class="container">
        <ul class="item-db-hub-grid" role="list">
          <li v-for="n in npcList" :key="n.addressBar">
            <a :href="`/wiki/npcs/${n.addressBar}`" class="item-db-hub-card">
              <span class="kicker">{{ n.role }}</span>
              <h2>{{ n.title }}</h2>
              <p>{{ n.summary }}</p>
              <span class="go">Open article →</span>
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
import npcList from '../../data/item/npcs.js'

const npcListAdsRoot = ref(null)
const npcListGptRoot = ref(null)

function mountNpcListGptDisplay() {
  const root = npcListGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushNpcListAdx() {
  const root = npcListAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('NpcList ADX push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountNpcListGptDisplay()
  } catch (e) {
    console.error('NpcList GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushNpcListAdx()
    } catch (e) {
      console.error('NpcList ADX failed:', e)
    }
  })
})
</script>

<style src="./item-db-shared.css"></style>
