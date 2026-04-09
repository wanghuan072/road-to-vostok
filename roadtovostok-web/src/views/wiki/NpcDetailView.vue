<template>
  <article
    v-if="npc"
    :key="npc.addressBar"
    ref="npcDetailAdsRoot"
    class="npc-detail-page"
    :data-npc="npc.addressBar"
  >
    <header class="npc-hero">
      <div
        class="npc-hero__glow"
        aria-hidden="true"
      />
      <div class="container npc-hero__wrap">
        <div
          ref="npcDetailGptRoot"
          id="div-gpt-ad-1775617033282-0"
          style="min-width: 320px; min-height: 50px"
        ></div>
        <div class="page-hero-content">
          <nav
            class="npc-breadcrumb"
            :aria-label="$t('site.breadcrumbAriaLabel')"
          >
            <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
            <span aria-hidden="true">/</span>
            <a :href="getLocalizedPath('/wiki')">{{ $t('site.navWiki') }}</a>
            <span aria-hidden="true">/</span>
            <a :href="getLocalizedPath('/wiki/npcs')">{{ $t('npcListPage.breadcrumb') }}</a>
            <span aria-hidden="true">/</span>
            <span class="npc-breadcrumb__current">{{ npc.title }}</span>
          </nav>

          <div class="npc-hero__grid">
            <div class="npc-hero__copy">
              <p class="npc-hero__role">
                {{ npc.role }}
              </p>
              <h1 class="npc-hero__title">
                {{ npc.title }}
              </h1>
              <p class="npc-hero__summary">
                {{ npc.summary }}
              </p>
              <div class="npc-hero__actions">
                <a
                  :href="
                    npc.mapLocationId
                      ? getLocalizedPath(`/map?loc=${encodeURIComponent(npc.mapLocationId)}`)
                      : getLocalizedPath('/map')
                  "
                  class="npc-btn npc-btn--solid"
                >
                  {{ npc.mapLocationId ? $t('npcDetailPage.showOnMap') : $t('npcDetailPage.openMap') }}
                </a>
              </div>
            </div>

            <div
              v-if="npc.imageUrl"
              class="npc-hero__visual"
            >
              <div class="npc-hero__frame">
                <div class="npc-hero__frame-inner">
                  <img
                    :src="npc.imageUrl"
                    :alt="npc.imageAlt || ''"
                    width="480"
                    height="480"
                    loading="eager"
                    decoding="async"
                    class="npc-hero__img"
                  >
                </div>
                <p class="npc-hero__caption">
                  {{ $t('npcDetailPage.imageCaption') }}
                </p>
              </div>
            </div>
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
    </header>

    <div class="npc-main">
      <div class="container npc-main__grid">
        <main class="npc-main__article">
          <div class="npc-sheet">
            <div
              class="npc-sheet__body npc-detail-rich"
              v-html="npc.detailsHtml"
              @click="onContentLinkClick"
            />
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
        </main>

        <aside
          class="npc-main__rail"
          :aria-label="$t('npcDetailPage.articleAsideAria')"
        >
          <div
            v-if="hasLocationRail"
            class="npc-rail-card npc-rail-card--location"
          >
            <p class="npc-rail-card__label">
              Location
            </p>
            <p
              v-if="npc.location?.title"
              class="npc-rail-card__place"
            >
              {{ npc.location.title }}
            </p>
            <figure
              v-if="npc.location?.imageUrl"
              class="npc-rail-card__figure"
            >
              <img
                :src="npc.location.imageUrl"
                :alt="npc.location.imageAlt || ''"
                width="520"
                height="292"
                loading="lazy"
                decoding="async"
                class="npc-rail-card__map-img"
              >
            </figure>
            <p
              v-if="npc.location?.content"
              class="npc-rail-card__text"
            >
              {{ npc.location.content }}
            </p>
            <a
              v-if="npc.mapLocationId"
              :href="getLocalizedPath(`/map?loc=${encodeURIComponent(npc.mapLocationId)}`)"
              class="npc-rail-card__map-link"
            >
              {{ $t('npcDetailPage.showOnMap') }}
            </a>
          </div>

          <div class="npc-rail-card">
            <p class="npc-rail-card__label">
              {{ $t('npcDetailPage.moreNpcs') }}
            </p>
            <ul class="npc-rail-list">
              <li
                v-for="r in relatedNpcs"
                :key="r.to"
              >
                <a
                  :href="r.to"
                  class="npc-rail-list__link"
                >{{ r.title }}</a>
                <span class="npc-rail-list__meta">{{ r.role }}</span>
              </li>
            </ul>
          </div>

          <div
            class="npc-rail-ad"
            style="width: 100%; margin: 1rem 0 0; padding: 0.75rem 0; text-align: center"
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
        </aside>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, watch, ref, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getNpcList } from '../../data/localeData.js'
