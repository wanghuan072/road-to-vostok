/**
 * Inner SVG markup (inside <svg viewBox="0 0 24 24">) for village map pins.
 * Icons are white via currentColor on the pin bubble.
 */

/** @type {Record<string, string>} */
const KIND_SVG_INNER = {
  hideout:
    '<path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"/>',
  landmark:
    '<path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>',
  fishing_spot:
    '<path fill="currentColor" d="M12 2.5c2.5 0 4.5 2.2 4.5 5.2 0 3.5-4.5 8.8-4.5 8.8S7.5 11.2 7.5 7.7c0-3 2-5.2 4.5-5.2z"/>',
  locked_structure:
    '<path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>',
  extraction:
    '<g fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="M12 3l-1.2 2.2M12 3l1.2 2.2M12 21l-1.2-2.2M12 21l1.2-2.2M3 12l2.2-1.2M3 12l2.2 1.2M21 12l-2.2-1.2M21 12l-2.2 1.2"/></g>',
  enemy_spawn:
    '<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>',
  tasks:
    '<path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>',
  quest:
    '<path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>',
  crate:
    '<path fill="currentColor" d="M4 6h16v12H4V6zm2 2v8h12V8H6zm2 2h8v2H8v-2z"/>',
  fridge:
    '<path fill="currentColor" d="M6 3h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 6h12V5H6v4zm3 2v2h2v-2H9z"/>',
  cabinet:
    '<path fill="currentColor" d="M4 4h16v4H4V4zm0 6h16v12H4V10zm3 4h2v4H7v-4zm4 0h2v4h-2v-4z"/>',
  garbage_bag:
    '<path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14V4zM6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zm4 2h2v8h-2V9zm4 0h2v8h-2V9z"/>',
  trash:
    '<path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14V4zM6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zm4 2h2v8h-2V9zm4 0h2v8h-2V9z"/>',
  electronics:
    '<path fill="currentColor" d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>',
  tools:
    '<path fill="currentColor" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>',
  trader:
    '<path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>',
}

const FALLBACK_INNER = KIND_SVG_INNER.landmark

/**
 * @param {string} kind
 * @returns {string}
 */
export function villagePinSvgInner(kind) {
  return KIND_SVG_INNER[kind] ?? FALLBACK_INNER
}

/**
 * @param {{ kind?: string }} p
 * @returns {string} HTML for Leaflet divIcon (marker root already has rtv-map-marker + category class).
 */
export function buildVillagePinHtml(p) {
  const kind = typeof p?.kind === 'string' ? p.kind : ''
  const safeKind = kind.replace(/[^a-z0-9_-]/gi, '')
  const inner = villagePinSvgInner(kind)
  return `<div class="rtv-village-pin" data-kind="${safeKind}"><div class="rtv-village-pin__bubble"><svg class="rtv-village-pin__svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">${inner}</svg></div></div>`
}
