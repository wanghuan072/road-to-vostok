<template>
  <article
    v-if="article"
    :key="article.addressBar"
    ref="modArticleAdsRoot"
    class="content-article content-article--mods mod-detail page-article"
  >
    <header class="page-hero-section page-hero-section--compact page-hero-section--mods page-hero-section--detail">
      <div class="container">
        <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/mods">Mods</a>
          <span aria-hidden="true">/</span>
          <span class="page-hero-breadcrumb-current">{{ article.title }}</span>
        </nav>
        <div class="mod-detail__hero-pills">
          <span v-if="article.author" class="mod-detail__pill">By {{ article.author }}</span>
          <span v-if="article.version" class="mod-detail__pill mod-detail__pill--version">v{{ article.version }}</span>
          <span v-if="article.loaderName" class="mod-detail__pill mod-detail__pill--muted">{{ article.loaderName }}</span>
        </div>
        <h1 class="article-detail-hero__title mod-detail__hero-title">{{ article.title }}</h1>

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
        ref="modArticleGptRoot"
        id="div-gpt-ad-1775617033282-0"
        style="min-width: 320px; min-height: 50px"
      ></div>
    </div>

    <div class="mod-detail__body-wrap">
      <div class="container mod-detail__layout">
        <main class="mod-detail__main">
          <div
            class="mod-detail__prose article-body article-body--mods content-prose"
            v-html="article.detailsHtml"
            @click="onContentLinkClick"
          />

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
        </main>

        <aside class="mod-detail__aside" aria-label="Mod facts">
          <div class="mod-detail__aside-stack">
            <figure class="mod-detail__cover">
              <img
                :src="article.imageUrl"
                :alt="article.imageAlt"
                width="640"
                height="400"
                loading="lazy"
                decoding="async"
              >
            </figure>

            <div v-if="article.externalUrl" class="mod-detail__aside-cta-wrap">
              <a
                class="mod-detail__aside-cta"
                :href="article.externalUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open on ModWorkshop
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div v-if="article.seo?.description" class="mod-detail__aside-block">
              <p class="mod-detail__aside-label">Summary</p>
              <p class="mod-detail__aside-summary">{{ article.seo.description }}</p>
            </div>

            <dl v-if="hasStats" class="mod-detail__stats">
              <div v-if="statDownloads" class="mod-detail__stat">
                <dt>Downloads</dt>
                <dd>{{ statDownloads }}</dd>
              </div>
              <div v-if="statViews" class="mod-detail__stat">
                <dt>Views</dt>
                <dd>{{ statViews }}</dd>
              </div>
            </dl>

            <div v-if="article.publishDate" class="mod-detail__aside-block">
              <p class="mod-detail__aside-label">Listing date</p>
              <time class="mod-detail__aside-value" :datetime="article.publishDate">{{ article.publishDate }}</time>
            </div>

            <div v-if="article.tags?.length" class="mod-detail__aside-block">
              <p class="mod-detail__aside-label">Tags</p>
              <ul class="mod-detail__taglist">
                <li v-for="t in article.tags" :key="t">{{ t }}</li>
              </ul>
            </div>

            <div v-if="article.comments?.length" class="mod-detail__aside-comments" aria-label="Community notes">
              <p class="mod-detail__aside-label">Community notes</p>
              <p class="mod-detail__comments-disclosure">
                Short summaries for context—not verbatim Workshop posts.
              </p>
              <ul class="mod-detail__comment-cards" role="list">
                <li v-for="(c, ci) in article.comments" :key="ci" class="mod-detail__comment-card">
                  <p class="mod-detail__comment-body">“{{ c.body }}”</p>
                  <p class="mod-detail__comment-meta">
                    <span class="mod-detail__comment-author">{{ c.author }}</span>
                  </p>
                </li>
              </ul>
            </div>

            <div v-if="asideItems.length" class="mod-detail__aside-more">
              <p class="mod-detail__aside-more-label">More on this site</p>
              <ul class="mod-detail__aside-more-list">
                <li v-for="l in asideItems" :key="l.to">
                  <a :href="l.to">{{ l.label }}</a>
                </li>
              </ul>
              <a href="/mods" class="mod-detail__aside-more-all">All mods</a>
            </div>
          </div>
        </aside>
      </div>

      <div class="container">
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
  </article>
