<template>
  <article ref="ammoAdsRoot" class="item-db-page ammo-page">
    <section class="page-hero-section">
      <div class="container">
        <nav
          class="page-hero-breadcrumb"
          aria-label="Breadcrumb"
        >
          <a href="/">Home</a>
          <span aria-hidden="true"> / </span>
          <a href="/wiki">Wiki</a>
          <span aria-hidden="true"> / </span>
          <span>Ammunition</span>
        </nav>
        <p class="page-hero-kicker">
          Loadout reference
        </p>
        <h1>Road To Vostok Ammunition</h1>
        <p class="lead">
          Cartridge value (€), per-round weight, max stack, and weapon compatibility are aligned with the
          <a
            href="https://roadtovostok.fandom.com/wiki/Ammunition"
            rel="noopener noreferrer"
            target="_blank"
          >Road To Vostok Wiki (Fandom) · Ammunition</a>
          table; icons are the same wiki assets, hosted under <code>/images/wiki/Ammunition/</code>. Verify everything in your installed build — patches can change stats and weapon names.
        </p>
        <dl
          class="ammo-hero-stats"
          aria-label="Dataset summary"
        >
          <div class="ammo-hero-stats__item">
            <dt>Calibers</dt>
            <dd>{{ stats.count }}</dd>
          </div>
          <div class="ammo-hero-stats__item">
            <dt>Lightest round</dt>
            <dd>{{ stats.minWeightKg }}&nbsp;kg</dd>
          </div>
          <div class="ammo-hero-stats__item">
            <dt>Tightest stack cap</dt>
            <dd>{{ stats.minStack }}&nbsp;rnds</dd>
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
    </section>

    <div class="container">
      <!-- GAM 广告位 1（与 HomeView 同结构） -->
      <div
        ref="ammoGptRoot"
        id="div-gpt-ad-1775617033282-0"
        style="min-width: 320px; min-height: 50px"
      ></div>
    </div>

    <section
      class="page-body-section ammo-body"
      aria-label="Ammunition reference"
    >
      <div class="container">
        <div class="ammo-toolbar">
          <div
            class="ammo-filters"
            role="group"
            aria-label="Filter by platform"
          >
            <button
              v-for="f in ammunitionFilters"
              :key="f.id"
              type="button"
              class="ammo-filter"
              :class="{ 'ammo-filter--active': activeFilter === f.id }"
              @click="activeFilter = f.id"
            >
              {{ f.label }}
            </button>
          </div>
          <label class="ammo-search">
            <span class="ammo-search__label">Search</span>
            <input
              v-model.trim="searchQuery"
              type="search"
              class="ammo-search__input"
              placeholder="Caliber, weapon, note…"
              autocomplete="off"
              spellcheck="false"
            >
          </label>
        </div>

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

        <p
          v-if="filteredRows.length === 0"
          class="ammo-empty"
          role="status"
        >
          No rounds match this filter and search. Clear the search or choose <strong>All</strong>.
        </p>

        <div
          v-else
          class="ammo-grid"
        >
          <article
            v-for="row in filteredRows"
            :key="row.id"
            class="ammo-card"
            :data-category="row.category"
          >
            <div class="ammo-card__media">
              <img
                v-if="row.imageUrl"
                :src="row.imageUrl"
                :alt="row.imageAlt || row.caliber"
                class="ammo-card__img"
                width="280"
                height="200"
                loading="lazy"
                decoding="async"
              >
              <div
                v-else
                class="ammo-card__media-empty"
              >
                <span
                  class="ammo-card__media-id"
                  aria-hidden="true"
                >{{ row.id }}</span>
                <span class="ammo-card__media-label">Image slot</span>
              </div>
            </div>

            <div class="ammo-card__body">
              <header class="ammo-card__head">
                <div class="ammo-card__titles">
                  <h2 class="ammo-card__caliber">
                    {{ row.caliber }}
                  </h2>
                  <p class="ammo-card__role">
                    {{ categoryLabel(row.category) }}
                  </p>
                </div>
              </header>

              <dl class="ammo-card__stats">
                <div class="ammo-card__stat">
                  <dt>Value</dt>
                  <dd>
                    <span class="ammo-card__num">{{ row.valueEur }}</span>
                    <span class="ammo-card__unit">€ / rnd</span>
                  </dd>
                </div>
                <div class="ammo-card__stat">
                  <dt>Weight</dt>
                  <dd>
                    <span class="ammo-card__num">{{ row.weightKg }}</span>
                    <span class="ammo-card__unit">kg / rnd</span>
                  </dd>
                </div>
                <div class="ammo-card__stat">
                  <dt>Stack</dt>
                  <dd>
                    <span class="ammo-card__num">{{ row.maxStack }}</span>
                    <span class="ammo-card__unit">max</span>
                  </dd>
                </div>
              </dl>

              <div class="ammo-card__weapons">
                <span class="ammo-card__weapons-label">Feeds</span>
                <ul class="ammo-card__weapon-list">
                  <li
                    v-for="w in row.weapons"
                    :key="w"
                  >
                    {{ w }}
                  </li>
                </ul>
              </div>

              <p class="ammo-card__note">
                {{ row.note }}
              </p>
            </div>
          </article>
        </div>

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

        <footer class="ammo-foot">
          <p>
            Cross-check firearms and attachments on
            <a href="/wiki/weapons">Weapons &amp; attachments</a>.
          </p>
          <p class="ammo-foot__assets">
            Images: add files under <code>public/images/wiki/ammo/</code> and set
            <code>imageUrl</code> in <code>src/data/item/ammunition.js</code>
            (path from site root, e.g. <code>/images/wiki/ammo/46x30.webp</code> — filename can match <code>id</code>).
          </p>
        </footer>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed, ref, onMounted, nextTick } from 'vue'
