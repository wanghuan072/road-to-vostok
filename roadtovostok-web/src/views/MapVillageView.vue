<template>
  <article class="map-page page-article map-village-page">
    <section class="page-hero-section">
      <div class="container">
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
            <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
            <span aria-hidden="true">/</span>
            <a :href="getLocalizedPath('/map')">{{ $t('mapPage.breadcrumb') }}</a>
            <span aria-hidden="true">/</span>
            <span>{{ $t('mapVillagePage.breadcrumbCurrent') }}</span>
          </nav>
          <h1>{{ $t('mapVillagePage.title') }}</h1>
          <p v-html="$t('mapVillagePage.introHtml')"></p>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="container">
        <header class="map-section-head">
          <div class="map-section-head-main">
            <p class="map-section-kicker">{{ $t('mapVillagePage.sectionKicker') }}</p>
            <h2>{{ $t('mapVillagePage.sectionTitle') }}</h2>
            <p class="map-hint" v-html="$t('mapVillagePage.hintHtml')"></p>
          </div>
          <ul class="map-legend map-legend--village" :aria-label="$t('mapVillagePage.legendAria')">
            <li>
              <span class="map-legend-swatch map-legend-swatch--v-locations" aria-hidden="true" />
              {{ $t('mapVillagePage.categories.locations') }}
            </li>
            <li>
              <span class="map-legend-swatch map-legend-swatch--v-enemies" aria-hidden="true" />
              {{ $t('mapVillagePage.categories.enemies') }}
            </li>
            <li>
              <span class="map-legend-swatch map-legend-swatch--v-quests" aria-hidden="true" />
              {{ $t('mapVillagePage.categories.quests') }}
            </li>
            <li>
              <span class="map-legend-swatch map-legend-swatch--v-loot" aria-hidden="true" />
              {{ $t('mapVillagePage.categories.loot') }}
            </li>
            <li>
              <span class="map-legend-swatch map-legend-swatch--v-npc" aria-hidden="true" />
              {{ $t('mapVillagePage.categories.npc') }}
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
                <div
                  ref="mapContainer"
                  class="rtv-map-host"
                  role="application"
                  :aria-label="$t('mapVillagePage.mapAppAria')"
                  tabindex="0"
                />
                <!-- 临时：标点用归一化坐标；不需要时设 VILLAGE_COORD_HUD = false 或删掉本块 -->
                <div
                  v-show="mapReady && VILLAGE_COORD_HUD"
                  class="village-coord-hud"
                  aria-hidden="true"
                >
                  {{ coordHud }}
                </div>
                <aside
                  v-if="mapReady"
                  ref="filterRailRef"
                  class="village-filter-rail village-filter-rail--overlay"
                  :aria-label="$t('mapVillagePage.railAria')"
                >
                  <div class="poi-rail-head village-filter-rail__head">
                    <span class="poi-rail-kicker">{{ $t('mapVillagePage.railKicker') }}</span>
                    <h3 class="poi-rail-title">{{ $t('mapVillagePage.railTitle') }}</h3>
                    <p class="poi-rail-lead" v-html="$t('mapVillagePage.railLeadHtml')"></p>
                  </div>
                  <div class="village-filter-rail__body">
                    <section
                      v-for="cat in VILLAGE_CATEGORY_ORDER"
                      :key="cat"
                      class="village-filter-cat"
                      :data-vcat="cat"
                    >
                      <div class="village-filter-cat__head">
                        <button
                          type="button"
                          class="village-filter-cat__expand"
                          :aria-expanded="categoryExpanded[cat] ? 'true' : 'false'"
                          @click="categoryExpanded[cat] = !categoryExpanded[cat]"
                        >
                          <span class="village-filter-cat__chev" aria-hidden="true">{{ categoryChevron(categoryExpanded[cat]) }}</span>
                          <span class="village-filter-cat__label">{{ $t(`mapVillagePage.categories.${cat}`) }}</span>
                        </button>
                        <input
                          class="village-filter-cat__master"
                          type="checkbox"
                          :data-village-master="cat"
                          :checked="categoryAllOn(cat)"
                          :aria-label="$t(`mapVillagePage.categories.${cat}`)"
                          @change="
                            (e) => {
                              const el = e.target
                              if (!el || el.tagName !== 'INPUT') return
                              const wantOn = !!el.checked
                              for (const k of VILLAGE_KINDS[cat]) kindVisible[k] = wantOn
                              nextTick(syncCategoryMasterCheckboxes)
                            }
                          "
                        />
                      </div>
                      <div v-show="categoryExpanded[cat]" class="village-kind-grid" role="group">
                        <div
                          v-for="kind in VILLAGE_KINDS[cat]"
                          :key="kind"
                          class="village-kind-cell"
                        >
                          <label class="village-kind-cell__toggle">
                            <input v-model="kindVisible[kind]" type="checkbox">
                          </label>
                          <button
                            type="button"
                            class="village-kind-cell__main"
                            :disabled="countForKind(kind) === 0 || !kindVisible[kind]"
                            @click="focusKindPins(kind)"
                          >
                            <span class="village-kind-cell__name">{{ $t(`mapVillagePage.kinds.${kind}`) }}</span>
                            <span class="village-kind-cell__count">{{ countForKind(kind) }}</span>
                          </button>
                        </div>
                      </div>
                    </section>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div class="map-village-below" v-html="$t('mapVillagePage.belowMapHtml')"></div>
        <p v-if="mapError" class="map-error" role="alert">
          {{ mapError }}
        </p>
      </div>
    </section>

    <section class="page-body-section">
      <div class="container">
        <p class="guide-disclaimer" v-html="$t('mapVillagePage.footnoteHtml')"></p>
        <p class="guide-tools map-next-link">
          <a :href="getLocalizedPath('/map')">{{ $t('mapVillagePage.backToOverview') }}</a>
        </p>
      </div>
    </section>
  </article>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { reactive, ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import villagePinsEn from '../data/map/villageDetail/en.js'
import { VILLAGE_CATEGORY_ORDER, VILLAGE_KINDS } from '../data/map/villageDetail/taxonomy.js'
import { useLocalizedPath } from '../composables/useLocalizedPath.js'

const MAP_IMAGE_URL = '/images/map/map-02.png'

/** 临时：左下角显示鼠标归一化坐标，方便写 en.js 的 x/y；不需要时改为 false 或删除 HUD。 */
const VILLAGE_COORD_HUD = true

const route = useRoute()
const { t } = useI18n()
const { getLocalizedPath } = useLocalizedPath()

const mapPoints = computed(() => villagePinsEn)

const kindVisible = reactive(
  Object.fromEntries(
    VILLAGE_CATEGORY_ORDER.flatMap((c) => VILLAGE_KINDS[c].map((k) => [k, true])),
  ),
)

const categoryExpanded = reactive(
  Object.fromEntries(VILLAGE_CATEGORY_ORDER.map((c) => [c, c !== 'quests'])),
)

const kindCycle = reactive({})

const mapContainer = ref(null)
const filterRailRef = ref(null)
const mapError = ref('')
const mapReady = ref(false)
const coordHud = ref('—')
const selectedPoiId = ref(null)

let mapInstance = null
let resizeObserver = null
let markersLayer = null
const markerById = new Map()
/** 与 image自然尺寸一致，用于 mousemove →归一化 x,y */
let mapImagePxW = 0
let mapImagePxH = 0

function categoryChevron(expanded) {
  return expanded ? String.fromCodePoint(0x25bc) : String.fromCodePoint(0x25b6)
}

function pinTitle(p) {
  return p?.title ?? ''
}

function heroForPin(p) {
  if (!p?.image) return null
  return { src: p.image, alt: p.imageAlt || pinTitle(p) }
}

function countForKind(kind) {
  return mapPoints.value.filter((p) => p.kind === kind).length
}

function categoryAllOn(cat) {
  const kinds = VILLAGE_KINDS[cat]
  if (!kinds.length) return false
  return kinds.every((k) => kindVisible[k])
}

/** :checked is bound; indeterminate must be set on the real DOM (Vue ignores it). */
function syncCategoryMasterCheckboxes() {
  const root = filterRailRef.value
  if (!root) return
  for (const cat of VILLAGE_CATEGORY_ORDER) {
    const el = root.querySelector(`input[data-village-master="${cat}"]`)
    if (!el || el.tagName !== 'INPUT') continue
    const kinds = VILLAGE_KINDS[cat]
    if (!kinds.length) {
      el.indeterminate = false
      continue
    }
    const nOn = kinds.filter((k) => kindVisible[k]).length
    el.indeterminate = nOn > 0 && nOn < kinds.length
  }
}

const selectedPoi = computed(() => mapPoints.value.find((p) => p.id === selectedPoiId.value) ?? null)

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
  const map = mapInstance
  const marker = markerById.get(id)
  if (!map || !marker) return
  if (!markersLayer?.hasLayer(marker)) return
  const ll = marker.getLatLng()
  const z = Math.max(map.getZoom(), 0.5)
  map.flyTo(ll, z, { duration: 0.42, easeLinearity: 0.22 })
  marker.openPopup()
}

