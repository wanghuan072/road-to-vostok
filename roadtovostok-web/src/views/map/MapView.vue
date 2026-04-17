<template>
  <article ref="mapPageAdsRoot" class="map-page page-article map-raster-page">
    <section class="page-hero-section">
      <div class="container">
        <div
          ref="mapPageGptRoot"
          id="div-gpt-ad-1775617033282-0"
          style="min-width: 320px; min-height: 50px"
        ></div>
        <div class="map-raster-hero-row">
          <div class="page-hero-content map-raster-hero-row__main">
            <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
              <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
              <span aria-hidden="true">/</span>
              <span>{{ $t('mapPage.breadcrumb') }}</span>
            </nav>
            <h1>{{ $t('mapPage.title') }}</h1>
            <p v-html="$t('mapPage.introHtml')"></p>
          </div>
          <MapRasterHeroMosaic />
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

    <section class="map-section">
      <div class="container">
        <header class="map-section-head">
          <div class="map-section-head-main">
            <p class="map-section-kicker">{{ $t('mapPage.sectionKicker') }}</p>
            <h2>{{ $t('mapPage.sectionTitle') }}</h2>
            <p class="map-hint" v-html="$t('mapPage.hintHtml')"></p>
            <div
              class="map-village-callout-host"
              v-html="$t('mapPage.villageDetailCalloutHtml')"
            />
          </div>
          <ul class="map-legend" :aria-label="$t('mapPage.legendAria')">
            <li>
              <span class="map-legend-swatch map-legend-swatch--area05" aria-hidden="true" />
              {{ $t('mapPage.legendArea05') }}
            </li>
            <li>
              <span class="map-legend-swatch map-legend-swatch--border" aria-hidden="true" />
              {{ $t('mapPage.legendBorder') }}
            </li>
            <li>
              <span class="map-legend-swatch map-legend-swatch--vostok" aria-hidden="true" />
              {{ $t('mapPage.legendVostok') }}
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
                  <span class="map-drawer-tab__label">{{ $t('mapPage.detailsTab') }}</span>
                  <span class="map-drawer-tab__chevron" aria-hidden="true">›</span>
                </button>
                <div
                  ref="mapContainer"
                  class="rtv-map-host"
                  role="application"
                  :aria-label="$t('mapPage.mapAppAria')"
                  tabindex="0"
                />
                <aside
                  v-if="mapReady"
                  class="map-poi-detail"
                  :class="{ 'map-poi-detail--open': detailDrawerOpen }"
                  :aria-hidden="detailDrawerOpen ? 'false' : 'true'"
                  :aria-label="$t('mapPage.drawerAria')"
                >
                  <button
                    type="button"
                    class="map-poi-detail__close"
                    :aria-label="$t('mapPage.closeDrawerAria')"
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
                      <div
                        v-if="selectedPoi.content"
                        class="map-poi-detail__body"
                        v-html="selectedPoi.content"
                      ></div>
                      <a
                        v-if="selectedPoi.link"
                        :href="selectedPoi.link"
                        class="map-poi-detail__more"
                        @click="closeDetailDrawer"
                      >
                        {{ $t('mapPage.drawerMoreLink') }}
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                    <div
                      v-if="locationEntries(selectedPoi).length"
                      class="map-poi-detail__entries"
                    >
                      <p class="map-poi-detail__entries-label">
                        {{ $t('mapPage.entriesAtLocation') }}
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
                          <div
                            v-if="ent.content"
                            class="map-poi-entry__text"
                            v-html="ent.content"
                          ></div>
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
                          <a
                            v-if="ent.link"
                            :href="ent.link"
                            class="map-poi-entry__link"
                            @click="closeDetailDrawer"
                          >
                            {{ $t('mapPage.drawerOpenLink') }}
                            <span aria-hidden="true">→</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    v-else
                    class="map-poi-detail__empty"
                  >
                    <p class="map-poi-detail__empty-title">
                      {{ $t('mapPage.emptyPinTitle') }}
                    </p>
                    <p class="map-poi-detail__empty-text">
                      {{ $t('mapPage.emptyPinHint') }}
                    </p>
                  </div>
                </aside>
              </div>
            </div>
            <aside
              v-if="mapReady"
              class="poi-rail"
              :aria-label="$t('mapPage.indexRailAria')"
            >
              <div class="poi-rail-head">
                <span class="poi-rail-kicker">{{ $t('mapPage.railKickerBelowMap') }}</span>
                <h3 class="poi-rail-title">{{ $t('mapPage.railTitleLocationIndex') }}</h3>
                <p class="poi-rail-lead" v-html="$t('mapPage.railLeadHtml')"></p>
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
                      <div
                        v-if="p.content"
                        class="poi-list-blurb"
                        v-html="p.content"
                      ></div>
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
                          <a
                            v-if="ent.link"
                            :href="ent.link"
                            class="poi-list-sub-link"
                            @click.stop
                          >
                            <span class="poi-list-sub-kind">{{ entryKindLabel(ent.kind) }}</span>
                            {{ ent.title }}
                          </a>
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
              <div
                class="poi-rail-ad"
                style="width: 100%; margin: 0.75rem 0 0; padding: 0.75rem; text-align: center; flex-shrink: 0"
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

    <div class="container">
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

    <section class="page-body-section">
      <div class="container">
        <div
          class="page-body-content"
          v-html="$t('mapPage.regionalSectionHtml')"
        />
      </div>
    </section>

    <section data-nav-anchor="area-05-detail" class="guide-section page-body-section">
      <div class="container">
        <div class="area05-guide-split">
          <div
            class="guide-prose"
            v-html="$t('mapPage.area05DetailProseHtml')"
          />
          <figure
            class="area05-guide-map"
            :aria-label="$t('mapPage.area05ImageAria')"
          >
            <img
              src="/images/map-01.webp"
              :alt="$t('mapPage.area05MapImgAlt')"
              width="640"
              height="800"
              loading="lazy"
              decoding="async"
              class="area05-guide-map__img"
            >
          </figure>
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
      </div>
    </section>

    <section class="page-body-section">
      <div class="container">
        <p class="guide-tools map-next-link" v-html="$t('mapPage.bottomCrossLinksHtml')"></p>
      </div>
    </section>
  </article>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { getMapPoints } from '../../data/localeData.js'
