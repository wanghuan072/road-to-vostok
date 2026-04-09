<template>
  <article class="site-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
          <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
          <span aria-hidden="true"> / </span>
          <span>{{ $t('termsOfServicePage.breadcrumb') }}</span>
        </nav>
        <h1>{{ $t('termsOfServicePage.title') }}</h1>
        <p class="lead">
          {{ $t('termsOfServicePage.lead') }}
        </p>
      </div>
    </section>
    <section class="site-page-body" :aria-label="$t('termsOfServicePage.bodyAriaLabel')">
      <div class="container">
        <div class="site-page-prose">
          <p class="last-updated">
            <strong>{{ $t('site.lastUpdatedLabel') }}</strong> {{ $t('site.lastUpdatedDate') }}
          </p>

          <h2>{{ $t('termsOfServicePage.aboutHeading') }}</h2>
          <p v-html="$t('termsOfServicePage.aboutHtml')"></p>

          <h2>{{ $t('termsOfServicePage.useHeading') }}</h2>
          <p v-html="$t('termsOfServicePage.useHtml')"></p>

          <h2>{{ $t('termsOfServicePage.warrantyHeading') }}</h2>
          <p v-html="$t('termsOfServicePage.warrantyHtml')"></p>

          <h2>{{ $t('termsOfServicePage.conductHeading') }}</h2>
          <p v-html="$t('termsOfServicePage.conductHtml')"></p>

          <h2>{{ $t('termsOfServicePage.changesHeading') }}</h2>
          <p v-html="$t('termsOfServicePage.changesHtml')"></p>

          <h2>{{ $t('termsOfServicePage.contactHeading') }}</h2>
          <p>
            {{ $t('termsOfServicePage.contactHtml') }}
            <a class="contact-email" href="mailto:wyong@roadtovostok.org">wyong@roadtovostok.org</a>
          </p>

          <p>
            <a :href="getLocalizedPath('/privacy-policy')">{{ $t('termsOfServicePage.footerPrivacy') }}</a>
            ·
            <a :href="getLocalizedPath('/copyright')">{{ $t('termsOfServicePage.footerCopyright') }}</a>
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
