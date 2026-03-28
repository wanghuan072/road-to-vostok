<template>
  <article class="map-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true">/</span>
            <span>Map</span>
          </nav>
          <h1>Road To Vostok Map</h1>
          <p>
            Use the map for Area 05, the Border Zone, and Vostok, then read the regional overview and
            Area 05 notes below. For trader tasks, border crossings, and Vostok rules, open the
            <RouterLink to="/tasks">Tasks</RouterLink> page. Verify against your installed build.
          </p>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="container">
        <header class="map-section-head">
          <div class="map-section-head-main">
            <p class="map-section-kicker">World overview</p>
            <h2>Road To Vostok Interactive Map</h2>
            <p class="map-hint">
              Pins are <strong>locations only</strong> (Village, Shipyard, …). Each place can list <strong>NPCs, loot, tasks</strong>
              in the left panel and in the index below — those are not separate markers. After you select a pin or location row,
              the <strong>details drawer</strong> slides in from the left; close with <strong>×</strong> or reopen with
              <strong>Details</strong>. Sub-items with a wiki link jump to that page. Pins are <strong>approximate</strong>.
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
            <div class="map-map-row">
              <div class="map-stage">
                <span class="map-stage-corner map-stage-corner--tl" aria-hidden="true" />
                <span class="map-stage-corner map-stage-corner--tr" aria-hidden="true" />
                <span class="map-stage-corner map-stage-corner--bl" aria-hidden="true" />
                <span class="map-stage-corner map-stage-corner--br" aria-hidden="true" />
                <button
                  v-if="mapReady && selectedPoi && !detailDrawerOpen"
                  type="button"
                  class="map-drawer-tab"
                  @click="detailDrawerOpen = true"
                >
                  <span class="map-drawer-tab__label">Details</span>
                  <span class="map-drawer-tab__chevron" aria-hidden="true">›</span>
                </button>
                <div
                  ref="mapContainer"
                  class="rtv-map-host"
                  role="application"
                  aria-label="Road To Vostok world map. Scroll or pinch to zoom; drag to pan."
                  tabindex="0"
                />
                <aside
                  v-if="mapReady"
                  class="map-poi-detail"
                  :class="{ 'map-poi-detail--open': detailDrawerOpen }"
                  :aria-hidden="detailDrawerOpen ? 'false' : 'true'"
                  aria-label="Selected map location"
                >
                  <button
                    type="button"
                    class="map-poi-detail__close"
                    aria-label="Close location panel"
                    @click="closeDetailDrawer"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <div
                    v-if="selectedPoi"
                    class="map-poi-detail__inner"
                  >
                    <div class="map-poi-detail__location">
                      <p class="map-poi-detail__kicker">
                        {{ regionTitle(selectedPoi.type) }}
                      </p>
                      <h3 class="map-poi-detail__title">
                        {{ selectedPoi.title }}
                      </h3>
                      <figure
                        v-if="locationHeroImage(selectedPoi)"
                        class="map-poi-detail__figure"
                      >
                        <img
                          :src="locationHeroImage(selectedPoi).src"
                          :alt="locationHeroImage(selectedPoi).alt"
                          width="320"
                          height="180"
                          loading="lazy"
                          decoding="async"
                        >
                      </figure>
                      <p class="map-poi-detail__body">
                        {{ selectedPoi.content }}
                      </p>
                      <RouterLink
                        v-if="selectedPoi.link"
                        :to="selectedPoi.link"
                        class="map-poi-detail__more"
                        @click="closeDetailDrawer"
                      >
                        More
                        <span aria-hidden="true">→</span>
                      </RouterLink>
                    </div>
                    <div
                      v-if="locationEntries(selectedPoi).length"
                      class="map-poi-detail__entries"
                    >
                      <p class="map-poi-detail__entries-label">
                        At this location
                      </p>
                      <ul
                        class="map-poi-entry-list"
                        role="list"
                      >
                        <li
                          v-for="(ent, ei) in locationEntries(selectedPoi)"
                          :key="ei"
                          class="map-poi-entry"
                        >
                          <span class="map-poi-entry__kind">{{ entryKindLabel(ent.kind) }}</span>
                          <strong class="map-poi-entry__title">{{ ent.title }}</strong>
                          <p
                            v-if="ent.content"
                            class="map-poi-entry__text"
                          >
                            {{ ent.content }}
                          </p>
                          <figure
                            v-if="ent.image"
                            class="map-poi-entry__figure"
                          >
                            <img
                              :src="ent.image"
                              :alt="ent.imageAlt || ''"
                              width="160"
                              height="160"
                              loading="lazy"
                              decoding="async"
                            >
                          </figure>
                          <RouterLink
                            v-if="ent.link"
                            :to="ent.link"
                            class="map-poi-entry__link"
                            @click="closeDetailDrawer"
                          >
                            Open
                            <span aria-hidden="true">→</span>
                          </RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    v-else
                    class="map-poi-detail__empty"
                  >
                    <p class="map-poi-detail__empty-title">
                      No pin selected
                    </p>
                    <p class="map-poi-detail__empty-text">
                      Click a marker on the map or choose a row in the location index below.
                    </p>
                  </div>
                </aside>
              </div>
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
                  Grouped by region: each row is a <strong>location</strong>. Tap the row to fly the map and open the drawer;
                  nested lines link to wiki or tasks when available.
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
                      :data-region="p.type"
                    >
                      <button
                        type="button"
                        class="poi-list-btn"
                        @click="focusPoi(p.id)"
                      >
                        <span class="poi-list-label">{{ p.title }}</span>
                        <span class="poi-list-chevron" aria-hidden="true">→</span>
                      </button>
                      <p class="poi-list-blurb">
                        {{ p.content }}
                      </p>
                      <ul
                        v-if="locationEntries(p).length"
                        class="poi-list-sub"
                        role="list"
                      >
                        <li
                          v-for="(ent, si) in locationEntries(p)"
                          :key="si"
                          class="poi-list-sub-item"
                        >
                          <RouterLink
                            v-if="ent.link"
                            :to="ent.link"
                            class="poi-list-sub-link"
                            @click.stop
                          >
                            <span class="poi-list-sub-kind">{{ entryKindLabel(ent.kind) }}</span>
                            {{ ent.title }}
                          </RouterLink>
                          <span
                            v-else
                            class="poi-list-sub-nolink"
                          >
                            <span class="poi-list-sub-kind">{{ entryKindLabel(ent.kind) }}</span>
                            {{ ent.title }}
                          </span>
                        </li>
                      </ul>
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
            On this site:
            <RouterLink to="/wiki">Wiki</RouterLink> (gear tables),
            <RouterLink to="/getting-started">Start here</RouterLink> (loop, controls, medical basics),
            <RouterLink to="/guides/an-analytical-deep-dive-into-its-real-world-geography">Border geography guide</RouterLink>,
            <RouterLink to="/guides/surviving-the-Minefield">Minefield guide</RouterLink>,
            <RouterLink to="/tasks">Tasks &amp; Vostok rules</RouterLink>.
          </p>
        </div>
      </div>
    </section>

    <section class="page-body-section">
      <div class="container">
        <p class="guide-tools map-next-link">
          Next:
          <RouterLink to="/tasks">Tasks &amp; border / Vostok guide</RouterLink>
          ·
          <RouterLink to="/wiki/core-tasks">Core task items (wiki)</RouterLink>
          ·
          <RouterLink to="/guides">Guides</RouterLink>
        </p>
      </div>
    </section>
  </article>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import mapPoints from '../data/map/mapPoints.js'

