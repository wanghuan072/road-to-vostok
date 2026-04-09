<template>
  <article class="site-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
          <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
          <span aria-hidden="true"> / </span>
          <span>{{ $t('aboutPage.breadcrumb') }}</span>
        </nav>
        <h1>{{ $t('aboutPage.title') }}</h1>
        <p class="lead">
          {{ $t('aboutPage.lead') }}
        </p>
      </div>
    </section>
    <section class="site-page-body" :aria-label="$t('aboutPage.bodyAriaLabel')">
      <div class="container">
        <div class="site-page-prose">
          <h2>{{ $t('aboutPage.purposeHeading') }}</h2>
          <p>
            {{ $t('aboutPage.purposeText') }}
          </p>

          <h2>{{ $t('aboutPage.independenceHeading') }}</h2>
          <p>
            <span v-html="$t('aboutPage.independenceBeforeLinksHtml')"></span><a
              href="https://www.roadtovostok.com/"
              rel="noopener noreferrer"
              target="_blank"
            >roadtovostok.com</a>{{ $t('aboutPage.independenceBetweenLinks') }}<a
              href="https://store.steampowered.com/app/1963610/Road_to_Vostok/"
              rel="noopener noreferrer"
              target="_blank"
            >Steam</a>.
          </p>

          <h2>{{ $t('aboutPage.exploreHeading') }}</h2>
          <p v-html="$t('aboutPage.exploreHtml')"></p>

          <h2>{{ $t('aboutPage.contactHeading') }}</h2>
          <p>
            {{ $t('aboutPage.contactHtml') }}
            <a class="contact-email" href="mailto:wyong@roadtovostok.org">wyong@roadtovostok.org</a>
          </p>

          <p>
            <a :href="getLocalizedPath('/contact')">{{ $t('aboutPage.footerContact') }}</a>
            ·
            <a :href="getLocalizedPath('/privacy-policy')">{{ $t('aboutPage.footerPrivacy') }}</a>
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
