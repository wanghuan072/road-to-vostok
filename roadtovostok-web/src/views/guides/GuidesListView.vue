<template>
  <article ref="guidesListAdsRoot" class="guides-list page-article">
    <section class="page-hero-section page-hero-section--compact">
      <div class="container">
        <div
          ref="guidesListGptRoot"
          id="div-gpt-ad-1775617033282-0"
          style="min-width: 320px; min-height: 50px"
        ></div>
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
            <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
            <span aria-hidden="true">/</span>
            <span>{{ $t('guidesListPage.breadcrumb') }}</span>
          </nav>
          <h1>{{ $t('guidesListPage.title') }}</h1>
          <p class="guides-list__sub" v-html="$t('guidesListPage.subHtml')"></p>
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

    <section class="guides-list__body" :aria-label="$t('guidesListPage.articlesAria')">
      <div class="container">
        <ul class="guides-grid" role="list">
          <li v-for="a in sorted" :key="a.id">
            <a :href="getLocalizedPath(`/guides/${a.addressBar}`)" class="guides-card">
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
            </a>
          </li>
        </ul>

        <aside
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
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed, ref, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { getGuideArticles } from '../../data/localeData.js'
import { useLocalizedPath } from '../../composables/useLocalizedPath.js'

const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const guideArticles = computed(() => getGuideArticles(locale.value))

const guidesListAdsRoot = ref(null)
const guidesListGptRoot = ref(null)

function mountGuidesListGptDisplay() {
  const root = guidesListGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushGuidesListAdx() {
  const root = guidesListAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('GuidesList ADX push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountGuidesListGptDisplay()
  } catch (e) {
    console.error('GuidesList GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushGuidesListAdx()
    } catch (e) {
      console.error('GuidesList ADX failed:', e)
    }
  })
})

const sorted = computed(() =>
  [...guideArticles.value].sort((a, b) => b.publishDate.localeCompare(a.publishDate)),
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
  grid-template-columns: repeat(3, 1fr);
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
