<template>
  <article class="site-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true"> / </span>
          <span>Not found</span>
        </nav>
        <h1>Page not found</h1>
        <p class="lead">
          This URL is not part of Road To Vostok Guide. Use the navigation or return home.
        </p>
        <p>
          <RouterLink to="/">Back to home</RouterLink>
          ·
          <RouterLink to="/item-database">Gear &amp; items</RouterLink>
          ·
          <RouterLink to="/maps-tasks">Maps &amp; quests</RouterLink>
        </p>
      </div>
    </section>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style src="./site-pages.css"></style>
