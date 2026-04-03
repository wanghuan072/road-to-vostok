<template>
  <article class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true"> / </span>
          <a href="/wiki">Wiki</a>
          <span aria-hidden="true"> / </span>
          <span>NPCs</span>
        </nav>
        <h1>Road To Vostok NPCs &amp; Hubs</h1>
        <p class="lead">
          <strong>Bandits</strong>, <strong>Generalist</strong>, and <strong>Doctor</strong> — community-sourced summaries
          for Road To Vostok. Cross-check tasks and stock in your build; map pins link here where marked.
          Zone walkthroughs (e.g. Apartments, Minefield) live under <a href="/guides">Guides</a>.
        </p>
      </div>
    </section>
    <section class="page-body-section" aria-label="NPC articles">
      <div class="container">
        <ul class="item-db-hub-grid" role="list">
          <li v-for="n in npcList" :key="n.addressBar">
            <a :href="`/wiki/npcs/${n.addressBar}`" class="item-db-hub-card">
              <span class="kicker">{{ n.role }}</span>
              <h2>{{ n.title }}</h2>
              <p>{{ n.summary }}</p>
              <span class="go">Open article →</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup>
import npcList from '../../data/item/npcs.js'
</script>

<style src="./item-db-shared.css"></style>
