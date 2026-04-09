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
          <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true"> / </span>
            <span>Wiki</span>
          </nav>
          <h1>Road To Vostok item database</h1>
          <p class="lead">
            Curated tables for <strong>Road To Vostok guns</strong> and
            <strong>ammunition types</strong>, <strong>inverter</strong> / <strong>B cables</strong> and
            other <strong>all tasks</strong> props, plus <strong>how to fish</strong> notes and field
            <strong>gathering</strong>. Long-form strategy lives under
            <a href="/guides">Guides</a> — e.g.
            <a href="/guides/an-analytical-deep-dive-into-its-real-world-geography">real-world geography</a>,
            <a href="/guides/surviving-the-Minefield">Minefield tactics</a>, or
            <a href="/guides/how-to-fish">fishing spots &amp; pike</a>.
            Always verify values in your installed build.
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

    <section class="page-body-section" aria-label="Wiki categories">
      <div class="container">
        <ul class="item-db-hub-grid" role="list">
          <li>
            <a href="/wiki/core-tasks" class="item-db-hub-card">
              <span class="kicker">Core tasks &amp; power</span>
              <h2>Inverter, B cables &amp; quest props</h2>
              <p>
                Shelter power chain, cabling, and keys tied to <strong>all tasks</strong> progression.
              </p>
              <span class="go">Open table →</span>
            </a>
          </li>
          <li>
            <a href="/wiki/weapons" class="item-db-hub-card">
              <span class="kicker">Weapons &amp; attachments</span>
              <h2>Guns &amp; platforms</h2>
              <p>
                SMGs, rifles, shotguns, pistols — what each gun feeds and short attachment notes.
              </p>
              <span class="go">Open table →</span>
            </a>
          </li>
          <li>
            <a href="/wiki/ammunition" class="item-db-hub-card">
              <span class="kicker">Ammunition</span>
              <h2>Calibers &amp; stacks</h2>
              <p>Per-round value, weight, max stack, and weapon compatibility from the wiki table.</p>
              <span class="go">Open table →</span>
            </a>
          </li>
          <li>
            <a href="/wiki/fishing" class="item-db-hub-card">
              <span class="kicker">Fishing</span>
              <h2>How to fish (Early Access)</h2>
              <p>Rods, bait, and roadmap caveats for <strong>how fish</strong> searches.</p>
              <span class="go">Open guide list →</span>
            </a>
          </li>
          <li>
            <a href="/wiki/gathering" class="item-db-hub-card">
              <span class="kicker">Gathering</span>
              <h2>Field resources</h2>
              <p>Wood, scrap, forage, and raw inputs that feed survival and crafting loops.</p>
              <span class="go">Open table →</span>
            </a>
          </li>
          <li>
            <a href="/wiki/npcs" class="item-db-hub-card">
              <span class="kicker">Characters</span>
              <h2>NPCs &amp; hubs</h2>
              <p>
                Traders and settlement notes (e.g. Generalist, Doctor) with links from the
                <strong>map</strong> pins.
              </p>
              <span class="go">Open NPC wiki →</span>
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
