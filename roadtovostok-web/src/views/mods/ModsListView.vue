<template>
  <article class="mods-hub page-article">
    <section class="page-hero-section page-hero-section--compact page-hero-section--mods">
      <div class="container mods-hub__hero-inner">
        <nav
          class="page-hero-breadcrumb"
          aria-label="Breadcrumb"
        >
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true">/</span>
          <span>Mods</span>
        </nav>
        <p class="mods-hub__kicker">
          Workshop index
        </p>
        <h1 class="mods-hub__title">
          Mods
        </h1>
        <p class="mods-hub__lede">
          Curated write-ups — we link to ModWorkshop for files. Hash-check archives and match your demo or EA build.
        </p>
      </div>
    </section>

    <section
      class="mods-hub__catalog"
      aria-label="Mod articles"
    >
      <div class="container mods-hub__catalog-inner">
        <header
          v-if="sorted.length"
          class="mods-hub__catalog-head"
        >
          <span class="mods-hub__catalog-label">Catalog</span>
          <p class="mods-hub__catalog-note">
            {{ sorted.length }} {{ sorted.length === 1 ? 'entry' : 'entries' }} · unofficial notes
          </p>
        </header>

        <RouterLink
          v-if="featured"
          :to="`/mods/${featured.addressBar}`"
          class="mods-spotlight"
        >
          <div class="mods-spotlight__frame">
            <div class="mods-spotlight__visual">
              <img
                :src="featured.imageUrl"
                :alt="featured.imageAlt"
                width="640"
                height="400"
                loading="eager"
                decoding="async"
                class="mods-spotlight__img"
              >
              <div
                class="mods-spotlight__visual-shade"
                aria-hidden="true"
              />
            </div>
            <div class="mods-spotlight__body">
              <p class="mods-spotlight__eyebrow">
                <span
                  v-if="featured.loaderName"
                  class="mods-spotlight__loader"
                >{{ featured.loaderName }}</span>
                <span
                  v-if="featured.publishDate"
                  class="mods-spotlight__when"
                ><time :datetime="featured.publishDate">{{ featured.publishDate }}</time></span>
              </p>
              <h2 class="mods-spotlight__name">
                {{ featured.title }}
              </h2>
              <p class="mods-spotlight__deck">
                {{ excerpt(featured) }}
              </p>
              <ul
                class="mods-spotlight__facts"
                aria-label="Mod facts"
              >
                <li v-if="featured.author">
                  <span class="mods-spotlight__fact-key">Author</span>
                  <span class="mods-spotlight__fact-val">{{ featured.author }}</span>
                </li>
                <li v-if="featured.version">
                  <span class="mods-spotlight__fact-key">Version</span>
                  <span class="mods-spotlight__fact-val">v{{ featured.version }}</span>
                </li>
                <li v-if="statDownloads(featured)">
                  <span class="mods-spotlight__fact-key">Downloads</span>
                  <span class="mods-spotlight__fact-val">{{ statDownloads(featured) }}</span>
                </li>
                <li v-if="statViews(featured)">
                  <span class="mods-spotlight__fact-key">Views</span>
                  <span class="mods-spotlight__fact-val">{{ statViews(featured) }}</span>
                </li>
              </ul>
              <div
                v-if="featured.tags?.length"
                class="mods-spotlight__tags"
              >
                <span
                  v-for="t in featured.tags"
                  :key="t"
                  class="mods-spotlight__tag"
                >{{ t }}</span>
              </div>
              <span class="mods-spotlight__cta">
                <span class="mods-spotlight__cta-text">Read spotlight</span>
                <span
                  class="mods-spotlight__cta-arrow"
                  aria-hidden="true"
                >→</span>
              </span>
            </div>
          </div>
        </RouterLink>

        <ul
          v-if="rest.length"
          class="mods-stack"
          role="list"
        >
          <li
            v-for="m in rest"
            :key="m.id"
          >
            <RouterLink
              :to="`/mods/${m.addressBar}`"
              class="mods-card"
            >
              <div class="mods-card__visual">
                <img
                  :src="m.imageUrl"
                  :alt="m.imageAlt"
                  width="400"
                  height="250"
                  loading="lazy"
                  decoding="async"
                  class="mods-card__img"
                >
              </div>
              <div class="mods-card__body">
                <p class="mods-card__meta">
                  <time
                    v-if="m.publishDate"
                    :datetime="m.publishDate"
                  >{{ m.publishDate }}</time>
                  <span
                    v-if="m.author"
                    class="mods-card__by"
                  >{{ m.author }}</span>
                </p>
                <h2 class="mods-card__title">
                  {{ m.title }}
                </h2>
                <p class="mods-card__excerpt">
                  {{ excerpt(m) }}
                </p>
                <div
                  v-if="m.tags?.length"
                  class="mods-card__tags"
                >
                  <span
                    v-for="t in m.tags"
                    :key="t"
                    class="mods-card__tag"
                  >{{ t }}</span>
                </div>
                <div class="mods-card__foot">
                  <span
                    v-if="statDownloads(m)"
                    class="mods-card__stat"
                  >{{ statDownloads(m) }} dl</span>
                  <span
                    v-if="m.version"
                    class="mods-card__ver"
                  >v{{ m.version }}</span>
                </div>
              </div>
            </RouterLink>
          </li>
        </ul>

        <p
          v-if="!sorted.length"
          class="mods-hub__empty"
        >
          No mod articles yet.
        </p>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import modArticles from '../../data/mods/mods.js'

