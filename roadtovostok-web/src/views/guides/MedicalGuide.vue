<template>
  <article class="guide page-article">
    <section class="guide-hero-section">
      <div class="container">
        <div class="guide-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true"> / </span>
            <span>Medical</span>
          </nav>
          <h1>Died from broken bone? Road To Vostok medical &amp; healing</h1>
          <p>
            Hardcore survival: fractures and bleeding kill runs if ignored. This page targets searches
            like <strong>died from broken bone Road To Vostok</strong> — splints, bandages, medkits, and
            how to recover health after rifle fire or falls.
          </p>
        </div>
      </div>
    </section>
    <section class="guide-body-section">
      <div class="container">
        <PageRail
          aside-label="Med bay"
          title="Related"
          :links="asideLinks"
        >
          <div class="guide-body-content">
            <h2>Triage order</h2>
            <ol>
              <li>Stop bleeding before stabilizing limbs — blood loss gates your movement speed.</li>
              <li>Apply splints to flagged fractures; watch for animation locks that telegraph severity.</li>
              <li>Rest in shelter beds when available; storms amplify medical drain.</li>
              <li>Restock after each border attempt; <RouterLink to="/item-database">Gear &amp; items</RouterLink> tracks staples.</li>
            </ol>
            <p class="note">
              Medical tuning shifts across <strong>updates</strong>; bookmark the <RouterLink to="/guides/roadmap">roadmap guide</RouterLink> and <RouterLink to="/dev-updates">Road ahead</RouterLink> for overhaul builds.
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
  { label: 'Start here', to: '/getting-started' },
  { label: 'Gear & items', to: '/item-database' },
  { label: 'Saves & fixes', to: '/tech-support' },
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

.guide-body-content ol {
  color: var(--color-muted);
}

.note {
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: var(--color-muted);
}
</style>
