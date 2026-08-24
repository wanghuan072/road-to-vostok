<template>
  <article class="poster-page page-article">
    <section class="page-hero-section page-hero-section--compact">
      <div class="container">
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
            <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
            <span aria-hidden="true">/</span>
            <span>{{ $t('posterPage.breadcrumb') }}</span>
          </nav>
          <p class="poster-kicker">{{ $t('posterPage.kicker') }}</p>
          <h1 v-html="$t('posterPage.title')"></h1>
          <p class="poster-lead" v-html="$t('posterPage.leadHtml')"></p>
          <p class="poster-actions">
            <a class="poster-btn poster-btn--primary" :href="getLocalizedPath('/getting-started')">{{ $t('posterPage.btnStart') }}</a>
            <a class="poster-btn" :href="getLocalizedPath('/wiki')">{{ $t('posterPage.btnWiki') }}</a>
            <a class="poster-btn" :href="getLocalizedPath('/map')">{{ $t('posterPage.btnMap') }}</a>
            <a class="poster-btn" :href="getLocalizedPath('/tasks')">{{ $t('posterPage.btnTasks') }}</a>
          </p>
        </div>
      </div>
    </section>

    <section class="poster-feature" :aria-label="$t('posterPage.featureSectionAria')">
      <div class="container">
        <figure class="poster-feature-frame">
          <button
            type="button"
            class="poster-feature-hit"
            :aria-label="$t('posterPage.featureAriaOpen', { alt: shots[0].alt })"
            @click="openAt(0)"
          >
            <img
              :src="shots[0].src"
              :alt="shots[0].alt"
              width="1920"
              height="1080"
              decoding="async"
              fetchpriority="high"
            >
          </button>
          <figcaption class="poster-feature-cap" v-html="$t('posterPage.featureCapHtml')"></figcaption>
        </figure>
      </div>
    </section>

    <section class="poster-grid-section" :aria-label="$t('posterPage.galleryAria')">
      <div class="container">
        <header class="poster-grid-head">
          <h2>{{ $t('posterPage.galleryTitle') }}</h2>
          <p class="poster-grid-intro" v-html="$t('posterPage.galleryIntroHtml')"></p>
        </header>
        <ul class="poster-grid" role="list">
          <li v-for="(s, i) in shots" :key="s.file">
            <button
              type="button"
              class="poster-tile"
              :aria-label="$t('posterPage.tileAria', { index: s.index, alt: s.alt })"
              @click="openAt(i)"
            >
              <img
                :src="s.src"
                :alt="s.alt"
                width="640"
                height="360"
                loading="lazy"
                decoding="async"
              >
              <span class="poster-tile-index" aria-hidden="true">{{ s.index }}</span>
            </button>
          </li>
        </ul>
      </div>
    </section>

    <section class="poster-footnote container" :aria-label="$t('posterPage.footnoteAria')">
      <p v-html="$t('posterPage.footnoteHtml')"></p>
    </section>

    <dialog
      ref="lightboxRef"
      class="poster-lightbox"
      aria-labelledby="poster-lightbox-title"
      @click="onDialogBackdrop"
    >
      <div class="poster-lightbox-panel" @click.stop>
        <div class="poster-lightbox-toolbar">
          <p id="poster-lightbox-title" class="poster-lightbox-title">
            {{ $t('posterPage.lightboxTitle', { current: active.index, total: shots.length }) }}
          </p>
          <button type="button" class="poster-lightbox-close" :aria-label="$t('posterPage.lightboxClose')" @click="closeLightbox">
            ×
          </button>
        </div>
        <div class="poster-lightbox-stage">
          <button
            v-if="activeIndex > 0"
            type="button"
            class="poster-lightbox-nav poster-lightbox-nav--prev"
            :aria-label="$t('posterPage.lightboxPrev')"
            @click="step(-1)"
          >
            ‹
          </button>
          <img
            class="poster-lightbox-img"
            :src="active.src"
            :alt="active.alt"
            width="1920"
            height="1080"
            decoding="async"
          >
          <button
            v-if="activeIndex < shots.length - 1"
            type="button"
            class="poster-lightbox-nav poster-lightbox-nav--next"
            :aria-label="$t('posterPage.lightboxNext')"
            @click="step(1)"
          >
            ›
          </button>
        </div>
        <p class="poster-lightbox-caption">{{ active.alt }}</p>
      </div>
    </dialog>
  </article>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { getPosterShots } from '../data/localeData.js'
import { useLocalizedPath } from '../composables/useLocalizedPath.js'

const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const shots = computed(() => getPosterShots(locale.value))

const lightboxRef = ref(null)
const activeIndex = ref(0)

const active = computed(() => shots.value[activeIndex.value] ?? shots.value[0])

function openAt(i) {
  activeIndex.value = i
  const d = lightboxRef.value
  if (d && !d.open) d.showModal()
}

function closeLightbox() {
  lightboxRef.value?.close()
}

function step(delta) {
  const n = activeIndex.value + delta
  if (n >= 0 && n < shots.value.length) activeIndex.value = n
}

function onDialogBackdrop(e) {
  if (e.target === lightboxRef.value) closeLightbox()
}

function onKey(e) {
  if (!lightboxRef.value?.open) return
  if (e.key === 'ArrowLeft') step(-1)
  if (e.key === 'ArrowRight') step(1)
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.poster-page {
  padding-bottom: 4rem;
}

.poster-kicker {
  margin: 0 0 0.5rem;
  font-family: var(--font-journey);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-amber);
}

