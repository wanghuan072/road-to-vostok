<template>
  <article ref="devUpdatesAdsRoot" class="dev-updates-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <div
          ref="devUpdatesGptRoot"
          id="div-gpt-ad-1775617033282-0"
          style="min-width: 320px; min-height: 50px"
        ></div>
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
            <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
            <span aria-hidden="true">/</span>
            <span>{{ $t('devUpdatesPage.breadcrumb') }}</span>
          </nav>
          <p class="hero-kicker">{{ $t('devUpdatesPage.heroKicker') }}</p>
          <h1 v-html="$t('devUpdatesPage.title')"></h1>
          <p class="hero-lead" v-html="$t('devUpdatesPage.heroLeadHtml')"></p>
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

    <div class="wrapper">

    <div ref="railScrollRoot" class="container dev-updates-body">
      <PageRail
        :aside-label="$t('devUpdatesPage.railAside')"
        :title="$t('devUpdatesPage.railTitle')"
        :scroll-root="railScrollRoot"
        :links="asideLinks"
      >
        <template #aside-extra>
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
        </template>
        <section data-nav-anchor="release-snapshot" class="snap-section" :aria-label="$t('devUpdatesPage.ariaReleaseSnapshot')">
          <div class="release-snapshot">
            <div class="release-snapshot-main">
              <p class="release-snapshot-kicker">{{ $t('devUpdatesPage.snapshotEaKicker') }}</p>
              <p class="release-snapshot-date">{{ $t('devUpdatesPage.snapshotEaDate') }}</p>
              <p class="release-snapshot-note" v-html="$t('devUpdatesPage.snapshotEaNoteHtml')"></p>
            </div>
            <div class="release-snapshot-aside">
              <p class="release-snapshot-kicker">{{ $t('devUpdatesPage.snapshotFullKicker') }}</p>
              <p class="release-snapshot-tba">{{ $t('devUpdatesPage.snapshotFullTba') }}</p>
              <p class="release-snapshot-note" v-html="$t('devUpdatesPage.snapshotFullNoteHtml')"></p>
            </div>
          </div>
        </section>

        <section data-nav-anchor="live-changes" class="follow-section page-body-section">
          <header class="section-head">
            <p class="section-kicker">{{ $t('devUpdatesPage.liveChangesKicker') }}</p>
            <h2>{{ $t('devUpdatesPage.liveChangesTitle') }}</h2>
            <p class="section-intro" v-html="$t('devUpdatesPage.liveChangesIntroHtml')"></p>
          </header>
          <ul class="follow-cards" role="list">
            <li class="follow-card">
              <h3>{{ $t('devUpdatesPage.followSteamTitle') }}</h3>
              <p>
                {{ $t('devUpdatesPage.followSteamLead') }}
                <a
                  href="https://store.steampowered.com/app/1963610/Road_to_Vostok/"
                  rel="noopener noreferrer"
                  target="_blank"
                >{{ $t('devUpdatesPage.followSteamStoreLinkText') }}</a><span v-html="$t('devUpdatesPage.followSteamMidHtml')"></span><a
                  href="https://store.steampowered.com/news/app/1963610"
                  rel="noopener noreferrer"
                  target="_blank"
                >{{ $t('devUpdatesPage.followSteamNewsLinkText') }}</a>{{ $t('devUpdatesPage.followSteamTail') }}
              </p>
            </li>
            <li class="follow-card">
              <h3>{{ $t('devUpdatesPage.followSiteTitle') }}</h3>
              <p>
                <a
                  href="https://www.roadtovostok.com/game"
                  rel="noopener noreferrer"
                  target="_blank"
                ><strong>{{ $t('devUpdatesPage.followOfficialGameLinkText') }}</strong></a><span v-html="$t('devUpdatesPage.followSiteRestHtml')"></span>
              </p>
            </li>
            <li class="follow-card">
              <h3>{{ $t('devUpdatesPage.followVideoTitle') }}</h3>
              <p>
                {{ $t('devUpdatesPage.followVideoLead') }}
                <a
                  href="https://www.youtube.com/@roadtovostok"
                  rel="noopener noreferrer"
                  target="_blank"
                ><strong>{{ $t('devUpdatesPage.followYoutubeLinkText') }}</strong></a>{{ $t('devUpdatesPage.followVideoTail') }}
              </p>
            </li>
          </ul>
          <p class="cross-links" v-html="$t('devUpdatesPage.liveChangesCrossLinksHtml')"></p>
        </section>

        <div class="container">
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

        <section data-nav-anchor="guide-site" class="page-body-section">
          <header class="section-head">
            <p class="section-kicker">{{ $t('devUpdatesPage.guideSiteSectionKicker') }}</p>
            <h2>{{ $t('devUpdatesPage.guideSiteSectionTitle') }}</h2>
            <p class="section-intro" v-html="$t('devUpdatesPage.guideSiteSectionIntroHtml')"></p>
          </header>
        </section>

        <section data-nav-anchor="public-roadmap" class="roadmap-section page-body-section">
          <header class="section-head">
            <p class="section-kicker">{{ $t('devUpdatesPage.plannedBuildsKicker') }}</p>
            <h2>{{ $t('devUpdatesPage.plannedBuildsTitle') }}</h2>
            <p class="section-intro">
              <span v-html="$t('devUpdatesPage.plannedBuildsIntroBeforeHtml')"></span><a
                href="https://www.roadtovostok.com/game"
                rel="noopener noreferrer"
                target="_blank"
              >{{ $t('devUpdatesPage.followOfficialGameLinkText') }}</a><span v-html="$t('devUpdatesPage.plannedBuildsIntroAfterHtml')"></span>
            </p>
          </header>
          <ol class="build-timeline" role="list">
            <li
              v-for="b in roadmapBuilds"
              :key="b.id"
              class="build-timeline-item"
              :data-status="b.status"
            >
              <div class="build-timeline-marker" aria-hidden="true" />
              <div class="build-timeline-body">
                <div class="build-timeline-top">
                  <h3 class="build-timeline-title">
                    {{ $t('devUpdatesPage.buildTimelineTitle', { id: b.id, name: b.name }) }}
                  </h3>
                  <span class="build-timeline-date" :data-status="b.status">{{ b.window }}</span>
                </div>
                <ul class="build-timeline-bullets">
                  <li v-for="(line, i) in b.lines" :key="i">{{ line }}</li>
                </ul>
              </div>
            </li>
          </ol>
        </section>

        <div class="container">
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

        <section class="footnote-section page-body-section" :aria-label="$t('devUpdatesPage.ariaDisclaimer')">
          <p class="footnote" v-html="$t('devUpdatesPage.footnoteHtml')"></p>
        </section>
        </PageRail>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageRail from '../components/PageRail.vue'
