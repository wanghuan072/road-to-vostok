<template>
  <article ref="modsListAdsRoot" class="mods-page page-article">
    <section class="page-hero-section page-hero-section--compact page-hero-section--mods">
      <div class="container mods-page__hero">
        <div
          ref="modsListGptRoot"
          id="div-gpt-ad-1775617033282-0"
          style="min-width: 320px; min-height: 50px"
        ></div>
        <div class="page-hero-content">
          <nav
            class="page-hero-breadcrumb"
            aria-label="Breadcrumb"
          >
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span>Mods</span>
          </nav>
          <div
            class="mods-page__hero-mark"
            aria-hidden="true"
          />
          <p class="mods-page__eyebrow">
            ModWorkshop · editorial spotlights
          </p>
          <h1 class="mods-page__title">
            Road To Vostok Mods
          </h1>
          <div class="mods-page__intro">
            <p>
              Here we publish <strong>editorial mod spotlights</strong>: packs and tools we think are worth
              reading about before you install—gameplay overhauls, QoL compilations, loader requirements
              (e.g. Metro Mod Loader), and what each listing changes in a run. The list below is our
              curated recommendations, not an exhaustive ModWorkshop index; we add entries as we review them.
            </p>
            <p>
              We do <strong>not</strong> host <strong>.vmz</strong> files. Every card links to the author’s
              source (ModWorkshop or as stated) for the real download. Match the file to your demo or Early
              Access build and verify checksums before you load anything into the game.
            </p>
          </div>
        </div>
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

    <section
      class="mods-board"
      aria-label="Mod articles"
    >
      <div class="container mods-board__inner">
        <header
          v-if="sorted.length"
          class="mods-board__mast"
        >
          <div class="mods-board__mast-text">
            <span class="mods-board__mast-label">Manifest</span>
            <p class="mods-board__mast-note">
              {{ sorted.length }} {{ sorted.length === 1 ? 'listing' : 'listings' }} · independent reference
            </p>
          </div>
          <div
            class="mods-board__mast-rule"
            aria-hidden="true"
          />
        </header>

        <ul
          v-if="sorted.length"
          class="mods-feed"
          role="list"
        >
          <li
            v-for="(m, index) in sorted"
            :key="m.id"
            class="mods-feed__item"
          >
            <a
              :href="`/mods/${m.addressBar}`"
              class="mods-row"
              :class="{ 'mods-row--lead': index === 0 }"
            >
              <span
                class="mods-row__rail"
                aria-hidden="true"
              />
              <span class="mods-row__idx">{{ rowIndex(index) }}</span>
              <div class="mods-row__thumb-wrap">
                <div class="mods-row__thumb">
                  <img
                    :src="m.imageUrl"
                    :alt="m.imageAlt"
                    width="120"
                    height="120"
                    :loading="index === 0 ? 'eager' : 'lazy'"
                    decoding="async"
                    class="mods-row__img"
                  >
                </div>
              </div>
              <div class="mods-row__copy">
                <p
                  v-if="index === 0"
                  class="mods-row__flag"
                >
                  Latest
                </p>
                <h2 class="mods-row__title">
                  {{ m.title }}
                </h2>
                <p class="mods-row__deck">
                  {{ excerpt(m) }}
                </p>
                <div
                  v-if="m.tags?.length"
                  class="mods-row__tags"
                >
                  <span
                    v-for="t in m.tags"
                    :key="t"
                    class="mods-row__tag"
                  >{{ t }}</span>
                </div>
              </div>
              <dl
                class="mods-row__meta"
                :aria-label="`Details for ${m.title}`"
              >
                <div
                  v-if="m.loaderName"
                  class="mods-row__meta-block"
                >
                  <dt>Loader</dt>
                  <dd>{{ m.loaderName }}</dd>
                </div>
                <div
                  v-if="m.publishDate"
                  class="mods-row__meta-block"
                >
                  <dt>Updated</dt>
                  <dd><time :datetime="m.publishDate">{{ m.publishDate }}</time></dd>
                </div>
                <div
                  v-if="m.author"
                  class="mods-row__meta-block"
                >
                  <dt>Author</dt>
                  <dd>{{ m.author }}</dd>
                </div>
                <div
                  v-if="m.version"
                  class="mods-row__meta-block"
                >
                  <dt>Ver</dt>
                  <dd>v{{ m.version }}</dd>
                </div>
                <div
                  v-if="statDownloads(m)"
                  class="mods-row__meta-block"
                >
                  <dt>DL</dt>
                  <dd>{{ statDownloads(m) }}</dd>
                </div>
                <div
                  v-if="statViews(m)"
                  class="mods-row__meta-block"
                >
                  <dt>Views</dt>
                  <dd>{{ statViews(m) }}</dd>
                </div>
              </dl>
              <span class="mods-row__action">
                <span class="mods-row__action-label">Open</span>
                <span
                  class="mods-row__action-glyph"
                  aria-hidden="true"
                >→</span>
              </span>
            </a>
          </li>
        </ul>

        <aside
          v-if="sorted.length"
          style="width: 100%; margin: 1.25rem auto 0; padding: 1rem; text-align: center"
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
          v-else
          class="mods-board__empty"
        >
          No mod articles yet.
        </p>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed, ref, onMounted, nextTick } from 'vue'
