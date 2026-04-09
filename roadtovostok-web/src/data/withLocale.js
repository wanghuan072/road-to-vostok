/**
 * 将中文补丁合并到英文 canonical 数据上（locale 非 zh 时原样返回）。
 * 由 `localeData.js` 集中调用，合并各模块的 en.js / zh.js。
 */

export function mergeLocaleRecord(base, patch) {
  if (!patch) return base
  const out = { ...base, ...patch }
  if (base.seo && patch.seo) out.seo = { ...base.seo, ...patch.seo }
  return out
}

/**
 * @template T
 * @param {string} locale
 * @param {T[]} rows
 * @param {Record<string, Partial<T>>|null|undefined} patchesByKey
 * @param {keyof T | string} keyField
 */
export function mergeLocaleRowsByKey(locale, rows, patchesByKey, keyField = 'id') {
  if (locale !== 'zh' || !patchesByKey) return rows
  return rows.map((row) => {
    const key = row[keyField]
    const patch = patchesByKey[key] ?? patchesByKey[String(key)]
    return mergeLocaleRecord(row, patch)
  })
}

/**
 * @template T
 * @param {string} locale
 * @param {T[]} rows
 * @param {Partial<T>[]|null|undefined} patchesByIndex 与 rows 等长、按索引对应；可留空对象占位
 */
export function mergeLocaleRowsByIndex(locale, rows, patchesByIndex) {
  if (locale !== 'zh' || !patchesByIndex?.length) return rows
  return rows.map((row, i) => mergeLocaleRecord(row, patchesByIndex[i]))
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

export function mergeMapPoints(locale, rows, patchesById) {
  if (locale !== 'zh' || !patchesById) return rows
  return rows.map((p) => mergeMapPin(p, patchesById[p.id]))
}
