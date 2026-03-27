<template>
  <article ref="mapsScrollRoot" class="maps-tasks-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <div class="page-hero-content">
          <h1>Road To Vostok Map</h1>
          <p>
            Use the map for Area 05, the Border Zone, and Vostok, then read the sections below. They
            follow the public roadtovostok.com game page and roadmap for progression. This site is
            unofficial; verify against your installed build.
          </p>
        </div>
      </div>
    </section>

    <nav class="guide-toc container" aria-label="On this page">
      <span class="guide-toc-label">On this page</span>
      <button type="button" class="guide-toc-link" @click="jump('area-05-detail')">
        Area 05 &amp; loot
      </button>
      <button type="button" class="guide-toc-link" @click="jump('all-tasks-guide')">
        All tasks
      </button>
      <button type="button" class="guide-toc-link" @click="jump('vostok-border-guide')">
        Border &amp; Vostok
      </button>
    </nav>

    <section class="map-section">
      <div class="container">
        <header class="map-section-head">
          <div class="map-section-head-main">
            <p class="map-section-kicker">World overview</p>
            <h2>Road To Vostok Map Guide</h2>
            <p class="map-hint">
              Zoom with the scroll wheel or pinch; drag to pan. The <strong>location index below the map</strong>
              is grouped by region — choose a row to jump the map to that pin; the matching pin and row stay
              highlighted. Pin spots are <strong>approximate</strong> for orientation on this fan-made overlay;
              always compare with your in-game map and the version you are playing.
            </p>
          </div>
          <ul class="map-legend" aria-label="Pin colors by region">
            <li>
              <span class="map-legend-swatch map-legend-swatch--area05" aria-hidden="true" />
              Area 05
            </li>
            <li>
              <span class="map-legend-swatch map-legend-swatch--border" aria-hidden="true" />
              Border Zone
            </li>
            <li>
              <span class="map-legend-swatch map-legend-swatch--vostok" aria-hidden="true" />
              Vostok
            </li>
          </ul>
        </header>

        <div class="map-command">
          <div class="map-command-inner">
            <div class="map-stage">
              <span class="map-stage-corner map-stage-corner--tl" aria-hidden="true" />
              <span class="map-stage-corner map-stage-corner--tr" aria-hidden="true" />
              <span class="map-stage-corner map-stage-corner--bl" aria-hidden="true" />
              <span class="map-stage-corner map-stage-corner--br" aria-hidden="true" />
              <div
                ref="mapContainer"
                class="rtv-map-host"
                role="application"
                aria-label="Road To Vostok world map. Scroll or pinch to zoom; drag to pan."
                tabindex="0"
              />
            </div>
            <aside
              v-if="mapReady"
              class="poi-rail"
              aria-label="Location index below map, linked to pins"
            >
              <div class="poi-rail-head">
                <span class="poi-rail-kicker">Below map</span>
                <h3 class="poi-rail-title">Location index</h3>
                <p class="poi-rail-lead">
                  Wide screens: three columns by region. Tap a row to fly the map; pins highlight the
                  row.
                </p>
              </div>
              <div class="poi-rail-scroll">
                <div
                  v-for="g in poiGroups"
                  :key="g.key"
                  class="poi-rail-group"
                >
                  <h4
                    class="poi-rail-region"
                    :data-region="g.key"
                  >
                    {{ g.title }}
                  </h4>
                  <ul
                    class="poi-list"
                    role="list"
                  >
                    <li
                      v-for="p in g.items"
                      :key="p.id"
                      :data-poi-row="p.id"
                      class="poi-list-item"
                      :class="{ 'poi-list-item--active': selectedPoiId === p.id }"
                      :data-region="p.region"
                    >
                      <button
                        type="button"
                        class="poi-list-btn"
                        @click="focusPoi(p.id)"
                      >
                        <span class="poi-list-label">{{ p.label }}</span>
                        <span class="poi-list-chevron" aria-hidden="true">→</span>
                      </button>
                      <p class="poi-list-blurb">
                        {{ p.blurb }}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <p
          v-if="mapError"
          class="map-error"
          role="alert"
        >
          {{ mapError }}
        </p>
      </div>
    </section>

    <section class="page-body-section">
      <div class="container">
        <div class="page-body-content">
          <h2>Regional overview</h2>
          <p class="guide-lead">
            The official site describes a linear world progression: you start in <strong>Area 05</strong>
            (Finland), push east through the <strong>Border Zone</strong>, and may eventually enter
            <strong>Vostok</strong> in Russia — with different death consequences in each tier.
          </p>
          <div class="regions">
            <article>
              <h3>Area 05</h3>
              <p>
                An evacuated zone in southeastern Finland: shelters, traders, tasks, and starting loot
                for early survival. Hostile <strong>Bandits</strong> patrol the area.
              </p>
            </article>
            <article>
              <h3>Border Zone</h3>
              <p>
                A guarded frontier between Finland and Russia. Crossings differ: mines, obstacles, or
                waterways with boats. <strong>Guards</strong> are armed, corrupt, and may call air
                support.
              </p>
            </article>
            <article>
              <h3>Vostok</h3>
              <p>
                High-risk, high-reward Russian territory with the most valuable loot. Every Vostok map is a
                <strong>permadeath</strong> map. The <strong>Military</strong> faction fields heavy
                weapons and armored vehicles.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section data-nav-anchor="area-05-detail" class="guide-section page-body-section">
      <div class="container">
        <div class="guide-prose">
          <h2>Area 05 map guide &amp; where loot comes from</h2>
          <p>
            According to the official <strong>Game</strong> page, Area 05 is your starting region: an
            evacuated zone in the <strong>southeastern part of Finland</strong> where you will find
            <strong>shelters</strong>, <strong>traders</strong>, <strong>tasks</strong>, and
            <strong>starting loot</strong> for initial survival. Your routine there is interrupted by
            hostile <strong>Bandits</strong> exploiting the lack of authority.
          </p>
          <h3>Loot and “spawn points” in practice</h3>
          <p>
            The same page lists <strong>physics-based loot</strong> as a core feature: items exist as
            physical objects in the world rather than abstract menu pickups. The developers do
            <strong>not</strong> publish a public table of fixed item coordinates on roadtovostok.com,
            and many systems are described as <strong>dynamic</strong> (events, weather, replayable
            runs). So this page does <strong>not</strong> list guaranteed refresh coordinates — those
            change with patches and procedural layout.
          </p>
          <ul>
            <li>
              <strong>Scavenge logically:</strong> search the kinds of places the setting implies
              (settlements, roadsides, abandoned structures) and learn your current build’s loot
              density in-game.
            </li>
            <li>
              <strong>Use traders &amp; tasks:</strong> the official feature list includes trading and
              tasks as part of the core loop alongside shelters — barter and job rewards are intended
              progression paths, not only ground spawns.
            </li>
            <li>
              <strong>Stay alive to keep loot:</strong> if you die in Area 05, the official Vostok
              section states you only lose what you are <strong>carrying</strong> — not your whole
              progression context (that harsher rule applies to death inside Vostok).
            </li>
          </ul>
          <p class="guide-tools">
            On this wiki:
            <RouterLink to="/item-database">Item database</RouterLink> (gear tables),
            <RouterLink to="/getting-started">Start here</RouterLink> (loop &amp; controls),
            <RouterLink to="/guides/medical">Medical</RouterLink> (injuries).
          </p>
        </div>
      </div>
    </section>

    <section data-nav-anchor="all-tasks-guide" class="guide-section page-body-section">
      <div class="container">
        <div class="guide-prose">
          <h2>All tasks &amp; progression (what exists today vs roadmap)</h2>
          <p>
            The public game page advertises <strong>trading &amp; tasks</strong> as a headline feature:
            you work with traders, complete jobs they offer, and use rewards to prepare for harder maps.
            That is the honest scope of “tasks” the developer markets for the survival loop leading
            eastward.
          </p>
          <p>
            The <strong>Roadmap</strong> on the same site schedules deeper narrative systems later:
            <strong>Build 3 — Signal</strong> (target <strong>Q4 / 2026</strong>) adds a
            <strong>quest system</strong> and lore elements, and <strong>Build 8 — Silent Night</strong>
            (date TBA) lists a <strong>full questline</strong>. So searches for
            <strong>Road To Vostok all tasks</strong> should distinguish: <em>trader tasks and sandbox
            objectives in current / Early Access builds</em> versus a <em>single finished story
            questline</em> that the roadmap still places in a future build.
          </p>
          <h3>Practical order players follow</h3>
          <ol class="guide-steps">
            <li>
              Secure a <strong>shelter</strong> save loop in Area 05 and learn trader locations (official
              text ties shelters, traders, and tasks together in the starting region).
            </li>
            <li>
              Complete tasks that fund meds, ammo, and travel gear; stash surplus at the shelter before
              risky trips.
            </li>
            <li>
              When ready, commit to a <strong>Border Zone</strong> crossing that matches your kit (mines
              vs boats vs obstacles — official crossing variety).
            </li>
            <li>
              Treat <strong>Vostok</strong> as optional endgame: permadeath rules apply only there per
              the official description — you are not forced into that playstyle for every run.
            </li>
          </ol>
          <p class="guide-tools">
            Related hubs:
            <RouterLink to="/item-database/core-tasks">Core task items</RouterLink> (power, keys),
            <RouterLink to="/guides/inverter-location">Inverter</RouterLink>,
            <RouterLink to="/guides/roadmap">Roadmap guide</RouterLink>.
          </p>
        </div>
      </div>
    </section>

    <section data-nav-anchor="vostok-border-guide" class="guide-section page-body-section">
      <div class="container">
        <div class="guide-prose">
          <h2>Border Zone &amp; Vostok crossing guide</h2>
          <p>
            Once you have enough equipment, the official copy says your route continues
            <strong>east</strong> into the <strong>Border Zone</strong> — a guarded border between
            Finland and Russia. Each Border Zone map is said to have a <strong>crossing point</strong>
            with <strong>different challenges</strong>: some use <strong>mines</strong> or physical
            obstacles, others require <strong>waterways and boats</strong>.
          </p>
          <h3>Guards and combat pressure</h3>
          <p>
            The site names <strong>Guards</strong> as foreign border forces who are armed, corrupt, and
            may rely on <strong>air support</strong> to stop crossings. Plan stamina, cover, and
            medical supplies accordingly — see the
            <RouterLink to="/guides/load-weapon">load weapons</RouterLink> guide for combat prep.
          </p>
          <h3>After the border: Vostok rules</h3>
          <p>
            If you cross successfully, you enter <strong>Vostok</strong> (Russia). Official text
            stresses:
          </p>
          <ul>
            <li>
              <strong>High risk, high reward</strong> — the most valuable loot in the game.
            </li>
            <li>
              <strong>Permadeath on Vostok maps:</strong> dying in Area 05 or the Border Zone costs only
              what you carry; dying in Vostok costs <strong>everything</strong> (per the Game page).
            </li>
            <li>
              <strong>Military control:</strong> heavy weapons and armored vehicles; their stated goal is
              to push you back.
            </li>
          </ul>
          <p>
            The same page notes the game does <strong>not</strong> force you into the permadeath zone —
            you can stay in the sandbox elsewhere. Dynamic systems and randomized events are cited as
            replay drivers, with <strong>no single winning condition</strong>.
          </p>
          <p class="guide-disclaimer">
            Early Access launch is listed on the official roadmap as <strong>April 7, 2026</strong>; map
            count and faction behavior will evolve — re-read patch notes after updates.
          </p>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import mapPoints from '../data/map/mapPoints.js'
