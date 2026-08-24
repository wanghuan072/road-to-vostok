<template>
  <div class="wiki-loot" :aria-label="$t('wikiHubPage.lootTable.sectionAria')">
    <div class="wiki-loot__head">
      <h2 class="wiki-loot__title">{{ $t('wikiHubPage.lootTable.sectionTitle') }}</h2>
      <p class="wiki-loot__lead" v-html="$t('wikiHubPage.lootTable.sectionLeadHtml')" />
    </div>

    <div class="wiki-loot__controls">
      <label class="sr-only" for="wiki-loot-search">{{
        $t('wikiHubPage.lootTable.searchPlaceholder')
      }}</label>
      <input
        id="wiki-loot-search"
        v-model="query"
        class="wiki-loot__search"
        type="search"
        autocomplete="off"
        :placeholder="$t('wikiHubPage.lootTable.searchPlaceholder')"
      />
      <label class="sr-only" for="wiki-loot-sort">{{ $t('wikiHubPage.lootTable.sortLabel') }}</label>
      <select id="wiki-loot-sort" v-model="sortCol" class="wiki-loot__select">
        <option value="vps_weighted">{{ $t('wikiHubPage.lootTable.sortVpsWeighted') }}</option>
        <option value="vps">{{ $t('wikiHubPage.lootTable.sortVps') }}</option>
        <option value="value">{{ $t('wikiHubPage.lootTable.sortValue') }}</option>
        <option value="stack_value">{{ $t('wikiHubPage.lootTable.sortStackValue') }}</option>
        <option value="weight">{{ $t('wikiHubPage.lootTable.sortWeight') }}</option>
        <option value="slots">{{ $t('wikiHubPage.lootTable.sortSlots') }}</option>
        <option value="name">{{ $t('wikiHubPage.lootTable.sortName') }}</option>
        <option value="type">{{ $t('wikiHubPage.lootTable.sortType') }}</option>
        <option value="rarity">{{ $t('wikiHubPage.lootTable.sortRarity') }}</option>
      </select>
      <label class="sr-only" for="wiki-loot-dir">{{ $t('wikiHubPage.lootTable.sortDir') }}</label>
      <select id="wiki-loot-dir" v-model="sortDir" class="wiki-loot__select">
        <option value="desc">{{ $t('wikiHubPage.lootTable.sortDesc') }}</option>
        <option value="asc">{{ $t('wikiHubPage.lootTable.sortAsc') }}</option>
      </select>
      <button type="button" class="wiki-loot__reset" @click="resetFilters">
        {{ $t('wikiHubPage.lootTable.reset') }}
      </button>
    </div>

    <div class="wiki-loot__filter-groups" role="group" :aria-label="$t('wikiHubPage.lootTable.filtersAria')">
      <div class="wiki-loot__filter-row">
        <span class="wiki-loot__filter-label">{{ $t('wikiHubPage.lootTable.filterRarity') }}</span>
        <button
          v-for="r in rarityOptions"
          :key="r"
          type="button"
          class="wiki-loot__chip"
          :class="{ 'wiki-loot__chip--active': filters.rarity.includes(r) }"
          @click="toggle('rarity', r)"
        >
          {{ r }}
        </button>
      </div>
      <div class="wiki-loot__filter-row">
        <span class="wiki-loot__filter-label">{{ $t('wikiHubPage.lootTable.filterSource') }}</span>
        <button
          v-for="s in sourceOptions"
          :key="s"
          type="button"
          class="wiki-loot__chip"
          :class="{ 'wiki-loot__chip--active': filters.source.includes(s) }"
          @click="toggle('source', s)"
        >
          {{ s.toUpperCase() }}
        </button>
      </div>
      <div class="wiki-loot__filter-row">
        <span class="wiki-loot__filter-label">{{ $t('wikiHubPage.lootTable.filterTrader') }}</span>
        <button
          v-for="t in traderOptions"
          :key="t"
          type="button"
          class="wiki-loot__chip wiki-loot__chip--trader"
          :class="{ 'wiki-loot__chip--active': filters.trader.includes(t) }"
          :title="$t(`wikiHubPage.lootTable.traderHint.${t}`)"
          @click="toggle('trader', t)"
        >
          {{ t }}
        </button>
      </div>
      <div class="wiki-loot__filter-row wiki-loot__filter-row--wrap">
        <span class="wiki-loot__filter-label">{{ $t('wikiHubPage.lootTable.filterType') }}</span>
        <button
          v-for="ty in typeOptions"
          :key="ty"
          type="button"
          class="wiki-loot__chip"
          :class="{ 'wiki-loot__chip--active': filters.type.includes(ty) }"
          @click="toggle('type', ty)"
        >
          {{ ty }}
        </button>
      </div>
    </div>

    <p class="wiki-loot__meta">
      {{
        $t('wikiHubPage.lootTable.countShown', {
          shown: filteredSorted.length,
          total: items.length,
        })
      }}
    </p>

    <div class="table-wrap wiki-loot__table-wrap">
      <table class="data-table wiki-loot__table">
        <thead>
          <tr>
            <th class="wiki-loot__th-icon" scope="col">{{ $t('wikiHubPage.lootTable.colIcon') }}</th>
            <th scope="col">{{ $t('wikiHubPage.lootTable.colItem') }}</th>
            <th scope="col">{{ $t('wikiHubPage.lootTable.colType') }}</th>
            <th scope="col">{{ $t('wikiHubPage.lootTable.colRarity') }}</th>
            <th class="num" scope="col">{{ $t('wikiHubPage.lootTable.colSlots') }}</th>
            <th class="num wiki-loot__hide-sm" scope="col">{{ $t('wikiHubPage.lootTable.colWeight') }}</th>
            <th class="num" scope="col">{{ $t('wikiHubPage.lootTable.colValue') }}</th>
            <th class="num wiki-loot__hide-sm" scope="col">{{ $t('wikiHubPage.lootTable.colStackValue') }}</th>
            <th class="num" scope="col">{{ $t('wikiHubPage.lootTable.colVps') }}</th>
            <th class="num" scope="col">{{ $t('wikiHubPage.lootTable.colVpsWeighted') }}</th>
            <th class="wiki-loot__hide-sm" scope="col">{{ $t('wikiHubPage.lootTable.colSource') }}</th>
            <th class="wiki-loot__hide-sm" scope="col">{{ $t('wikiHubPage.lootTable.colTraders') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filteredSorted" :key="row.file">
            <td class="wiki-loot__cell-icon">
              <img
                v-if="row.icon"
                :src="iconUrl(row.icon)"
                alt=""
                class="wiki-loot__icon"
                loading="lazy"
                decoding="async"
                referrerpolicy="no-referrer"
                width="36"
                height="36"
              />
              <span v-else class="wiki-loot__icon-fallback" aria-hidden="true">—</span>
            </td>
            <td>{{ row.name }}</td>
            <td>
              {{ (row.type || '').trim() }}<template v-if="row.subtype"> · {{ row.subtype }}</template>
            </td>
            <td>
              <span class="wiki-loot__rarity" :data-rarity="rarityClass(row.rarity)">{{ row.rarity }}</span>
            </td>
            <td class="num">{{ row.slots }}</td>
            <td class="num wiki-loot__hide-sm">{{ fmtNum(row.weight) }}</td>
            <td class="num">{{ row.value }}</td>
            <td class="num wiki-loot__hide-sm">{{ row.stack_value }}</td>
            <td class="num">{{ fmtNum(row.vps) }}</td>
            <td class="num">{{ fmtNum(row.vps_weighted) }}</td>
            <td class="wiki-loot__hide-sm">
              <span v-if="row.sources.length" class="wiki-loot__tags">
                <span v-for="s in row.sources" :key="s" class="wiki-loot__tag" :data-src="s">{{
                  s.toUpperCase()
                }}</span>
              </span>
              <span v-else class="wiki-loot__emdash">—</span>
            </td>
            <td class="wiki-loot__hide-sm">
              <span v-if="row.traders.length" class="wiki-loot__tags">
                <span v-for="t in row.traders" :key="t" class="wiki-loot__tag wiki-loot__tag--trader">{{
                  t
                }}</span>
              </span>
              <span v-else class="wiki-loot__emdash">—</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="cross-links wiki-loot__footnote" v-html="$t('wikiHubPage.lootTable.footnoteHtml')" />
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import lootItems from '@/data/loot/items.json'

const ICON_BASE = 'https://rtv.ccmdi.com/loot-table/'
const RARITY_ORDER = { Legendary: 3, Rare: 2, Common: 1, Null: 0 }

const items = lootItems

const query = ref('')
const sortCol = ref('vps_weighted')
const sortDir = ref('desc')

const filters = reactive({
  rarity: [],
  type: [],
  source: [],
  trader: [],
})

const rarityOptions = ['Common', 'Rare', 'Legendary', 'Null']
const sourceOptions = ['civ', 'mil', 'ind']
const traderOptions = ['G', 'D', 'S', 'M']

const typeOptions = computed(() => {
  const set = new Set(items.map((i) => (i.type || '').trim()).filter(Boolean))
  return [...set].sort((a, b) => a.localeCompare(b))
})

function iconUrl(iconPath) {
  if (!iconPath) return ''
  return `${ICON_BASE}${iconPath.replace(/^\//, '')}`
}

function fmtNum(n) {
  if (n == null || Number.isNaN(n)) return '—'
  const rounded = Math.round(n * 1000) / 1000
  return String(rounded)
}

function rarityClass(r) {
  return String(r || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
}

function toggle(key, value) {
  const arr = filters[key]
  const i = arr.indexOf(value)
  if (i >= 0) arr.splice(i, 1)
  else arr.push(value)
}

function resetFilters() {
  query.value = ''
  sortCol.value = 'vps_weighted'
  sortDir.value = 'desc'
  filters.rarity.length = 0
  filters.type.length = 0
  filters.source.length = 0
  filters.trader.length = 0
}

function sortKey(row, col) {
  if (col === 'rarity') return RARITY_ORDER[row.rarity] ?? -1
  if (col === 'sources') return row.sources.join(',')
  if (col === 'traders') return row.traders.join(',')
  const v = row[col]
  return v == null ? -Infinity : v
}

const filteredSorted = computed(() => {
  const q = query.value.trim().toLowerCase()
  let rows = items.filter((item) => {
    if (q) {
      const hay = `${item.name} ${item.type} ${item.subtype} ${item.file}`.toLowerCase()
      if (!hay.includes(q)) return false
    }
    if (filters.rarity.length && !filters.rarity.includes(item.rarity)) return false
    if (filters.type.length && !filters.type.includes((item.type || '').trim())) return false
    if (filters.source.length && !item.sources.some((s) => filters.source.includes(s))) return false
    if (filters.trader.length && !item.traders.some((t) => filters.trader.includes(t))) return false
    return true
  })

  const col = sortCol.value
  const dir = sortDir.value === 'asc' ? 1 : -1
  rows = [...rows].sort((a, b) => {
    const ka = sortKey(a, col)
    const kb = sortKey(b, col)
    if (typeof ka === 'string' || typeof kb === 'string') {
      const sa = String(ka)
      const sb = String(kb)
      if (sa < sb) return -1 * dir
      if (sa > sb) return 1 * dir
      return 0
    }
    return (ka - kb) * dir
  })
  return rows
})
</script>

<style scoped>
.wiki-loot {
  margin-bottom: 2.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed var(--color-border);
}

.wiki-loot__head {
  margin-bottom: 1.1rem;
}

.wiki-loot__title {
  margin: 0 0 0.5rem;
  font-family: var(--font-display);
  font-size: 1.2rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text);
}

.wiki-loot__lead {
  margin: 0;
  font-size: 0.92rem;
  color: var(--color-muted);
  line-height: 1.55;
}

.wiki-loot__lead :deep(a) {
  color: var(--color-primary-soft);
}

.wiki-loot__controls {
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 0.65rem;
  margin-bottom: 1rem;
  align-items: center;
}

@media (max-width: 767px) {
  .wiki-loot__controls {
    grid-template-columns: 1fr;
  }
}

.wiki-loot__search {
  width: 100%;
  padding: 0.55rem 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  border-left: 3px solid color-mix(in srgb, var(--color-primary) 65%, transparent);
  background: color-mix(in srgb, var(--color-panel) 92%, transparent);
  color: var(--color-text);
  font: inherit;
  font-size: 0.88rem;
}

.wiki-loot__search::placeholder {
  color: var(--color-muted);
  opacity: 0.85;
}

.wiki-loot__search:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--color-primary) 45%, var(--color-border));
}

