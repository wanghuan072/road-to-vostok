/**
 * 地图图钉：内联 SVG 字形 + 可选气泡色（由各图 `mapCategories[].kinds[].pinIcon` / `pinColor` 提供）。
 */

const VIEWBOX_24 = '0 0 24 24'

/** 标准定位针（地标 / 默认） */
const SVG_LOCATION =
  '<path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>'

/** 庇护所 / 房屋 */
const SVG_SHELTER =
  '<path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"/>'

/** 钓鱼（1024 画板缩放到 24 视图） */
const SVG_FISHING =
  '<g fill="currentColor" transform="scale(0.0234375)"><path d="M921.6 614.4H767.86688c-18.76992 0-45.0048 10.86464-58.2656 24.13568l-64.13312 64.12288-34.06848-34.05824c-58.86976-58.85952-136.06912-88.34048-213.32992-88.34048-77.27104 0-154.4704 29.48096-213.34016 88.34048L102.4 750.94016l82.3296 82.31936C243.59936 892.09856 320.79872 921.6 398.06976 921.6a300.86144 300.86144 0 0 0 213.32992-88.34048l34.06848-34.05824 64.2048 64.14336c13.2608 13.2608 39.49568 24.1152 58.25536 24.1152H921.6l-34.12992-136.51968L921.6 614.4zM563.12832 784.9984a232.0384 232.0384 0 0 1-165.05856 68.34176 231.91552 231.91552 0 0 1-165.0688-68.38272l-34.06848-34.01728 34.06848-34.07872c44.07296-44.06272 102.69696-68.32128 165.0688-68.32128 62.3616 0 120.99584 24.25856 165.05856 68.32128l34.06848 34.07872-34.06848 34.05824zM834.17088 819.2h-66.24256c-1.83296-0.33792-8.45824-3.06176-10.92608-4.99712l-63.27296-63.26272 64.14336-64.14336c1.52576-1.06496 8.16128-3.79904 11.264-4.1984l65.04448 0.04096-17.07008 68.3008L834.17088 819.2z"/><path d="M358.4 750.94016a34.0992 34.0992 0 0 1-34.12992 34.11968 34.0992 34.0992 0 0 1-34.14016-34.11968A34.10944 34.10944 0 0 1 324.27008 716.8 34.10944 34.10944 0 0 1 358.4 750.94016zM290.12992 426.67008h51.2a51.2 51.2 0 0 1-102.4 0V300.93312C278.59968 286.83264 307.2 249.33376 307.2 204.8c0-56.56576-45.83424-102.4-102.4-102.4s-102.4 45.83424-102.4 102.4c0 44.53376 28.60032 82.03264 68.27008 96.13312v125.72672c0 65.96608 53.504 119.47008 119.45984 119.47008C356.096 546.14016 409.6 492.63616 409.6 426.67008V307.2L290.12992 426.67008zM204.8 238.92992a34.12992 34.12992 0 1 1 0-68.2496 34.12992 34.12992 0 0 1 0 68.2496z"/></g>'

/** 上锁建筑 */
const SVG_LOCK =
  '<path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>'

/** 撤离 / 方位 */
const SVG_EXTRACTION =
  '<g fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="M12 3l-1.2 2.2M12 3l1.2 2.2M12 21l-1.2-2.2M12 21l1.2-2.2M3 12l2.2-1.2M3 12l2.2 1.2M21 12l-2.2-1.2M21 12l-2.2 1.2"/></g>'

/** 警告圆点 */
const SVG_ALERT =
  '<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>'

/** 木箱 */
const SVG_CRATE =
  '<path fill="currentColor" d="M4 6h16v12H4V6zm2 2v8h12V8H6zm2 2h8v2H8v-2z"/>'

/** 冰箱 / 炉灶类 */
const SVG_FRIDGE =
  '<path fill="currentColor" d="M6 3h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 6h12V5H6v4zm3 2v2h2v-2H9z"/>'

/** 橱柜 */
const SVG_CABINET =
  '<path fill="currentColor" d="M4 4h16v4H4V4zm0 6h16v12H4V10zm3 4h2v4H7v-4zm4 0h2v4h-2v-4z"/>'

/** 垃圾袋 */
const SVG_TRASH =
  '<path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14V4zM6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zm4 2h2v8h-2V9zm4 0h2v8h-2V9z"/>'