import { scrollToNavAnchor } from '../composables/scrollToNavAnchor.js'

const REGION_ORDER = ['area05', 'border', 'vostok']

/** Official-style overview graphic (Squarespace-hosted asset). */
const MAP_IMAGE_URL =
  'https://images.squarespace-cdn.com/content/v1/6991f0a1cda81c3c1cc9bb25/7ae6c5f1-6cb4-454e-9cc7-f37c1a237cd3/Road_to_Vostok_Map.jpg'

const mapContainer = ref(null)
const mapsScrollRoot = ref(null)
const mapError = ref('')
const mapReady = ref(false)
const selectedPoiId = ref(null)

function jump(key) {
  scrollToNavAnchor(mapsScrollRoot, key)
}

let mapInstance = null
let resizeObserver = null
let markersLayer = null
/** Leaflet marker instances keyed by POI id (for list ↔ map sync). */
const markerById = new Map()

function regionTitle(region) {
  if (region === 'area05') return 'Area 05'
  if (region === 'border') return 'Border Zone'
  if (region === 'vostok') return 'Vostok'
  return region
}

const poiGroups = computed(() => {
  const buckets = { area05: [], border: [], vostok: [] }
  for (const p of mapPoints) {
    if (buckets[p.region]) buckets[p.region].push(p)
  }
  return REGION_ORDER.map((key) => ({
    key,
    title: regionTitle(key),
    items: buckets[key],
  }))
})

