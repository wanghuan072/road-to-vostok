<template>
  <article class="dev-updates-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true">/</span>
            <span>Road ahead</span>
          </nav>
          <p class="hero-kicker">Roadmap &amp; release timing</p>
          <h1>Road To Vostok — Dev updates &amp; when the game ships</h1>
          <p class="hero-lead">
            What is on the public roadmap, when Early Access is targeted, and where patch notes actually
            post. Summarized from the roadtovostok.com game page as of our last pass — confirm on Steam and
            the live site before you plan around a date.
          </p>
        </div>
      </div>
    </section>

    <div class="wrapper">

    <div ref="railScrollRoot" class="container dev-updates-body">
      <PageRail
        aside-label="Roadmap briefing"
        title="On this page"
        :scroll-root="railScrollRoot"
        :links="asideLinks"
      >
        <section data-nav-anchor="release-snapshot" class="snap-section" aria-label="Release snapshot">
          <div class="release-snapshot">
            <div class="release-snapshot-main">
              <p class="release-snapshot-kicker">Early Access</p>
              <p class="release-snapshot-date">April 7, 2026</p>
              <p class="release-snapshot-note">
                Listed on the official site as the <strong>Early Access</strong> / <strong>Build 1 — Road</strong>
                target. That is a playable EA launch on Steam — not the same as a final “1.0” or boxed
                “full release.”
              </p>
            </div>
            <div class="release-snapshot-aside">
              <p class="release-snapshot-kicker">Full / 1.0 release</p>
              <p class="release-snapshot-tba">Not announced</p>
              <p class="release-snapshot-note">
                The public roadmap runs through <strong>Build 8 — Silent Night</strong> (full questline,
                world options, new faction) with a <strong>TBA</strong> date. There is no separate official
                “full version ships on …” line yet — expect scope to evolve during Early Access.
              </p>
            </div>
          </div>
        </section>

        <section data-nav-anchor="live-changes" class="follow-section page-body-section">
          <header class="section-head">
            <p class="section-kicker">Live changes</p>
            <h2>What did the developer update?</h2>
            <p class="section-intro">
              Patch notes and surprise fixes almost always land in first-party channels first. This page
              does not mirror every hotfix — use these when you want the real changelog.
            </p>
          </header>
          <ul class="follow-cards" role="list">
            <li class="follow-card">
              <h3>Steam news</h3>
              <p>
                The Steam store page for <strong>Road to Vostok</strong> (AppID <strong>1963610</strong>)
                is where patch posts and announcements usually appear for players who own or wishlist the
                game.
              </p>
            </li>
            <li class="follow-card">
              <h3>Official site</h3>
              <p>
                <strong>roadtovostok.com</strong> carries the same high-level roadmap and game overview;
                cross-check dates there if Steam wording shifts after an update.
              </p>
            </li>
            <li class="follow-card">
              <h3>Dev video</h3>
              <p>
                Long-form progress and system deep-dives are often shown on the developer’s
                <strong>YouTube</strong> channel — useful for intent and direction, not always 1:1 with a
                build number in the client.
              </p>
            </li>
          </ul>
          <p class="cross-links">
            On this site:
            <RouterLink to="/guides">Guides</RouterLink>
            (<RouterLink to="/guides/an-analytical-deep-dive-into-its-real-world-geography">geography</RouterLink>,
            <RouterLink to="/guides/surviving-the-Minefield">Minefield</RouterLink>)
            ·
            <RouterLink to="/map">Map</RouterLink> and <RouterLink to="/tasks">Tasks</RouterLink>
            ·
            <RouterLink to="/getting-started">Start here</RouterLink>
          </p>
        </section>

        <section data-nav-anchor="public-roadmap" class="roadmap-section page-body-section">
          <header class="section-head">
            <p class="section-kicker">Planned builds</p>
            <h2>Public roadmap (all builds)</h2>
            <p class="section-intro">
              Summarized from the official <strong>Roadmap</strong> block on roadtovostok.com. Release
              windows after Build 1 are targets, not guarantees — watch Steam when a build slips or splits.
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
                  <h3 class="build-timeline-title">Build {{ b.id }} — {{ b.name }}</h3>
                  <span class="build-timeline-date" :data-status="b.status">{{ b.window }}</span>
                </div>
                <ul class="build-timeline-bullets">
                  <li v-for="(line, i) in b.lines" :key="i">{{ line }}</li>
                </ul>
              </div>
            </li>
          </ol>
        </section>

        <section class="footnote-section page-body-section" aria-label="Disclaimer">
          <p class="footnote">
            Editorial summary only. If a date here disagrees with Steam or roadtovostok.com, trust the
            first-party source.
            </p>
          </section>
        </PageRail>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import PageRail from '../components/PageRail.vue'

const railScrollRoot = ref(null)

const asideLinks = [
  { label: 'Release dates', scrollKey: 'release-snapshot' },
  { label: 'Patch sources', scrollKey: 'live-changes' },
  { label: 'All builds', scrollKey: 'public-roadmap' },
]

/** Mirrors official roadtovostok.com /game roadmap section (build names, windows, bullet themes). */
const roadmapBuilds = [
  {
    id: '1',
    name: 'Road',
    window: 'Apr. 7, 2026',
    status: 'dated',
    lines: [
      'Early Access launch',
      'Gameplay loop',
      'Expanded maps',
      'Dynamic elements',
      'Multi-shelter support',
    ],
  },
  {
    id: '2',
    name: 'Nomads',
    window: 'Q3 / 2026',
    status: 'window',
    lines: [
      'Friendly faction',
      'AI vs. AI combat',
      'AI variants',
      'Driver (Trader)',
      'New map & shelter',
    ],
  },
  {
    id: '3',
    name: 'Signal',
    window: 'Q4 / 2026',
    status: 'window',
    lines: [
      'Quest system',
      'Lore elements',
      'Civil defence shelters',
      'Grandma (Trader)',
      'New map & shelter',
    ],
  },
  {
    id: '4',
    name: 'Gunslinger',
    window: 'TBA',
    status: 'tba',
    lines: [
      'Weapon overhaul',
      'Bullet penetration',
      'Modding kits',
      'Trader services',
      'New map & shelter',
    ],
  },
  {
    id: '5',
    name: 'North',
    window: 'TBA',
    status: 'tba',
    lines: [
      'Dynamic season',
      'Train system',
      'Hunting & wildlife',
      'Shaman (Trader)',
      'New map & shelter',
    ],
  },
  {
    id: '6',
    name: 'Abyss',
    window: 'TBA',
    status: 'tba',
    lines: [
      'Sea system',
      'Patrol boats',
      'Scuba gear',
      'Fisherman (Trader)',
      'New map & shelter',
    ],
  },
  {
    id: '7',
    name: 'Enigma',
    window: 'TBA',
    status: 'tba',
    lines: [
      'Dialogue system',
      'SIGINT tools',
      'Transmissions',
      'Scientist (Trader)',
      'New map & shelter',
    ],
  },
  {
    id: '8',
    name: 'Silent Night',
    window: 'TBA',
    status: 'tba',
    lines: [
      'Full questline',
      'World options',
      'Destruction system',
      'FINSOF faction',
      'New map & shelter',
    ],
  },
]
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

.build-timeline-item[data-status='dated'] .build-timeline-marker {
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

.build-timeline-date[data-status='dated'] {
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
