<template>
  <article ref="weaponsAdsRoot" class="weapons-page">
    <header class="weapons-hero">
      <div
        class="weapons-hero__glow"
        aria-hidden="true"
      />
      <div class="container weapons-hero__inner">
        <nav
          class="weapons-hero__crumb page-hero-breadcrumb"
          aria-label="Breadcrumb"
        >
          <a href="/">Home</a>
          <span aria-hidden="true"> / </span>
          <a href="/wiki">Wiki</a>
          <span aria-hidden="true"> / </span>
          <span>Weapons</span>
        </nav>
        <p class="weapons-hero__kicker">
          Armory catalog
        </p>
        <h1 class="weapons-hero__title">
          Road To Vostok Weapons
        </h1>
        <p class="weapons-hero__lead">
          One scrollable catalog: melee, sidearms, long guns, and support weapons. Numeric fields follow the
          <strong>Road To Vostok Wiki (Fandom)</strong> hub pages below; portraits are the same wiki thumbnails, mirrored under
          <code>/images/wiki/weapons/</code>. Cross-check every value in your installed build — Early Access shifts stats, names, and loot.
        </p>
        <p class="weapons-hero__ammo">
          Pair rounds with the
          <a href="/wiki/ammunition">Ammunition</a> table (also sourced from Fandom).
        </p>

        <div
          class="weapons-sources"
          aria-label="Fandom data sources"
        >
          <span class="weapons-sources__label">Wiki sources</span>
          <ul
            class="weapons-sources__list"
            role="list"
          >
            <li
              v-for="c in weaponCategories"
              :key="c.id"
            >
              <a
                :href="c.wikiUrl"
                class="weapons-sources__link"
                rel="noopener noreferrer"
                target="_blank"
              >{{ c.label }}</a>
            </li>
          </ul>
        </div>

        <dl
          class="weapons-hero__stats"
          aria-label="Dataset summary"
        >
          <div class="weapons-hero__stat">
            <dt>Entries</dt>
            <dd>{{ weapons.length }}</dd>
          </div>
          <div class="weapons-hero__stat">
            <dt>Categories</dt>
            <dd>{{ weaponCategories.length }}</dd>
          </div>
          <div class="weapons-hero__stat">
            <dt>With portrait</dt>
            <dd>{{ withImageCount }}</dd>
          </div>
        </dl>

        <!-- adx-PC 横幅广告-1（与 HomeView 同结构） -->
        <aside
          style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center"
        >
          <ins
            class="adsbygoogle"
            style="display: block"
            data-ad-client="ca-pub-9435047454967498"
            data-ad-slot="roadtovostok_Adx_ban1"
            data-ad-format="auto"
            data-full-width-responsive="true"
            data-tag-src="gamtg"
          ></ins>
        </aside>
      </div>
    </header>

    <div class="container">
      <!-- GAM 广告位 1（与 HomeView 同结构） -->
      <div
        ref="weaponsGptRoot"
        id="div-gpt-ad-1775617033282-0"
        style="min-width: 320px; min-height: 50px"
      ></div>
    </div>

    <div class="weapons-body">
      <div class="container weapons-layout">
        <nav
          class="armory-toc"
          aria-label="Jump to weapon class"
        >
          <p
            id="armory-toc-label"
            class="armory-toc__title"
          >
            Classes
          </p>
          <ul
            class="armory-toc__list"
            role="list"
            aria-labelledby="armory-toc-label"
          >
            <li
              v-for="c in weaponCategories"
              :key="c.id"
            >
              <a
                :href="'#weapons-cat-' + c.id"
                class="armory-toc__link"
              >
                <span class="armory-toc__name">{{ c.label }}</span>
                <span class="armory-toc__n">{{ countInCategory(c.id) }}</span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="armory-main">
          <!-- adx-PC 横幅广告-2（与 HomeView 同结构） -->
          <aside
            style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center"
          >
            <ins
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-9435047454967498"
              data-ad-slot="roadtovostok_Adx_ban1"
              data-ad-format="auto"
              data-full-width-responsive="true"
              data-tag-src="gamtg"
            ></ins>
          </aside>

          <section
            v-for="c in weaponCategories"
            :key="c.id"
            :id="'weapons-cat-' + c.id"
            class="armory-section"
          >
            <div class="armory-section__head">
              <h2 class="armory-section__title">
                {{ c.label }}
              </h2>
              <a
                :href="c.wikiUrl"
                class="armory-section__wiki"
                rel="noopener noreferrer"
                target="_blank"
              >
                View on Fandom
                <span
                  class="armory-section__wiki-arrow"
                  aria-hidden="true"
                >↗</span>
              </a>
            </div>

            <div class="armory-list-panel">
              <article
                v-for="w in weaponsInCategory(c.id)"
                :id="'weapon-' + w.id"
                :key="w.id"
                class="armory-list-row"
              >
                <div
                  class="armory-list-row__media"
                  :class="{ 'armory-list-row__media--empty': !w.imageUrl }"
                >
                  <img
                    v-if="w.imageUrl"
                    :src="w.imageUrl"
                    :alt="w.imageAlt || w.name"
                    class="armory-list-row__img"
                    width="200"
                    height="150"
                    loading="lazy"
                    decoding="async"
                  >
                  <span
                    v-else
                    class="armory-list-row__media-fallback"
                  >{{ w.name }}</span>
                </div>
                <div class="armory-list-row__body">
                  <div class="armory-list-row__headline">
                    <h3 class="armory-list-row__name">
                      {{ w.name }}
                    </h3>
                    <p
                      v-if="summaryLine(w)"
                      class="armory-list-row__quick"
                    >
                      {{ summaryLine(w) }}
                    </p>
                  </div>
                  <WeaponSpecs :weapon="w" />
                  <WeaponExtra :weapon="w" />
                </div>
              </article>
            </div>
          </section>

          <!-- adx-PC 横幅广告-3（与 HomeView 同结构） -->
          <aside
            style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center"
          >
            <ins
              class="adsbygoogle"
              style="display: block"
              data-ad-client="ca-pub-9435047454967498"
              data-ad-slot="roadtovostok_Adx_ban1"
              data-ad-format="auto"
              data-full-width-responsive="true"
              data-tag-src="gamtg"
            ></ins>
          </aside>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, ref, onMounted, nextTick } from 'vue'
