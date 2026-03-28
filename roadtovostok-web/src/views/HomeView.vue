<template>
  <div ref="homeRoot" class="home-page">
    <!-- Hero -->
    <section class="hero-section">
      <div class="hero-deco hero-deco-compass" aria-hidden="true">
        <svg class="compass-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="88" stroke="currentColor" stroke-width="0.75" opacity="0.35" />
          <circle cx="100" cy="100" r="72" stroke="currentColor" stroke-width="0.5" opacity="0.2" stroke-dasharray="4 6" />
          <path d="M100 28v144M28 100h144" stroke="currentColor" stroke-width="0.5" opacity="0.25" />
          <path d="M100 44l18 52 52 18-52 18-18 52-18-52-52-18 52-18 18-52z" fill="currentColor" opacity="0.12" />
        </svg>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-copy">
            <p class="hero-eyebrow">Unofficial wiki · demo &amp; Steam · Early Access</p>
            <h1 class="hero-title">
              Road To Vostok guide — how to play, Steam demo, guns &amp; roadmap
            </h1>
            <p class="hero-strip" aria-hidden="true">
              <span>Load shotgun &amp; guns</span>
              <span class="hero-strip-div" />
              <span>All tasks &amp; roadmap</span>
              <span class="hero-strip-div" />
              <span>Inverter · medical · saves</span>
            </p>
            <p class="hero-lead">
              Notes for the Steam demo and Early Access: weapons and loading, inverter power, checklist-style
              tasks and roadmap timing, medical, PC saves, crafting, and fishing when your build includes it.
              Single-player survival; mod tools are on the official long-term plan. Use
              <RouterLink to="/getting-started">Start here</RouterLink> for the core loop,
              <RouterLink to="/map">Map</RouterLink> and <RouterLink to="/tasks">Tasks</RouterLink> for locations
              and objectives, or jump straight to the hot searches below.
            </p>
            <div class="hero-actions">
              <RouterLink to="/getting-started" class="btn btn-primary">Field briefing</RouterLink>
              <RouterLink to="/wiki" class="btn btn-secondary">Wiki</RouterLink>
            </div>
          </div>
          <div class="hero-visual">
            <figure class="hero-frame">
              <span class="hero-frame-corner hero-frame-corner--tl" aria-hidden="true" />
              <span class="hero-frame-corner hero-frame-corner--tr" aria-hidden="true" />
              <span class="hero-frame-corner hero-frame-corner--bl" aria-hidden="true" />
              <span class="hero-frame-corner hero-frame-corner--br" aria-hidden="true" />
              <img
                src="/images/bg.webp"
                alt=""
                width="640"
                height="640"
                class="hero-img"
                decoding="async"
              >
              <figcaption class="hero-caption">Site backdrop — same art as full-page mood</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- Trending -->
    <section class="trending-section">
      <div class="container">
        <div class="trending-content reveal-on-scroll">
          <header class="section-head">
            <span class="section-kicker">Hot searches</span>
            <h2>Trending searches for Road To Vostok</h2>
            <p>
              High-intent queries (load shotgun, inverter, broken bone, roadmap, all tasks, Steam
              saves) — one click to the matching guide or hub.
            </p>
          </header>
          <ul class="trending-grid" role="list">
            <li>
              <RouterLink to="/guides/load-weapon" class="trend-card">
                <span class="trend-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M4 12h16M4 8h10M4 16h10" stroke-linecap="round" />
                    <circle cx="17" cy="8" r="2" />
                    <circle cx="17" cy="16" r="2" />
                  </svg>
                </span>
                <span class="trend-label">How to load shotgun &amp; weapon</span>
                <span class="trend-meta">Road To Vostok reload &amp; magazines</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/guides/inverter-location" class="trend-card">
                <span class="trend-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="6" width="18" height="12" rx="2" />
                    <path d="M9 10v4M12 8v8M15 10v4" stroke-linecap="round" />
                  </svg>
                </span>
                <span class="trend-label">Road To Vostok inverter</span>
                <span class="trend-meta">Location &amp; shelter power</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/guides/medical" class="trend-card">
                <span class="trend-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path
                      d="M8 4l4 4-6 6 4 4 6-6 4 4M6 20l2-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="trend-label">Broken bone &amp; medical</span>
                <span class="trend-meta">Died from fracture — heal up</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/guides/roadmap" class="trend-card">
                <span class="trend-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M4 19V5M4 19h16M8 16V9M12 16v-5M16 16V7" stroke-linecap="round" />
                  </svg>
                </span>
                <span class="trend-label">Road To Vostok roadmap</span>
                <span class="trend-meta">Early Access &amp; release info</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/tasks" class="trend-card">
                <span class="trend-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M4 20V9l8-5 8 5v11M9 20v-6h6v6" stroke-linejoin="round" />
                  </svg>
                </span>
                <span class="trend-label">Road To Vostok all tasks</span>
                <span class="trend-meta">Demo quests &amp; maps</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/mods" class="trend-card">
                <span class="trend-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span class="trend-label">Mods &amp; community</span>
                <span class="trend-meta">EA modding notes (unofficial)</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <nav class="hub-strip-nav container" aria-label="Main guide hubs">
      <ul class="hub-strip-list reveal-on-scroll" role="list">
        <li>
          <RouterLink class="hub-chip" to="/getting-started">Start here</RouterLink>
        </li>
        <li>
          <RouterLink class="hub-chip" to="/wiki">Wiki</RouterLink>
        </li>
        <li>
          <RouterLink class="hub-chip" to="/map">Map</RouterLink>
        </li>
        <li>
          <RouterLink class="hub-chip" to="/tasks">Tasks</RouterLink>
        </li>
        <li>
          <RouterLink class="hub-chip" to="/guides">Guides</RouterLink>
        </li>
        <li>
          <RouterLink class="hub-chip" to="/dev-updates">Road ahead</RouterLink>
        </li>
        <li>
          <RouterLink class="hub-chip" to="/mods">Mods</RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Featured database -->
    <section class="featured-section">
      <div class="container">
        <div class="featured-split reveal-on-scroll">
          <div class="featured-split-intro">
            <header class="section-head">
              <span class="section-kicker">Loot &amp; tables</span>
              <h2>Gear hub shortcuts — tables &amp; deep guides</h2>
              <p>
                Same coverage as
                <RouterLink to="/wiki">Wiki</RouterLink>, laid out as quick jumps: weapons
                and ammo tables on the left column of links, medical and power guides, then the
                <RouterLink to="/map">map</RouterLink> and <RouterLink to="/tasks">tasks</RouterLink> pages for
                keys. No thumbnails — just scannable labels.
              </p>
            </header>
            <ul class="featured-cross" role="list">
              <li>
                <RouterLink to="/guides/load-weapon">Load weapon guide</RouterLink>
                — magazines vs manual shells
              </li>
              <li>
                <RouterLink to="/guides/medical">Medical guide</RouterLink>
                — fractures and bleeding
              </li>
              <li>
                <RouterLink to="/guides/inverter-location">Inverter &amp; power</RouterLink>
                — shelter utilities
              </li>
              <li>
                <RouterLink to="/guides/roadmap">Roadmap article</RouterLink>
                — milestones in prose form
              </li>
            </ul>
          </div>
          <ul class="featured-catalog" role="list">
            <li v-for="cat in featured" :key="cat.title" class="featured-catalog-item">
              <RouterLink :to="cat.to" class="featured-catalog-link">
                <span class="featured-catalog-accent" aria-hidden="true" />
                <div class="featured-catalog-body">
                  <span class="featured-catalog-kicker">{{ cat.kicker }}</span>
                  <h3 class="featured-catalog-title">{{ cat.title }}</h3>
                  <p class="featured-catalog-blurb">{{ cat.blurb }}</p>
                </div>
                <span class="featured-catalog-go" aria-hidden="true">→</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Questline -->
    <section class="questline-section">
      <div class="container">
        <div class="questline-content reveal-on-scroll">
          <header class="section-head">
            <span class="section-kicker">Progression</span>
            <h2>West to east: Area 05, the border, Vostok</h2>
            <p>
              On the
              <a href="https://www.roadtovostok.com/game" rel="noopener noreferrer" target="_blank">official game page</a>,
              the world is laid out as three regions. You start in
              <strong>Area 05</strong>, an evacuated part of southeastern Finland: shelters, traders, tasks, and
              early loot, while <strong>Bandits</strong> patrol the zone. When you are geared enough, the road
              continues <strong>east</strong> into the <strong>Border Zone</strong>—guarded crossings between
              Finland and Russia—then, if you cross, into <strong>Vostok</strong> in Russia (high risk;
              permadeath—dying there costs your whole run stash, unlike the western zones).
            </p>
            <p>
              The game is still a <strong>sandbox</strong>: you are not forced into Vostok or a single playstyle.
              “Pushing east” simply means following that intended difficulty curve—secure the west, then attempt
              harder crossings—not a hidden story mandate. For step-by-step locations use
              <RouterLink to="/map">Map</RouterLink> and <RouterLink to="/tasks">Tasks</RouterLink>; for controls and the survival loop,
              <RouterLink to="/getting-started">Start here</RouterLink>.
            </p>
          </header>

          <div class="quest-zones" aria-label="Three regions from west to east">
            <div class="quest-zone">
              <span class="quest-zone-kicker">Finland · West</span>
              <strong class="quest-zone-title">Area 05</strong>
              <p>Hub shelters, traders, tasks, starter gear. Hostile bandits in the evacuation zone.</p>
            </div>
            <div class="quest-zone">
              <span class="quest-zone-kicker">Crossing · Mid</span>
              <strong class="quest-zone-title">Border Zone</strong>
              <p>Guarded border maps: mines, obstacles, boats, and corrupt Guards with air support.</p>
            </div>
            <div class="quest-zone">
              <span class="quest-zone-kicker">Russia · East</span>
              <strong class="quest-zone-title">Vostok</strong>
              <p>Best loot, Military faction, armored threats. Every Vostok map is permadeath.</p>
            </div>
          </div>

          <div class="quest-demo-block">
            <h3 class="quest-demo-heading">Public demo: how the journal lines up</h3>
            <p class="quest-demo-lead">
              The playable demo is only a slice of that world, but it usually nudges you through the same
              <em>idea</em>: learn your shelter, clear Area 05–style work, follow traders and keys, then the UI
              may show a completion line often labeled <strong>“All Tasks.”</strong>
            </p>
          </div>

          <div class="quest-panel">
            <div
              class="quest-flow"
              role="img"
              aria-label="Typical demo order: shelter, Area 05, traders and keys, then All Tasks journal state"
            >
              <div class="quest-track">
                <div class="quest-node">
                  <span class="quest-dot" />
                  <span class="quest-name">Shelter &amp; stash</span>
                </div>
                <span class="quest-line" aria-hidden="true" />
                <div class="quest-node">
                  <span class="quest-dot" />
                  <span class="quest-name">Area 05 tasks</span>
                </div>
                <span class="quest-line" aria-hidden="true" />
                <div class="quest-node">
                  <span class="quest-dot" />
                  <span class="quest-name">Traders &amp; keys</span>
                </div>
                <span class="quest-line quest-line-accent" aria-hidden="true" />
                <div class="quest-node quest-node-hub">
                  <span class="quest-dot quest-dot-hub" />
                  <span class="quest-name">All Tasks</span>
                  <span class="quest-badge">Journal</span>
                </div>
              </div>
              <p class="quest-caption">
                “All Tasks” means the <strong>main task list for that demo build is finished</strong>. It is not a
                promise that Early Access or later builds will have nothing left to do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Devlog -->
    <section class="devlog-section">
      <div class="container">
        <div class="devlog-content reveal-on-scroll">
          <header class="section-head">
            <span class="section-kicker">Signals</span>
            <h2>Road To Vostok roadmap &amp; devlog</h2>
            <p>
              Long-form developer updates on YouTube cover Early Access scope, shelters, and later beats like
              fishing and seasons. Pair the embed with our
              <RouterLink to="/guides/roadmap">roadmap article</RouterLink> and
              <RouterLink to="/dev-updates">Road ahead</RouterLink> for dates and build lists.
            </p>
          </header>
          <div class="devlog-layout">
            <div class="devlog-video">
              <span class="devlog-video-scan" aria-hidden="true" />
              <iframe
                :title="devlogIframeTitle"
                src="https://www.youtube-nocookie.com/embed/4q6ZuNdGvus"
                width="560"
                height="315"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                loading="lazy"
              />
            </div>
            <div class="devlog-summary">
              <h3>Episode summary</h3>
              <ul>
                <li>Early Access goals: expanded maps, dynamic events, multi-shelter loops.</li>
                <li>Trader keys and shelter unlock cadence tied to exploration risk.</li>
                <li>Community wishlists, demo learnings, and transparent roadmap communication.</li>
                <li>How later builds are expected to layer quests, seasons, and naval content.</li>
              </ul>
              <p>
                For patch-style notes, visit <RouterLink to="/dev-updates">Road ahead</RouterLink>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About (SEO) -->
    <section class="about-section">
      <div class="container">
        <div class="about-content reveal-on-scroll">
          <span class="section-kicker">About</span>
          <h2>About this Road To Vostok wiki</h2>
          <p>
            Road To Vostok (Road To Vostok Ltd.) is a hardcore single-player survival FPS on the Finland–Russia
            border. You loot in Area 05, cross the Border Zone, and can enter Vostok under stricter permadeath
            rules than the rest of a run. The free Steam demo and the Early Access release drive most searches:
            how to play, loadout and medical questions, tasks, roadmap timing, and PC saves.
          </p>
          <p>
            This English fan wiki covers those topics with practical guides on loadouts, the long-term roadmap,
            crafting, and fishing as patches add them — always double-check what your installed build actually
            shows.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="container">
        <div class="faq-content reveal-on-scroll">
          <span class="section-kicker">FAQ</span>
          <h2>Frequently asked questions</h2>
          <dl class="faq-list">
            <div v-for="row in faq" :key="row.q" class="faq-item">
              <dt>{{ row.q }}</dt>
              <dd>{{ row.a }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const homeRoot = ref(null)
let revealObserver = null

const featured = [
  {
    kicker: 'Wiki',
    title: 'Guns, ammo & tables',
    blurb: 'Open the wiki hub for weapons, ammunition, core task props, fishing, and gathering tables.',
    to: '/wiki',
  },
  {
    kicker: 'Medical',
    title: 'Fractures, bleeding & meds',
    blurb: 'Splints, bandages, and what to do if a broken bone ended your run.',
    to: '/guides/medical',
  },
  {
    kicker: 'Power',
    title: 'Inverter & B cables',
    blurb: 'Shelter power routing, utilities, and cable loot to watch for on maps.',
    to: '/guides/inverter-location',
  },
  {
    kicker: 'Tasks',
    title: 'All tasks, traders & keys',
    blurb: 'Quest flow, traders, and objectives before you push toward harder zones.',
    to: '/tasks',
  },
]

const devlogIframeTitle = 'Road To Vostok developer interview — Early Access and roadmap discussion'

const faq = [
  {
    q: 'What is the Road To Vostok release date and Early Access plan?',
    a: 'Steam lists a planned Early Access window (check the store page for the current date). The in-game and site roadmap guides summarize build phases after that launch.',
  },
  {
    q: 'Is Road To Vostok online or multiplayer?',
    a: 'No. The Steam store describes it as a single-player survival game. There is no live co-op or MMO mode in that description.',
  },
  {
    q: 'How do I get the Road To Vostok demo on Steam?',
    a: 'Use the Steam store entry for Road To Vostok and install the separate demo app (Steam shows a demo download when available).',
  },
  {
    q: 'How to play Road To Vostok — what should I do first?',
    a: 'Run any tutorial map the demo offers, unlock your shelter save point, then learn looting, traders, and how to load weapons before pushing toward harder maps.',
  },
  {
    q: 'Road To Vostok: how to load shotgun and how to load weapons?',
    a: 'Magazine guns need loaded mags in your inventory; shotguns and bolt actions use manual per-round steps shown in the tutorial. See our Load weapon guide for a written checklist.',
  },
  {
    q: 'Where is the Road To Vostok inverter or power gear?',
    a: 'Use the inverter location guide: search industrial and utility POIs, pair with trader hints, and verify spawns in your patch.',
  },
  {
    q: 'I died from a broken bone in Road To Vostok — what now?',
    a: 'Treat fractures fast with splints or advanced kits before movement penalties and passive damage stack. The medical guide walks through afflictions and healing items.',
  },
  {
    q: 'How do I complete Road To Vostok all tasks?',
    a: 'Follow the quest chain on the homepage, then the Tasks page for objectives and trader keys and the Map for POIs.',
  },
  {
    q: 'Where is the Road To Vostok roadmap?',
    a: 'Open the roadmap guide and the Road ahead hub for build names, Early Access scope, and future systems like fishing and seasons as announced.',
  },
  {
    q: 'Are there Road To Vostok mods?',
    a: 'The Steam Early Access FAQ states modding tools are planned toward full release. Demo builds may not expose full mod support yet.',
  },
  {
    q: 'How to backup Road To Vostok saves on PC?',
    a: 'Paths vary by build and OS. Snapshot your user data folder before experiments; the Mods hub explains layout at a high level — always verify on your machine.',
  },
  {
    q: 'How does crafting work in Road To Vostok?',
    a: 'Crafting expands across Early Access builds. Check patch notes and in-game recipes; the Wiki tracks loot that feeds crafting loops.',
  },
  {
    q: 'Is fishing in Road To Vostok?',
    a: 'Fishing and naval content appear on the official multi-year roadmap for later builds — not always in every demo slice.',
  },
  {
    q: 'Is this an official Road To Vostok website?',
    a: 'No. This is a fan wiki. Cross-check facts with your installed build and official channels.',
  },
]

onMounted(() => {
  const root = homeRoot.value
  if (!root) return
  const nodes = root.querySelectorAll('.reveal-on-scroll')
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    nodes.forEach((el) => el.classList.add('is-revealed'))
    return
  }
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          revealObserver?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
  )
  nodes.forEach((el) => revealObserver.observe(el))
})