import { getByAddressBar } from '../../utils/contentLookup.js'
import { useHtmlContentLinkNavigation } from '../../composables/htmlContentLinks.js'
import { useLocalizedPath } from '../../composables/useLocalizedPath.js'
import { applyDynamicSeo } from '../../seo/composables.js'

const { onContentLinkClick } = useHtmlContentLinkNavigation()
const { getLocalizedPath } = useLocalizedPath()

const npcDetailAdsRoot = ref(null)
const npcDetailGptRoot = ref(null)

function mountNpcDetailGptDisplay() {
  const root = npcDetailGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushNpcDetailAdx() {
  const root = npcDetailAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('NpcDetail ADX push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountNpcDetailGptDisplay()
  } catch (e) {
    console.error('NpcDetail GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushNpcDetailAdx()
    } catch (e) {
      console.error('NpcDetail ADX failed:', e)
    }
  })
})

const route = useRoute()
const router = useRouter()
const { locale } = useI18n()
const npcList = computed(() => getNpcList(locale.value))

const npc = computed(() => getByAddressBar(npcList.value, route.params.addressBar))

/** Sidebar location block: `npc.location` from npcs/en.js `{ title, imageUrl, imageAlt, content }`. */
const hasLocationRail = computed(() => {
  const loc = npc.value?.location
  if (!loc || typeof loc !== 'object') return false
  return Boolean(loc.title || loc.imageUrl || loc.content)
})

const relatedNpcs = computed(() => {
  const cur = npc.value?.addressBar
  return npcList.value
    .filter((n) => n.addressBar !== cur)
    .map((n) => ({
      title: n.title,
      role: n.role,
      to: getLocalizedPath(`/wiki/npcs/${n.addressBar}`),
    }))
})

watch(
  () => route.params.addressBar,
  (segment) => {
    const s = String(segment || '')
    if (s && !getByAddressBar(npcList.value, s)) {
      router.replace(getLocalizedPath('/wiki/npcs'))
    }
  },
  { immediate: true },
)

watch(
  npc,
  (n) => {
    if (!n) return
    applyDynamicSeo({
      path: route.path,
      seo: {
        ...n.seo,
        image: n.imageUrl,
      },
      ogImageAlt: n.imageAlt,
    })
  },
  { immediate: true, flush: 'post' },
)
</script>

<style scoped>
.npc-detail-page {
  --npc-accent: color-mix(in srgb, var(--color-frost) 82%, var(--color-primary-soft));
  --npc-accent-dim: color-mix(in srgb, var(--npc-accent) 35%, transparent);
  padding-bottom: 3.5rem;
}

