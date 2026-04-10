/**
 * 将各语言补丁合并到英文 canonical 数据上（en 时原样返回）。
 * `patchesByLocale` 形如 `{ zh: ..., de: ... }`，缺失或空对象则跳过。
 */
export function mergeLocaleRecord(base, patch) {
  if (!patch) return base
  const out = { ...base, ...patch }
  if (base.seo && patch.seo) out.seo = { ...base.seo, ...patch.seo }
  if (base.location && patch.location)
    out.location = { ...base.location, ...patch.location }
  return out
}

/**
 * @template T
 * @param {string} locale
 * @param {T[]} rows
 * @param {Record<string, Record<string, Partial<T>>|null|undefined>} patchesByLocale
 * @param {keyof T | string} keyField
 */
export function mergeLocaleRowsByKey(locale, rows, patchesByLocale, keyField = 'id') {
  const patchMap = patchesByLocale?.[locale]
  if (!patchMap || typeof patchMap !== 'object') return rows
  if (!Object.keys(patchMap).length) return rows
  return rows.map((row) => {
    const key = row[keyField]
    const patch = patchMap[key] ?? patchMap[String(key)]
    return mergeLocaleRecord(row, patch)
  })
}

/**
 * @template T
 * @param {string} locale
 * @param {T[]} rows
 * @param {Record<string, Partial<T>[]|null|undefined>} patchesByLocale 与 rows 等长、按索引对应
 */
export function mergeLocaleRowsByIndex(locale, rows, patchesByLocale) {
  const patchList = patchesByLocale?.[locale]
  if (!Array.isArray(patchList) || !patchList.length) return rows
  return rows.map((row, i) => mergeLocaleRecord(row, patchList[i]))
}

/** 地图钉：合并 entries 数组同下标的字段 */
export function mergeMapPin(base, patch) {
  if (!patch) return base
  const out = mergeLocaleRecord(base, patch)
  if (base.entries && patch.entries?.length) {
    out.entries = base.entries.map((e, i) =>
      patch.entries[i] ? { ...e, ...patch.entries[i] } : e,
    )
  }
  return out
}

export function mergeMapPoints(locale, rows, patchesByLocale) {
  const patchMap = patchesByLocale?.[locale]
  if (!patchMap || typeof patchMap !== 'object' || !Object.keys(patchMap).length) return rows
  return rows.map((p) => mergeMapPin(p, patchMap[p.id]))
}