function focusKindPins(kind) {
  if (!kindVisible[kind]) return
  const pins = mapPoints.value.filter((p) => p.kind === kind && kindVisible[p.kind])
  if (!pins.length) return
  const idx = (kindCycle[kind] ?? 0) % pins.length
  kindCycle[kind] = idx + 1
  focusPoi(pins[idx].id)
}

watch(selectedPoiId, () => {
  nextTick(() => syncMarkerSelectionClass())
})

watch(
  kindVisible,
  () => {
    applyMarkerVisibility()
    const sel = selectedPoi.value
    if (sel && !kindVisible[sel.kind]) {
      selectedPoiId.value = null
    }
    nextTick(() => syncCategoryMasterCheckboxes())
  },
  { deep: true },
)

function syncRouteLocQuery() {
  const raw = route.query.loc
  if (raw == null || raw === '' || !mapReady.value) return
  const match = mapPoints.value.find((x) => String(x.id) === String(raw))
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
  const title = pinTitle(p)
  const hero = heroForPin(p)
  const thumb = hero
    ? `<div class="rtv-map-popup__thumb"><img src="${escapeHtml(hero.src)}" alt="${escapeHtml(hero.alt)}" width="88" height="88" loading="lazy" decoding="async"></div>`
    : ''
  const cls = thumb ? 'rtv-map-popup rtv-map-popup--with-media' : 'rtv-map-popup'
  const body = p.content ? `<p>${escapeHtml(p.content)}</p>` : ''
  return `<div class="${cls}"><div class="rtv-map-popup__body"><strong>${escapeHtml(title)}</strong>${body}</div>${thumb}</div>`
}