.npc-detail-page[data-npc='bandits'] {
  --npc-accent: color-mix(in srgb, var(--color-rust-bright) 75%, #c44);
  --npc-accent-dim: color-mix(in srgb, var(--color-rust) 28%, transparent);
}

.npc-detail-page[data-npc='doctor'] {
  --npc-accent: color-mix(in srgb, var(--color-frost) 55%, #5a9e9e);
  --npc-accent-dim: color-mix(in srgb, var(--npc-accent) 32%, transparent);
}

/* —— Hero —— */
.npc-hero {
  position: relative;
  padding: clamp(1.25rem, 3vw, 2rem) 0 clamp(2rem, 4vw, 3rem);
  margin-bottom: clamp(1.5rem, 3vw, 2.25rem);
  overflow: hidden;
}

.npc-hero__glow {
  position: absolute;
  inset: -40% -20% auto -20%;
  height: 85%;
  background:
    radial-gradient(ellipse 70% 60% at 18% 40%, var(--npc-accent-dim), transparent 55%),
    radial-gradient(ellipse 50% 45% at 85% 20%, color-mix(in srgb, var(--color-rust) 12%, transparent), transparent 50%),
    linear-gradient(180deg, color-mix(in srgb, var(--color-panel) 55%, transparent), transparent);
  pointer-events: none;
}

.npc-hero__wrap {
  position: relative;
  z-index: 1;
}

.npc-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.5rem;
  margin: 0 0 1.25rem;
  font-size: 0.78rem;
  color: var(--color-muted);
}

.npc-breadcrumb a {
  color: var(--color-primary-soft);
  text-decoration: none;
}

.npc-breadcrumb a:hover {
  color: var(--color-signal-soft);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.npc-breadcrumb__current {
  color: color-mix(in srgb, var(--color-text) 45%, var(--color-muted));
  max-width: min(36ch, 100%);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.npc-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(260px, 0.85fr);
  gap: clamp(1.5rem, 4vw, 2.75rem);
  align-items: center;
}

@media (max-width: 1023px) {
  .npc-hero__grid {
    grid-template-columns: 1fr;
  }
}

.npc-hero__role {
  margin: 0 0 0.5rem;
  font-family: var(--font-journey);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--npc-accent);
}

.npc-hero__title {
  margin: 0 0 0.65rem;
  font-family: var(--font-display);
  font-size: clamp(1.85rem, 4.2vw, 2.65rem);
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.08;
  color: var(--color-text);
  text-shadow: 0 1px 24px color-mix(in srgb, var(--npc-accent) 15%, transparent);
}

.npc-hero__summary {
  margin: 0 0 1.35rem;
  max-width: 54ch;
  font-size: 0.98rem;
  line-height: 1.62;
  color: var(--color-muted);
}

.npc-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem 0.65rem;
}

.npc-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.55rem 1rem;
  border-radius: 10px;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition:
    background 0.18s ease,
    border-color 0.18s ease,
    color 0.18s ease,
    box-shadow 0.18s ease;
}

.npc-btn--solid {
  border: 1px solid color-mix(in srgb, var(--npc-accent) 45%, var(--color-border));
  background: linear-gradient(
    165deg,
    color-mix(in srgb, var(--npc-accent) 22%, var(--color-panel)),
    color-mix(in srgb, var(--color-panel) 88%, #000)
  );
  color: var(--color-text);
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.28);
}

.npc-btn--solid:hover {
  border-color: color-mix(in srgb, var(--npc-accent) 65%, transparent);
  color: var(--color-signal-soft);
}

.npc-hero__visual {
  justify-self: end;
  width: 100%;
  max-width: 380px;
}

@media (max-width: 1023px) {
  .npc-hero__visual {
    justify-self: start;
    max-width: 320px;
  }
}

.npc-hero__frame {
  position: relative;
}

.npc-hero__frame-inner {
  border-radius: 16px;
  padding: 3px;
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--npc-accent) 55%, transparent),
    color-mix(in srgb, var(--color-border) 70%, transparent) 50%,
    color-mix(in srgb, var(--npc-accent) 25%, transparent)
  );
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 color-mix(in srgb, #fff 6%, transparent);
}

.npc-hero__img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 13px;
  background: var(--color-panel);
}

.npc-hero__caption {
  margin: 0.55rem 0 0;
  font-size: 0.7rem;
  line-height: 1.4;
  color: var(--color-muted);
  letter-spacing: 0.04em;
}

/* —— Main grid —— */
.npc-main__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 280px);
  gap: clamp(1.25rem, 3vw, 2rem);
  align-items: start;
}

@media (max-width: 1023px) {
  .npc-main__grid {
    grid-template-columns: 1fr;
  }

  .npc-main__rail {
    order: -1;
  }
}

