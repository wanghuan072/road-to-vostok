<template>
  <article class="item-db-page weapons-page">
    <section class="page-hero-section">
      <div class="container">
        <nav
          class="page-hero-breadcrumb"
          aria-label="Breadcrumb"
        >
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true"> / </span>
          <RouterLink to="/wiki">Wiki</RouterLink>
          <span aria-hidden="true"> / </span>
          <span>Weapons</span>
        </nav>
        <p class="page-hero-kicker">
          Wiki hub
        </p>
        <h1>Road To Vostok Weapons</h1>
        <p class="lead">
          All categories and weapons on one page; use the left index to jump. Stats and loot notes come from community tables — confirm against your current game build. For ammo pairing see
          <RouterLink to="/wiki/ammunition">Ammunition</RouterLink>.
        </p>
      </div>
    </section>

    <section
      class="page-body-section weapons-body"
      aria-label="Weapon categories and listings"
    >
      <div class="container weapons-shell">
        <nav
          class="weapons-toc"
          aria-label="Jump to category"
        >
          <a
            v-for="c in weaponCategories"
            :key="c.id"
            :href="'#weapons-cat-' + c.id"
            class="weapons-toc__link"
          >
            <span class="weapons-toc__label">{{ c.label }}</span>
            <span class="weapons-toc__count">{{ countInCategory(c.id) }}</span>
          </a>
        </nav>

        <div class="weapons-main">
          <section
            v-for="c in weaponCategories"
            :key="c.id"
            :id="'weapons-cat-' + c.id"
            class="weapons-section"
            :data-variant="c.listVariant"
          >
            <h2 class="weapons-section__title">
              {{ c.label }}
            </h2>

            <!-- Knives: vertical cards -->
            <div
              v-if="c.listVariant === 'melee'"
              class="weapons-section__stack"
            >
              <article
                v-for="w in weaponsInCategory(c.id)"
                :id="'weapon-' + w.id"
                :key="w.id"
                class="weapon-card weapon-card--row"
              >
                <WeaponMedia
                  :weapon="w"
                  :summary="summaryLine(w)"
                />
                <div class="weapon-card__body">
                  <h3 class="weapon-card__name">
                    {{ w.name }}
                  </h3>
                  <p
                    v-if="!w.imageUrl && summaryLine(w)"
                    class="weapon-card__kpi"
                  >
                    {{ summaryLine(w) }}
                  </p>
                  <WeaponSpecs :weapon="w" />
                  <WeaponExtra :weapon="w" />
                </div>
              </article>
            </div>

            <!-- Pistols: grid -->
            <div
              v-else-if="c.listVariant === 'pistol'"
              class="weapons-section__grid"
            >
              <article
                v-for="w in weaponsInCategory(c.id)"
                :id="'weapon-' + w.id"
                :key="w.id"
                class="weapon-card weapon-card--tile"
              >
                <WeaponMedia
                  :weapon="w"
                  :summary="summaryLine(w)"
                />
                <div class="weapon-card__body">
                  <h3 class="weapon-card__name">
                    {{ w.name }}
                  </h3>
                  <p
                    v-if="!w.imageUrl && summaryLine(w)"
                    class="weapon-card__kpi"
                  >
                    {{ summaryLine(w) }}
                  </p>
                  <WeaponSpecs :weapon="w" />
                  <WeaponExtra :weapon="w" />
                </div>
              </article>
            </div>

            <!-- Rifles: table + notes -->
            <div
              v-else-if="c.listVariant === 'rifleTable'"
              class="weapons-table-shell"
            >
              <div class="weapons-table-wrap">
                <table class="weapons-data-table">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="weapons-data-table__th-thumb"
                      >
                        Item
                      </th>
                      <th scope="col">
                        kg
                      </th>
                      <th scope="col">
                        Dmg
                      </th>
                      <th scope="col">
                        Caliber
                      </th>
                      <th scope="col">
                        Mag
                      </th>
                      <th scope="col">
                        RPM
                      </th>
                      <th scope="col">
                        Tier
                      </th>
                      <th scope="col">
                        Loot / notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="w in weaponsInCategory(c.id)"
                      :id="'weapon-' + w.id"
                      :key="w.id"
                    >
                      <td class="weapons-data-table__lead">
                        <div class="weapons-lead">
                          <WeaponThumbTable
                            :weapon="w"
                            :summary="summaryLine(w)"
                          />
                          <div class="weapons-lead__col">
                            <span class="weapons-lead__name">{{ w.name }}</span>
                            <span
                              v-if="summaryLine(w)"
                              class="weapons-lead__stats"
                            >{{ summaryLine(w) }}</span>
                          </div>
                        </div>
                      </td>
                      <td>{{ fmt(w.weightKg) }}</td>
                      <td>{{ fmt(w.damage) }}</td>
                      <td>{{ fmt(w.caliber) }}</td>
                      <td>{{ fmt(w.magazine) }}</td>
                      <td>{{ fmt(w.rpm) }}</td>
                      <td>{{ fmt(w.rarity) }}</td>
                      <td class="weapons-data-table__notes">
                        {{ combineNotes(w) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- SMGs: table -->
            <div
              v-else-if="c.listVariant === 'smgTable'"
              class="weapons-table-shell"
            >
              <div class="weapons-table-wrap">
                <table class="weapons-data-table">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="weapons-data-table__th-thumb"
                      >
                        Item
                      </th>
                      <th scope="col">
                        kg
                      </th>
                      <th scope="col">
                        Dmg
                      </th>
                      <th scope="col">
                        Caliber
                      </th>
                      <th scope="col">
                        Mag
                      </th>
                      <th scope="col">
                        RPM
                      </th>
                      <th scope="col">
                        Value €
                      </th>
                      <th scope="col">
                        Cost €
                      </th>
                      <th scope="col">
                        Tier
                      </th>
                      <th scope="col">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="w in weaponsInCategory(c.id)"
                      :id="'weapon-' + w.id"
                      :key="w.id"
                    >
                      <td class="weapons-data-table__lead">
                        <div class="weapons-lead">
                          <WeaponThumbTable
                            :weapon="w"
                            :summary="summaryLine(w)"
                          />
                          <div class="weapons-lead__col">
                            <span class="weapons-lead__name">{{ w.name }}</span>
                            <span
                              v-if="summaryLine(w)"
                              class="weapons-lead__stats"
                            >{{ summaryLine(w) }}</span>
                          </div>
                        </div>
                      </td>
                      <td>{{ fmt(w.weightKg) }}</td>
                      <td>{{ fmt(w.damage) }}</td>
                      <td>{{ fmt(w.caliber) }}</td>
                      <td>{{ fmt(w.magazine) }}</td>
                      <td>{{ fmt(w.rpm) }}</td>
                      <td>{{ fmt(w.valueEur) }}</td>
                      <td>{{ fmt(w.costEur) }}</td>
                      <td>{{ fmt(w.rarity) }}</td>
                      <td class="weapons-data-table__notes">
                        {{ combineNotes(w) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Shotgun -->
            <div
              v-else-if="c.listVariant === 'featured'"
              class="weapons-section__stack"
            >
              <article
                v-for="w in weaponsInCategory(c.id)"
                :id="'weapon-' + w.id"
                :key="w.id"
                class="weapon-card weapon-card--featured"
              >
                <WeaponMedia
                  :weapon="w"
                  :summary="summaryLine(w)"
                />
                <div class="weapon-card__body">
                  <h3 class="weapon-card__name">
                    {{ w.name }}
                  </h3>
                  <p
                    v-if="summaryLine(w)"
                    class="weapon-card__tagline"
                  >
                    {{ summaryLine(w) }}
                  </p>
                  <WeaponSpecs :weapon="w" />
                  <WeaponExtra :weapon="w" />
                </div>
              </article>
            </div>

            <!-- Bolt / Semi -->
            <div
              v-else-if="c.listVariant === 'bolt' || c.listVariant === 'semi'"
              class="weapons-section__stack"
            >
              <article
                v-for="w in weaponsInCategory(c.id)"
                :id="'weapon-' + w.id"
                :key="w.id"
                class="weapon-card weapon-card--row"
              >
                <WeaponMedia
                  :weapon="w"
                  :summary="summaryLine(w)"
                />
                <div class="weapon-card__body">
                  <h3 class="weapon-card__name">
                    {{ w.name }}
                  </h3>
                  <p
                    v-if="!w.imageUrl && summaryLine(w)"
                    class="weapon-card__kpi"
                  >
                    {{ summaryLine(w) }}
                  </p>
                  <WeaponSpecs :weapon="w" />
                  <WeaponExtra :weapon="w" />
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import weaponsData, { weaponCategories } from '../../data/item/weapons.js'

const weapons = weaponsData

function countInCategory(catId) {
  return weapons.filter((w) => w.categoryId === catId).length
}

function weaponsInCategory(catId) {
  return weapons.filter((w) => w.categoryId === catId)
}

function combineNotes(w) {
  const parts = [w.lootNote, w.note].filter(Boolean)
  return parts.length ? parts.join(' — ') : '—'
}

/** Table / compact cells: show em dash when wiki field missing */
function fmt(v) {
  if (v === 0) return '0'
  if (v == null || v === '') return '—'
  return v
}

/** One-line KPIs so empty image slots / cards are never “name only”. */
function summaryLine(w) {
  if (!w) return ''
  const parts = []
  if (w.weightKg != null) parts.push(`${w.weightKg} kg`)
  if (w.damage != null) parts.push(`DMG ${w.damage}`)
  if (w.caliber) parts.push(String(w.caliber))
  if (w.magazine != null) parts.push(`${w.magazine} rnds`)
  if (w.rpm != null) parts.push(`${w.rpm} RPM`)
  if (w.valueEur != null) parts.push(`${w.valueEur} €`)
  if (w.costEur != null) parts.push(`cost ${w.costEur} €`)
  if (w.rarity) parts.push(w.rarity)
  if (w.penetration) parts.push(w.penetration)
  return parts.join(' · ')
}
</script>

<script>
/** Shared weapon media + specs (no extra SFC file — keeps one page) */
const WeaponMedia = {
  props: {
    weapon: { type: Object, required: true },
    summary: { type: String, default: '' },
  },
  template: `
    <div
      class="weapon-card__media"
      :class="{ 'weapon-card__media--empty': !weapon.imageUrl }"
    >
      <img
        v-if="weapon.imageUrl"
        :src="weapon.imageUrl"
        :alt="weapon.imageAlt || weapon.name"
        class="weapon-card__img"
        width="120"
        height="120"
        loading="lazy"
        decoding="async"
      >
      <div
        v-else
        class="weapon-card__media-fallback"
      >
        <span class="weapon-card__fallback-name">{{ weapon.name }}</span>
        <span
          v-if="summary"
          class="weapon-card__fallback-kpi"
        >{{ summary }}</span>
      </div>
    </div>
  `,
}

const WeaponThumbTable = {
  props: {
    weapon: { type: Object, required: true },
    summary: { type: String, default: '' },
  },
  template: `
    <div
      class="weapons-thumb"
      :class="{ 'weapons-thumb--empty': !weapon.imageUrl }"
    >
      <img
        v-if="weapon.imageUrl"
        :src="weapon.imageUrl"
        :alt="weapon.imageAlt || weapon.name"
        class="weapons-thumb__img"
        width="48"
        height="48"
        loading="lazy"
        decoding="async"
      >
      <div
        v-else
        class="weapons-thumb__fallback-wrap"
      >
        <span class="weapons-thumb__fname">{{ weapon.name }}</span>
        <span
          v-if="summary"
          class="weapons-thumb__fkpi"
        >{{ summary }}</span>
      </div>
    </div>
  `,
}

const WeaponSpecs = {
  props: { weapon: { type: Object, required: true } },
  methods: {
    n(v, suffix = '') {
      if (v === 0) return '0' + suffix
      if (v == null || v === '') return '—'
      return String(v) + suffix
    },
    eur(v) {
      if (v == null || v === '') return '—'
      return v + ' €'
    },
  },
  template: `
    <dl class="weapon-card__specs">
      <dt>Weight</dt><dd>{{ n(weapon.weightKg, ' kg') }}</dd>
      <dt>Damage</dt><dd>{{ n(weapon.damage) }}</dd>
      <dt>Caliber</dt><dd>{{ weapon.caliber || '—' }}</dd>
      <dt>Magazine</dt><dd>{{ weapon.magazine != null ? weapon.magazine + ' rnds' : '—' }}</dd>
      <dt>Fire rate</dt><dd>{{ weapon.rpm != null ? weapon.rpm + ' RPM' : '—' }}</dd>
      <dt>Value</dt><dd>{{ eur(weapon.valueEur) }}</dd>
      <dt>Trader cost</dt><dd>{{ eur(weapon.costEur) }}</dd>
      <dt>Rarity</dt><dd>{{ weapon.rarity || '—' }}</dd>
      <dt>Penetration</dt><dd>{{ weapon.penetration || '—' }}</dd>
    </dl>
  `,
}

const WeaponExtra = {
  props: { weapon: { type: Object, required: true } },
  template: `
    <p v-if="weapon.lootNote" class="weapon-card__loot"><strong>Loot</strong> — {{ weapon.lootNote }}</p>
    <p v-if="weapon.note" class="weapon-card__note">{{ weapon.note }}</p>
  `,
}

export default {
  components: { WeaponMedia, WeaponSpecs, WeaponExtra, WeaponThumbTable },
}
</script>

<style src="./item-db-shared.css"></style>

<style scoped>
.weapons-page .page-hero-kicker {
  margin: 0 0 0.5rem;
}

.weapons-body {
  padding-top: 0.25rem;
  padding-bottom: 3.5rem;
}

.weapons-shell {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: stretch;
}

@media (min-width: 960px) {
  .weapons-shell {
    flex-direction: row;
    align-items: flex-start;
    gap: 1.75rem;
  }
}

/* —— Sticky TOC (left) —— */
.weapons-toc {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 88%, transparent);
}

@media (min-width: 960px) {
  .weapons-toc {
    flex-direction: column;
    flex-wrap: nowrap;
    flex: 0 0 12.5rem;
    max-width: 12.5rem;
    position: sticky;
    top: var(--app-header-sticky-offset);
    align-self: flex-start;
    max-height: calc(100vh - var(--app-header-sticky-offset) - 1rem);
    overflow-y: auto;
    padding: 0.65rem 0.75rem;
    margin: 0;
    border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
    border-radius: 10px;
    background: color-mix(in srgb, var(--color-panel) 94%, var(--color-bg));
    border-bottom: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
  }
}

.weapons-toc__link {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.45rem 0.6rem;
  border-radius: 6px;
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: color-mix(in srgb, var(--color-text) 90%, var(--color-muted));
  text-decoration: none;
  border: 1px solid transparent;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

@media (min-width: 960px) {
  .weapons-toc__link {
    display: flex;
    width: 100%;
  }
}

.weapons-toc__link:hover {
  background: color-mix(in srgb, var(--color-ice) 8%, var(--color-panel));
  border-color: color-mix(in srgb, var(--color-ice) 22%, transparent);
  color: var(--color-text);
}

.weapons-toc__count {
  font-size: 0.68rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--color-muted);
  opacity: 0.85;
}

/* —— Main column —— */
.weapons-main {
  flex: 1;
  min-width: 0;
}

.weapons-section {
  scroll-margin-top: var(--app-header-sticky-offset);
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 75%, transparent);
}

.weapons-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.weapons-section__title {
  margin: 0 0 1rem;
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-primary-soft);
}

.weapons-section__stack {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.weapons-section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 16rem), 1fr));
  gap: 0.85rem;
}