const route = useRoute()

const REGION_ORDER = ['area05', 'border', 'vostok']

/** Official-style overview graphic (Squarespace-hosted asset). */
const MAP_IMAGE_URL =
  'https://images.squarespace-cdn.com/content/v1/6991f0a1cda81c3c1cc9bb25/7ae6c5f1-6cb4-454e-9cc7-f37c1a237cd3/Road_to_Vostok_Map.jpg'

const mapContainer = ref(null)
const mapError = ref('')
const mapReady = ref(false)
const selectedPoiId = ref(null)
/** Overlay panel: hidden until a pin is chosen; slides over the map. */
const detailDrawerOpen = ref(false)

function closeDetailDrawer() {
  detailDrawerOpen.value = false
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
    if (buckets[p.type]) buckets[p.type].push(p)
  }
  return REGION_ORDER.map((key) => ({
    key,
    title: regionTitle(key),
    items: buckets[key],
  }))
})

const selectedPoi = computed(() => mapPoints.find((p) => p.id === selectedPoiId.value) ?? null)

function locationEntries(p) {
  if (!p) return []
  return Array.isArray(p.entries) ? p.entries : []
}

function locationHeroImage(p) {
  if (!p) return null
  if (p.image) return { src: p.image, alt: p.imageAlt || '' }
  const e = locationEntries(p).find((x) => x.image)
  if (e?.image) return { src: e.image, alt: e.imageAlt || '' }
  return null
}

