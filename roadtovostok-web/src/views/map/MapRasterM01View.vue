<template>
  <article class="map-page page-article map-raster-page">
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
            <li v-for="item in mapLegend" :key="item.id">
              <span
                class="map-legend-swatch"
                :class="`map-legend-swatch--v-${item.id}`"
                aria-hidden="true"
              />
              {{ item.label }}
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
                      v-for="cat in mapCategories"
                      :key="cat.id"
                      class="village-filter-cat"
                      :data-vcat="cat.id"
                    >
                      <div class="village-filter-cat__head">
                        <button
                          type="button"
                          class="village-filter-cat__expand"
                          :aria-expanded="categoryExpanded[cat.id] ? 'true' : 'false'"
                          @click="categoryExpanded[cat.id] = !categoryExpanded[cat.id]"
                        >
                          <span class="village-filter-cat__chev" aria-hidden="true">{{ categoryChevron(categoryExpanded[cat.id]) }}</span>
                          <span class="village-filter-cat__label">{{ cat.label }}</span>
                        </button>
                        <input
                          class="village-filter-cat__master"
                          type="checkbox"
                          :data-village-master="cat.id"
                          :checked="categoryAllOn(cat.id)"
                          :aria-label="cat.label"
                          @change="
                            (e) => {
                              const el = e.target
                              if (!el || el.tagName !== 'INPUT') return
                              const wantOn = !!el.checked
                              for (const row of cat.kinds) kindVisible[row.id] = wantOn
                              nextTick(syncCategoryMasterCheckboxes)
                            }
                          "
                        />
                      </div>
                      <div v-show="categoryExpanded[cat.id]" class="village-kind-grid" role="group">
                        <div
                          v-for="row in cat.kinds"
                          :key="row.id"
                          class="village-kind-cell"
                        >
                          <label class="village-kind-cell__toggle">
                            <input v-model="kindVisible[row.id]" type="checkbox">
                          </label>
                          <button
                            type="button"
                            class="village-kind-cell__main"
                            :disabled="countForKind(row.id) === 0 || !kindVisible[row.id]"
                            @click="focusKindPins(row.id)"
                          >
                            <span class="village-kind-cell__name">{{ row.label }}</span>
                            <span class="village-kind-cell__count">{{ countForKind(row.id) }}</span>
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
import { nextTick } from 'vue'
import map01 from '../../data/map/maps/map01.js'
import { useLocalizedPath } from '../../composables/useLocalizedPath.js'
import { useRasterMapPage } from './useRasterMapPage.js'

const { getLocalizedPath } = useLocalizedPath()

const {
  mapContainer,
  filterRailRef,
  mapError,
  mapReady,
  kindVisible,
  categoryExpanded,
  mapCategories,
  mapLegend,
  categoryChevron,
  countForKind,
  categoryAllOn,
  focusKindPins,
  syncCategoryMasterCheckboxes,
} = useRasterMapPage(map01)
</script>

<style src="./raster-map-pages.css"></style>