import { buildMapPinHtml } from '../../data/map/pinIcons.js'
import { useLocalizedPath } from '../../composables/useLocalizedPath.js'
import MapRasterHeroMosaic from './MapRasterHeroMosaic.vue'

const route = useRoute()
const { t, locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()

const mapPoints = computed(() => getMapPoints(locale.value))

const REGION_ORDER = ['area05', 'border', 'vostok']

/** 世界概览图钉气泡色（`pinIcon` 键见 `data/map/pinIcons.js` → `PIN_ICON_BY_ID`） */
const WORLD_MARKER_BY_REGION = {
  area05: { pinIcon: 'landmark', pinColor: '#7eb8c9' },
  border: { pinIcon: 'landmark', pinColor: '#c45a42' },
  vostok: { pinIcon: 'landmark', pinColor: '#cc4444' },
}

/** Official-style overview graphic (Squarespace-hosted asset). */
const MAP_IMAGE_URL =
  'https://images.squarespace-cdn.com/content/v1/6991f0a1cda81c3c1cc9bb25/7ae6c5f1-6cb4-454e-9cc7-f37c1a237cd3/Road_to_Vostok_Map.jpg'

const mapPageAdsRoot = ref(null)
const mapPageGptRoot = ref(null)

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
  if (region === 'area05') return t('mapPage.legendArea05')
  if (region === 'border') return t('mapPage.legendBorder')
  if (region === 'vostok') return t('mapPage.legendVostok')
  return region
}