import rowsSource, { ammunitionFilters } from '../../data/item/ammunition.js'

const rows = rowsSource
const activeFilter = ref('all')
const searchQuery = ref('')

function categoryLabel(cat) {
  const map = {
    smg: 'Submachine gun',
    rifle: 'Assault / carbine',
    dmr: 'Marksman / full-power',
    shotgun: 'Shotgun',
    pistol: 'Pistol',
    mixed: 'Pistol & SMG platforms',
  }
  return map[cat] || cat
}

const stats = computed(() => ({
  count: rows.length,
  minWeightKg: Math.min(...rows.map((r) => r.weightKg)),
  minStack: Math.min(...rows.map((r) => r.maxStack)),
}))

const filteredRows = computed(() => {
  const q = searchQuery.value.toLowerCase()
  return rows.filter((row) => {
    if (activeFilter.value !== 'all' && !row.filterTags.includes(activeFilter.value)) {
      return false
    }
    if (!q) return true
    const hay = [
      row.caliber,
      row.note,
      row.imageAlt,
      ...row.weapons,
      categoryLabel(row.category),
    ]
      .join(' ')
      .toLowerCase()
    return hay.includes(q)
  })
})

const ammoAdsRoot = ref(null)
const ammoGptRoot = ref(null)

function mountAmmoGptDisplay() {
  const root = ammoGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushAmmoAdx() {
  const root = ammoAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('Ammo ADX push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountAmmoGptDisplay()
  } catch (e) {
    console.error('Ammo GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushAmmoAdx()
    } catch (e) {
      console.error('Ammo ADX failed:', e)
    }
  })
})
</script>

<style src="./item-db-shared.css"></style>

<style scoped>
/* Ammunition page — loadout manifest layout (extends shared item-db tokens) */
.ammo-page .page-hero-kicker {
  margin: 0 0 0.5rem;
}

.ammo-hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem 1.25rem;
  margin: 1.5rem 0 0;
  padding: 0;
  max-width: 42rem;
  border-top: 1px solid color-mix(in srgb, var(--color-border) 75%, transparent);
  padding-top: 1.25rem;
}