import { useLocalizedPath } from '../composables/useLocalizedPath.js'

const { getLocalizedPath } = useLocalizedPath()

const railScrollRoot = ref(null)
const devUpdatesAdsRoot = ref(null)
const devUpdatesGptRoot = ref(null)

function mountDevUpdatesGptDisplay() {
  const root = devUpdatesGptRoot.value
  if (!root || root.querySelector('script[data-gam-slot="ban1"]')) return
  const s = document.createElement('script')
  s.setAttribute('data-gam-slot', 'ban1')
  s.textContent =
    "googletag.cmd.push(function() { googletag.display('div-gpt-ad-1775617033282-0'); });"
  root.appendChild(s)
}

function pushDevUpdatesAdx() {
  const root = devUpdatesAdsRoot.value
  if (!root) return
  root.querySelectorAll('ins.adsbygoogle').forEach(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('DevUpdates ADX push failed:', e)
    }
  })
}

onMounted(() => {
  try {
    mountDevUpdatesGptDisplay()
  } catch (e) {
    console.error('DevUpdates GAM failed:', e)
  }
  void nextTick(() => {
    try {
      pushDevUpdatesAdx()
    } catch (e) {
      console.error('DevUpdates ADX failed:', e)
    }
  })
})

const { t, tm } = useI18n()
const asideLinks = computed(() => [
  { label: t('devUpdatesPage.asideRelease'), scrollKey: 'release-snapshot' },
  { label: t('devUpdatesPage.asidePatch'), scrollKey: 'live-changes' },
  { label: t('devUpdatesPage.asideGuideSite'), scrollKey: 'guide-site' },
  { label: t('devUpdatesPage.asideAllBuilds'), scrollKey: 'public-roadmap' },
])

/** Roadmap rows from locale (mirrors official roadtovostok.com/game). */
const roadmapBuilds = computed(() => {
  const raw = tm('devUpdatesPage.roadmapBuilds')
  return Array.isArray(raw) ? raw : []
})
</script>

<style scoped>
.wrapper{
  padding: 2rem 0 0 0;
}

.dev-updates-page.page-article {
  padding-bottom: 4rem;
}

.hero-kicker {
  margin: 0 0 0.5rem;
  font-family: var(--font-journey);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-amber);
}

.snap-section {
  padding: 0 0 1.5rem;
}

.release-snapshot {
  display: grid;
  gap: 1.15rem;
  grid-template-columns: 1.1fr 1fr;
  align-items: stretch;
}

@media (max-width: 767px) {
  .release-snapshot {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.release-snapshot-main,
.release-snapshot-aside {
  padding: 1.25rem 1.35rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-panel) 88%, transparent);
}