function focusPoi(id) {
  selectedPoiId.value = id
  const map = mapInstance
  const marker = markerById.get(id)
  if (!map || !marker) return
  const ll = marker.getLatLng()
  const z = Math.max(map.getZoom(), 0.5)
  map.flyTo(ll, z, { duration: 0.42, easeLinearity: 0.22 })
  marker.openPopup()
}

watch(selectedPoiId, (id) => {
  if (!id) return
  nextTick(() => {
    mapsScrollRoot.value
      ?.querySelector(`[data-poi-row="${id}"]`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  })
})

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

/** Normalized top-left image coords → Leaflet CRS.Simple lat/lng for our bounds. */
function normalizedToLatLng(nx, ny, w, h) {
  const x = nx * w
  const yFromTop = ny * h
  return L.latLng(h - yFromTop, x)
}

function teardownMap() {
  resizeObserver?.disconnect()
  resizeObserver = null
  if (mapInstance) {
    mapInstance.remove()
    mapInstance = null
  }
  markersLayer = null
  markerById.clear()
  mapReady.value = false
  selectedPoiId.value = null
}

function setupMap() {
  const el = mapContainer.value
  if (!el) return

  teardownMap()
  mapError.value = ''

  const probe = new Image()
  probe.decoding = 'async'

  probe.onload = () => {
    const h = probe.naturalHeight
    const w = probe.naturalWidth
    if (!h || !w) {
      mapError.value = 'Could not read map image dimensions.'
      return
    }

    // CRS.Simple: one map unit ≈ one image pixel; bounds span full raster.
    const bounds = L.latLngBounds(L.latLng(0, 0), L.latLng(h, w))

    mapInstance = L.map(el, {
      crs: L.CRS.Simple,
      minZoom: -3,
      maxZoom: 5,
      zoomSnap: 0.25,
      zoomDelta: 0.5,
      wheelPxPerZoomLevel: 100,
      maxBounds: bounds.pad(0.02),
      maxBoundsViscosity: 0.9,
      attributionControl: false,
    })

    L.imageOverlay(MAP_IMAGE_URL, bounds).addTo(mapInstance)

    markerById.clear()
    markersLayer = L.layerGroup()
    for (const p of mapPoints) {
      const latlng = normalizedToLatLng(p.nx, p.ny, w, h)
      const icon = L.divIcon({
        className: `rtv-map-marker rtv-map-marker--${p.region}`,
        html: '<span class="rtv-map-marker-dot" aria-hidden="true"></span>',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      })
      const marker = L.marker(latlng, { icon, title: p.label })
      marker.bindPopup(
        `<div class="rtv-map-popup"><strong>${escapeHtml(p.label)}</strong><p>${escapeHtml(p.blurb)}</p></div>`,
        { className: 'rtv-map-popup-wrap', maxWidth: 280 },
      )
      marker.on('click', () => {
        selectedPoiId.value = p.id
      })
      marker.on('popupopen', () => {
        selectedPoiId.value = p.id
      })
      markerById.set(p.id, marker)
      markersLayer.addLayer(marker)
    }
    markersLayer.addTo(mapInstance)

    mapInstance.fitBounds(bounds)
    mapReady.value = true

    resizeObserver = new ResizeObserver(() => {
      mapInstance?.invalidateSize({ animate: false })
    })
    resizeObserver.observe(el)
  }

  probe.onerror = () => {
    mapError.value = 'Map image failed to load. Check your connection and try again.'
  }

  probe.src = MAP_IMAGE_URL
}

onMounted(() => {
  setupMap()
})

onUnmounted(() => {
  teardownMap()
})
</script>

<style scoped>
.maps-tasks-page.page-article {
  padding-bottom: 4rem;
}

.page-hero-section {
  padding: 3rem 0 2rem;
}

.page-hero-content p {
  color: var(--color-muted);
}

.map-section {
  padding: 0 0 clamp(2rem, 5vw, 3rem);
}

.map-section-head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.25rem 2rem;
  margin-bottom: clamp(1rem, 2.5vw, 1.5rem);
}

