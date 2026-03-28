<template>
  <article class="site-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true"> / </span>
          <span>Contact Us</span>
        </nav>
        <h1>Road To Vostok — Contact Us</h1>
        <p class="lead">
          Reach the Road To Vostok Guide site by email. We do not use a contact form on this page.
        </p>
      </div>
    </section>
    <section class="site-page-body" aria-label="Contact information">
      <div class="container">
        <div class="site-page-prose">
          <h2>Email</h2>
          <p>
            For corrections to guides, broken links, copyright concerns, or general questions about this
            website, write to:
          </p>
          <p>
            <a class="contact-email" href="mailto:wyong@roadtovostok.org">wyong@roadtovostok.org</a>
          </p>
          <p>
            Please include a clear subject line and, when reporting a content issue, the page URL and a
            short description of what should be fixed. We are a small fan project; replies may take
            several business days.
          </p>

          <h2>Game support</h2>
          <p>
            For bugs, purchases, or account issues with <strong>Road To Vostok</strong> itself, contact the
            game’s official support channels (for example via Steam or the developer’s site). We cannot
            reset saves, refund purchases, or change game builds.
          </p>

          <h2>Privacy</h2>
          <p>
            If your message contains personal data, see our
            <RouterLink to="/privacy-policy">Privacy Policy</RouterLink> for how we handle correspondence.
          </p>

          <p>
            <RouterLink to="/about">About Us</RouterLink>
            ·
            <RouterLink to="/terms-of-service">Terms of Service</RouterLink>
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