onUnmounted(() => {
  revealObserver?.disconnect()
  revealObserver = null
})
</script>

<style scoped>
.home-page {
  overflow-x: clip;
  position: relative;
}

/* 滚动进入：探险「发现」感 */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(28px) scale(0.99);
  filter: blur(6px);
  transition:
    opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.65s ease;
}

.reveal-on-scroll.is-revealed {
  opacity: 1;
  transform: none;
  filter: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal-on-scroll {
    opacity: 1;
    transform: none;
    filter: none;
    transition: none;
  }
}

/* —— Hero：等高线 + 罗盘装饰 + 相框角标 —— */
.hero-section {
  position: relative;
  overflow: hidden;
  padding: clamp(2.75rem, 6vw, 5rem) 0 clamp(3rem, 5vw, 4.25rem);
  background-color: transparent;
  background-image:
    repeating-linear-gradient(
      -12deg,
      transparent,
      transparent 38px,
      color-mix(in srgb, var(--color-ice) 5%, transparent) 38px,
      color-mix(in srgb, var(--color-ice) 5%, transparent) 39px
    ),
    radial-gradient(ellipse 90% 60% at 100% 0%, color-mix(in srgb, var(--color-signal) 10%, transparent), transparent 55%),
    linear-gradient(180deg, color-mix(in srgb, var(--color-surface) 88%, transparent) 0%, transparent 72%);
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
}