.ammo-hero-stats__item {
  margin: 0;
}

.ammo-hero-stats dt {
  margin: 0 0 0.2rem;
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.ammo-hero-stats dd {
  margin: 0;
  font-family: var(--font-journey);
  font-size: clamp(1.25rem, 2.8vw, 1.6rem);
  font-weight: 600;
  color: var(--color-text);
  font-variant-numeric: tabular-nums;
}

.ammo-body {
  padding-top: 0.5rem;
}

.ammo-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem 1.5rem;
  margin-bottom: 1.75rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
}

.ammo-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.ammo-filter {
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--color-border) 92%, transparent);
  background: color-mix(in srgb, var(--color-surface) 55%, transparent);
  color: var(--color-muted);
  cursor: pointer;
  transition:
    border-color 0.18s ease,
    color 0.18s ease,
    background 0.18s ease;
}

.ammo-filter:hover {
  border-color: color-mix(in srgb, var(--color-ice) 35%, var(--color-border));
  color: var(--color-text);
}

.ammo-filter--active {
  border-color: color-mix(in srgb, var(--color-ice) 55%, transparent);
  background: color-mix(in srgb, var(--color-ice) 12%, var(--color-panel));
  color: var(--color-primary-soft);
}

.ammo-search {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: min(100%, 16rem);
}

.ammo-search__label {
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.ammo-search__input {
  width: 100%;
  padding: 0.55rem 0.75rem;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background: var(--color-panel);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 0.9rem;
}

.ammo-search__input::placeholder {
  color: color-mix(in srgb, var(--color-muted) 88%, transparent);
}

.ammo-search__input:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--color-ice) 55%, transparent);
  outline-offset: 2px;
}

.ammo-empty {
  margin: 2rem 0;
  padding: 1.25rem 1.35rem;
  border-radius: 8px;
  border: 1px dashed color-mix(in srgb, var(--color-border) 90%, transparent);
  color: var(--color-muted);
  font-size: 0.92rem;
}

.ammo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
  gap: 1.25rem 1.35rem;
  align-items: stretch;
}

.ammo-card {
  --ammo-accent: color-mix(in srgb, var(--color-ice) 72%, var(--color-primary-soft));
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    'media'
    'body';
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-border) 88%, transparent);
  border-top: 3px solid var(--ammo-accent);
  background: linear-gradient(
    165deg,
    color-mix(in srgb, var(--color-panel) 94%, var(--color-bg)) 0%,
    color-mix(in srgb, var(--color-surface) 88%, transparent) 100%
  );
  box-shadow: inset 0 1px 0 color-mix(in srgb, #fff 4%, transparent);
  overflow: hidden;
}

@media (min-width: 560px) {
  .ammo-card {
    grid-template-columns: minmax(7.5rem, 9.25rem) minmax(0, 1fr);
    grid-template-areas: 'media body';
    align-items: stretch;
  }
}

.ammo-card[data-category='rifle'] {
  --ammo-accent: color-mix(in srgb, var(--color-ice) 65%, #6ab);
}

.ammo-card[data-category='dmr'] {
  --ammo-accent: color-mix(in srgb, var(--color-amber) 85%, var(--color-signal));
}

.ammo-card[data-category='shotgun'] {
  --ammo-accent: color-mix(in srgb, var(--color-signal) 78%, #c60);
}

.ammo-card[data-category='pistol'] {
  --ammo-accent: color-mix(in srgb, var(--color-muted) 45%, var(--color-ice));
}

.ammo-card[data-category='smg'] {
  --ammo-accent: color-mix(in srgb, var(--color-ice) 50%, var(--color-primary-soft));
}

.ammo-card[data-category='mixed'] {
  --ammo-accent: color-mix(in srgb, var(--color-ice) 45%, var(--color-signal-soft));
}

.ammo-card__media {
  grid-area: media;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 8.5rem;
  aspect-ratio: 4 / 3;
  background: color-mix(in srgb, var(--color-bg) 55%, var(--color-panel));
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 75%, transparent);
}

@media (min-width: 560px) {
  .ammo-card__media {
    aspect-ratio: auto;
    min-height: 100%;
    align-self: stretch;
    border-bottom: none;
    border-right: 1px solid color-mix(in srgb, var(--color-border) 75%, transparent);
  }
}

.ammo-card__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.5rem;
}

