<template>
  <article ref="coreTasksAdsRoot" class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true"> / </span>
          <a href="/wiki">Wiki</a>
          <span aria-hidden="true"> / </span>
          <span>Core tasks</span>
        </nav>
        <h1>Road To Vostok Core Tasks &amp; Power Items</h1>
        <p class="lead">
          Items players pair with shelter power, cabling, and quest chains (<strong>all tasks</strong>).
          Cross-check
          <a href="/map">Map</a> and <a href="/tasks">Tasks</a> for
          progression context; for long reads see
          <a href="/guides/an-analytical-deep-dive-into-its-real-world-geography">border geography</a>
          and
          <a href="/guides/surviving-the-Minefield">Minefield tactics</a>.
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
        ref="coreTasksGptRoot"
        id="div-gpt-ad-1775617033282-0"
        style="min-width: 320px; min-height: 50px"
      ></div>
    </div>

    <section class="page-body-section" aria-label="Core tasks data table">
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
                <th scope="col">Item</th>
                <th scope="col">Role</th>
                <th scope="col">Related progression</th>
                <th scope="col">Notes</th>
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
        <div class="cross-links">
          Related:
          <a href="/tasks">Tasks</a>
          ·
          <a href="/guides/surviving-the-Minefield">Minefield guide</a>
          ·
          <a href="/guides/an-analytical-deep-dive-into-its-real-world-geography">Geography guide</a>
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
import rows from '../../data/item/coreTasks.js'

const coreTasksAdsRoot = ref(null)
const coreTasksGptRoot = ref(null)

function mountCoreTasksGptDisplay() {
  const root = coreTasksGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushCoreTasksAdx() {
  const root = coreTasksAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('CoreTasks ADX push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountCoreTasksGptDisplay()
  } catch (e) {
    console.error('CoreTasks GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushCoreTasksAdx()
    } catch (e) {
      console.error('CoreTasks ADX failed:', e)
    }
  })
})
</script>

<style src="./item-db-shared.css"></style>