function entryKindLabel(kind) {
  const k = String(kind || '').toLowerCase()
  const labels = {
    npc: 'NPC',
    loot: 'Loot',
    task: 'Task',
    weapon: 'Weapon',
    faction: 'Faction',
    note: 'Note',
  }
  return labels[k] || (kind ? String(kind) : 'Item')
}

function syncMarkerSelectionClass() {
  const id = selectedPoiId.value
  for (const [mid, marker] of markerById) {
    const el = marker.getElement?.()
    if (!el) continue
    el.classList.toggle('rtv-map-marker--selected', mid === id)
  }
}

function focusPoi(id) {
  selectedPoiId.value = id
  detailDrawerOpen.value = true
  const map = mapInstance
  const marker = markerById.get(id)
  if (!map || !marker) return
  const ll = marker.getLatLng()
  const z = Math.max(map.getZoom(), 0.5)
  map.flyTo(ll, z, { duration: 0.42, easeLinearity: 0.22 })
  marker.openPopup()
}

watch(selectedPoiId, () => {
  nextTick(() => syncMarkerSelectionClass())
})

function syncRouteLocQuery() {
  const raw = route.query.loc
  if (raw == null || raw === '' || !mapReady.value) return
  const match = mapPoints.find((x) => String(x.id) === String(raw))
  if (!match) return
  focusPoi(match.id)
}

watch(
  () => [String(route.query.loc ?? ''), mapReady.value],
  () => nextTick(() => syncRouteLocQuery()),
)

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function buildPopupHtml(p) {
  const entries = locationEntries(p)
  const hero = locationHeroImage(p)
  const thumb = hero
    ? `<div class="rtv-map-popup__thumb"><img src="${escapeHtml(hero.src)}" alt="${escapeHtml(hero.alt)}" width="88" height="88" loading="lazy" decoding="async"></div>`
    : ''
  const cls = thumb ? 'rtv-map-popup rtv-map-popup--with-media' : 'rtv-map-popup'
  const titles = entries.map((e) => e.title).filter(Boolean)
  const meta = titles.length
    ? `<p class="rtv-map-popup__meta">${escapeHtml(titles.slice(0, 6).join(' · '))}${titles.length > 6 ? '…' : ''}</p>`
    : ''
  return `<div class="${cls}"><div class="rtv-map-popup__body"><strong>${escapeHtml(p.title)}</strong><p>${escapeHtml(p.content)}</p>${meta}</div>${thumb}</div>`
}

/** Normalized top-left image coords → Leaflet CRS.Simple lat/lng for our bounds. */
function normalizedToLatLng(xNorm, yNorm, w, h) {
  const xPx = xNorm * w
  const yFromTop = yNorm * h
  return L.latLng(h - yFromTop, xPx)
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
  detailDrawerOpen.value = false
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
      zoomControl: false,
    })

    L.imageOverlay(MAP_IMAGE_URL, bounds).addTo(mapInstance)
    L.control.zoom({ position: 'topright' }).addTo(mapInstance)

    markerById.clear()
    markersLayer = L.layerGroup()
    for (const p of mapPoints) {
      const latlng = normalizedToLatLng(p.x, p.y, w, h)
      const icon = L.divIcon({
        className: `rtv-map-marker rtv-map-marker--${p.type}`,
        html: '<span class="rtv-map-marker-dot" aria-hidden="true"></span>',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      })
      const marker = L.marker(latlng, { icon, title: p.title })
      const hasRichPopup = Boolean(locationHeroImage(p) || locationEntries(p).length)
      const popupW = hasRichPopup ? 380 : 300
      marker.bindPopup(buildPopupHtml(p), {
        className: 'rtv-map-popup-wrap',
        maxWidth: popupW,
      })
      marker.on('click', () => {
        selectedPoiId.value = p.id
        detailDrawerOpen.value = true
      })
      marker.on('popupopen', () => {
        selectedPoiId.value = p.id
        detailDrawerOpen.value = true
      })
      markerById.set(p.id, marker)
      markersLayer.addLayer(marker)
    }
    markersLayer.addTo(mapInstance)

    mapInstance.fitBounds(bounds)
    mapReady.value = true
    nextTick(() => syncMarkerSelectionClass())

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
.map-page.page-article {
  padding-bottom: 4rem;
}