.weapons-table-shell {
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
  background: color-mix(in srgb, var(--color-panel) 92%, var(--color-bg));
  padding: 0.5rem;
}

.weapons-table-wrap {
  overflow-x: auto;
}

.weapons-data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.78rem;
}

.weapons-data-table th,
.weapons-data-table td {
  padding: 0.5rem 0.55rem;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 75%, transparent);
}

.weapons-data-table th {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary-soft);
  background: color-mix(in srgb, var(--color-surface) 72%, transparent);
}

.weapons-data-table__name {
  font-weight: 700;
  color: var(--color-text);
  white-space: nowrap;
}

.weapons-data-table__th-thumb {
  width: 5.5rem;
}

.weapons-data-table__lead {
  min-width: 6.5rem;
}

.weapons-lead {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.5rem;
}

.weapons-lead__col {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
  max-width: 10rem;
}

.weapons-lead__name {
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1.25;
  color: var(--color-text);
}

.weapons-lead__stats {
  font-size: 0.65rem;
  line-height: 1.35;
  color: var(--color-muted);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
}

.weapons-thumb {
  width: 3.25rem;
  height: 3.25rem;
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, var(--color-bg) 45%, var(--color-surface));
  border: 1px solid color-mix(in srgb, var(--color-border) 72%, transparent);
}