.hero-deco-compass {
  position: absolute;
  right: -6%;
  top: 50%;
  width: min(52vw, 420px);
  aspect-ratio: 1;
  transform: translateY(-50%);
  color: var(--color-ice);
  opacity: 0.16;
  pointer-events: none;
}

.compass-svg {
  width: 100%;
  height: auto;
  animation: fx-compass-spin 140s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .compass-svg {
    animation: none;
  }
}

@media (max-width: 1023px) {
  .hero-deco-compass {
    right: -20%;
    opacity: 0.09;
    width: 70vw;
  }
}

.hero-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 320px);
  gap: 3.5rem;
  align-items: center;
}

.hero-visual {
  justify-self: end;
}

@media (max-width: 1023px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    align-items: start;
  }

  .hero-visual {
    justify-self: stretch;
  }
}

.hero-copy {
  min-width: 0;
}

.hero-title {
  font-family: var(--font-journey);
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.02em;
  line-height: 1.08;
  background: linear-gradient(
    105deg,
    var(--color-text) 0%,
    var(--color-primary-soft) 42%,
    var(--color-text) 78%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: title-shine 8s ease-in-out infinite alternate;
}

@keyframes title-shine {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-title {
    color: var(--color-text);
    background: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    animation: none;
  }
}

.hero-eyebrow {
  margin: 0 0 0.65rem;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.hero-strip {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
  margin: 0 0 1.25rem;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-ice-dim);
}

.hero-strip-div {
  width: 6px;
  height: 6px;
  background: var(--color-rust);
  opacity: 0.75;
  transform: rotate(45deg);
}

.hero-lead {
  margin-bottom: 0;
  color: var(--color-muted);
  font-size: 1rem;
  max-width: min(72ch, 100%);
}

.hero-lead strong {
  color: var(--color-text);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.65rem;
}

.btn {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.25rem;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  cursor: pointer;
  border: 1px solid transparent;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.25s ease;
}

.btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    color-mix(in srgb, white 18%, transparent) 50%,
    transparent 60%
  );
  transform: translateX(-100%);
  transition: transform 0.55s ease;
  pointer-events: none;
}