import weaponsData, { weaponCategories } from '../../data/item/weapons.js'

const weaponsAdsRoot = ref(null)
const weaponsGptRoot = ref(null)

function mountWeaponsGptDisplay() {
  const root = weaponsGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushWeaponsAdx() {
  const root = weaponsAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('Weapons ADX push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountWeaponsGptDisplay()
  } catch (e) {
    console.error('Weapons GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushWeaponsAdx()
    } catch (e) {
      console.error('Weapons ADX failed:', e)
    }
  })
})

const weapons = weaponsData

const withImageCount = computed(() => weapons.filter((w) => Boolean(w.imageUrl)).length)

function countInCategory(catId) {
  return weapons.filter((w) => w.categoryId === catId).length
}

function weaponsInCategory(catId) {
  return weapons.filter((w) => w.categoryId === catId)
}

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
    <dl class="armory-spec-strip" aria-label="Weapon stats">
      <div class="armory-spec-strip__pair"><dt>Wt</dt><dd>{{ n(weapon.weightKg, ' kg') }}</dd></div>
      <div class="armory-spec-strip__pair"><dt>Dmg</dt><dd>{{ n(weapon.damage) }}</dd></div>
      <div class="armory-spec-strip__pair armory-spec-strip__pair--wide"><dt>Caliber</dt><dd>{{ weapon.caliber || '—' }}</dd></div>
      <div class="armory-spec-strip__pair"><dt>Mag</dt><dd>{{ weapon.magazine != null ? weapon.magazine + ' rnds' : '—' }}</dd></div>
      <div class="armory-spec-strip__pair"><dt>RPM</dt><dd>{{ weapon.rpm != null ? weapon.rpm : '—' }}</dd></div>
      <div class="armory-spec-strip__pair"><dt>Value</dt><dd>{{ eur(weapon.valueEur) }}</dd></div>
      <div class="armory-spec-strip__pair"><dt>Trader</dt><dd>{{ eur(weapon.costEur) }}</dd></div>
      <div class="armory-spec-strip__pair"><dt>Rarity</dt><dd>{{ weapon.rarity || '—' }}</dd></div>
      <div class="armory-spec-strip__pair"><dt>Pen</dt><dd>{{ weapon.penetration || '—' }}</dd></div>
    </dl>
  `,
}

const WeaponExtra = {
  props: { weapon: { type: Object, required: true } },
  template: `
    <p v-if="weapon.lootNote" class="armory-list-row__loot"><strong>Loot</strong> — {{ weapon.lootNote }}</p>
    <p v-if="weapon.note" class="armory-list-row__note">{{ weapon.note }}</p>
  `,
}

export default {
  components: { WeaponSpecs, WeaponExtra },
}
</script>

<style src="./item-db-shared.css"></style>

<style scoped>
.weapons-page {
  padding-bottom: 3.5rem;
}

/* —— Hero（恢复原样） —— */
.weapons-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(1.5rem, 4vw, 2.75rem) 0 clamp(2rem, 5vw, 3.25rem);
  margin-bottom: 0;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 82%, var(--color-ice));
}

.weapons-hero__glow {
  position: absolute;
  inset: -30% -20% auto -25%;
  height: 120%;
  background:
    radial-gradient(ellipse 55% 50% at 12% 35%, color-mix(in srgb, var(--color-ice) 14%, transparent), transparent 58%),
    radial-gradient(ellipse 40% 42% at 88% 18%, color-mix(in srgb, var(--color-signal) 10%, transparent), transparent 52%),
    linear-gradient(185deg, color-mix(in srgb, var(--color-panel) 55%, transparent) 0%, transparent 65%);
  pointer-events: none;
}

.weapons-hero__inner {
  position: relative;
  z-index: 1;
}

.weapons-hero__crumb {
  margin-bottom: 1rem;
  font-size: 0.78rem;
  color: var(--color-muted);
}

.weapons-hero__crumb a {
  color: var(--color-primary-soft);
  text-decoration: none;
}

.weapons-hero__crumb a:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.weapons-hero__kicker {
  margin: 0 0 0.5rem;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-muted) 65%, var(--color-signal));
}

.weapons-hero__title {
  margin: 0 0 1rem;
  font-family: var(--font-journey);
  font-size: clamp(1.85rem, 4.2vw, 2.65rem);
  font-weight: 600;
  letter-spacing: 0.03em;
  line-height: 1.1;
  color: var(--color-text);
  text-shadow: 0 0 48px color-mix(in srgb, var(--color-ice) 12%, transparent);
}

.weapons-hero__lead {
  margin: 0 0 0.85rem;
  max-width: min(68ch, 100%);
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.weapons-hero__lead strong {
  color: color-mix(in srgb, var(--color-text) 55%, var(--color-muted));
}

.weapons-hero__ammo {
  margin: 0 0 1.35rem;
  font-size: 0.88rem;
  color: var(--color-muted);
}

.weapons-hero__ammo a {
  color: var(--color-primary-soft);
}

.weapons-sources {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin-bottom: 1.5rem;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  border: 1px dashed color-mix(in srgb, var(--color-border) 78%, var(--color-ice));
  background: color-mix(in srgb, var(--color-panel) 42%, transparent);
}

.weapons-sources__label {
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-primary-soft);
}

.weapons-sources__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.weapons-sources__link {
  display: inline-flex;
  padding: 0.28rem 0.55rem;
  border-radius: 4px;
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-text);
  border: 1px solid color-mix(in srgb, var(--color-border) 88%, transparent);
  background: color-mix(in srgb, var(--color-bg) 35%, var(--color-surface));
  transition:
    border-color 0.18s ease,
    color 0.18s ease,
    background 0.18s ease;
}

.weapons-sources__link:hover {
  border-color: color-mix(in srgb, var(--color-ice) 35%, var(--color-border));
  color: var(--color-primary-soft);
  background: color-mix(in srgb, var(--color-ice) 6%, var(--color-panel));
}

.weapons-hero__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.75rem;
  margin: 0;
}

.weapons-hero__stat {
  display: grid;
  gap: 0.15rem;
}

.weapons-hero__stat dt {
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.weapons-hero__stat dd {
  margin: 0;
  font-family: var(--font-journey);
  font-size: 1.35rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--color-text);
}

/* —— Body + TOC（恢复原样） —— */
.weapons-body {
  padding-top: clamp(1.25rem, 3vw, 2rem);
}

.weapons-layout {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .weapons-layout {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
  }
}

.armory-toc {
  flex-shrink: 0;
}

@media (min-width: 1024px) {
  .armory-toc {
    position: sticky;
    top: var(--app-header-sticky-offset);
    width: 11.5rem;
    max-height: calc(100vh - var(--app-header-sticky-offset) - 1rem);
    overflow-y: auto;
    padding: 0.75rem 0.85rem;
    border-radius: 12px;
    border: 1px solid color-mix(in srgb, var(--color-border) 85%, var(--color-ice));
    background: color-mix(in srgb, var(--color-panel) 90%, var(--color-bg));
    box-shadow: inset 0 1px 0 color-mix(in srgb, var(--color-text) 4%, transparent);
  }
}

.armory-toc__title {
  margin: 0 0 0.55rem;
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.armory-toc__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.35rem;
}

@media (min-width: 1024px) {
  .armory-toc__list {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0.2rem;
  }
}

.armory-toc__link {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.42rem 0.55rem;
  border-radius: 6px;
  text-decoration: none;
  color: color-mix(in srgb, var(--color-text) 88%, var(--color-muted));
  border: 1px solid transparent;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

@media (min-width: 1024px) {
  .armory-toc__link {
    width: 100%;
  }
}

.armory-toc__link:hover {
  background: color-mix(in srgb, var(--color-ice) 7%, var(--color-panel));
  border-color: color-mix(in srgb, var(--color-ice) 22%, transparent);
  color: var(--color-text);
}

.armory-toc__name {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 650;
  letter-spacing: 0.06em;
}

.armory-toc__n {
  font-size: 0.65rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--color-muted);
  opacity: 0.9;
}

.armory-main {
  flex: 1;
  min-width: 0;
}

.armory-section {
  scroll-margin-top: calc(var(--app-header-sticky-offset) + 0.5rem);
  margin-bottom: clamp(2.25rem, 4vw, 3rem);
  padding-bottom: clamp(1.75rem, 3vw, 2.5rem);
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 72%, transparent);
}

.armory-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.armory-section__head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.65rem 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.65rem;
  border-bottom: 2px solid color-mix(in srgb, var(--color-ice) 35%, var(--color-border));
}

.armory-section__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 2.2vw, 1.4rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary-soft);
}

.armory-section__wiki {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-muted);
  border-bottom: 1px solid color-mix(in srgb, var(--color-muted) 35%, transparent);
  padding-bottom: 1px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.armory-section__wiki:hover {
  color: var(--color-signal-soft);
  border-bottom-color: color-mix(in srgb, var(--color-signal) 45%, transparent);
}

.armory-section__wiki-arrow {
  font-size: 0.85em;
  opacity: 0.85;
}

/* —— 列表：每类一块面板 + 横向行（仅改此处） —— */
.armory-list-panel {
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-border) 80%, var(--color-ice));
  background: color-mix(in srgb, var(--color-panel) 55%, var(--color-bg));
  overflow: hidden;
}

.armory-list-row {
  display: grid;
  gap: 0.85rem 1.1rem;
  padding: 0.95rem 1rem;
  align-items: start;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 55%, transparent);
}

.armory-list-row:last-child {
  border-bottom: none;
}

@media (min-width: 640px) {
  .armory-list-row {
    grid-template-columns: 7.5rem minmax(0, 1fr);
    padding: 1rem 1.1rem;
    gap: 1rem 1.35rem;
  }
}

@media (min-width: 960px) {
  .armory-list-row {
    grid-template-columns: 8.75rem minmax(0, 1fr);
    padding: 1.1rem 1.25rem;
  }
}

.armory-list-row__media {
  width: 100%;
  max-width: 9rem;
  margin: 0 auto;
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: radial-gradient(
    ellipse 90% 85% at 50% 100%,
    color-mix(in srgb, var(--color-bg) 70%, transparent),
    color-mix(in srgb, var(--color-surface) 88%, var(--color-bg))
  );
  border: 1px solid color-mix(in srgb, var(--color-border) 65%, transparent);
}

@media (min-width: 640px) {
  .armory-list-row__media {
    margin: 0;
    max-width: none;
  }
}

.armory-list-row__media--empty {
  background:
    linear-gradient(var(--color-grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-grid-line) 1px, transparent 1px),
    color-mix(in srgb, var(--color-panel) 40%, var(--color-bg));
  background-size: 12px 12px, 12px 12px, auto;
}

.armory-list-row__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  padding: 0.35rem 0.45rem;
  display: block;
}

.armory-list-row__media-fallback {
  padding: 0.5rem;
  text-align: center;
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1.35;
  color: var(--color-muted);
}

.armory-list-row__body {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.armory-list-row__headline {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.armory-list-row__name {
  margin: 0;
  font-size: 1.06rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--color-text);
  line-height: 1.2;
}

.armory-list-row__quick {
  margin: 0;
  font-size: 0.74rem;
  line-height: 1.45;
  color: var(--color-muted);
}

:deep(.armory-spec-strip) {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 0.35rem 0.45rem;
  margin: 0;
  padding: 0;
}

:deep(.armory-spec-strip__pair) {
  display: inline-flex;
  align-items: baseline;
  gap: 0.4rem;
  padding: 0.28rem 0.55rem;
  border-radius: 6px;
  background: color-mix(in srgb, var(--color-bg) 65%, var(--color-surface));
  border: 1px solid color-mix(in srgb, var(--color-border) 72%, transparent);
  font-size: 0.74rem;
  line-height: 1.25;
}

:deep(.armory-spec-strip__pair--wide) {
  flex: 1 1 100%;
  min-width: min(100%, 12rem);
}

:deep(.armory-spec-strip__pair dt) {
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
}

:deep(.armory-spec-strip__pair dd) {
  margin: 0;
  color: var(--color-text);
  font-variant-numeric: tabular-nums;
  word-break: break-word;
}

.armory-list-row__loot {
  margin: 0;
  padding: 0.45rem 0 0;
  border-top: 1px dashed color-mix(in srgb, var(--color-border) 50%, transparent);
  font-size: 0.76rem;
  line-height: 1.5;
  color: color-mix(in srgb, var(--color-muted) 88%, var(--color-ice));
}

.armory-list-row__loot strong {
  color: var(--color-primary-soft);
  font-weight: 700;
}

.armory-list-row__note {
  margin: 0;
  font-size: 0.76rem;
  line-height: 1.55;
  color: var(--color-muted);
  max-width: 70ch;
}
</style>