function normalizedToLatLng(xNorm, yNorm, w, h) {
  const xPx = xNorm * w
  const yFromTop = yNorm * h
  return L.latLng(h - yFromTop, xPx)
}

function markerModifierForPin(p) {
  return `rtv-map-marker--vcat-${p.category || 'locations'}`
}

function applyMarkerVisibility() {
  if (!markersLayer) return
  for (const [id, marker] of markerById) {
    const p = mapPoints.value.find((x) => x.id === id)
    if (!p) continue
    const vis = kindVisible[p.kind] === true
    if (vis) {
      if (!markersLayer.hasLayer(marker)) markersLayer.addLayer(marker)
    } else {
      if (markersLayer.hasLayer(marker)) markersLayer.removeLayer(marker)
      marker.closePopup()
    }
  }
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
  mapImagePxW = 0
  mapImagePxH = 0
  coordHud.value = '—'
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
      mapError.value = t('mapPage.errorDimensions')
      return
    }

    const bounds = L.latLngBounds(L.latLng(0, 0), L.latLng(h, w))
    mapImagePxW = w
    mapImagePxH = h

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

    mapInstance.on('mousemove', (e) => {
      if (!mapImagePxW || !mapImagePxH) return
      const lat = e.latlng.lat
      const lng = e.latlng.lng
      const x = Math.min(1, Math.max(0, lng / mapImagePxW))
      const y = Math.min(1, Math.max(0, (mapImagePxH - lat) / mapImagePxH))
      const xr = x.toFixed(4)
      const yr = y.toFixed(4)
      coordHud.value = `x ${xr} · y ${yr} →  en.js: x: ${xr}, y: ${yr}`
    })
    mapInstance.on('mouseout', () => {
      coordHud.value = '—'
    })

    markerById.clear()
    markersLayer = L.layerGroup()
    for (const p of mapPoints.value) {
      const latlng = normalizedToLatLng(p.x, p.y, w, h)
      const icon = L.divIcon({
        className: `rtv-map-marker ${markerModifierForPin(p)}`,
        html: '<span class="rtv-map-marker-dot" aria-hidden="true"></span>',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      })
      const marker = L.marker(latlng, { icon, title: pinTitle(p) })
      const hasRichPopup = Boolean(heroForPin(p))
      const popupW = hasRichPopup ? 380 : 300
      marker.bindPopup(buildPopupHtml(p), {
        className: 'rtv-map-popup-wrap',
        maxWidth: popupW,
      })
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

    applyMarkerVisibility()

    mapInstance.fitBounds(bounds)
    mapReady.value = true
    nextTick(() => {
      syncMarkerSelectionClass()
      syncCategoryMasterCheckboxes()
    })

    resizeObserver = new ResizeObserver(() => {
      mapInstance?.invalidateSize({ animate: false })
    })
    resizeObserver.observe(el)
  }

  probe.onerror = () => {
    mapError.value = t('mapPage.errorImageLoad')
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
.village-coord-hud {
  position: absolute;
  z-index: 1100;
  left: max(10px, env(safe-area-inset-left, 0px));
  bottom: max(10px, env(safe-area-inset-bottom, 0px));
  max-width: min(100% - 20px, 22rem);
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
  border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
  background: color-mix(in srgb, #0a0c0b 92%, var(--color-panel));
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);
  font-family: ui-monospace, 'Cascadia Code', 'Segoe UI Mono', monospace;
  font-size: 0.68rem;
  line-height: 1.35;
  color: color-mix(in srgb, var(--color-text) 92%, #8fa);
  pointer-events: none;
  word-break: break-all;
}

.map-legend--village {
  gap: 0.5rem 0.85rem;
}

.map-legend--village .map-legend-swatch--v-locations {
  background: color-mix(in srgb, #4a9eff 88%, #fff);
  box-shadow: 0 0 0 1px color-mix(in srgb, #4a9eff 40%, transparent);
}

.map-legend--village .map-legend-swatch--v-enemies {
  background: color-mix(in srgb, #e85d4c 88%, #300);
  box-shadow: 0 0 0 1px color-mix(in srgb, #e85d4c 45%, transparent);
}

.map-legend--village .map-legend-swatch--v-quests {
  background: color-mix(in srgb, #9b72cf 88%, #fff);
  box-shadow: 0 0 0 1px color-mix(in srgb, #9b72cf 40%, transparent);
}

.map-legend--village .map-legend-swatch--v-loot {
  background: color-mix(in srgb, var(--color-amber) 88%, #fff);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-amber) 40%, transparent);
}

.map-legend--village .map-legend-swatch--v-npc {
  background: color-mix(in srgb, var(--color-signal-soft) 82%, #520);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-signal) 45%, transparent);
}

.village-filter-rail--overlay {
  position: absolute;
  z-index: 1000;
  left: max(10px, env(safe-area-inset-left, 0px));
  top: max(10px, env(safe-area-inset-top, 0px));
  bottom: max(10px, env(safe-area-inset-bottom, 0px));
  width: min(292px, calc(100% - 3.5rem));
  display: flex;
  flex-direction: column;
  border-radius: 0 12px 12px 0;
  border: 1px solid color-mix(in srgb, var(--color-border) 88%, transparent);
  background: color-mix(in srgb, var(--color-panel) 96%, #000);
  box-shadow:
    6px 0 32px rgba(0, 0, 0, 0.42),
    inset 1px 0 0 color-mix(in srgb, var(--color-frost) 10%, transparent);
  overflow: hidden;
}

.village-filter-rail--overlay .village-filter-rail__head {
  flex-shrink: 0;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 70%, transparent);
}

.village-filter-rail--overlay .village-filter-rail__body {
  flex: 1 1 auto;
  min-height: 0;
  padding: 0.35rem 0 0.15rem;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 767px) {
  .village-filter-rail--overlay {
    width: min(268px, calc(100vw - 4.25rem));
    left: max(8px, env(safe-area-inset-left, 0px));
  }
}

.village-filter-cat {
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 55%, transparent);
}

.village-filter-cat:last-child {
  border-bottom: none;
}

.village-filter-cat__head {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.55rem 0.65rem 0.45rem 0.5rem;
}

.village-filter-cat__expand {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--color-text);
  font: inherit;
  text-align: left;
  cursor: pointer;
  min-width: 0;
}

.village-filter-cat__expand:hover .village-filter-cat__label {
  color: var(--color-primary-soft);
}

.village-filter-cat__chev {
  flex-shrink: 0;
  width: 1rem;
  font-size: 0.55rem;
  opacity: 0.75;
}

.village-filter-cat__label {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.village-filter-cat[data-vcat='locations'] .village-filter-cat__label {
  color: color-mix(in srgb, #4a9eff 75%, var(--color-muted));
}

.village-filter-cat[data-vcat='enemies'] .village-filter-cat__label {
  color: color-mix(in srgb, #e85d4c 72%, var(--color-muted));
}

.village-filter-cat[data-vcat='quests'] .village-filter-cat__label {
  color: color-mix(in srgb, #9b72cf 72%, var(--color-muted));
}

.village-filter-cat[data-vcat='loot'] .village-filter-cat__label {
  color: color-mix(in srgb, var(--color-amber) 78%, var(--color-muted));
}

.village-filter-cat[data-vcat='npc'] .village-filter-cat__label {
  color: color-mix(in srgb, var(--color-signal-soft) 70%, var(--color-muted));
}

.village-filter-cat__master {
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  accent-color: var(--v-vcat-accent, var(--color-frost));
  cursor: pointer;
}

.village-filter-cat[data-vcat='locations'] .village-filter-cat__master {
  accent-color: #4a9eff;
}

.village-filter-cat[data-vcat='enemies'] .village-filter-cat__master {
  accent-color: #e85d4c;
}

.village-filter-cat[data-vcat='quests'] .village-filter-cat__master {
  accent-color: #9b72cf;
}

.village-filter-cat[data-vcat='loot'] .village-filter-cat__master {
  accent-color: var(--color-amber);
}

.village-filter-cat[data-vcat='npc'] .village-filter-cat__master {
  accent-color: var(--color-signal);
}

.village-kind-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.35rem 0.5rem;
  padding: 0.15rem 0.5rem 0.65rem 1.6rem;
}

@media (max-width: 767px) {
  .village-kind-grid {
    grid-template-columns: 1fr;
  }
}

.village-kind-cell {
  display: flex;
  align-items: stretch;
  min-width: 0;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--color-border) 82%, transparent);
  background: color-mix(in srgb, var(--color-panel) 45%, transparent);
  overflow: hidden;
}

.village-kind-cell__toggle {
  display: flex;
  align-items: center;
  padding: 0 0.35rem 0 0.45rem;
  border-right: 1px solid color-mix(in srgb, var(--color-border) 70%, transparent);
  cursor: pointer;
}

.village-kind-cell__toggle input {
  width: 0.85rem;
  height: 0.85rem;
  accent-color: var(--color-frost);
  cursor: pointer;
}

.village-kind-cell__main {
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.35rem;
  min-width: 0;
  margin: 0;
  padding: 0.4rem 0.45rem 0.4rem 0.35rem;
  border: none;
  background: transparent;
  color: var(--color-text);
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.village-kind-cell__main:hover:not(:disabled) {
  background: color-mix(in srgb, var(--color-frost) 6%, transparent);
}

.village-kind-cell__main:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.village-kind-cell__name {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-muted);
  line-height: 1.25;
}

.village-kind-cell__main:hover:not(:disabled) .village-kind-cell__name {
  color: var(--color-primary-soft);
}

.village-kind-cell__count {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--color-text);
  opacity: 0.9;
}
</style>