.btn:hover::after {
  transform: translateX(100%);
}

.btn-primary {
  color: #0a0b0a;
  background: linear-gradient(180deg, var(--color-rust-bright) 0%, var(--color-rust) 100%);
  border-color: color-mix(in srgb, var(--color-rust-bright) 70%, black);
  box-shadow: var(--fx-glow-rust);
}

.btn-primary:hover {
  background: linear-gradient(180deg, #e8845c 0%, var(--color-rust-bright) 100%);
  border-color: var(--color-rust-bright);
}

.btn-secondary {
  color: var(--color-text);
  background: color-mix(in srgb, var(--color-panel) 60%, transparent);
  border-color: var(--color-border-strong);
}

.btn-secondary:hover {
  border-color: var(--color-frost);
  color: var(--color-primary-soft);
  box-shadow: var(--fx-glow-frost);
}

.hero-visual {
  width: 100%;
  max-width: 320px;
}

@media (max-width: 1023px) {
  .hero-visual {
    max-width: none;
  }
}

.hero-frame {
  position: relative;
  margin: 0;
  padding: 0;
  border: 1px solid var(--color-border-strong);
  background: var(--color-panel);
  box-shadow:
    inset 0 0 0 1px rgba(0, 0, 0, 0.35),
    0 16px 40px rgba(0, 0, 0, 0.5),
    0 0 0 1px color-mix(in srgb, var(--color-frost) 15%, transparent);
  transition:
    box-shadow 0.35s ease,
    transform 0.35s ease;
}

.hero-frame:hover {
  box-shadow:
    inset 0 0 0 1px rgba(0, 0, 0, 0.35),
    0 20px 48px rgba(0, 0, 0, 0.55),
    0 0 32px color-mix(in srgb, var(--color-frost) 18%, transparent);
  transform: translateY(-3px);
}

@media (prefers-reduced-motion: reduce) {
  .hero-frame:hover {
    transform: none;
  }
}

.hero-frame-corner {
  position: absolute;
  width: 14px;
  height: 14px;
  border-color: var(--color-rust);
  border-style: solid;
  z-index: 2;
  pointer-events: none;
  opacity: 0.85;
}

.hero-frame-corner--tl {
  top: 6px;
  left: 6px;
  border-width: 2px 0 0 2px;
}

.hero-frame-corner--tr {
  top: 6px;
  right: 6px;
  border-width: 2px 2px 0 0;
}

.hero-frame-corner--bl {
  bottom: 6px;
  left: 6px;
  border-width: 0 0 2px 2px;
}

.hero-frame-corner--br {
  bottom: 6px;
  right: 6px;
  border-width: 0 2px 2px 0;
}

.hero-img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  filter: saturate(0.88) contrast(1.05);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.35s ease;
}