.ammo-card__media-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.75rem;
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 7rem;
  border: 1px dashed color-mix(in srgb, var(--color-border) 92%, transparent);
  margin: 0.5rem;
  border-radius: 8px;
  box-sizing: border-box;
}

.ammo-card__media-id {
  font-family: var(--font-journey);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-muted) 88%, var(--color-ice));
}

.ammo-card__media-label {
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.ammo-card__body {
  grid-area: body;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.1rem 1.15rem;
  min-width: 0;
}

.ammo-card__head {
  margin-bottom: 0.85rem;
}

.ammo-card__caliber {
  margin: 0 0 0.25rem;
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  font-weight: 700;
  letter-spacing: 0.03em;
  line-height: 1.25;
  color: var(--color-text);
  text-transform: none;
}

.ammo-card__role {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.ammo-card__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem 0.35rem;
  margin: 0 0 1rem;
  padding: 0.65rem 0.5rem;
  border-radius: 8px;
  background: color-mix(in srgb, var(--color-bg) 35%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-border) 70%, transparent);
}

.ammo-card__stat {
  margin: 0;
  text-align: center;
}

.ammo-card__stat dt {
  margin: 0 0 0.15rem;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.ammo-card__stat dd {
  margin: 0;
  line-height: 1.2;
}

.ammo-card__num {
  font-family: var(--font-journey);
  font-size: 1.05rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--color-text);
}

.ammo-card__unit {
  display: block;
  margin-top: 0.1rem;
  font-size: 0.65rem;
  color: var(--color-muted);
}

.ammo-card__weapons {
  margin-bottom: 0.65rem;
}

.ammo-card__weapons-label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.ammo-card__weapon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.ammo-card__weapon-list li {
  margin: 0;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: color-mix(in srgb, var(--color-text) 92%, var(--color-ice));
  background: color-mix(in srgb, var(--color-ice) 8%, var(--color-panel));
  border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
}

.ammo-card__note {
  margin: 0;
  padding-top: 0.5rem;
  border-top: 1px solid color-mix(in srgb, var(--color-border) 75%, transparent);
  font-size: 0.82rem;
  line-height: 1.5;
  color: color-mix(in srgb, var(--color-muted) 92%, var(--color-text));
}

.ammo-foot {
  margin-top: 2.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid color-mix(in srgb, var(--color-border) 88%, transparent);
  font-size: 0.9rem;
  color: var(--color-muted);
}

.ammo-foot a {
  color: var(--color-primary-soft);
}

.ammo-foot__assets {
  margin: 0.85rem 0 0;
  font-size: 0.78rem;
  line-height: 1.55;
  color: color-mix(in srgb, var(--color-muted) 95%, var(--color-text));
}

.ammo-foot__assets code {
  font-size: 0.88em;
  padding: 0.1em 0.35em;
  border-radius: 4px;
  background: color-mix(in srgb, var(--color-panel) 80%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
  color: color-mix(in srgb, var(--color-text) 75%, var(--color-muted));
}

@media (max-width: 640px) {
  .ammo-hero-stats {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }

  .ammo-card__stats {
    grid-template-columns: 1fr;
    text-align: left;
  }

  .ammo-card__stat {
    text-align: left;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.35rem 0;
    border-bottom: 1px solid color-mix(in srgb, var(--color-border) 55%, transparent);
  }

  .ammo-card__stat:last-of-type {
    border-bottom: none;
  }

  .ammo-card__stat dd {
    text-align: right;
  }
}
</style>