.map-section-head-main {
  flex: 1 1 16rem;
  min-width: 0;
}

.map-section-kicker {
  margin: 0 0 0.35rem;
  font-family: var(--font-journey);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-ice-dim);
}

.map-section-head-main h2 {
  margin: 0 0 0.5rem;
  font-size: clamp(1.25rem, 2.4vw, 1.65rem);
  color: var(--color-text);
}

.map-hint {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.map-legend {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem 1.15rem;
  margin: 0;
  padding: 0.55rem 0.85rem;
  list-style: none;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-surface) 88%, transparent);
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.map-legend li {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0;
}

.map-legend-swatch {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 2px solid var(--color-surface);
  flex-shrink: 0;
}

.map-legend-swatch--area05 {
  background: color-mix(in srgb, var(--color-frost) 88%, #fff);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-frost) 35%, transparent);
}

.map-legend-swatch--border {
  background: color-mix(in srgb, var(--color-rust-bright) 85%, #300);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-rust) 40%, transparent);
}

.map-legend-swatch--vostok {
  background: color-mix(in srgb, #c44 80%, #200);
  box-shadow: 0 0 0 1px color-mix(in srgb, #e44 30%, transparent);
}

.map-command {
  position: relative;
  border-radius: 14px;
  padding: 1px;
  background: linear-gradient(
    145deg,
    color-mix(in srgb, var(--color-frost) 22%, transparent),
    color-mix(in srgb, var(--color-border) 80%, transparent) 45%,
    color-mix(in srgb, var(--color-rust) 15%, transparent)
  );
  box-shadow:
    0 24px 48px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 color-mix(in srgb, var(--color-frost) 12%, transparent);
}

.map-command-inner {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 13px;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
}

.map-stage {
  position: relative;
  flex: 0 0 auto;
  width: 100%;
  min-width: 0;
  background: #060807;
  /* Single column layout: fixed stage height so Leaflet always has a box to measure. */
  height: clamp(300px, min(58vh, 680px), 760px);
  min-height: 280px;
}

.map-stage-corner {
  position: absolute;
  width: 18px;
  height: 18px;
  z-index: 2;
  pointer-events: none;
  border-color: color-mix(in srgb, var(--color-frost) 45%, transparent);
  border-style: solid;
  opacity: 0.65;
}

.map-stage-corner--tl {
  top: 10px;
  left: 10px;
  border-width: 2px 0 0 2px;
}

.map-stage-corner--tr {
  top: 10px;
  right: 10px;
  border-width: 2px 2px 0 0;
}

.map-stage-corner--bl {
  bottom: 10px;
  left: 10px;
  border-width: 0 0 2px 2px;
}

.map-stage-corner--br {
  bottom: 10px;
  right: 10px;
  border-width: 0 2px 2px 0;
}

.rtv-map-host {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  min-height: inherit;
  border: none;
  border-radius: 0;
  outline: none;
}

.rtv-map-host:focus-visible {
  box-shadow: inset 0 0 0 2px var(--color-frost);
}

.map-error {
  margin: 1rem 0 0;
  padding: 0.85rem 1.1rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-rust) 50%, transparent);
  background: color-mix(in srgb, var(--color-rust) 10%, var(--color-panel));
  color: var(--color-muted);
  font-size: 0.9rem;
}

.poi-rail {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 100%;
  border-top: 1px solid var(--color-border);
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-panel) 92%, #000) 0%,
    var(--color-surface) 100%
  );
}