.weapons-thumb--empty {
  width: 4.25rem;
  min-height: 3.25rem;
  height: auto;
  align-self: flex-start;
  padding: 0.2rem;
  background-image:
    linear-gradient(
      135deg,
      transparent 45%,
      color-mix(in srgb, var(--color-border) 28%, transparent) 45%,
      color-mix(in srgb, var(--color-border) 28%, transparent) 55%,
      transparent 55%
    ),
    linear-gradient(var(--color-grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-grid-line) 1px, transparent 1px);
  background-size: 100% 100%, 12px 12px, 12px 12px;
}

.weapons-thumb__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.weapons-thumb__fallback-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.15rem;
  width: 100%;
  min-height: 2.75rem;
  padding: 0.1rem;
}

.weapons-thumb__fname {
  font-family: var(--font-display);
  font-size: 0.56rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 0.02em;
  text-align: center;
  color: color-mix(in srgb, var(--color-text) 82%, var(--color-muted));
  word-break: break-word;
  hyphens: auto;
}

.weapons-thumb__fkpi {
  font-size: 0.5rem;
  line-height: 1.2;
  text-align: center;
  color: var(--color-muted);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
}

.weapons-data-table__notes {
  font-size: 0.72rem;
  line-height: 1.45;
  color: var(--color-muted);
  max-width: 22rem;
}

