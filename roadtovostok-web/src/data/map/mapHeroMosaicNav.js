/**
 * Hero 右侧七图横排：与顶栏 `MAP_GAME_MAPS_NAV` 顺序一致（村庄 + m02–m07）。
 * 切图 `map-img-01.png` … `map-img-07.png`；阶梯错位与描边色见 `raster-map-pages.css`。
 */
export const MAP_HERO_MOSAIC_NAV = [
  {
    path: '/map/village-map',
    img: '/images/map/map-img-01.png',
    titleKey: 'site.navMapVillage',
    accent: '#5a9f6e',
  },
  {
    path: '/map/highway-map',
    img: '/images/map/map-img-02.png',
    titleKey: 'mapRasterM02.navLabel',
    accent: '#c97d4a',
  },
  {
    path: '/map/school-map',
    img: '/images/map/map-img-03.png',
    titleKey: 'mapRasterM03.navLabel',
    accent: '#6eb8d4',
  },
  {
    path: '/map/outpost-map',
    img: '/images/map/map-img-04.png',
    titleKey: 'mapRasterM04.navLabel',
    accent: '#d970a8',
  },
  {
    path: '/map/minefield-map',
    img: '/images/map/map-img-05.png',
    titleKey: 'mapRasterM05.navLabel',
    accent: '#9bc49a',
  },
  {
    path: '/map/apartments-map',
    img: '/images/map/map-img-06.png',
    titleKey: 'mapRasterM06.navLabel',
    accent: '#e4d9c4',
  },
  {
    path: '/map/terminal-map',
    img: '/images/map/map-img-07.png',
    titleKey: 'mapRasterM07.navLabel',
    accent: '#b8a8d8',
  },
]
