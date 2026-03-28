<template>
  <article class="guides-list page-article">
    <section class="page-hero-section page-hero-section--compact">
      <div class="container">
        <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true">/</span>
          <span>Road To Vostok Guides</span>
        </nav>
        <h1>Road To Vostok Guides</h1>
        <p class="guides-list__sub">
          Survival tips and progression — short reads. Pair with the
          <RouterLink to="/map">map</RouterLink>,
          <RouterLink to="/tasks">tasks</RouterLink>, and
          <RouterLink to="/wiki">item database</RouterLink>. Confirm details in your installed build.
        </p>
      </div>
    </section>

    <section class="guides-list__body" aria-label="Articles">
      <div class="container">
        <ul class="guides-grid" role="list">
          <li v-for="a in sorted" :key="a.id">
            <RouterLink :to="`/guides/${a.addressBar}`" class="guides-card">
              <div class="guides-card__media">
                <img
                  :src="a.imageUrl"
                  :alt="a.imageAlt"
                  width="640"
                  height="360"
                  loading="lazy"
                  decoding="async"
                >
              </div>
              <div class="guides-card__body">
                <div class="guides-card__meta">
                  <time :datetime="a.publishDate">{{ a.publishDate }}</time>
                  <span v-if="a.tags?.length" class="guides-card__tags">
                    <span v-for="t in a.tags" :key="t" class="guides-card__tag">{{ t }}</span>
                  </span>
                </div>
                <h2 class="guides-card__title">{{ a.title }}</h2>
                <p class="guides-card__excerpt">{{ excerpt(a) }}</p>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import guideArticles from '../../data/guides/articles.js'

const sorted = computed(() =>
  [...guideArticles].sort((a, b) => b.publishDate.localeCompare(a.publishDate)),
)

function excerpt(item) {
  return item?.seo?.description || ''
}
</script>

<style scoped>
.guides-list__sub {
  margin: 0.5rem 0 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--color-muted);
}

.guides-list__body {
  padding: 1rem 0 2.5rem;
}

.guides-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 240px), 1fr));
}

.guides-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--color-border) 92%, transparent);
  background: color-mix(in srgb, var(--color-panel) 45%, transparent);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 0.15s ease,
    background 0.15s ease,
    box-shadow 0.15s ease;
}

.guides-card:hover {
  border-color: color-mix(in srgb, var(--color-ice) 25%, var(--color-border));
  background: color-mix(in srgb, var(--color-panel) 70%, transparent);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

/* 上图 */
.guides-card__media {
  aspect-ratio: 16 / 9;
  background: var(--color-bg);
  overflow: hidden;
}

.guides-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 下文 */
.guides-card__body {
  padding: 0.75rem 0.85rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  flex: 1;
}

.guides-card__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.45rem;
}

.guides-card__meta time {
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.guides-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
}

.guides-card__tag {
  font-size: 0.55rem;
  padding: 0.1rem 0.32rem;
  border-radius: 2px;
  border: 1px solid color-mix(in srgb, var(--color-border) 88%, transparent);
  color: var(--color-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: var(--font-display);
}

.guides-card__title {
  margin: 0;
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.02em;
  text-transform: none;
  color: var(--color-text);
}

.guides-card__excerpt {
  margin: 0;
  font-size: 0.76rem;
  line-height: 1.45;
  color: var(--color-muted);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

@media (prefers-reduced-motion: reduce) {
  .guides-card {
    transition: none;
  }
}
</style>