.page-hero-content p {
  color: var(--color-muted);
}

.map-section {
  padding: 2rem 0 clamp(2rem, 5vw, 3rem);
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

.map-map-row {
  position: relative;
  width: 100%;
  min-width: 0;
}

.map-drawer-tab {
  position: absolute;
  left: 0;
  top: 50%;
  z-index: 1100;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.5rem 0.45rem 0.5rem 0.35rem;
  border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
  border-left: none;
  border-radius: 0 10px 10px 0;
  background: color-mix(in srgb, var(--color-panel) 92%, #000);
  color: var(--color-primary-soft);
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 4px 0 18px rgba(0, 0, 0, 0.35);
  transition:
    background 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease;
}

.map-drawer-tab:hover {
  background: color-mix(in srgb, var(--color-frost) 12%, var(--color-panel));
  color: var(--color-signal-soft);
}

.map-drawer-tab__chevron {
  font-size: 1rem;
  line-height: 1;
  opacity: 0.85;
}

.map-poi-detail {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1200;
  width: min(320px, calc(100% - 10px));
  max-width: min(340px, 100%);
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-panel) 96%, #000) 0%,
    var(--color-surface) 100%
  );
  border-right: 1px solid var(--color-border);
  box-shadow: 12px 0 40px rgba(0, 0, 0, 0.45);
  transform: translateX(-104%);
  transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
  visibility: hidden;
}

.map-poi-detail--open {
  transform: translateX(0);
  pointer-events: auto;
  visibility: visible;
}

.map-poi-detail__close {
  position: absolute;
  top: 0.45rem;
  right: 0.45rem;
  z-index: 2;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: color-mix(in srgb, var(--color-panel) 80%, transparent);
  color: var(--color-muted);
  font-size: 1.35rem;
  line-height: 1;
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}

.map-poi-detail__close:hover {
  background: color-mix(in srgb, var(--color-rust) 15%, var(--color-panel));
  color: var(--color-text);
}

.map-poi-detail__inner {
  padding: 2.35rem 1.05rem 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 0;
  flex: 1 1 auto;
  overflow-y: auto;
}

.map-poi-detail__location {
  flex-shrink: 0;
}

.map-poi-detail__entries {
  flex: 1 1 auto;
  min-height: 0;
  padding-top: 0.35rem;
  border-top: 1px solid color-mix(in srgb, var(--color-border) 75%, transparent);
}

.map-poi-detail__entries-label {
  margin: 0 0 0.45rem;
  font-family: var(--font-journey);
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.map-poi-entry-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.map-poi-entry {
  padding: 0.5rem 0.55rem;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--color-border) 88%, transparent);
  background: color-mix(in srgb, var(--color-panel) 50%, transparent);
}

.map-poi-entry__kind {
  display: block;
  margin-bottom: 0.2rem;
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-amber);
}

.map-poi-entry__title {
  display: block;
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-text);
}

.map-poi-entry__text {
  margin: 0.35rem 0 0;
  font-size: 0.72rem;
  line-height: 1.45;
  color: var(--color-muted);
}

.map-poi-entry__figure {
  margin: 0.4rem 0 0;
  border-radius: 6px;
  overflow: hidden;
  max-width: 120px;
  border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
}

.map-poi-entry__figure img {
  display: block;
  width: 100%;
  height: auto;
}

.map-poi-entry__link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.4rem;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary-soft);
  text-decoration: none;
}

.map-poi-entry__link:hover {
  color: var(--color-signal-soft);
}