.poi-rail-head {
  padding: 1rem 1.15rem 0.85rem;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 70%, transparent);
}

.poi-rail-kicker {
  display: block;
  margin: 0 0 0.25rem;
  font-family: var(--font-journey);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-amber);
}

.poi-rail-title {
  margin: 0 0 0.35rem;
  font-size: 0.95rem;
  letter-spacing: 0.12em;
}

.poi-rail-lead {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.45;
  color: var(--color-muted);
}

.poi-rail-scroll {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.15rem;
  padding: 1rem 1.1rem 1.2rem;
}

@media (min-width: 900px) {
  .poi-rail-scroll {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem 1.25rem;
    align-items: start;
  }
}

.poi-rail-group {
  margin: 0;
  min-width: 0;
  padding: 0.65rem 0.5rem 0.75rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
  background: color-mix(in srgb, var(--color-panel) 40%, transparent);
}

.poi-rail-region {
  margin: 0 0 0.5rem;
  padding: 0 0.15rem 0.35rem;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 65%, transparent);
  border-left: none;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--color-muted);
}

.poi-rail-region[data-region='area05'] {
  color: color-mix(in srgb, var(--color-frost) 78%, var(--color-muted));
}

.poi-rail-region[data-region='border'] {
  color: color-mix(in srgb, var(--color-rust-bright) 72%, var(--color-muted));
}