.wiki-loot__select,
.wiki-loot__reset {
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--color-primary) 28%, transparent);
  background: color-mix(in srgb, var(--color-surface) 78%, transparent);
  color: var(--color-text);
  font: inherit;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
}

.wiki-loot__reset:hover,
.wiki-loot__select:hover {
  border-color: color-mix(in srgb, var(--color-primary) 50%, transparent);
  background: color-mix(in srgb, var(--color-panel) 90%, transparent);
}

.wiki-loot__filter-groups {
  margin-bottom: 0.85rem;
}

.wiki-loot__filter-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 0.5rem;
  margin-bottom: 0.55rem;
}

.wiki-loot__filter-row--wrap {
  padding-bottom: 0.35rem;
  border-bottom: 1px dashed color-mix(in srgb, var(--color-border) 80%, transparent);
}

.wiki-loot__filter-label {
  flex: 0 0 auto;
  min-width: 4.5rem;
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary-soft);
}

.wiki-loot__chip {
  padding: 0.28rem 0.55rem;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-muted);
  font: inherit;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    color 0.15s ease,
    background 0.15s ease;
}

.wiki-loot__chip:hover {
  color: var(--color-text);
  border-color: color-mix(in srgb, var(--color-primary) 40%, transparent);
}

.wiki-loot__chip--active {
  color: var(--color-text);
  border-color: color-mix(in srgb, var(--color-primary) 55%, transparent);
  background: color-mix(in srgb, var(--color-primary) 12%, transparent);
}