.poi-list-sub {
  list-style: none;
  margin: 0.4rem 0 0;
  padding: 0 0.65rem 0.55rem 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.poi-list-sub-item {
  margin: 0;
  font-size: 0.7rem;
  line-height: 1.4;
}

.poi-list-sub-kind {
  display: inline-block;
  margin-right: 0.35rem;
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-amber);
  opacity: 0.9;
}

.poi-list-sub-link {
  color: var(--color-primary-soft);
  text-decoration: none;
}

.poi-list-sub-link:hover {
  color: var(--color-signal-soft);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.poi-list-sub-nolink {
  color: var(--color-muted);
}

.map-poi-detail__kicker {
  margin: 0;
  font-family: var(--font-journey);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-amber);
}

.map-poi-detail__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 1.25;
  color: var(--color-text);
}

.map-poi-detail__figure {
  margin: 0;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--color-border) 90%, transparent);
  background: color-mix(in srgb, var(--color-panel) 70%, transparent);
}

.map-poi-detail__figure img {
  display: block;
  width: 100%;
  height: auto;
}

.map-poi-detail__body {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.map-poi-detail__more {
  align-self: flex-start;
  margin-top: 0.15rem;
  padding: 0.45rem 0.75rem;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--color-frost) 35%, var(--color-border));
  background: color-mix(in srgb, var(--color-frost) 8%, var(--color-panel));
  color: var(--color-primary-soft);
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  transition:
    border-color 0.15s ease,
    background 0.15s ease,
    color 0.15s ease;
}

.map-poi-detail__more:hover {
  border-color: color-mix(in srgb, var(--color-frost) 55%, transparent);
  color: var(--color-signal-soft);
}

.map-poi-detail__empty {
  padding: 2.35rem 1.05rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  flex: 1 1 auto;
  overflow-y: auto;
}

.map-poi-detail__empty-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-text);
}

.map-poi-detail__empty-text {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.5;
  color: var(--color-muted);
}

.map-stage {
  position: relative;
  flex: 0 0 auto;
  width: 100%;
  min-width: 0;
  background: #060807;
  height: clamp(300px, min(58vh, 680px), 760px);
  min-height: 280px;
}

@media (max-width: 1023px) {
  .map-stage {
    height: clamp(260px, min(50dvh, 52vh), 560px);
  }
}

@media (max-width: 767px) {
  .map-section {
    padding: 1.35rem 0 clamp(1.25rem, 4vw, 2rem);
  }

  .map-section-head {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }

  .map-hint {
    font-size: 0.84rem;
    line-height: 1.52;
  }

  .map-legend {
    align-self: flex-start;
    max-width: 100%;
  }

  .map-command {
    border-radius: 12px;
  }

  .map-command-inner {
    border-radius: 11px;
  }

  .map-stage {
    height: clamp(220px, min(46dvh, 48vh), 420px);
    min-height: 200px;
  }

  .map-poi-detail {
    width: min(100%, calc(100% - 0.5rem));
    max-width: 100%;
  }

  .map-poi-detail__inner,
  .map-poi-detail__empty {
    padding-left: 0.85rem;
    padding-right: 0.85rem;
  }

  .map-drawer-tab {
    padding: 0.42rem 0.38rem 0.42rem 0.28rem;
    font-size: 0.58rem;
    letter-spacing: 0.1em;
  }

  .map-stage-corner--tl {
    top: 8px;
    left: max(8px, env(safe-area-inset-left, 0px));
  }

  .map-stage-corner--tr {
    top: 8px;
    right: max(8px, env(safe-area-inset-right, 0px));
  }
}

@media (prefers-reduced-motion: reduce) {
  .map-poi-detail {
    transition: none;
  }
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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem 1.25rem;
  align-items: start;
  padding: 1rem 1.1rem 1.2rem;
}

@media (max-width: 1023px) {
  .poi-rail-scroll {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem 1.1rem;
  }
}