.npc-sheet {
  border-radius: 16px;
  border: 1px solid color-mix(in srgb, var(--color-border) 88%, var(--npc-accent));
  background: linear-gradient(
    165deg,
    color-mix(in srgb, var(--color-panel) 92%, #000) 0%,
    color-mix(in srgb, var(--color-surface) 96%, transparent) 100%
  );
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
}

.npc-sheet__body {
  padding: clamp(1.25rem, 2.5vw, 2rem) clamp(1.15rem, 2.5vw, 1.85rem) clamp(1.5rem, 3vw, 2.25rem);
}

.npc-main__rail {
  position: sticky;
  top: var(--app-header-sticky-offset);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 1023px) {
  .npc-main__rail {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .npc-rail-card {
    flex: 1 1 240px;
  }
}

.npc-rail-card {
  padding: 1rem 1.1rem;
  border-radius: 12px;
  border: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
  background: color-mix(in srgb, var(--color-panel) 45%, var(--color-surface));
}

.npc-rail-card--location {
  border-color: color-mix(in srgb, var(--npc-accent) 28%, var(--color-border));
  background: linear-gradient(
    160deg,
    color-mix(in srgb, var(--npc-accent) 8%, var(--color-panel)),
    color-mix(in srgb, var(--color-panel) 70%, transparent)
  );
}

.npc-rail-card__place {
  margin: 0 0 0.55rem;
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 650;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text);
  line-height: 1.25;
}

.npc-rail-card__figure {
  margin: 0 0 0.65rem;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--color-border) 82%, var(--npc-accent));
  background: var(--color-bg);
}

.npc-rail-card__map-img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.npc-rail-card__map-link {
  display: inline-flex;
  margin-top: 0.65rem;
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-primary-soft);
  border-bottom: 1px solid color-mix(in srgb, var(--color-primary-soft) 35%, transparent);
  padding-bottom: 1px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.npc-rail-card__map-link:hover {
  color: var(--color-signal-soft);
  border-bottom-color: color-mix(in srgb, var(--color-signal) 45%, transparent);
}

.npc-rail-card__label {
  margin: 0 0 0.45rem;
  font-family: var(--font-journey);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--npc-accent);
}

.npc-rail-card__text {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--color-muted);
}

.npc-rail-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.npc-rail-list__link {
  display: block;
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-text);
  text-decoration: none;
  letter-spacing: 0.03em;
}

.npc-rail-list__link:hover {
  color: var(--npc-accent);
}

.npc-rail-list__meta {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.68rem;
  line-height: 1.35;
  color: var(--color-muted);
}

/* —— Rich article (v-html) —— */
.npc-detail-rich :deep(.npc-lead) {
  margin: 0 0 1rem;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  border-left: 3px solid var(--npc-accent);
  background: color-mix(in srgb, var(--npc-accent) 6%, var(--color-panel));
  font-size: 0.98rem;
  line-height: 1.58;
  color: color-mix(in srgb, var(--color-text) 70%, var(--color-muted));
}

.npc-detail-rich :deep(.npc-see-also) {
  margin: 0 0 1.35rem;
  font-size: 0.88rem;
  color: var(--color-muted);
}

.npc-detail-rich :deep(.npc-muted) {
  font-size: 0.84rem;
  color: var(--color-muted);
  font-style: italic;
}

.npc-detail-rich :deep(h2) {
  margin: 2rem 0 0.75rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid color-mix(in srgb, var(--npc-accent) 22%, var(--color-border));
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--color-text);
}

.npc-detail-rich :deep(h2:first-of-type) {
  margin-top: 0.25rem;
}

.npc-detail-rich :deep(h3) {
  margin: 1.35rem 0 0.5rem;
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--npc-accent);
}

.npc-detail-rich {
  font-size: 0.94rem;
  line-height: 1.65;
}

.npc-detail-rich :deep(p) {
  margin: 0 0 0.85rem;
  color: var(--color-muted);
}

.npc-detail-rich :deep(ul),
.npc-detail-rich :deep(ol) {
  margin: 0 0 0.9rem;
  padding-left: 1.2rem;
  color: var(--color-muted);
}

.npc-detail-rich :deep(li) {
  margin-bottom: 0.4rem;
}

.npc-detail-rich :deep(.npc-steps) {
  margin: 0.5rem 0 1rem;
  padding-left: 1.1rem;
}

.npc-detail-rich :deep(.npc-steps li) {
  margin-bottom: 0.45rem;
}

.npc-detail-rich :deep(.npc-dl) {
  margin: 0.5rem 0 1rem;
}

.npc-detail-rich :deep(.npc-dl dt) {
  margin-top: 0.65rem;
  font-weight: 600;
  color: var(--color-text);
  font-size: 0.88rem;
}

.npc-detail-rich :deep(.npc-dl dd) {
  margin: 0.2rem 0 0;
  padding-left: 0;
  font-size: 0.9rem;
  line-height: 1.55;
}

.npc-detail-rich :deep(.npc-dl dt:first-child) {
  margin-top: 0;
}

.npc-detail-rich :deep(.npc-bug-list li) {
  margin-bottom: 0.55rem;
}