</template>

<script setup>
import { computed, watch, ref, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import modArticles from '../../data/mods/mods.js'
import { getByAddressBar } from '../../utils/contentLookup.js'
import { useHtmlContentLinkNavigation } from '../../composables/htmlContentLinks.js'
import { applyDynamicSeo } from '../../seo/composables.js'

const { onContentLinkClick } = useHtmlContentLinkNavigation()

const modArticleAdsRoot = ref(null)
const modArticleGptRoot = ref(null)

function mountModArticleGptDisplay() {
  const root = modArticleGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushModArticleAdx() {
  const root = modArticleAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('ModArticle ADX push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountModArticleGptDisplay()
  } catch (e) {
    console.error('ModArticle GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushModArticleAdx()
    } catch (e) {
      console.error('ModArticle ADX failed:', e)
    }
  })
})

const route = useRoute()
const router = useRouter()

const article = computed(() => getByAddressBar(modArticles, route.params.addressBar))

function statStr(v) {
  const s = v == null ? '' : String(v).trim()
  return s || ''
}

const statDownloads = computed(() => statStr(article.value?.stats?.downloads))
const statViews = computed(() => statStr(article.value?.stats?.views))

const hasStats = computed(() => Boolean(statDownloads.value || statViews.value))

const asideItems = computed(() => {
  const cur = article.value?.addressBar
  return modArticles
    .filter((a) => a.addressBar !== cur)
    .slice(0, 8)
    .map((a) => ({ label: a.title, to: `/mods/${a.addressBar}` }))
})

watch(
  () => route.params.addressBar,
  (segment) => {
    const s = String(segment || '')
    if (s && !getByAddressBar(modArticles, s)) {
      router.replace('/mods')
    }
  },
  { immediate: true },
)

watch(
  article,
  (a) => {
    if (!a) return
    applyDynamicSeo({
      path: route.path,
      seo: {
        ...a.seo,
        image: a.imageUrl,
      },
      ogImageAlt: a.imageAlt,
    })
  },
  { immediate: true, flush: 'post' },
)
</script>

<style scoped>
.page-hero-breadcrumb-current {
  color: color-mix(in srgb, var(--color-text) 55%, var(--color-muted));
  max-width: min(28ch, 100%);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 覆盖 page-hero.css 中 detail 标题的 max-width，宽度随 .container */
.page-hero-section--detail .article-detail-hero__title.mod-detail__hero-title {
  max-width: none;
}

.mod-detail__hero-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.5rem;
  margin: 0 0 0.65rem;
}

.mod-detail__pill {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-amber) 40%, var(--color-text));
  border: 1px solid color-mix(in srgb, var(--color-amber) 35%, var(--color-border));
  background: color-mix(in srgb, var(--color-amber) 6%, var(--color-panel));
}

.mod-detail__pill--version {
  color: var(--color-text);
  border-color: color-mix(in srgb, var(--color-ice) 25%, var(--color-border));
  background: color-mix(in srgb, var(--color-ice) 8%, var(--color-panel));
}

.mod-detail__pill--muted {
  color: var(--color-muted);
  border-color: var(--color-border);
  background: color-mix(in srgb, var(--color-panel) 55%, transparent);
}

.mod-detail__body-wrap {
  padding: 2rem 0 3rem;
}

.mod-detail__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 320px);
  gap: 2rem 2.25rem;
  align-items: start;
}

.mod-detail__main {
  min-width: 0;
}

.mod-detail__prose {
  padding: 1.1rem 1.15rem 1.25rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-amber) 14%, var(--color-border));
  background: color-mix(in srgb, var(--color-panel) 38%, transparent);
}

.mod-detail__aside {
  min-width: 0;
  position: sticky;
  top: var(--app-header-sticky-offset);
}

@media (max-width: 1023px) {
  .mod-detail__layout {
    display: flex;
    flex-direction: column;
  }

  .mod-detail__aside {
    order: -1;
    position: static;
  }
}