@media (max-width: 767px) {
  .poi-rail-scroll {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.85rem 0.75rem 1rem;
  }

  .poi-rail-head {
    padding: 0.85rem 0.75rem 0.7rem;
  }

  .poi-list-btn {
    min-height: 44px;
    padding: 0.6rem 0.7rem 0.5rem 0.8rem;
  }

  .poi-list-blurb {
    font-size: 0.72rem;
    padding-left: 0.8rem;
    padding-right: 0.65rem;
  }

  .poi-rail-group {
    padding: 0.55rem 0.4rem 0.65rem;
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

.map-next-link {
  margin: 0;
  max-width: 72ch;
}
</style>

<style>
/* Leaflet lives outside scoped roots — theme the map chrome to match the site */
.map-page .leaflet-container {
  background: var(--color-panel, #1a1d22);
  font-family: inherit;
}

.map-page .leaflet-top.leaflet-right {
  top: 10px;
  right: 10px;
}

@media (max-width: 767px) {
  .map-page .leaflet-top.leaflet-right {
    top: max(8px, env(safe-area-inset-top, 0px));
    right: max(8px, env(safe-area-inset-right, 0px));
  }
}

.map-page .leaflet-control-zoom a {
  background: color-mix(in srgb, var(--color-surface, #12151a) 92%, transparent);
  color: var(--color-text, #e8eaed);
  border-color: var(--color-border, #2a3038);
}

.map-page .leaflet-control-zoom a:hover {
  background: color-mix(in srgb, var(--color-panel, #1a1d22) 95%, transparent);
}

.map-page .leaflet-bar {
  border: 1px solid var(--color-border, #2a3038);
  border-radius: 8px;
  overflow: hidden;
}

/* Custom markers (divIcon) */
.map-page .rtv-map-marker {
  background: transparent;
  border: none;
}

.map-page .rtv-map-marker-dot {
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

.map-page .rtv-map-marker--area05 .rtv-map-marker-dot {
  background: color-mix(in srgb, var(--color-frost, #7eb8c9) 85%, #fff);
}

.map-page .rtv-map-marker--border .rtv-map-marker-dot {
  background: color-mix(in srgb, var(--color-rust, #c45c3e) 90%, #fff);
}

.map-page .rtv-map-marker--vostok .rtv-map-marker-dot {
  background: color-mix(in srgb, #c44 85%, #200);
}

@keyframes rtv-map-marker-pulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow:
      0 0 0 1px color-mix(in srgb, var(--color-frost, #7eb8c9) 55%, transparent),
      0 2px 8px rgba(0, 0, 0, 0.45);
  }

  50% {
    transform: scale(1.12);
    box-shadow:
      0 0 0 5px color-mix(in srgb, var(--color-frost, #7eb8c9) 35%, transparent),
      0 2px 12px rgba(0, 0, 0, 0.5);
  }
}

.map-page .rtv-map-marker--selected .rtv-map-marker-dot {
  animation: rtv-map-marker-pulse 1.35s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .map-page .rtv-map-marker--selected .rtv-map-marker-dot {
    animation: none;
    outline: 2px solid color-mix(in srgb, var(--color-frost, #7eb8c9) 65%, transparent);
    outline-offset: 2px;
  }
}

.map-page .leaflet-popup-content-wrapper {
  background: color-mix(in srgb, var(--color-panel, #1a1d22) 96%, transparent);
  color: var(--color-text, #e8eaed);
  border: 1px solid var(--color-border, #2a3038);
  border-radius: 10px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
}

.map-page .leaflet-popup-tip {
  background: color-mix(in srgb, var(--color-panel, #1a1d22) 96%, transparent);
  border: 1px solid var(--color-border, #2a3038);
  border-top: none;
  border-right: none;
}

.map-page .rtv-map-popup {
  margin: 0;
  line-height: 1.45;
  font-size: 0.88rem;
}

.map-page .rtv-map-popup strong {
  display: block;
  margin-bottom: 0.35rem;
  font-size: 0.95rem;
  color: var(--color-primary-soft, #a8c4d4);
}

.map-page .rtv-map-popup p {
  margin: 0;
  color: var(--color-muted, #9aa3ad);
}

.map-page .rtv-map-popup__meta {
  margin: 0.4rem 0 0;
  font-size: 0.72rem;
  line-height: 1.35;
  color: var(--color-primary-soft, #a8c4d4);
  opacity: 0.92;
}

.map-page .rtv-map-popup--with-media {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.65rem;
}

.map-page .rtv-map-popup__body {
  flex: 1 1 auto;
  min-width: 0;
}

.map-page .rtv-map-popup__thumb {
  flex: 0 0 auto;
}

.map-page .rtv-map-popup__thumb img {
  display: block;
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--color-border, #2a3038) 80%, transparent);
}
</style>
