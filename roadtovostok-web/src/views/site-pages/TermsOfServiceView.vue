<template>
  <article class="site-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true"> / </span>
          <span>Terms of Service</span>
        </nav>
        <h1>Terms of Service</h1>
        <p class="lead">
          Rules for using Road To Vostok Guide (roadtovostok.org). By using the site, you agree to these terms.
        </p>
      </div>
    </section>
    <section class="site-page-body" aria-label="Terms of service content">
      <div class="container">
        <div class="site-page-prose">
          <p class="last-updated"><strong>Last updated:</strong> March 27, 2026</p>

          <h2>About this site</h2>
          <p>
            Road To Vostok Guide is an independent, fan-made reference. It is not endorsed by, affiliated
            with, or sponsored by the developers or publishers of Road To Vostok or any related
            trademark holders. Game names and marks belong to their respective owners.
          </p>

          <h2>Use of content</h2>
          <p>
            Guides, tables, and text are provided for personal, non-commercial reference to help players.
            You may link to our pages. Do not scrape or redistribute large portions of the site in a way
            that competes with or replaces the live site without permission. Game data and numbers may be
            inaccurate or outdated; always verify against your installed build and official sources.
          </p>

          <h2>No warranty</h2>
          <p>
            The site is provided “as is.” We make no guarantee of accuracy, availability, or fitness for a
            particular purpose. We are not liable for any loss or damage arising from your use of the site
            or reliance on its content.
          </p>

          <h2>Conduct</h2>
          <p>
            Do not use the site to harass others, distribute malware, attempt unauthorized access to our
            systems, or break applicable laws. We may restrict access if we reasonably believe these terms
            are violated.
          </p>

          <h2>Changes</h2>
          <p>
            We may change these Terms of Service at any time. We will update the “Last updated” date when
            we do. Your continued use of the site after changes constitutes acceptance of the new terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:
            <a class="contact-email" href="mailto:wyong@roadtovostok.org">wyong@roadtovostok.org</a>
          </p>

          <p>
            <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
            ·
            <RouterLink to="/copyright">Copyright</RouterLink>
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
