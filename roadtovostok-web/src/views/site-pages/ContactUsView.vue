<template>
  <article ref="pageRoot" class="site-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
          <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
          <span aria-hidden="true"> / </span>
          <span>{{ $t('contactPage.breadcrumb') }}</span>
        </nav>
        <h1>{{ $t('contactPage.title') }}</h1>
        <p class="lead">
          {{ $t('contactPage.lead') }}
        </p>
      </div>
    </section>
    <section class="site-page-body" :aria-label="$t('contactPage.bodyAriaLabel')">
      <div class="container">
        <div class="site-page-prose">
          <h2>{{ $t('contactPage.emailHeading') }}</h2>
          <p v-html="$t('contactPage.emailIntroHtml')"></p>
          <p>
            <a class="contact-email" href="mailto:wyong@roadtovostok.org">wyong@roadtovostok.org</a>
          </p>
          <p v-html="$t('contactPage.emailFollowHtml')"></p>

          <h2>{{ $t('contactPage.gameSupportHeading') }}</h2>
          <p v-html="$t('contactPage.gameSupportHtml')"></p>

          <h2>{{ $t('contactPage.privacyHeading') }}</h2>
          <p v-html="$t('contactPage.privacyHtml')"></p>

          <p>
            <a :href="getLocalizedPath('/about')">{{ $t('contactPage.footerAbout') }}</a>
            ·
            <a :href="getLocalizedPath('/terms-of-service')">{{ $t('contactPage.footerTerms') }}</a>
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