const sorted = computed(() =>
  [...modArticles].sort((a, b) => b.publishDate.localeCompare(a.publishDate)),
)

const featured = computed(() => sorted.value[0] ?? null)
const rest = computed(() => sorted.value.slice(1))

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
.mods-hub__hero-inner {
  position: relative;
  z-index: 1;
}

.mods-hub__kicker {
  margin: 0 0 0.35rem;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 650;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-amber) 72%, var(--color-muted));
}

.mods-hub__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4.2vw, 2.65rem);
  font-weight: 650;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--color-text);
}

.mods-hub__lede {
  margin: 0.65rem 0 0;
  max-width: 52ch;
  font-size: 0.88rem;
  line-height: 1.55;
  color: color-mix(in srgb, var(--color-muted) 92%, var(--color-text));
}

/* —— Catalog shell —— */
.mods-hub__catalog {
  position: relative;
  padding: clamp(1.5rem, 3vw, 2.75rem) 0 clamp(2.5rem, 5vw, 4rem);
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-bg) 88%, var(--color-panel)) 0%,
    var(--color-bg) 28%,
    var(--color-bg) 100%
  );
}

.mods-hub__catalog::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-amber) 55%, transparent),
    color-mix(in srgb, var(--color-signal) 35%, transparent) 55%,
    transparent
  );
  opacity: 0.45;
  pointer-events: none;
}

.mods-hub__catalog-inner {
  position: relative;
}

.mods-hub__catalog-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1.25rem;
  margin-bottom: 1.35rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 75%, transparent);
}

.mods-hub__catalog-label {
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.mods-hub__catalog-note {
  margin: 0;
  font-size: 0.75rem;
  color: color-mix(in srgb, var(--color-muted) 88%, var(--color-ice));
}

.mods-hub__empty {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-muted);
}

/* —— Spotlight (featured) —— */
.mods-spotlight {
  display: block;
  text-decoration: none;
  color: inherit;
  margin-bottom: clamp(1.5rem, 3vw, 2.25rem);
  border-radius: 14px;
  outline-offset: 4px;
}

.mods-spotlight:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--color-amber) 70%, var(--color-ice));
}

.mods-spotlight__frame {
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid color-mix(in srgb, var(--color-border) 82%, var(--color-amber) 8%);
  background: color-mix(in srgb, var(--color-panel) 55%, var(--color-bg));
  box-shadow:
    0 1px 0 color-mix(in srgb, var(--color-text) 4%, transparent),
    0 24px 48px rgba(0, 0, 0, 0.35);
  transition:
    border-color 0.2s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

@media (min-width: 880px) {
  .mods-spotlight__frame {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    align-items: stretch;
    min-height: min(320px, 42vw);
  }
}

.mods-spotlight:hover .mods-spotlight__frame {
  border-color: color-mix(in srgb, var(--color-amber) 22%, var(--color-border));
  box-shadow:
    0 1px 0 color-mix(in srgb, var(--color-text) 6%, transparent),
    0 28px 56px rgba(0, 0, 0, 0.42);
  transform: translateY(-2px);
}

.mods-spotlight__visual {
  position: relative;
  min-height: 200px;
  background: var(--color-bg);
}

@media (min-width: 880px) {
  .mods-spotlight__visual {
    min-height: 0;
  }
}

.mods-spotlight__img {
  width: 100%;
  height: 100%;
  min-height: 200px;
  object-fit: cover;
  display: block;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 94%);
}

@media (min-width: 880px) {
  .mods-spotlight__img {
    min-height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}

.mods-spotlight__visual-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    transparent 40%,
    color-mix(in srgb, var(--color-bg) 35%, transparent) 100%
  );
  pointer-events: none;
}

@media (min-width: 880px) {
  .mods-spotlight__visual-shade {
    background: linear-gradient(
      90deg,
      transparent 55%,
      color-mix(in srgb, var(--color-panel) 88%, transparent) 100%
    );
  }
}

.mods-spotlight__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.65rem;
  padding: clamp(1.15rem, 2.5vw, 1.75rem) clamp(1.1rem, 2.5vw, 1.85rem);
  border-top: 1px solid color-mix(in srgb, var(--color-border) 55%, transparent);
}

@media (min-width: 880px) {
  .mods-spotlight__body {
    border-top: none;
    border-left: 1px solid color-mix(in srgb, var(--color-border) 60%, transparent);
  }
}

