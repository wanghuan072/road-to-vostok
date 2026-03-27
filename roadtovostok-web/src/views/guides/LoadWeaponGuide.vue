<template>
  <article class="guide page-article">
    <section class="guide-hero-section">
      <div class="container">
        <div class="guide-hero-content">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span aria-hidden="true"> / </span>
            <span>Load weapon</span>
          </nav>
          <h1>Road To Vostok: how to load shotgun, weapons &amp; ammo</h1>
          <p>
            Covers magazine-fed guns <em>and</em> the manual steps people mean when they search
            <strong>Road To Vostok how to load shotgun</strong> or <strong>how to load weapon</strong>
            — plus stash discipline after a wipe.
          </p>
        </div>
      </div>
    </section>
    <section class="guide-body-section">
      <div class="container">
        <PageRail
          aside-label="Loadout"
          title="Related"
          :links="asideLinks"
        >
          <div class="guide-body-content">
            <h2>Magazine-fed rifles &amp; pistols</h2>
            <ol>
              <li>Open inventory and confirm compatible magazines for your firearm family.</li>
              <li>Load cartridges into empty mags before you expect to press reload in a fight.</li>
              <li>Seat the mag, rack the bolt or release the slide depending on weapon state.</li>
              <li>Verify chamber status in safe areas — audio cues differ per build.</li>
              <li>Stash spare filled magazines in your shelter before long crossings.</li>
            </ol>
            <h2>Shotguns, bolt-actions &amp; single-loading</h2>
            <p>
              These weapons do not behave like “press R to top off.” Complete the in-game tutorial
              segment for shotgun / sniper kits: you will get on-screen prompts for cycling the action
              and feeding shells or rounds one by one. Rebind keys if Alt / Ctrl / LMB combos feel
              awkward on your mouse.
            </p>
            <p class="note">
              Numbers change with each <strong>Road To Vostok update</strong>; revalidate after patches listed on the
              <RouterLink to="/guides/roadmap">roadmap guide</RouterLink> and <RouterLink to="/dev-updates">Road ahead</RouterLink>.
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
  { label: 'Gear & items', to: '/item-database/weapons' },
  { label: 'Maps & quests', to: '/maps-tasks' },
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
