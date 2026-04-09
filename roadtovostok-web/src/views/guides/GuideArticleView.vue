<template>
  <article
    v-if="article"
    :key="article.addressBar"
    ref="guideArticleAdsRoot"
    class="content-article page-article"
  >
    <header class="page-hero-section page-hero-section--compact page-hero-section--detail">
      <div class="container article-detail-hero">
        <div
          ref="guideArticleGptRoot"
          id="div-gpt-ad-1775617033282-0"
          style="min-width: 320px; min-height: 50px"
        ></div>
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
            <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
            <span aria-hidden="true">/</span>
            <a :href="getLocalizedPath('/guides')">{{ $t('guideArticlePage.breadcrumbGuides') }}</a>
            <span aria-hidden="true">/</span>
            <span class="page-hero-breadcrumb-current">{{ article.title }}</span>
          </nav>
          <h1 class="article-detail-hero__title">{{ article.title }}</h1>
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
    </header>

    <div class="article-split-wrap">
      <div class="container article-split">
        <main class="article-split__main">
          <div
            class="article-body content-prose"
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

        <aside class="article-split__aside" :aria-label="$t('guideArticlePage.asideAria')">
          <div class="aside-stack">
            <figure class="aside-cover">
              <img
                :src="article.imageUrl"
                :alt="article.imageAlt"
                width="640"
                height="360"
                loading="lazy"
                decoding="async"
              >
            </figure>

            <div class="aside-block">
              <p class="aside-block__label">{{ $t('guideArticlePage.asideSummary') }}</p>
              <p class="aside-block__summary">{{ summaryText }}</p>
            </div>

            <div class="aside-meta">
              <div>
                <p class="aside-meta__label">{{ $t('guideArticlePage.asideUpdated') }}</p>
                <time class="aside-meta__value" :datetime="article.publishDate">{{ article.publishDate }}</time>
              </div>
              <div v-if="article.tags?.length" class="aside-meta__tags">
                <p class="aside-meta__label">{{ $t('guideArticlePage.asideTags') }}</p>
                <ul class="aside-taglist">
                  <li v-for="t in article.tags" :key="t">{{ t }}</li>
                </ul>
              </div>
            </div>

            <div class="aside-more">
              <p class="aside-more__label">{{ $t('guideArticlePage.asideMoreGuides') }}</p>
              <ul class="aside-more__list">
                <li v-for="l in asideItems" :key="l.to">
                  <a :href="l.to">{{ l.label }}</a>
                </li>
              </ul>
              <a :href="getLocalizedPath('/guides')" class="aside-more__all">{{ $t('guideArticlePage.asideAllGuides') }}</a>
            </div>

            <div
              class="article-aside-ad"
              style="width: 100%; margin: 1rem auto 0; padding: 0.75rem 0; text-align: center"
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
            </div>
          </div>
        </aside>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, watch, ref, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getGuideArticles } from '../../data/localeData.js'
import { useLocalizedPath } from '../../composables/useLocalizedPath.js'

const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const guideArticles = computed(() => getGuideArticles(locale.value))
import { getByAddressBar } from '../../utils/contentLookup.js'
import { useHtmlContentLinkNavigation } from '../../composables/htmlContentLinks.js'
import { useInjectedHeadFragment } from '../../composables/useInjectedHeadFragment.js'
import { applyDynamicSeo } from '../../seo/composables.js'

const { onContentLinkClick } = useHtmlContentLinkNavigation()

const guideArticleAdsRoot = ref(null)
const guideArticleGptRoot = ref(null)

function mountGuideArticleGptDisplay() {
  const root = guideArticleGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushGuideArticleAdx() {
  const root = guideArticleAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('GuideArticle ADX push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountGuideArticleGptDisplay()
  } catch (e) {
    console.error('GuideArticle GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushGuideArticleAdx()
    } catch (e) {
      console.error('GuideArticle ADX failed:', e)
    }
  })
})

const route = useRoute()
const router = useRouter()

const article = computed(() => getByAddressBar(guideArticles.value, route.params.addressBar))

/** Optional HTML fragment for document.head (JSON-LD, extra meta/link/style). */
useInjectedHeadFragment(() => article.value?.head)

const summaryText = computed(() => article.value?.seo?.description || '')

const asideItems = computed(() => {
  const cur = article.value?.addressBar
  return guideArticles.value
    .filter((a) => a.addressBar !== cur)
    .slice(0, 6)
    .map((a) => ({ label: a.title, to: getLocalizedPath(`/guides/${a.addressBar}`) }))
})

watch(
  () => route.params.addressBar,
  (segment) => {
    const s = String(segment || '')
    if (s && !getByAddressBar(guideArticles.value, s)) {
      router.replace(getLocalizedPath('/guides'))
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

.article-split-wrap {
  padding: 2rem 0 2.75rem;
}

.article-split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(240px, 300px);
  gap: 1.25rem 1.75rem;
  align-items: start;
}

.article-split__main {
  min-width: 0;
}

.article-body {
  padding: 1rem 1.05rem 1.15rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-border) 90%, transparent);
  background: color-mix(in srgb, var(--color-panel) 35%, transparent);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.article-split__aside {
  min-width: 0;
  position: sticky;
  top: var(--app-header-sticky-offset);
}

.aside-stack {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.aside-cover {
  margin: 0;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--color-ice) 15%, var(--color-border));
  background: var(--color-bg);
  aspect-ratio: 16 / 10;
}

.aside-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.aside-block {
  padding: 0.75rem 0.85rem;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--color-border) 92%, transparent);
  background: color-mix(in srgb, var(--color-panel) 50%, transparent);
}

.aside-block__label {
  margin: 0 0 0.4rem;
  font-family: var(--font-display);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.aside-block__summary {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: color-mix(in srgb, var(--color-muted) 88%, var(--color-text));
}

.aside-meta {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: 0.65rem 0.85rem;
  border-radius: 8px;
  border: 1px dashed color-mix(in srgb, var(--color-border) 85%, transparent);
  font-size: 0.78rem;
}

.aside-meta__label {
  margin: 0 0 0.2rem;
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.aside-meta__value {
  color: var(--color-text);
  font-weight: 500;
}

.aside-taglist {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.aside-taglist li {
  padding: 0.12rem 0.4rem;
  border-radius: 2px;
  border: 1px solid var(--color-border);
  font-size: 0.68rem;
  color: var(--color-muted);
}

.aside-more {
  padding: 0.75rem 0.85rem 0.85rem;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--color-ice) 12%, var(--color-border));
  background: color-mix(in srgb, var(--color-panel) 40%, transparent);
}

.aside-more__label {
  margin: 0 0 0.5rem;
  font-family: var(--font-journey);
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.aside-more__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.aside-more__list a {
  font-size: 0.78rem;
  line-height: 1.35;
  color: var(--color-primary-soft);
  text-decoration: none;
}

.aside-more__list a:hover {
  color: var(--color-signal-soft);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.aside-more__all {
  display: inline-block;
  margin-top: 0.65rem;
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
}

.aside-more__all:hover {
  color: var(--color-primary-soft);
}

@media (max-width: 1023px) {
  .article-split {
    grid-template-columns: 1fr;
  }

  .article-split__aside {
    order: -1;
    position: static;
  }
}
</style>