.npc-detail-rich :deep(a) {
  color: var(--color-primary-soft);
}

.npc-detail-rich :deep(a:hover) {
  color: var(--color-signal-soft);
}

.npc-detail-rich :deep(.npc-table-wrap) {
  margin: 0.5rem 0 1rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-border) 90%, transparent);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background: color-mix(in srgb, var(--color-bg) 40%, transparent);
}

.npc-detail-rich :deep(.npc-wiki-table) {
  width: 100%;
  min-width: 480px;
  border-collapse: collapse;
  font-size: 0.82rem;
  line-height: 1.45;
}

.npc-detail-rich :deep(.npc-wiki-table th),
.npc-detail-rich :deep(.npc-wiki-table td) {
  padding: 0.5rem 0.65rem;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 75%, transparent);
}

.npc-detail-rich :deep(.npc-wiki-table th) {
  font-family: var(--font-journey);
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-muted);
  background: color-mix(in srgb, var(--color-panel) 80%, transparent);
}

.npc-detail-rich :deep(.npc-wiki-table tbody tr:hover td) {
  background: color-mix(in srgb, var(--npc-accent) 5%, transparent);
}

.npc-detail-rich :deep(.npc-wiki-table td:first-child) {
  font-weight: 600;
  color: color-mix(in srgb, var(--color-text) 75%, var(--color-muted));
  white-space: nowrap;
}

/* —— Tablet —— */
@media (max-width: 1023px) {
  .npc-hero {
    padding-bottom: clamp(1.5rem, 3vw, 2.5rem);
  }

  .npc-main__grid {
    gap: 1.15rem;
  }
}

/* —— Phone —— */
@media (max-width: 767px) {
  .npc-detail-page {
    padding-bottom: calc(2.5rem + env(safe-area-inset-bottom, 0px));
  }

  .npc-hero {
    padding: 1rem 0 clamp(1.25rem, 4vw, 1.75rem);
    margin-bottom: 1.15rem;
  }

  .npc-breadcrumb {
    font-size: 0.72rem;
    margin-bottom: 1rem;
  }

  .npc-hero__glow {
    inset: -30% -30% auto -30%;
    height: 70%;
  }

  .npc-hero__title {
    font-size: clamp(1.4rem, 6.5vw, 1.95rem);
  }

  .npc-hero__summary {
    font-size: 0.9rem;
    margin-bottom: 1.1rem;
  }

  .npc-hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .npc-btn {
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
  }

  .npc-hero__visual {
    max-width: 100%;
    margin-top: 0.25rem;
  }

  .npc-hero__frame-inner {
    border-radius: 14px;
  }

  .npc-hero__img {
    border-radius: 11px;
  }

  .npc-sheet {
    border-radius: 14px;
  }

  .npc-sheet__body {
    padding: 1rem 0.8rem 1.35rem;
  }

  .npc-main__rail {
    flex-direction: column;
    gap: 0.85rem;
  }

  .npc-rail-card {
    flex: 1 1 auto !important;
    width: 100%;
    box-sizing: border-box;
  }

  .npc-detail-rich {
    font-size: 0.88rem;
    line-height: 1.62;
  }

  .npc-detail-rich :deep(.npc-lead) {
    padding: 0.7rem 0.8rem;
    font-size: 0.9rem;
  }

  .npc-detail-rich :deep(h2) {
    margin-top: 1.5rem;
    font-size: 1rem;
  }

  .npc-detail-rich :deep(h3) {
    font-size: 0.82rem;
  }

  .npc-detail-rich :deep(.npc-wiki-table) {
    min-width: 0;
    font-size: 0.74rem;
    line-height: 1.4;
  }

  .npc-detail-rich :deep(.npc-wiki-table th),
  .npc-detail-rich :deep(.npc-wiki-table td) {
    padding: 0.4rem 0.45rem;
  }

  .npc-detail-rich :deep(.npc-wiki-table th) {
    font-size: 0.52rem;
    letter-spacing: 0.1em;
  }

  .npc-detail-rich :deep(.npc-wiki-table td:first-child) {
    white-space: normal;
    min-width: 5.5rem;
  }

  .npc-detail-rich :deep(.npc-table-wrap) {
    margin-left: -0.15rem;
    margin-right: -0.15rem;
    border-radius: 8px;
  }
}
</style>
