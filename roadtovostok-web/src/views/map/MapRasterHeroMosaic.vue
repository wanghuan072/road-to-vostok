<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLocalizedPath, stripLocaleFromFullPath } from '../../composables/useLocalizedPath.js'
import { MAP_HERO_MOSAIC_NAV } from '../../data/map/mapHeroMosaicNav.js'

const route = useRoute()
const { getLocalizedPath } = useLocalizedPath()

const tiles = MAP_HERO_MOSAIC_NAV

const activeLogicalPath = computed(() => {
  const raw = stripLocaleFromFullPath(route.fullPath)
  const q = raw.indexOf('?')
  const pathOnly = (q >= 0 ? raw.slice(0, q) : raw) || '/'
  return pathOnly.endsWith('/') && pathOnly.length > 1 ? pathOnly.replace(/\/+$/, '') : pathOnly
})

function isActive(tile) {
  return activeLogicalPath.value === tile.path
}
</script>

<template>
  <nav
    class="map-raster-hero-mosaic"
    :aria-label="$t('mapPage.heroMosaicNavAria')"
  >
    <a
      v-for="tile in tiles"
      :key="tile.path"
      class="map-raster-hero-mosaic__item"
      :class="{ 'map-raster-hero-mosaic__item--active': isActive(tile) }"
      :href="getLocalizedPath(tile.path)"
      :title="$t(tile.titleKey)"
      :aria-current="isActive(tile) ? 'page' : undefined"
    >
      <img
        :src="tile.img"
        alt=""
        width="72"
        height="72"
        loading="lazy"
        decoding="async"
      >
    </a>
  </nav>
</template>
