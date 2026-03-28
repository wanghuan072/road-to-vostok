<template>
  <article class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true"> / </span>
          <span>Wiki</span>
        </nav>
        <h1>Road To Vostok item database</h1>
        <p class="lead">
          Curated tables for <strong>Road To Vostok guns</strong> and
          <strong>ammunition types</strong>, <strong>inverter</strong> / <strong>B cables</strong> and
          other <strong>all tasks</strong> props, plus <strong>how to fish</strong> notes and field
          <strong>gathering</strong>. Long-form strategy lives under
          <RouterLink to="/guides">Guides</RouterLink> — e.g.
          <RouterLink to="/guides/an-analytical-deep-dive-into-its-real-world-geography">real-world geography</RouterLink>
          and
          <RouterLink to="/guides/surviving-the-Minefield">Minefield tactics</RouterLink>.
          Always verify values in your installed build.
        </p>
      </div>
    </section>
    <section class="page-body-section" aria-label="Wiki categories">
      <div class="container">
        <ul class="item-db-hub-grid" role="list">
          <li>
            <RouterLink to="/wiki/core-tasks" class="item-db-hub-card">
              <span class="kicker">Core tasks &amp; power</span>
              <h2>Inverter, B cables &amp; quest props</h2>
              <p>
                Shelter power chain, cabling, and keys tied to <strong>all tasks</strong> progression.
              </p>
              <span class="go">Open table →</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/wiki/weapons" class="item-db-hub-card">
              <span class="kicker">Weapons &amp; attachments</span>
              <h2>Guns &amp; platforms</h2>
              <p>
                SMGs, rifles, shotguns, pistols — what each gun feeds and short attachment notes.
              </p>
              <span class="go">Open table →</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/wiki/ammunition" class="item-db-hub-card">
              <span class="kicker">Ammunition</span>
              <h2>Calibers &amp; stacks</h2>
              <p>Per-round value, weight, max stack, and weapon compatibility from the wiki table.</p>
              <span class="go">Open table →</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/wiki/fishing" class="item-db-hub-card">
              <span class="kicker">Fishing</span>
              <h2>How to fish (Early Access)</h2>
              <p>Rods, bait, and roadmap caveats for <strong>how fish</strong> searches.</p>
              <span class="go">Open guide list →</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/wiki/gathering" class="item-db-hub-card">
              <span class="kicker">Gathering</span>
              <h2>Field resources</h2>
              <p>Wood, scrap, forage, and raw inputs that feed survival and crafting loops.</p>
              <span class="go">Open table →</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/wiki/npcs" class="item-db-hub-card">
              <span class="kicker">Characters</span>
              <h2>NPCs &amp; hubs</h2>
              <p>
                Traders and settlement notes (e.g. Generalist, Doctor) with links from the
                <strong>map</strong> pins.
              </p>
              <span class="go">Open NPC wiki →</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style src="./item-db-shared.css"></style>