.hero-frame:hover .hero-img {
  transform: scale(1.04);
  filter: saturate(0.95) contrast(1.08);
}

@media (prefers-reduced-motion: reduce) {
  .hero-frame:hover .hero-img {
    transform: none;
  }
}

.hero-caption {
  margin: 0;
  padding: 0.45rem 0.65rem;
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
  border-top: 1px solid var(--color-border);
  background: var(--color-surface);
}

/* —— 区块标题：战地手册侧条 + kicker —— */
.section-kicker {
  display: block;
  margin-bottom: 0.35rem;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-signal);
}

.section-head {
  margin-bottom: 2rem;
  max-width: none;
  padding: 0.35rem 0 0.35rem 1.15rem;
  border-left: 3px solid var(--color-ice-dim);
  background: linear-gradient(
    90deg,
    color-mix(in srgb, var(--color-ice) 8%, transparent) 0%,
    transparent 58%
  );
  border-radius: 0 4px 4px 0;
}

.section-head h2 {
  margin-bottom: 0.4em;
}

.section-head p {
  margin: 0;
  color: var(--color-muted);
}

.about-content .section-kicker,
.faq-content .section-kicker {
  margin-bottom: 0.35rem;
}

.about-content h2,
.faq-content h2 {
  margin-left: 0;
}