.poster-lead {
  margin: 0 0 1rem;
  max-width: 52rem;
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-muted);
}

.poster-lead a {
  color: var(--color-primary-soft);
  text-decoration: none;
}

.poster-lead a:hover {
  text-decoration: underline;
}

.poster-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.65rem;
  margin: 0;
}

.poster-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0.95rem;
  border-radius: 8px;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-muted);
  border: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-panel) 80%, transparent);
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
}

.poster-btn:hover {
  color: var(--color-text);
  border-color: var(--color-border-strong);
}

.poster-btn--primary {
  color: var(--color-bg);
  background: color-mix(in srgb, var(--color-ice) 88%, var(--color-panel));
  border-color: color-mix(in srgb, var(--color-ice) 55%, var(--color-border));
}

.poster-btn--primary:hover {
  color: var(--color-bg);
  filter: brightness(1.06);
}

.poster-feature {
  padding: 0.5rem 0 1.75rem;
}

.poster-feature-frame {
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--color-ice) 22%, var(--color-border));
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--color-bg) 40%, transparent),
    0 24px 60px rgba(0, 0, 0, 0.45);
}

.poster-feature-hit {
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  border: none;
  cursor: zoom-in;
  background: var(--color-bg);
}

.poster-feature-hit img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.poster-feature-cap {
  margin: 0;
  padding: 0.75rem 1rem;
  font-size: 0.82rem;
  line-height: 1.45;
  color: var(--color-muted);
  background: color-mix(in srgb, var(--color-panel) 92%, transparent);
  border-top: 1px solid var(--color-border);
}

.poster-grid-section {
  padding: 1rem 0 2rem;
  border-top: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
}

.poster-grid-head h2 {
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  margin-bottom: 0.35rem;
}

.poster-grid-intro {
  margin: 0 0 1.25rem;
  max-width: 44rem;
  font-size: 0.88rem;
  color: var(--color-muted);
  line-height: 1.55;
}

.poster-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: 0.85rem;
}

.poster-tile {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  cursor: zoom-in;
  background: var(--color-panel);
  border: 1px solid var(--color-border);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.poster-tile:hover {
  transform: translateY(-2px);
  border-color: color-mix(in srgb, var(--color-ice) 35%, var(--color-border));
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

.poster-tile img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.poster-tile-index {
  position: absolute;
  top: 0.45rem;
  left: 0.45rem;
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  padding: 0.2rem 0.45rem;
  border-radius: 6px;
  color: var(--color-text);
  background: color-mix(in srgb, var(--color-bg) 72%, transparent);
  border: 1px solid var(--color-border);
}

.poster-footnote {
  margin-top: 0.5rem;
  padding: 1rem 0 0;
  border-top: 1px dashed color-mix(in srgb, var(--color-border) 70%, transparent);
  font-size: 0.78rem;
  line-height: 1.5;
  color: var(--color-muted);
}

.poster-grid-intro a {
  color: var(--color-primary-soft);
  text-decoration: none;
}

.poster-grid-intro a:hover {
  text-decoration: underline;
}

.poster-lightbox {
  width: min(98vw, 1440px);
  max-width: 100%;
  max-height: 96vh;
  padding: 0;
  border: none;
  border-radius: 14px;
  background: color-mix(in srgb, var(--color-panel) 96%, black);
  color: var(--color-text);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.65);
  overflow: hidden;
}

.poster-lightbox::backdrop {
  background: rgba(2, 6, 12, 0.82);
  backdrop-filter: blur(6px);
}

.poster-lightbox-panel {
  display: flex;
  flex-direction: column;
  max-height: 96vh;
  padding: 0.65rem 0.85rem 0.85rem;
  box-sizing: border-box;
  overflow: hidden;
  gap: 0.35rem;
}

.poster-lightbox-toolbar {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.poster-lightbox-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.poster-lightbox-close {
  flex-shrink: 0;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
  font-size: 1.35rem;
  line-height: 1;
  cursor: pointer;
}

.poster-lightbox-close:hover {
  border-color: var(--color-ice);
  color: var(--color-primary-soft);
}

/* Explicit height: % max-height on <img> only works when the parent has a definite block size.
   In dialog + flex, flex:1 often leaves height indefinite → img stays thumbnail-small. */
.poster-lightbox-stage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  height: min(82vh, calc(96vh - 5.5rem));
  min-height: 280px;
  flex-shrink: 0;
}

.poster-lightbox-img {
  /* Fit inside stage minus nav affordance */
  max-width: calc(100% - 6.5rem);
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
}

.poster-lightbox-nav {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-bg) 65%, transparent);
  color: var(--color-primary-soft);
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
}

.poster-lightbox-nav:hover {
  border-color: var(--color-ice);
}

.poster-lightbox-caption {
  flex-shrink: 0;
  margin: 0;
  padding-top: 0.2rem;
  font-size: 0.78rem;
  line-height: 1.4;
  color: var(--color-muted);
  max-height: 3.2em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

@media (max-width: 640px) {
  .poster-lightbox-nav--prev {
    position: absolute;
    left: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  .poster-lightbox-nav--next {
    position: absolute;
    right: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  .poster-lightbox-stage {
    height: min(72vh, calc(96vh - 7rem));
    min-height: 220px;
  }

  .poster-lightbox-img {
    max-width: calc(100% - 5rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .poster-tile {
    transition: none;
  }

  .poster-tile:hover {
    transform: none;
  }
}
</style>