.mods-spotlight__eyebrow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.85rem;
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.6rem;
  font-weight: 650;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-muted) 85%, var(--color-amber));
}

.mods-spotlight__loader {
  padding: 0.2rem 0.45rem;
  border-radius: 3px;
  background: color-mix(in srgb, var(--color-amber) 12%, var(--color-panel));
  border: 1px solid color-mix(in srgb, var(--color-amber) 22%, var(--color-border));
  color: color-mix(in srgb, var(--color-amber) 82%, var(--color-text));
}

.mods-spotlight__when {
  color: var(--color-muted);
}

.mods-spotlight__name {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.15rem, 2.4vw, 1.55rem);
  font-weight: 650;
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

.mods-spotlight__deck {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.55;
  color: color-mix(in srgb, var(--color-muted) 94%, var(--color-text));
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.mods-spotlight__facts {
  list-style: none;
  margin: 0.15rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.45rem 1rem;
}

@media (min-width: 520px) {
  .mods-spotlight__facts {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.mods-spotlight__facts li {
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
  min-width: 0;
}

.mods-spotlight__fact-key {
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.mods-spotlight__fact-val {
  font-size: 0.82rem;
  font-weight: 600;
  color: color-mix(in srgb, var(--color-text) 92%, var(--color-ice));
  font-variant-numeric: tabular-nums;
  word-break: break-word;
}

.mods-spotlight__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.15rem;
}

.mods-spotlight__tag {
  font-size: 0.62rem;
  padding: 0.2rem 0.45rem;
  border-radius: 3px;
  background: color-mix(in srgb, var(--color-bg) 40%, var(--color-panel));
  border: 1px solid color-mix(in srgb, var(--color-border) 88%, transparent);
  color: color-mix(in srgb, var(--color-muted) 92%, var(--color-text));
  letter-spacing: 0.04em;
}

.mods-spotlight__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.35rem;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-amber) 78%, var(--color-primary-soft));
}

.mods-spotlight__cta-arrow {
  transition: transform 0.2s ease;
}

.mods-spotlight:hover .mods-spotlight__cta-arrow {
  transform: translateX(4px);
}

/* —— Secondary stack —— */
.mods-stack {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
}

.mods-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  border: 1px solid color-mix(in srgb, var(--color-border) 88%, transparent);
  background: color-mix(in srgb, var(--color-panel) 42%, var(--color-bg));
  transition:
    border-color 0.18s ease,
    background 0.18s ease,
    transform 0.22s ease,
    box-shadow 0.22s ease;
  outline-offset: 3px;
}

.mods-card:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--color-amber) 65%, var(--color-ice));
}

.mods-card:hover {
  border-color: color-mix(in srgb, var(--color-amber) 18%, var(--color-border));
  background: color-mix(in srgb, var(--color-panel) 58%, var(--color-bg));
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
}

.mods-card__visual {
  position: relative;
  aspect-ratio: 16 / 10;
  background: var(--color-bg);
  overflow: hidden;
}

.mods-card__visual::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 55%,
    color-mix(in srgb, var(--color-bg) 55%, transparent) 100%
  );
  pointer-events: none;
}

.mods-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.mods-card:hover .mods-card__img {
  transform: scale(1.04);
}

.mods-card__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.35rem;
  padding: 0.85rem 1rem 1rem;
  border-top: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);
}

.mods-card__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.65rem;
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.mods-card__by {
  color: color-mix(in srgb, var(--color-muted) 80%, var(--color-amber));
}

.mods-card__title {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 650;
  line-height: 1.28;
  letter-spacing: -0.015em;
  color: var(--color-text);
}

.mods-card__excerpt {
  margin: 0;
  flex: 1;
  font-size: 0.78rem;
  line-height: 1.5;
  color: var(--color-muted);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.mods-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.mods-card__tag {
  font-size: 0.55rem;
  padding: 0.12rem 0.32rem;
  border-radius: 2px;
  border: 1px solid color-mix(in srgb, var(--color-border) 90%, transparent);
  color: color-mix(in srgb, var(--color-muted) 95%, var(--color-text));
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: var(--font-display);
}

.mods-card__foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
  margin-top: 0.15rem;
  padding-top: 0.5rem;
  border-top: 1px dashed color-mix(in srgb, var(--color-border) 65%, transparent);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: var(--font-display);
  color: color-mix(in srgb, var(--color-amber) 45%, var(--color-muted));
}

.mods-card__ver {
  color: color-mix(in srgb, var(--color-amber) 70%, var(--color-muted));
}

@media (prefers-reduced-motion: reduce) {
  .mods-spotlight__frame,
  .mods-card,
  .mods-card__img,
  .mods-spotlight__cta-arrow {
    transition: none;
  }

  .mods-spotlight:hover .mods-spotlight__frame,
  .mods-card:hover {
    transform: none;
  }

  .mods-card:hover .mods-card__img {
    transform: none;
  }

  .mods-spotlight:hover .mods-spotlight__cta-arrow {
    transform: none;
  }
}
</style>