.about-content,
.faq-content {
  padding-left: 1rem;
  border-left: 3px solid var(--color-ice-dim);
}

.trending-section,
.featured-section,
.questline-section,
.devlog-section,
.about-section,
.faq-section {
  padding: clamp(2.75rem, 5vw, 3.75rem) 0;
}

.trending-section {
  background: color-mix(in srgb, var(--color-bg) 78%, transparent);
  border-bottom: 1px solid var(--color-border);
}

.featured-section {
  background: color-mix(in srgb, var(--color-surface) 82%, transparent);
  border-bottom: 1px solid var(--color-border);
}

/* —— Trending：固定 3×2 桌面栅格，卡片等高 —— */
.trending-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width: 1023px) {
  .trending-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
}

@media (max-width: 767px) {
  .trending-grid {
    grid-template-columns: 1fr;
  }
}

.trend-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
  min-height: 148px;
  height: 100%;
  padding: 1.1rem 1.15rem;
  text-decoration: none;
  color: var(--color-text);
  background: var(--color-panel);
  border: 1px solid var(--color-border);
  border-radius: 2px;
  cursor: pointer;
  overflow: hidden;
  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--color-text) 6%, transparent);
}

.trend-card::before {
  content: '';
  position: absolute;
  inset: -40% -60%;
  background: linear-gradient(
    120deg,
    transparent 35%,
    color-mix(in srgb, var(--color-ice) 14%, transparent) 48%,
    transparent 62%
  );
  transform: translateX(-100%) rotate(8deg);
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
}

.trend-card:hover::before {
  transform: translateX(80%) rotate(8deg);
}

.trend-card:hover {
  border-color: var(--color-frost);
  background: color-mix(in srgb, var(--color-panel) 88%, var(--color-frost));
  box-shadow:
    inset 3px 0 0 var(--color-rust),
    0 8px 28px rgba(0, 0, 0, 0.35);
  transform: translateY(-4px);
}

@media (prefers-reduced-motion: reduce) {
  .trend-card:hover {
    transform: none;
  }

  .trend-card::before {
    display: none;
  }
}

.trend-icon {
  display: flex;
  color: var(--color-frost);
  transition: transform 0.3s ease, color 0.2s ease;
}

.trend-card:hover .trend-icon {
  transform: scale(1.08) rotate(-4deg);
  color: var(--color-primary-soft);
}