/* —— Cards —— */
.weapon-card {
  display: flex;
  gap: 0.85rem;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
  background: color-mix(in srgb, var(--color-panel) 92%, var(--color-bg));
}

.weapon-card--tile {
  flex-direction: column;
  min-height: 100%;
}

.weapon-card--featured {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  border-color: color-mix(in srgb, var(--color-signal) 22%, var(--color-border));
}

@media (max-width: 560px) {
  .weapon-card--row,
  .weapon-card--featured {
    flex-direction: column;
  }
}

:deep(.weapon-card__media) {
  flex: 0 0 auto;
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 8px;
  overflow: hidden;
  background: color-mix(in srgb, var(--color-bg) 45%, var(--color-surface));
  border: 1px solid color-mix(in srgb, var(--color-border) 70%, transparent);
}

:deep(.weapon-card__media--empty) {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem;
  background-image:
    linear-gradient(
      135deg,
      transparent 45%,
      color-mix(in srgb, var(--color-border) 30%, transparent) 45%,
      color-mix(in srgb, var(--color-border) 30%, transparent) 55%,
      transparent 55%
    ),
    linear-gradient(var(--color-grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-grid-line) 1px, transparent 1px);
  background-size: 100% 100%, 16px 16px, 16px 16px;
}

:deep(.weapon-card__media-fallback) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0.25rem;
}