.poi-rail-region[data-region='vostok'] {
  color: color-mix(in srgb, #e07070 62%, var(--color-muted));
}

.poi-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.poi-list-item {
  position: relative;
  border-radius: 8px;
  background: color-mix(in srgb, var(--color-panel) 55%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
  transition:
    border-color 0.18s ease,
    background 0.18s ease,
    transform 0.18s ease;
}

.poi-list-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  border-radius: 8px 0 0 8px;
  background: var(--color-border);
  opacity: 0.9;
  transition: background 0.18s ease;
}

.poi-list-item[data-region='area05']::before {
  background: color-mix(in srgb, var(--color-frost) 70%, transparent);
}

.poi-list-item[data-region='border']::before {
  background: color-mix(in srgb, var(--color-rust) 75%, transparent);
}

.poi-list-item[data-region='vostok']::before {
  background: color-mix(in srgb, #b44 75%, transparent);
}

.poi-list-item--active {
  border-color: color-mix(in srgb, var(--color-frost) 42%, transparent);
  background: color-mix(in srgb, var(--color-frost) 9%, var(--color-panel));
  transform: translateX(2px);
}

.poi-list-item--active::before {
  background: var(--color-frost);
  width: 4px;
}

.poi-list-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  padding: 0.55rem 0.65rem 0.45rem 0.85rem;
  margin: 0;
  border: none;
  border-radius: 8px 8px 0 0;
  background: transparent;
  color: var(--color-text);
  font: inherit;
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: left;
  cursor: pointer;
}

.poi-list-btn:hover {
  color: var(--color-primary-soft);
}

.poi-list-label {
  flex: 1 1 auto;
  min-width: 0;
  line-height: 1.3;
}

.poi-list-chevron {
  flex-shrink: 0;
  font-size: 0.75rem;
  opacity: 0.35;
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}

.poi-list-btn:hover .poi-list-chevron {
  opacity: 0.85;
  transform: translateX(2px);
}

.poi-list-item--active .poi-list-chevron {
  opacity: 1;
  color: var(--color-frost);
}

.poi-list-blurb {
  margin: 0;
  padding: 0 0.65rem 0.55rem 0.85rem;
  font-size: 0.74rem;
  line-height: 1.5;
  color: var(--color-muted);
}

@media (prefers-reduced-motion: reduce) {
  .poi-list-item,
  .poi-list-chevron {
    transition: none;
  }

  .poi-list-item--active {
    transform: none;
  }

  .poi-list-btn:hover .poi-list-chevron {
    transform: none;
  }
}

.page-body-section {
  padding: 1.5rem 0;
  border-top: 1px solid var(--color-border);
}

.page-body-content h2 {
  margin-top: 0;
}

.regions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.regions h3 {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  color: var(--color-primary-soft);
}

.regions p {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.92rem;
  max-width: 52ch;
}

.guide-lead {
  max-width: 68ch;
  color: var(--color-muted);
  font-size: 0.95rem;
  margin: 0 0 1.25rem;
}

.guide-toc {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.65rem;
  padding: 0.75rem 0 1.35rem;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 90%, transparent);
}

.guide-toc-label {
  margin-right: 0.35rem;
  font-family: var(--font-journey);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.guide-toc-link {
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-muted);
  border: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-surface) 90%, transparent);
  cursor: pointer;
  transition:
    color 0.15s ease,
    border-color 0.15s ease,
    background 0.15s ease;
}

.guide-toc-link:hover {
  color: var(--color-text);
  border-color: color-mix(in srgb, var(--color-frost) 35%, var(--color-border));
  background: color-mix(in srgb, var(--color-frost) 8%, var(--color-surface));
}


