<template>
  <article class="site-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true"> / </span>
          <span>About Us</span>
        </nav>
        <h1>About Road To Vostok Guide</h1>
        <p class="lead">
          What this English-language wiki is for, and what it is not.
        </p>
      </div>
    </section>
    <section class="site-page-body" aria-label="About this website">
      <div class="container">
        <div class="site-page-prose">
          <h2>Our purpose</h2>
          <p>
            Road To Vostok Guide is a player-focused help site: maps and tasks, item tables, how-to guides
            for weapons and medical systems, save paths on PC, and summaries of public roadmap news. We
            aim for clear, searchable pages that complement the official game site and Steam store — not
            replace them.
          </p>

          <h2>Independence</h2>
          <p>
            We are <strong>not</strong> the official Road To Vostok team. We do not speak for the
            developer or publisher. Builds, loot, and mechanics change; always double-check critical
            details in your installed game and on
            <a href="https://www.roadtovostok.com/" rel="noopener noreferrer" target="_blank">roadtovostok.com</a>
            and
            <a
              href="https://store.steampowered.com/app/1963610/Road_to_Vostok/"
              rel="noopener noreferrer"
              target="_blank"
            >Steam</a>.
          </p>

          <h2>How to explore</h2>
          <p>
            Start with <RouterLink to="/getting-started">Start here</RouterLink> for controls and first
            steps, <RouterLink to="/item-database">Gear &amp; items</RouterLink> for tables, and
            <RouterLink to="/maps-tasks">Maps &amp; quests</RouterLink> for progression help. Updates and
            build names are summarized under <RouterLink to="/dev-updates">Road ahead</RouterLink>.
          </p>

          <h2>Contact</h2>
          <p>
            Site feedback or legal notices:
            <a class="contact-email" href="mailto:wyong@roadtovostok.org">wyong@roadtovostok.org</a>
          </p>

          <p>
            <RouterLink to="/contact">Contact page</RouterLink>
            ·
            <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
          </p>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style src="./site-pages.css"></style>