.release-snapshot-main {
  position: relative;
  border-color: color-mix(in srgb, var(--color-ice) 38%, var(--color-border));
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--color-ice) 14%, transparent);
}

.release-snapshot-kicker {
  margin: 0 0 0.35rem;
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.release-snapshot-date {
  margin: 0 0 0.5rem;
  font-family: var(--font-journey);
  font-size: clamp(1.75rem, 4vw, 2.35rem);
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-primary-soft);
}

.release-snapshot-tba {
  margin: 0 0 0.5rem;
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.release-snapshot-note {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-muted);
}

.page-body-section {
  padding: 1.75rem 0;
  border-top: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
}

.section-head {
  margin-bottom: 1.25rem;
}

.section-kicker {
  margin: 0 0 0.4rem;
  font-family: var(--font-journey);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-ice-dim);
}

.section-head h2 {
  margin: 0 0 0.5rem;
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
}

.section-intro {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.58;
  color: var(--color-muted);
}

.follow-cards {
  list-style: none;
  margin: 0 0 1.25rem;
  padding: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 1023px) {
  .follow-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.85rem;
  }
}

@media (max-width: 767px) {
  .follow-cards {
    grid-template-columns: 1fr;
  }
}

.follow-card {
  margin: 0;
  padding: 1rem 1.1rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-border) 92%, transparent);
  background: color-mix(in srgb, var(--color-surface) 92%, transparent);
}

.follow-card h3 {
  margin: 0 0 0.45rem;
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  color: var(--color-primary-soft);
}

.follow-card p {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.5;
  color: var(--color-muted);
}

.follow-card a {
  color: var(--color-primary-soft);
  text-decoration: none;
}

.follow-card a:hover {
  text-decoration: underline;
}

.cross-links {
  margin: 0;
  font-size: 0.88rem;
  color: var(--color-muted);
}

.cross-links a {
  color: var(--color-primary-soft);
  text-decoration: none;
}

.cross-links a:hover {
  text-decoration: underline;
}

.build-timeline {
  list-style: none;
  margin: 0;
  padding: 0 0 0 0.35rem;
  position: relative;
}

.build-timeline::before {
  content: '';
  position: absolute;
  left: 0.55rem;
  top: 0.35rem;
  bottom: 0.35rem;
  width: 2px;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-ice) 58%, transparent),
    color-mix(in srgb, var(--color-border) 90%, transparent)
  );
  border-radius: 1px;
}

.build-timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.65rem 1rem;
  padding: 0 0 1.35rem 0;
  margin: 0;
}

.build-timeline-item:last-child {
  padding-bottom: 0;
}

.build-timeline-marker {
  position: relative;
  z-index: 1;
  width: 14px;
  height: 14px;
  margin-top: 0.35rem;
  margin-left: 0;
  border-radius: 50%;
  background: var(--color-panel);
  border: 2px solid var(--color-border-strong);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-bg) 92%, transparent);
}

.build-timeline-item[data-status='dated'] .build-timeline-marker,
.build-timeline-item[data-status='live'] .build-timeline-marker {
  border-color: var(--color-ice);
  background: color-mix(in srgb, var(--color-ice) 35%, var(--color-panel));
}

.build-timeline-item[data-status='window'] .build-timeline-marker {
  border-color: var(--color-amber);
}

.build-timeline-body {
  min-width: 0;
  padding: 0.65rem 1rem 0.85rem;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-border) 88%, transparent);
  background: color-mix(in srgb, var(--color-panel) 55%, transparent);
}

.build-timeline-top {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.35rem 1rem;
  margin-bottom: 0.5rem;
}

.build-timeline-title {
  margin: 0;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  color: var(--color-text);
}

.build-timeline-date {
  flex-shrink: 0;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.25em 0.55em;
  border-radius: 6px;
  background: color-mix(in srgb, var(--color-surface) 95%, transparent);
  color: var(--color-muted);
  border: 1px solid var(--color-border);
}

.build-timeline-date[data-status='dated'],
.build-timeline-date[data-status='live'] {
  color: var(--color-primary-soft);
  border-color: color-mix(in srgb, var(--color-ice) 42%, var(--color-border));
}

.build-timeline-date[data-status='window'] {
  color: color-mix(in srgb, var(--color-amber) 85%, var(--color-muted));
  border-color: color-mix(in srgb, var(--color-amber) 35%, var(--color-border));
}

.build-timeline-bullets {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.84rem;
  line-height: 1.5;
  color: var(--color-muted);
}

.build-timeline-bullets li {
  margin-bottom: 0.25rem;
}

.footnote-section {
  padding-top: 1rem;
  padding-bottom: 0;
  border-top: none;
}

.footnote {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--color-muted);
  opacity: 0.92;
}
</style>