.wiki-loot__chip--trader.wiki-loot__chip--active {
  background: color-mix(in srgb, var(--color-frost) 18%, transparent);
}

.wiki-loot__meta {
  margin: 0 0 0.65rem;
  font-size: 0.85rem;
  color: var(--color-muted);
}

.wiki-loot__table-wrap {
  max-height: min(70vh, 520px);
  overflow: auto;
}

.wiki-loot__table {
  font-size: 0.82rem;
}

.wiki-loot__th-icon,
.wiki-loot__cell-icon {
  width: 44px;
  text-align: center;
  vertical-align: middle;
}

.wiki-loot__icon {
  display: block;
  margin: 0 auto;
  width: 36px;
  height: 36px;
  object-fit: contain;
  image-rendering: pixelated;
}

.wiki-loot__icon-fallback {
  display: block;
  text-align: center;
  color: var(--color-muted);
  font-size: 0.75rem;
}

.wiki-loot__rarity[data-rarity='legendary'] {
  color: color-mix(in srgb, #d89a2c 85%, var(--color-text));
}
.wiki-loot__rarity[data-rarity='rare'] {
  color: color-mix(in srgb, #6fa4c7 88%, var(--color-text));
}
.wiki-loot__rarity[data-rarity='common'] {
  color: var(--color-muted);
}
.wiki-loot__rarity[data-rarity='null'] {
  color: var(--color-muted);
  opacity: 0.85;
}

.wiki-loot__tags {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.wiki-loot__tag {
  display: inline-block;
  padding: 0.12rem 0.35rem;
  border-radius: 4px;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  border: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-surface) 70%, transparent);
}

.wiki-loot__tag[data-src='civ'] {
  border-color: color-mix(in srgb, #7a8b4a 45%, var(--color-border));
}
.wiki-loot__tag[data-src='mil'] {
  border-color: color-mix(in srgb, #b04a2d 45%, var(--color-border));
}
.wiki-loot__tag[data-src='ind'] {
  border-color: color-mix(in srgb, #5e6d73 45%, var(--color-border));
}

.wiki-loot__tag--trader {
  border-color: color-mix(in srgb, var(--color-frost) 35%, var(--color-border));
}

.wiki-loot__emdash {
  color: var(--color-muted);
  opacity: 0.7;
}

.wiki-loot__footnote {
  margin-top: 1rem;
  font-size: 0.85rem;
}

.wiki-loot__footnote :deep(p) {
  margin: 0 0 0.5rem;
}

.wiki-loot__footnote :deep(p:last-child) {
  margin-bottom: 0;
}

.wiki-loot__footnote :deep(strong) {
  color: var(--color-primary-soft);
  font-weight: 600;
}

@media (max-width: 900px) {
  .wiki-loot__hide-sm {
    display: none;
  }
}
</style>