.trend-label {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.trend-meta {
  font-size: 0.8rem;
  color: var(--color-muted);
  margin-top: auto;
}

.hub-strip-nav {
  padding-top: 0.15rem;
}

.hub-strip-list {
  list-style: none;
  margin: 0;
  padding: 0.25rem 0 1.35rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.55rem;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 85%, transparent);
}

.hub-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.42rem 0.9rem;
  font-family: var(--font-display);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-muted);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-panel) 75%, transparent);
  transition:
    color 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease;
}

.hub-chip:hover {
  color: var(--color-text);
  border-color: color-mix(in srgb, var(--color-ice) 40%, var(--color-border));
  background: color-mix(in srgb, var(--color-ice) 8%, var(--color-panel));
}

.featured-split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: 2.25rem;
  align-items: stretch;
}

@media (max-width: 1023px) {
  .featured-split {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
}

.featured-cross {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  font-size: 0.9rem;
  line-height: 1.45;
  color: var(--color-muted);
}

.featured-cross a {
  color: var(--color-primary-soft);
  font-weight: 600;
  text-decoration: none;
}

.featured-cross a:hover {
  text-decoration: underline;
}

.featured-split-intro {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

/* —— Featured：右侧无图目录列表 —— */
.featured-catalog {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  min-width: 0;
}

.featured-catalog-item {
  margin: 0;
}

.featured-catalog-link {
  display: flex;
  align-items: stretch;
  gap: 0;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--color-border) 92%, var(--color-ice));
  background: linear-gradient(
    125deg,
    color-mix(in srgb, var(--color-panel) 94%, transparent) 0%,
    color-mix(in srgb, var(--color-surface) 88%, transparent) 100%
  );
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
  transition:
    border-color 0.2s ease,
    box-shadow 0.22s ease,
    background 0.22s ease;
}

.featured-catalog-link:hover {
  border-color: color-mix(in srgb, var(--color-ice) 45%, var(--color-border));
  box-shadow:
    inset 0 0 0 1px rgba(0, 0, 0, 0.14),
    0 10px 28px rgba(0, 0, 0, 0.22);
}

.featured-catalog-link:focus-visible {
  outline: 2px solid var(--color-ice);
  outline-offset: 2px;
}

.featured-catalog-accent {
  width: 4px;
  flex-shrink: 0;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--color-signal) 55%, transparent),
    color-mix(in srgb, var(--color-ice) 40%, transparent)
  );
}

.featured-catalog-body {
  flex: 1;
  min-width: 0;
  padding: 0.85rem 0.9rem 0.95rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
}

.featured-catalog-kicker {
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-signal);
}

.featured-catalog-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text);
  line-height: 1.25;
}

.featured-catalog-blurb {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.45;
  color: var(--color-muted);
}

.featured-catalog-go {
  flex-shrink: 0;
  align-self: center;
  padding: 0 0.85rem 0 0.25rem;
  font-size: 1.1rem;
  color: color-mix(in srgb, var(--color-primary-soft) 85%, var(--color-muted));
  transition: transform 0.2s ease, color 0.2s ease;
}

.featured-catalog-link:hover .featured-catalog-go {
  color: var(--color-primary-soft);
  transform: translateX(3px);
}

@media (prefers-reduced-motion: reduce) {
  .featured-catalog-link:hover .featured-catalog-go {
    transform: none;
  }
}

/* —— Quest：世界分区 + demo 时间轴 —— */
.questline-section {
  background: color-mix(in srgb, var(--color-bg) 78%, transparent);
  border-bottom: 1px solid var(--color-border);
}

.questline-content .section-head p + p {
  margin-top: 0.85em;
}

.quest-zones {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.75rem, 2vw, 1.1rem);
  margin-bottom: 1.75rem;
}

@media (max-width: 1023px) {
  .quest-zones {
    grid-template-columns: 1fr;
  }
}

.quest-zone {
  padding: 1rem 1.15rem 1.1rem;
  border: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-surface) 88%, transparent);
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
}

.quest-zone-kicker {
  display: block;
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-signal);
  margin-bottom: 0.35rem;
}

.quest-zone-title {
  display: block;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text);
  margin: 0;
}

.quest-zone p {
  margin: 0.55rem 0 0;
  font-size: 0.84rem;
  line-height: 1.45;
  color: var(--color-muted);
}

.quest-demo-block {
  margin-bottom: 1.15rem;
  padding: 0 0 0 1.15rem;
  border-left: 2px solid color-mix(in srgb, var(--color-frost) 45%, var(--color-border));
}

.quest-demo-heading {
  margin: 0 0 0.35rem;
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text);
}

.quest-demo-lead {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--color-muted);
  max-width: 62ch;
}

.quest-panel {
  border: 1px solid var(--color-border);
  background: var(--color-panel);
  border-radius: 2px;
  padding: 1.5rem 1.25rem 1.35rem;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
}

.quest-flow {
  padding: 0;
}