import modArticles from '../../data/mods/mods.js'

const modsListAdsRoot = ref(null)
const modsListGptRoot = ref(null)

function mountModsListGptDisplay() {
  const root = modsListGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushModsListAdx() {
  const root = modsListAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('ModsList ADX push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountModsListGptDisplay()
  } catch (e) {
    console.error('ModsList GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushModsListAdx()
    } catch (e) {
      console.error('ModsList ADX failed:', e)
    }
  })
})

const sorted = computed(() =>
  [...modArticles].sort((a, b) => b.publishDate.localeCompare(a.publishDate)),
)

function rowIndex(i) {
  return String(i + 1).padStart(2, '0')
}

function excerpt(item) {
  return item?.description || item?.seo?.description || ''
}

function statDownloads(m) {
  const s = m?.stats?.downloads
  if (s == null) return ''
  const t = String(s).trim()
  return t || ''
}

function statViews(m) {
  const s = m?.stats?.views
  if (s == null) return ''
  const t = String(s).trim()
  return t || ''
}
</script>

<style scoped>
.mods-page__hero {
  position: relative;
  z-index: 1;
}

.mods-page__hero-mark {
  width: 2.75rem;
  height: 3px;
  margin: 0 0 1rem;
  border-radius: 1px;
  background: linear-gradient(
    90deg,
    color-mix(in srgb, var(--color-amber) 88%, transparent),
    color-mix(in srgb, var(--color-signal) 55%, transparent) 72%,
    transparent
  );
}

.mods-page__eyebrow {
  margin: 0 0 0.4rem;
  font-family: var(--font-journey);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-muted) 78%, var(--color-amber));
}

.mods-page__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 650;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: var(--color-text);
  max-width: 18ch;
}

.mods-page__intro {
  margin: 0.85rem 0 0;
  max-width: min(58ch, 100%);
  font-size: 0.875rem;
  line-height: 1.58;
  color: color-mix(in srgb, var(--color-muted) 90%, var(--color-text));
}

.mods-page__intro p {
  margin: 0;
}

.mods-page__intro p + p {
  margin-top: 0.75rem;
}

.mods-page__intro strong {
  color: color-mix(in srgb, var(--color-text) 82%, var(--color-amber));
  font-weight: 600;
}

/* —— Board —— */
.mods-board {
  padding: clamp(1.25rem, 3vw, 2rem) 0 clamp(2.25rem, 5vw, 3.75rem);
  background: var(--color-bg);
}

.mods-board__inner {
  position: relative;
}

.mods-board__mast {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-bottom: 0.25rem;
}

.mods-board__mast-text {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
}