const poiGroups = computed(() => {
  const buckets = { area05: [], border: [], vostok: [] }
  for (const p of mapPoints.value) {
    if (buckets[p.type]) buckets[p.type].push(p)
  }
  return REGION_ORDER.map((key) => ({
    key,
    title: regionTitle(key),
    items: buckets[key],
  }))
})

const selectedPoi = computed(() => mapPoints.value.find((p) => p.id === selectedPoiId.value) ?? null)

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
  const keys = {
    npc: 'mapPage.kindNpc',
    loot: 'mapPage.kindLoot',
    task: 'mapPage.kindTask',
    weapon: 'mapPage.kindWeapon',
    faction: 'mapPage.kindFaction',
    note: 'mapPage.kindNote',
  }
  if (keys[k]) return t(keys[k])
  return kind ? String(kind) : t('mapPage.kindFallback')
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
  const bodyHtml = p.content
    ? `<div class="rtv-map-popup__html">${String(p.content)}</div>`
    : ''
  return `<div class="${cls}"><div class="rtv-map-popup__body"><strong>${escapeHtml(p.title)}</strong>${bodyHtml}${meta}</div>${thumb}</div>`
}

/** Normalized top-left image coords → Leaflet CRS.Simple lat/lng for our bounds. */
function normalizedToLatLng(xNorm, yNorm, w, h) {
  const xPx = xNorm * w
  const yFromTop = yNorm * h
  return L.latLng(h - yFromTop, xPx)
}

function mountMapPageGptDisplay() {
  const root = mapPageGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushMapPageAdx() {
  const root = mapPageAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('MapPage ADX push failed:', e)
    }
  })
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
      mapError.value = t('mapPage.errorDimensions')
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
    for (const p of mapPoints.value) {
      const latlng = normalizedToLatLng(p.x, p.y, w, h)
      const icon = L.divIcon({
        className: `rtv-map-marker rtv-map-marker--${p.type}`,
        html: buildMapPinHtml(
          { kind: p.type },
          WORLD_MARKER_BY_REGION[p.type] ?? WORLD_MARKER_BY_REGION.area05,
        ),
        iconSize: [40, 48],
        iconAnchor: [20, 46],
        popupAnchor: [0, -22],
      })
      const marker = L.marker(latlng, { icon, title: p.title })
      const hasRichPopup = Boolean(locationHeroImage(p) || locationEntries(p).length)
      const popupW = hasRichPopup ? 380 : 300
      marker.bindPopup(buildPopupHtml(p), {
        className: 'rtv-map-popup-wrap',
        maxWidth: popupW,
        offset: L.point(0, -6),
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
    mapError.value = t('mapPage.errorImageLoad')
  }

  probe.src = MAP_IMAGE_URL
}

onMounted(() => {
  setupMap()
  try {
    mountMapPageGptDisplay()
  } catch (e) {
    console.error('MapPage GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushMapPageAdx()
    } catch (e) {
      console.error('MapPage ADX failed:', e)
    }
  })
})

watch(locale, () => {
  if (!mapContainer.value) return
  teardownMap()
  void nextTick(() => setupMap())
})

onUnmounted(() => {
  teardownMap()
})
</script>

<style src="./raster-map-pages.css"></style>

<style scoped>
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

/* Area 05 long-form block: prose left, reference art right */
.area05-guide-split {
  display: grid;
  grid-template-columns: minmax(0, min(72ch, 100%)) minmax(220px, 1fr);
  gap: clamp(1.5rem, 4vw, 2.75rem);
  align-items: start;
}

.area05-guide-split .guide-prose {
  max-width: none;
}

.area05-guide-map {
  margin: 0;
  min-width: 0;
}

.area05-guide-map__img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--color-ice) 8%, transparent),
    0 20px 48px rgba(0, 0, 0, 0.35);
}

@media (max-width: 900px) {
  .area05-guide-split {
    grid-template-columns: 1fr;
  }

  .area05-guide-map__img {
    max-width: none;
    margin-left: 0;
  }
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
