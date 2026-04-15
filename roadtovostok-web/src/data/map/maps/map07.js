/**
 * Map 07 — 栅格图 /map/terminal-map（MapRasterM07View）。
 * 与 map01 及其它图完全独立：mapLegend、mapCategories、pins 仅描述本图；勿从其它 map 文件 import 共用分类或坐标。
 * 新子类型：`kinds[]` 含 `id`、`label`、`pinIcon`（`PIN_ICON_BY_ID`）、`pinColor`（`#rrggbb`）；pins 的 `kind` 与 `id` 一致。
 */

export const mapLegend = []

export const mapCategories = []

const pins = []

export default {
  mapId: 'map07',
  imageUrl: '/images/map/map-07.png',
  pinCategoryField: 'category',
  mapLegend,
  mapCategories,
  pins,
}