.mods-board__mast-label {
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.mods-board__mast-note {
  margin: 0;
  font-size: 0.72rem;
  color: color-mix(in srgb, var(--color-muted) 85%, var(--color-ice));
}

.mods-board__mast-rule {
  height: 1px;
  width: 100%;
  background: linear-gradient(
    90deg,
    color-mix(in srgb, var(--color-border) 92%, var(--color-amber) 12%) 0%,
    color-mix(in srgb, var(--color-border) 45%, transparent) 55%,
    transparent 100%
  );
}

.mods-board__empty {
  margin: 1.5rem 0 0;
  font-size: 0.9rem;
  color: var(--color-muted);
}

/* —— Feed rows —— */
.mods-feed {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mods-feed__item {
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 72%, transparent);
}

.mods-feed__item:last-child {
  border-bottom: none;
}

.mods-row {
  position: relative;
  display: grid;
  grid-template-columns:
    0.35rem
    2.25rem
    minmax(4.25rem, 5.25rem)
    minmax(0, 1fr)
    minmax(0, 11.5rem)
    auto;
  gap: 0.65rem 0.85rem;
  align-items: start;
  padding: clamp(1rem, 2.2vw, 1.35rem) 0 clamp(1.05rem, 2.2vw, 1.4rem);
  margin: 0;
  text-decoration: none;
  color: inherit;
  outline-offset: 2px;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;
}

@media (max-width: 767px) {
  .mods-row {
    grid-template-columns: 0.35rem minmax(0, 1fr) auto;
    grid-template-rows: auto auto auto auto;
    gap: 0.5rem 0.65rem;
    align-items: start;
  }

  .mods-row__rail {
    grid-column: 1;
    grid-row: 1 / 5;
    min-height: 4rem;
  }

  .mods-row__idx {
    grid-column: 2;
    grid-row: 1;
    padding-top: 0;
  }

  .mods-row__thumb-wrap {
    grid-column: 2;
    grid-row: 2;
    max-width: 5.5rem;
  }

  .mods-row__copy {
    grid-column: 2 / 4;
    grid-row: 3;
    padding-top: 0;
  }

  .mods-row__meta {
    grid-column: 2 / 4;
    grid-row: 4;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding-top: 0.35rem;
    margin-top: 0.25rem;
    border-top: 1px dashed color-mix(in srgb, var(--color-border) 55%, transparent);
  }

  .mods-row__action {
    grid-column: 3;
    grid-row: 1;
    padding-top: 0;
    flex-direction: row;
    align-items: center;
    gap: 0.35rem;
  }
}

.mods-row--lead {
  background: linear-gradient(
    100deg,
    color-mix(in srgb, var(--color-amber) 7%, var(--color-panel)) 0%,
    transparent 48%
  );
  margin-inline: calc(-1 * clamp(1rem, 4vw, 1.75rem));
  padding-inline: clamp(1rem, 4vw, 1.75rem);
  border-radius: 2px;
}

.mods-row__rail {
  grid-column: 1;
  grid-row: 1 / -1;
  width: 3px;
  margin-top: 0.15rem;
  align-self: stretch;
  min-height: 3.5rem;
  border-radius: 2px;
  background: color-mix(in srgb, var(--color-amber) 42%, var(--color-border));
  transition: background 0.2s ease;
}

.mods-row--lead .mods-row__rail {
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-amber) 78%, var(--color-signal)),
    color-mix(in srgb, var(--color-signal) 55%, var(--color-amber) 20%)
  );
}

.mods-row:hover .mods-row__rail,
.mods-row:focus-visible .mods-row__rail {
  background: color-mix(in srgb, var(--color-amber) 72%, var(--color-ice));
}

.mods-row--lead:hover .mods-row__rail,
.mods-row--lead:focus-visible .mods-row__rail {
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-amber) 92%, #fff 4%),
    color-mix(in srgb, var(--color-signal) 70%, var(--color-amber))
  );
}

.mods-row__idx {
  grid-column: 2;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  font-variant-numeric: tabular-nums;
  color: color-mix(in srgb, var(--color-muted) 88%, var(--color-amber));
  padding-top: 0.35rem;
}