/** 电 / 闪电 */
const SVG_BOLT =
  '<path fill="currentColor" d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>'

/** 工具 / 扳手感 */
const SVG_WRENCH =
  '<path fill="currentColor" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>'

/** NPC / 商人 */
const SVG_PERSON =
  '<path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>'

/** 任务 / 剪贴板 */
const SVG_CLIPBOARD =
  '<path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>'

/**
 * `pinIcon` 取值 → 内联 SVG（viewBox + inner）。
 * 各图 `kinds[].pinIcon` 必须在此有键，或回退 `location`。
 */
export const PIN_ICON_BY_ID = {
  location: { viewBox: VIEWBOX_24, inner: SVG_LOCATION },
  landmark: { viewBox: VIEWBOX_24, inner: SVG_LOCATION },
  hideout: { viewBox: VIEWBOX_24, inner: SVG_SHELTER },
  fishing_spot: { viewBox: '0 0 1024 1024', inner: SVG_FISHING },
  locked_structure: { viewBox: VIEWBOX_24, inner: SVG_LOCK },
  extraction: { viewBox: VIEWBOX_24, inner: SVG_EXTRACTION },
  enemy_spawn: { viewBox: VIEWBOX_24, inner: SVG_ALERT },
  crate: { viewBox: VIEWBOX_24, inner: SVG_CRATE },
  fridge: { viewBox: VIEWBOX_24, inner: SVG_FRIDGE },
  cabinet: { viewBox: VIEWBOX_24, inner: SVG_CABINET },
  garbage_bag: { viewBox: VIEWBOX_24, inner: SVG_TRASH },
  trash: { viewBox: VIEWBOX_24, inner: SVG_TRASH },
  electronics: { viewBox: VIEWBOX_24, inner: SVG_BOLT },
  tools: { viewBox: VIEWBOX_24, inner: SVG_WRENCH },
  trader: { viewBox: VIEWBOX_24, inner: SVG_PERSON },
  tasks: { viewBox: VIEWBOX_24, inner: SVG_CLIPBOARD },
  quest: { viewBox: VIEWBOX_24, inner: SVG_CLIPBOARD },
}

function safeIconToken(raw) {
  const s = String(raw ?? '')
    .trim()
    .replace(/[^a-z0-9_-]/gi, '')
  return s || 'location'
}

function escapeAttr(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;')
}

/** 仅允许十六进制色，避免把任意字符串写进 style */
function isSafeHexColor(s) {
  return typeof s === 'string' && /^#[0-9a-f]{3,8}$/i.test(s.trim())
}

function bubbleStyleFromColor(hex) {
  const c = hex.trim()
  return `background:linear-gradient(145deg,color-mix(in srgb,${c} 88%,#fff),color-mix(in srgb,${c} 42%,#020810));border-color:color-mix(in srgb,#000 32%,${c})`
}

function dataKindAttr(pin) {
  const s = String(pin?.kind ?? '')
    .trim()
    .replace(/[^a-z0-9_-]/gi, '')
  return s || 'default'
}

/**
 * @param {{ kind?: string, pinIcon?: string }} pin
 * @param {{ pinIcon?: string, pinColor?: string }} [fromKind] 来自 `mapCategories[].kinds[]`（或世界图等调用方手写）
 * @returns {string} Leaflet divIcon 用 HTML
 */
export function buildMapPinHtml(pin, fromKind) {
  const iconId = safeIconToken(fromKind?.pinIcon ?? pin?.pinIcon ?? 'location')
  const spec = PIN_ICON_BY_ID[iconId] ?? PIN_ICON_BY_ID.location
  const vb = escapeAttr(spec.viewBox)
  const kindAttr = escapeAttr(dataKindAttr(pin))

  const colorRaw = fromKind?.pinColor ?? pin?.pinColor
  const bubbleAttrs =
    colorRaw && isSafeHexColor(colorRaw)
      ? ` style="${escapeAttr(bubbleStyleFromColor(colorRaw.trim()))}"`
      : ''

  return `<div class="rtv-map-pin" data-kind="${kindAttr}"><div class="rtv-map-pin__bubble"${bubbleAttrs}><svg class="rtv-map-pin__svg" viewBox="${vb}" width="15" height="15" aria-hidden="true" focusable="false">${spec.inner}</svg></div></div>`
}
