<template>
  <article class="site-page page-article">
    <section class="page-hero-section page-hero-section--compact">
      <div class="container">
        <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
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
          <RouterLink to="/wiki">Wiki</RouterLink>
          ·
          <RouterLink to="/map">Map</RouterLink> · <RouterLink to="/tasks">Tasks</RouterLink>
          ·
          <RouterLink to="/guides">Guides</RouterLink>
        </p>
      </div>
    </section>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style src="./site-pages.css"></style>