.mod-detail__aside-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mod-detail__cover {
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--color-amber) 24%, var(--color-border));
  background: var(--color-bg);
  aspect-ratio: 16 / 10;
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--color-ice) 10%, transparent),
    0 20px 48px rgba(0, 0, 0, 0.32);
}

.mod-detail__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.mod-detail__aside-cta-wrap {
  margin: -0.25rem 0 0;
}

.mod-detail__aside-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 100%;
  padding: 0.65rem 1rem;
  border-radius: 8px;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  color: var(--color-bg);
  background: color-mix(in srgb, var(--color-amber) 82%, #1c1610);
  border: 1px solid color-mix(in srgb, var(--color-amber) 40%, transparent);
  transition: filter 0.15s ease;
}

.mod-detail__aside-cta:hover {
  filter: brightness(1.08);
}

.mod-detail__aside-summary {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.52;
  color: color-mix(in srgb, var(--color-muted) 88%, var(--color-text));
}

.mod-detail__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.65rem;
  margin: 0;
  padding: 0.75rem 0.85rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-amber) 16%, var(--color-border));
  background: color-mix(in srgb, var(--color-panel) 45%, transparent);
}

.mod-detail__stat {
  margin: 0;
  text-align: center;
}

.mod-detail__stat dt {
  margin: 0 0 0.2rem;
  font-family: var(--font-journey);
  font-size: 0.55rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.mod-detail__stat dd {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 650;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

.mod-detail__aside-block {
  padding: 0.75rem 0.9rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-border) 90%, transparent);
  background: color-mix(in srgb, var(--color-panel) 38%, transparent);
}

.mod-detail__aside-label {
  margin: 0 0 0.35rem;
  font-family: var(--font-journey);
  font-size: 0.55rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.mod-detail__aside-value {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.45;
  color: var(--color-text);
}

.mod-detail__taglist {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.mod-detail__taglist li {
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, var(--color-amber) 18%, var(--color-border));
  font-size: 0.68rem;
  color: var(--color-muted);
}

.mod-detail__aside-comments {
  padding: 0.85rem 0.95rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-ice) 14%, var(--color-border));
  background: color-mix(in srgb, var(--color-panel) 42%, transparent);
}

.mod-detail__comments-disclosure {
  margin: 0 0 0.75rem;
  font-size: 0.68rem;
  line-height: 1.45;
  color: var(--color-muted);
}

.mod-detail__comment-cards {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.mod-detail__comment-card {
  margin: 0;
  padding: 0.65rem 0.75rem;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--color-border) 88%, transparent);
  background: color-mix(in srgb, var(--color-bg) 35%, var(--color-panel));
}

.mod-detail__comment-body {
  margin: 0 0 0.4rem;
  font-size: 0.8rem;
  line-height: 1.5;
  color: color-mix(in srgb, var(--color-text) 90%, var(--color-muted));
  font-style: italic;
}

.mod-detail__comment-meta {
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.55rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.mod-detail__aside-more {
  padding: 0.85rem 0.95rem;
  border-radius: 10px;
  border: 1px dashed color-mix(in srgb, var(--color-amber) 22%, var(--color-border));
  background: color-mix(in srgb, var(--color-panel) 32%, transparent);
}

.mod-detail__aside-more-label {
  margin: 0 0 0.5rem;
  font-family: var(--font-journey);
  font-size: 0.55rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.mod-detail__aside-more-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.mod-detail__aside-more-list a {
  font-size: 0.8rem;
  color: var(--color-primary-soft);
  text-decoration: none;
}

.mod-detail__aside-more-list a:hover {
  color: color-mix(in srgb, var(--color-amber) 45%, var(--color-signal-soft));
  text-decoration: underline;
  text-underline-offset: 2px;
}

.mod-detail__aside-more-all {
  display: inline-block;
  margin-top: 0.65rem;
  font-family: var(--font-display);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
}

.mod-detail__aside-more-all:hover {
  color: color-mix(in srgb, var(--color-amber) 50%, var(--color-primary-soft));
}

</style>
