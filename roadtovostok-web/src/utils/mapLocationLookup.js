/**
 * Resolve map location id from an in-app wiki path (e.g. /wiki/npcs/doctor).
 * Used when deep-linking from wiki → /map?loc=…
 */
export function findMapLocationIdByLink(mapPoints, link) {
  const raw = String(link ?? '').trim()
  if (!raw) return null
  const path = raw.replace(/^[a-z]+:\/\/[^/]+/i, '') // strip origin if ever absolute
  const norm = path.split('?')[0].replace(/\/+$/, '') || '/'

  for (const loc of mapPoints) {
    const entries = Array.isArray(loc.entries) ? loc.entries : []
    for (const e of entries) {
      const el = String(e.link ?? '').trim()
      if (!el) continue
      const en = el.split('?')[0].replace(/\/+$/, '') || '/'
      if (en === norm) return loc.id
    }
  }
  return null
}
