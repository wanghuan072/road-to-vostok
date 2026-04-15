/**
 * Map 03 — 栅格图 /map/school-map（MapRasterM03View）。
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
  { id: 'road-1', title: 'Highway', category: 'locations', kind: 'road', x: 0.1836, y: 0.1912, content: `<p>Map Transition</p><a href="/map/highway-map">View Map</a>` },
  { id: 'road-2', title: 'Village', category: 'locations', kind: 'road', x: 0.1845, y: 0.6510, content: `<p>Map Transition</p><a href="/map/village-map">View Map</a>` },
  { id: 'road-3', title: 'Outpost', category: 'locations', kind: 'road', x: 0.8163, y: 0.6525, content: `<p>Map Transition</p><a href="/map/outpost-map">View Map</a>` },
]

export default {
  mapId: 'map03',
  imageUrl: '/images/map/map-03.png',
  pinCategoryField: 'category',
  mapLegend,
  mapCategories,
  pins,
}