:deep(.weapon-card__fallback-name) {
  font-family: var(--font-display);
  font-size: clamp(0.65rem, 2.1vw, 0.82rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.03em;
  color: color-mix(in srgb, var(--color-text) 78%, var(--color-muted));
  word-break: break-word;
  hyphens: auto;
}

:deep(.weapon-card__fallback-kpi) {
  font-size: 0.68rem;
  line-height: 1.35;
  color: var(--color-muted);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
}

:deep(.weapon-card__kpi) {
  margin: 0 0 0.5rem;
  font-size: 0.78rem;
  line-height: 1.4;
  color: var(--color-muted);
}

:deep(.weapon-card__img) {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

:deep(.weapon-card__body) {
  flex: 1;
  min-width: 0;
}

:deep(.weapon-card__name) {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: none;
  color: var(--color-text);
}

:deep(.weapon-card__tagline) {
  margin: 0 0 0.65rem;
  font-size: 0.8rem;
  color: var(--color-muted);
}

:deep(.weapon-card__specs) {
  display: grid;
  grid-template-columns: minmax(0, 6rem) 1fr;
  gap: 0.3rem 0.75rem;
  margin: 0 0 0.65rem;
  font-size: 0.8rem;
}

:deep(.weapon-card__specs dt) {
  margin: 0;
  color: var(--color-muted);
  font-weight: 600;
}

:deep(.weapon-card__specs dd) {
  margin: 0;
  color: var(--color-text);
  font-variant-numeric: tabular-nums;
}

:deep(.weapon-card__loot) {
  margin: 0 0 0.45rem;
  font-size: 0.78rem;
  line-height: 1.5;
  color: color-mix(in srgb, var(--color-muted) 88%, var(--color-ice));
}

:deep(.weapon-card__loot strong) {
  color: var(--color-primary-soft);
}

:deep(.weapon-card__note) {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.55;
  color: var(--color-muted);
}
</style>