.quest-track {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.25rem;
  overflow-x: auto;
  padding-bottom: 0.35rem;
  scrollbar-width: thin;
}

.quest-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  text-align: center;
  flex: 0 0 auto;
  min-width: 92px;
}

.quest-dot {
  width: 10px;
  height: 10px;
  border-radius: 1px;
  background: var(--color-frost-dim);
  border: 1px solid var(--color-frost);
}

.quest-node-hub {
  position: relative;
}

.quest-dot-hub {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  background: var(--color-rust);
  border: 1px solid color-mix(in srgb, var(--color-rust-bright) 80%, black);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-rust) 25%, transparent);
  animation: fx-pulse-soft 2.8s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .quest-dot-hub {
    animation: none;
  }
}

.quest-badge {
  font-family: var(--font-display);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-bg);
  background: var(--color-amber);
  padding: 0.15rem 0.4rem;
  border-radius: 1px;
}

.quest-name {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--color-muted);
  max-width: 14ch;
  line-height: 1.25;
}

.quest-node-hub .quest-name {
  color: var(--color-text);
  font-family: var(--font-display);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.quest-line {
  flex: 1 1 24px;
  min-width: 16px;
  height: 3px;
  margin-top: 4px;
  align-self: flex-start;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    var(--color-border-strong),
    var(--color-frost-dim),
    var(--color-border-strong),
    var(--color-frost-dim)
  );
  background-size: 220% 100%;
  opacity: 0.9;
  animation: fx-shimmer-line 5s linear infinite;
}

.quest-line-accent {
  background: linear-gradient(
    90deg,
    var(--color-frost-dim),
    var(--color-rust),
    var(--color-rust-bright),
    var(--color-frost-dim)
  );
  background-size: 240% 100%;
  opacity: 1;
  animation: fx-shimmer-line 3.5s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .quest-line,
  .quest-line-accent {
    animation: none;
    background-size: 100% 100%;
  }
}

.quest-caption {
  margin: 1.1rem 0 0;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  font-size: 0.88rem;
  color: var(--color-muted);
}

@media (max-width: 767px) {
  .quest-line {
    min-width: 12px;
  }
}

/* —— Devlog —— */
.devlog-section {
  background: color-mix(in srgb, var(--color-surface) 82%, transparent);
  border-bottom: 1px solid var(--color-border);
}

.devlog-layout {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 1.75rem;
  align-items: start;
}

@media (max-width: 1023px) {
  .devlog-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.devlog-video {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-border-strong);
  border-radius: 2px;
  aspect-ratio: 16 / 9;
  background: #000;
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--color-rust) 22%, transparent),
    0 20px 50px rgba(0, 0, 0, 0.55);
}

.devlog-video::before,
.devlog-video::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: var(--color-primary-soft);
  border-style: solid;
  opacity: 0.55;
  z-index: 2;
  pointer-events: none;
}

.devlog-video::before {
  top: 10px;
  left: 10px;
  border-width: 2px 0 0 2px;
}

.devlog-video::after {
  bottom: 10px;
  right: 10px;
  border-width: 0 2px 2px 0;
}

.devlog-video-scan {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    color-mix(in srgb, var(--color-frost) 4%, transparent) 2px,
    color-mix(in srgb, var(--color-frost) 4%, transparent) 3px
  );
  opacity: 0.35;
  mix-blend-mode: overlay;
}

@media (prefers-reduced-motion: reduce) {
  .devlog-video-scan {
    opacity: 0.2;
  }
}

.devlog-video iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  z-index: 0;
}

.devlog-summary {
  background: var(--color-panel);
  border-radius: 2px;
  padding: 1.15rem 1.25rem;
  border: 1px solid var(--color-border);
}

.devlog-summary h3 {
  font-size: 1rem;
  color: var(--color-text);
  margin-bottom: 0.5em;
}

.devlog-summary ul {
  color: var(--color-muted);
  font-size: 0.92rem;
}

.devlog-summary p {
  margin-bottom: 0;
  font-size: 0.9rem;
}

/* —— About & FAQ —— */
.about-section {
  background: color-mix(in srgb, var(--color-bg) 78%, transparent);
}

.about-section p {
  color: var(--color-muted);
}

.about-section strong {
  color: var(--color-text);
}

.faq-section {
  background: color-mix(in srgb, var(--color-surface) 82%, transparent);
  border-top: 1px solid var(--color-border);
}

.faq-list {
  margin: 0;
  padding: 0;
}

.faq-item {
  padding: 1.15rem 0;
  border-bottom: 1px solid var(--color-border);
}

.faq-item:first-child {
  padding-top: 0;
}

.faq-item dt {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-text);
  margin-bottom: 0.35em;
}

.faq-item dd {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.95rem;
}
</style>