.guide-prose {
  max-width: 72ch;
}

.guide-prose h2 {
  margin: 0 0 0.75rem;
  font-size: 1.35rem;
  color: var(--color-text);
}

.guide-prose h3 {
  margin: 1.35rem 0 0.5rem;
  font-size: 1.05rem;
  color: var(--color-primary-soft);
}

.guide-prose p {
  margin: 0 0 0.85rem;
  color: var(--color-muted);
  font-size: 0.94rem;
  line-height: 1.6;
}

.guide-prose ul,
.guide-prose ol {
  margin: 0 0 0.85rem;
  padding-left: 1.25rem;
  color: var(--color-muted);
  font-size: 0.94rem;
  line-height: 1.55;
}

.guide-prose li {
  margin-bottom: 0.35rem;
}

.guide-steps {
  list-style-position: outside;
}

.guide-tools {
  margin-top: 1rem !important;
  padding: 0.85rem 1rem;
  border-left: 3px solid var(--color-frost);
  background: color-mix(in srgb, var(--color-panel) 88%, transparent);
  border-radius: 0 6px 6px 0;
  font-size: 0.9rem !important;
}

.guide-tools a {
  color: var(--color-primary-soft);
}

.guide-disclaimer {
  margin-bottom: 0 !important;
  font-size: 0.88rem !important;
  color: var(--color-muted);
  opacity: 0.95;
}
</style>

<style>
/* Leaflet lives outside scoped roots — theme the map chrome to match the site */
.maps-tasks-page .leaflet-container {
  background: var(--color-panel, #1a1d22);
  font-family: inherit;
}

.maps-tasks-page .leaflet-control-zoom a {
  background: color-mix(in srgb, var(--color-surface, #12151a) 92%, transparent);
  color: var(--color-text, #e8eaed);
  border-color: var(--color-border, #2a3038);
}

.maps-tasks-page .leaflet-control-zoom a:hover {
  background: color-mix(in srgb, var(--color-panel, #1a1d22) 95%, transparent);
}

.maps-tasks-page .leaflet-bar {
  border: 1px solid var(--color-border, #2a3038);
  border-radius: 8px;
  overflow: hidden;
}

/* Custom markers (divIcon) */
.maps-tasks-page .rtv-map-marker {
  background: transparent;
  border: none;
}

.maps-tasks-page .rtv-map-marker-dot {
  display: block;
  width: 14px;
  height: 14px;
  margin: 5px;
  border-radius: 50%;
  border: 2px solid var(--color-surface, #12151a);
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--color-frost, #7eb8c9) 55%, transparent),
    0 2px 8px rgba(0, 0, 0, 0.45);
}

.maps-tasks-page .rtv-map-marker--area05 .rtv-map-marker-dot {
  background: color-mix(in srgb, var(--color-frost, #7eb8c9) 85%, #fff);
}

.maps-tasks-page .rtv-map-marker--border .rtv-map-marker-dot {
  background: color-mix(in srgb, var(--color-rust, #c45c3e) 90%, #fff);
}

.maps-tasks-page .rtv-map-marker--vostok .rtv-map-marker-dot {
  background: color-mix(in srgb, #c44 85%, #200);
}

.maps-tasks-page .leaflet-popup-content-wrapper {
  background: color-mix(in srgb, var(--color-panel, #1a1d22) 96%, transparent);
  color: var(--color-text, #e8eaed);
  border: 1px solid var(--color-border, #2a3038);
  border-radius: 10px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
}

.maps-tasks-page .leaflet-popup-tip {
  background: color-mix(in srgb, var(--color-panel, #1a1d22) 96%, transparent);
  border: 1px solid var(--color-border, #2a3038);
  border-top: none;
  border-right: none;
}

.maps-tasks-page .rtv-map-popup {
  margin: 0;
  line-height: 1.45;
  font-size: 0.88rem;
}

.maps-tasks-page .rtv-map-popup strong {
  display: block;
  margin-bottom: 0.35rem;
  font-size: 0.95rem;
  color: var(--color-primary-soft, #a8c4d4);
}

.maps-tasks-page .rtv-map-popup p {
  margin: 0;
  color: var(--color-muted, #9aa3ad);
}
</style>
