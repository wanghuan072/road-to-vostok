/**
 * Map 04 — 栅格图 /map/outpost-map（MapRasterM04View）。
 * 与 map01 及其它图完全独立：mapLegend、mapCategories、pins 仅描述本图；勿从其它 map 文件 import 共用分类或坐标。
 * 新子类型：`kinds[]` 含 `id`、`label`、`pinIcon`（`PIN_ICON_BY_ID`）、`pinColor`（`#rrggbb`）；pins 的 `kind` 与 `id` 一致。
 */

export const mapLegend = [
  { id: 'locations', label: 'Locations' },
]

export const mapCategories = [
  {
    id: 'locations',
    label: 'Locations',
    kinds: [
      { id: 'road', label: 'Map Transition', pinIcon: 'location', pinColor: '#4a9eff' },
    ],
  },
]

const pins = [
  { id: 'road-1', title: 'School', category: 'locations', kind: 'road', x: 0.1823, y: 0.4922, content: `<p>Map Transition</p><a href="/map/school-map">View Map</a>` },
  { id: 'road-2', title: 'Minefield', category: 'locations', kind: 'road', x: 0.8157, y: 0.6661, content: `<p>Map Transition</p><a href="/map/minefield-map">View Map</a>` },
]

export default {
  mapId: 'map04',
  imageUrl: '/images/map/map-04.png',
  pinCategoryField: 'category',
  mapLegend,
  mapCategories,
  pins,
}
