<template>
  <article class="guide page-article">
    <section class="guide-hero-section">
      <div class="container">
        <div class="guide-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true"> / </span>
            <span>Roadmap</span>
          </nav>
          <h1>Road To Vostok roadmap &amp; release date (Early Access)</h1>
          <p>
            Milestones for people searching <strong>Road To Vostok roadmap</strong> or
            <strong>Road To Vostok release date</strong>: Early Access builds, future fishing / naval /
            modding beats, and how updates roll out on Steam.
          </p>
        </div>
      </div>
    </section>
    <section class="guide-body-section">
      <div class="container">
        <PageRail
          aside-label="Intel"
          title="Related"
          :links="asideLinks"
        >
          <div class="guide-body-content">
            <h2>Build sequence (high level)</h2>
            <ul class="builds">
              <li><strong>Build 1 — Road:</strong> Early Access launch, expanded maps, dynamic events, multi-shelter support.</li>
              <li><strong>Build 2 — Nomads:</strong> Friendly faction, AI skirmishes, roaming traders.</li>
              <li><strong>Build 3 — Signal:</strong> Quest scaffolding, lore sites, new shelters.</li>
              <li><strong>Later builds:</strong> weapon overhaul, seasons, trains, naval layers, dialogue, full questline.</li>
            </ul>
            <p class="note">
              For dates and all eight builds, open <RouterLink to="/dev-updates">Road ahead</RouterLink>. The homepage devlog strip is another quick pulse check.
            </p>
          </div>
        </PageRail>
      </div>
    </section>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import PageRail from '../../components/PageRail.vue'

const asideLinks = [
  { label: 'Road ahead (full)', to: '/dev-updates' },
  { label: 'Maps & quests', to: '/maps-tasks' },
  { label: 'Start here', to: '/getting-started' },
]
</script>

<style scoped>
.guide {
  padding-bottom: 4rem;
}

.guide-hero-section {
  padding: 2.5rem 0 1.5rem;
}

.breadcrumb {
  font-size: 0.85rem;
  color: var(--color-muted);
  margin-bottom: 1rem;
}

.breadcrumb a {
  text-decoration: none;
}

.guide-hero-content p {
  color: var(--color-muted);
}

.builds {
  color: var(--color-muted);
}

.builds strong {
  color: var(--color-primary-soft);
}

.note {
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: var(--color-muted);
}
</style>
