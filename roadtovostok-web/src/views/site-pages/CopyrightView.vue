<template>
  <article class="site-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
          <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
          <span aria-hidden="true"> / </span>
          <span>{{ $t('copyrightPage.breadcrumb') }}</span>
        </nav>
        <h1>{{ $t('copyrightPage.title') }}</h1>
        <p class="lead">
          {{ $t('copyrightPage.lead') }}
        </p>
      </div>
    </section>
    <section class="site-page-body" :aria-label="$t('copyrightPage.bodyAriaLabel')">
      <div class="container">
        <div class="site-page-prose">
          <p class="last-updated">
            <strong>{{ $t('site.lastUpdatedLabel') }}</strong> {{ $t('site.lastUpdatedDate') }}
          </p>

          <h2>{{ $t('copyrightPage.gameHeading') }}</h2>
          <p v-html="$t('copyrightPage.gameHtml')"></p>

          <h2>{{ $t('copyrightPage.siteHeading') }}</h2>
          <p v-html="$t('copyrightPage.siteHtml')"></p>

          <h2>{{ $t('copyrightPage.takedownHeading') }}</h2>
          <p>
            {{ $t('copyrightPage.takedownHtml') }}
            <a href="mailto:wyong@roadtovostok.org">wyong@roadtovostok.org</a>
          </p>

          <p>
            <a :href="getLocalizedPath('/terms-of-service')">{{ $t('copyrightPage.footerTerms') }}</a>
            ·
            <a :href="getLocalizedPath('/privacy-policy')">{{ $t('copyrightPage.footerPrivacy') }}</a>
          </p>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { useLocalizedPath } from '../../composables/useLocalizedPath.js'

const { getLocalizedPath } = useLocalizedPath()
</script>

<style src="./site-pages.css"></style>
