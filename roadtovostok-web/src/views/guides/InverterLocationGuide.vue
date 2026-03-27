<template>
  <article class="guide page-article">
    <section class="guide-hero-section">
      <div class="container">
        <div class="guide-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true"> / </span>
            <span>Inverter location</span>
          </nav>
          <h1>Road To Vostok inverter location &amp; shelter power</h1>
          <p>
            Players hunt <strong>Road To Vostok inverter</strong> spawns and <strong>B cables</strong> when
            nights get longer or traders rotate stock. Use this checklist while you sweep
            <strong>Area 05</strong> industrial POIs.
          </p>
        </div>
      </div>
    </section>
    <section class="guide-body-section">
      <div class="container">
        <PageRail
          aside-label="Power grid"
          title="Related"
          :links="asideLinks"
        >
          <div class="guide-body-content">
            <h2>Scouting route</h2>
            <ul>
              <li>Mark industrial shells and utility yards — inverters often spawn near cabling props.</li>
              <li>Pair map knowledge from <RouterLink to="/maps-tasks">Maps &amp; quests</RouterLink> with trader rumors.</li>
              <li>Carry spare fuel before relocating; moving power gear mid-storm is risky.</li>
            </ul>
            <p class="note">
              Coordinate updates with <RouterLink to="/dev-updates">Road ahead</RouterLink> whenever loot tables shift in a new
              <strong>update</strong>.
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
  { label: 'Core tasks table', to: '/item-database/core-tasks' },
  { label: 'Maps & quests', to: '/maps-tasks' },
  { label: 'Road ahead', to: '/dev-updates' },
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

.guide-body-content ul {
  color: var(--color-muted);
}

.note {
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: var(--color-muted);
}
</style>
