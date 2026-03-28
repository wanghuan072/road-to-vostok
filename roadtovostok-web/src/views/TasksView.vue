<template>
  <article class="tasks-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <div class="page-hero-content">
          <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true">/</span>
            <span>Tasks</span>
          </nav>
          <h1>Road To Vostok Tasks &amp; progression</h1>
          <p>
            Trader tasks, border crossings, and Vostok permadeath rules — aligned with the public
            roadtovostok.com game page. For the interactive map and POI index, open
            <RouterLink to="/map">Map</RouterLink>. Unofficial; verify in your build.
          </p>
        </div>
      </div>
    </section>

    <div ref="railScrollRoot" class="container tasks-rail-body">
      <PageRail
        aside-label="Tasks briefing"
        title="On this page"
        :scroll-root="railScrollRoot"
        :links="asideLinks"
      >
        <section data-nav-anchor="all-tasks-guide" class="guide-section page-body-section">
      <div class="container">
        <div class="guide-prose">
          <h2>All tasks &amp; progression (what exists today vs roadmap)</h2>
          <p>
            The public game page advertises <strong>trading &amp; tasks</strong> as a headline feature:
            you work with traders, complete jobs they offer, and use rewards to prepare for harder maps.
            That is the honest scope of “tasks” the developer markets for the survival loop leading
            eastward.
          </p>
          <p>
            The <strong>Roadmap</strong> on the same site schedules deeper narrative systems later:
            <strong>Build 3 — Signal</strong> (target <strong>Q4 / 2026</strong>) adds a
            <strong>quest system</strong> and lore elements, and <strong>Build 8 — Silent Night</strong>
            (date TBA) lists a <strong>full questline</strong>. So searches for
            <strong>Road To Vostok all tasks</strong> should distinguish: <em>trader tasks and sandbox
            objectives in current / Early Access builds</em> versus a <em>single finished story
            questline</em> that the roadmap still places in a future build.
          </p>
          <h3>Practical order players follow</h3>
          <ol class="guide-steps">
            <li>
              Secure a <strong>shelter</strong> save loop in Area 05 and learn trader locations (official
              text ties shelters, traders, and tasks together in the starting region).
            </li>
            <li>
              Complete tasks that fund meds, ammo, and travel gear; stash surplus at the shelter before
              risky trips.
            </li>
            <li>
              When ready, commit to a <strong>Border Zone</strong> crossing that matches your kit (mines
              vs boats vs obstacles — official crossing variety).
            </li>
            <li>
              Treat <strong>Vostok</strong> as optional endgame: permadeath rules apply only there per
              the official description — you are not forced into that playstyle for every run.
            </li>
          </ol>
          <p class="guide-tools">
            Related hubs:
            <RouterLink to="/wiki/core-tasks">Core task items</RouterLink> (power, keys),
            <RouterLink to="/guides/inverter-location">Inverter</RouterLink>,
            <RouterLink to="/guides/roadmap">Roadmap guide</RouterLink>.
          </p>
        </div>
      </div>
        </section>

        <section data-nav-anchor="vostok-border-guide" class="guide-section page-body-section">
      <div class="container">
        <div class="guide-prose">
          <h2>Border Zone &amp; Vostok crossing guide</h2>
          <p>
            Once you have enough equipment, the official copy says your route continues
            <strong>east</strong> into the <strong>Border Zone</strong> — a guarded border between
            Finland and Russia. Each Border Zone map is said to have a <strong>crossing point</strong>
            with <strong>different challenges</strong>: some use <strong>mines</strong> or physical
            obstacles, others require <strong>waterways and boats</strong>.
          </p>
          <h3>Guards and combat pressure</h3>
          <p>
            The site names <strong>Guards</strong> as foreign border forces who are armed, corrupt, and
            may rely on <strong>air support</strong> to stop crossings. Plan stamina, cover, and
            medical supplies accordingly — see the
            <RouterLink to="/guides/load-weapon">load weapons</RouterLink> guide for combat prep.
          </p>
          <h3>After the border: Vostok rules</h3>
          <p>
            If you cross successfully, you enter <strong>Vostok</strong> (Russia). Official text
            stresses:
          </p>
          <ul>
            <li>
              <strong>High risk, high reward</strong> — the most valuable loot in the game.
            </li>
            <li>
              <strong>Permadeath on Vostok maps:</strong> dying in Area 05 or the Border Zone costs only
              what you carry; dying in Vostok costs <strong>everything</strong> (per the Game page).
            </li>
            <li>
              <strong>Military control:</strong> heavy weapons and armored vehicles; their stated goal is
              to push you back.
            </li>
          </ul>
          <p>
            The same page notes the game does <strong>not</strong> force you into the permadeath zone —
            you can stay in the sandbox elsewhere. Dynamic systems and randomized events are cited as
            replay drivers, with <strong>no single winning condition</strong>.
          </p>
          <p class="guide-disclaimer">
            Early Access launch is listed on the official roadmap as <strong>April 7, 2026</strong>; map
            count and faction behavior will evolve — re-read patch notes after updates.
          </p>
        </div>
      </div>
        </section>
      </PageRail>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import PageRail from '../components/PageRail.vue'

const railScrollRoot = ref(null)

const asideLinks = [
  { label: 'All tasks', scrollKey: 'all-tasks-guide' },
  { label: 'Border & Vostok', scrollKey: 'vostok-border-guide' },
]
</script>

<style scoped>
.tasks-page.page-article {
  padding-bottom: 4rem;
}

.page-hero-content p {
  color: var(--color-muted);
}

.page-body-section {
  padding: 1.5rem 0;
  border-top: 1px solid var(--color-border);
}

.guide-section:first-of-type.page-body-section {
  border-top: none;
}

.guide-prose {
  max-width: 72ch;
}

.guide-prose h2 {
  margin: 0 0 0.75rem;
  font-size: 1.35rem;
  color: var(--color-text);
}

.guide-prose h3 {
  margin: 1.35rem 0 0.5rem;
  font-size: 1.05rem;
  color: var(--color-primary-soft);
}

.guide-prose p {
  margin: 0 0 0.85rem;
  color: var(--color-muted);
  font-size: 0.94rem;
  line-height: 1.6;
}

.guide-prose ul,
.guide-prose ol {
  margin: 0 0 0.85rem;
  padding-left: 1.25rem;
  color: var(--color-muted);
  font-size: 0.94rem;
  line-height: 1.55;
}

.guide-prose li {
  margin-bottom: 0.35rem;
}

.guide-steps {
  list-style-position: outside;
}

.guide-tools {
  margin-top: 1rem !important;
  padding: 0.85rem 1rem;
  border-left: 3px solid var(--color-frost);
  background: color-mix(in srgb, var(--color-panel) 88%, transparent);
  border-radius: 0 6px 6px 0;
  font-size: 0.9rem !important;
}

.guide-tools a {
  color: var(--color-primary-soft);
}

.guide-disclaimer {
  margin-bottom: 0 !important;
  font-size: 0.88rem !important;
  color: var(--color-muted);
  opacity: 0.95;
}
</style>