.mods-row__thumb-wrap {
  grid-column: 3;
}

.mods-row__thumb {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, var(--color-border) 88%, var(--color-amber) 10%);
  background: var(--color-surface);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--color-bg) 40%, transparent);
}

.mods-row--lead .mods-row__thumb {
  border-color: color-mix(in srgb, var(--color-amber) 28%, var(--color-border));
}

.mods-row__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease, filter 0.25s ease;
  filter: saturate(0.92);
}

.mods-row:hover .mods-row__img,
.mods-row:focus-visible .mods-row__img {
  transform: scale(1.05);
  filter: saturate(1.05);
}

.mods-row__copy {
  grid-column: 4;
  min-width: 0;
  padding-top: 0.1rem;
}

.mods-row__flag {
  margin: 0 0 0.35rem;
  font-family: var(--font-display);
  font-size: 0.52rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-amber) 75%, var(--color-muted));
}

.mods-row__title {
  margin: 0 0 0.4rem;
  font-family: var(--font-display);
  font-size: clamp(1rem, 2.1vw, 1.2rem);
  font-weight: 650;
  line-height: 1.22;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

.mods-row--lead .mods-row__title {
  font-size: clamp(1.08rem, 2.4vw, 1.32rem);
}

.mods-row__deck {
  margin: 0 0 0.5rem;
  font-size: 0.8rem;
  line-height: 1.52;
  color: var(--color-muted);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.mods-row--lead .mods-row__deck {
  -webkit-line-clamp: 3;
  line-clamp: 3;
}

.mods-row__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.mods-row__tag {
  font-family: var(--font-display);
  font-size: 0.52rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.15rem 0.4rem;
  border-radius: 2px;
  color: color-mix(in srgb, var(--color-muted) 92%, var(--color-text));
  border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
  background: color-mix(in srgb, var(--color-panel) 35%, transparent);
}

.mods-row__meta {
  grid-column: 5;
  margin: 0;
  padding: 0.2rem 0 0;
  display: grid;
  gap: 0.4rem 0.65rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  font-size: 0.68rem;
  line-height: 1.25;
}

.mods-row__meta-block {
  min-width: 0;
}

.mods-row__meta dt {
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-muted) 95%, var(--color-amber));
}

.mods-row__meta dd {
  margin: 0.12rem 0 0;
  font-weight: 600;
  color: color-mix(in srgb, var(--color-text) 90%, var(--color-ice));
  font-variant-numeric: tabular-nums;
  word-break: break-word;
}

.mods-row__action {
  grid-column: 6;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
  padding-top: 0.35rem;
  font-family: var(--font-display);
  color: color-mix(in srgb, var(--color-amber) 72%, var(--color-muted));
}

.mods-row__action-label {
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.mods-row__action-glyph {
  font-size: 1.15rem;
  line-height: 1;
  transition: transform 0.22s ease;
}

.mods-row:hover .mods-row__action-glyph,
.mods-row:focus-visible .mods-row__action-glyph {
  transform: translateX(3px);
  color: color-mix(in srgb, var(--color-primary-soft) 55%, var(--color-amber));
}

.mods-row:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--color-amber) 65%, var(--color-ice));
}

.mods-row:hover {
  background: color-mix(in srgb, var(--color-panel) 22%, transparent);
}

.mods-row--lead:hover {
  background: linear-gradient(
    100deg,
    color-mix(in srgb, var(--color-amber) 11%, var(--color-panel)) 0%,
    color-mix(in srgb, var(--color-panel) 18%, transparent) 50%
  );
}

@media (prefers-reduced-motion: reduce) {
  .mods-row__img,
  .mods-row__action-glyph {
    transition: none;
  }

  .mods-row:hover .mods-row__img,
  .mods-row:focus-visible .mods-row__img {
    transform: none;
  }

  .mods-row:hover .mods-row__action-glyph,
  .mods-row:focus-visible .mods-row__action-glyph {
    transform: none;
  }
}
</style>
