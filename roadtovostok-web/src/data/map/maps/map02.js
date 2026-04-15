/**
 * Map 02 — 栅格图 /map/highway-map（MapRasterM02View）。
 * 与 map01 及其它图完全独立：mapLegend、mapCategories、pins 仅描述本图；勿从其它 map 文件 import 共用分类或坐标。
 * 新子类型：`kinds[]` 含 `id`、`label`、`pinIcon`（`pinIcons.js` 的 `PIN_ICON_BY_ID` 键）、`pinColor`（`#rrggbb`）；pins 的 `kind` 与 `id` 一致。
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
      { id: 'locked-door', label: 'Locked Door', pinIcon: 'key', pinColor: '#F70544' },
      { id: 'Radio', label: 'Radio', pinIcon: 'radio', pinColor: '#FD4CE9' },
    ],
  },
]

const pins = [
  { id: 'road-1', title: 'School', category: 'locations', kind: 'road', x: 0.8122, y: 0.3266, content: `<p>Map Transition</p><a href="/map/school-map">View Map</a>` },
  { id: 'road-2', title: 'Village', category: 'locations', kind: 'road', x: 0.1955, y: 0.7991, content: `<p>Map Transition</p><a href="/map/village-map">View Map</a>` },
  { id: 'locked-1', title: 'Tunnel Key', category: 'locations', kind: 'locked-door', x: 0.4836, y: 0.2944, content: `<p>Locked Door</p>` },
  { id: 'locked-2', title: 'Tunnel Key', category: 'locations', kind: 'locked-door', x: 0.4833, y: 0.2973, content: `<p>Locked Door</p>` },
  { id: 'locked-3', title: 'Tunnel Key', category: 'locations', kind: 'locked-door', x: 0.7135, y: 0.6927, content: `<p>Locked Door</p>` },
  { id: 'radio-1', title: 'Radio', category: 'locations', kind: 'Radio', x: 0.7448, y: 0.7422, content: `<p>Locked Door</p>` },
]

export default {
  mapId: 'map02',
  imageUrl: '/images/map/map-02.png',
  pinCategoryField: 'category',
  mapLegend,
  mapCategories,
  pins,
}
