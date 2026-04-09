<template>
  <article ref="pageRoot" class="site-page page-article">
    <section class="page-hero-section">
      <div class="container">
        <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
          <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
          <span aria-hidden="true"> / </span>
          <span>{{ $t('privacyPolicyPage.breadcrumb') }}</span>
        </nav>
        <h1>{{ $t('privacyPolicyPage.title') }}</h1>
        <p class="lead">
          {{ $t('privacyPolicyPage.lead') }}
        </p>
      </div>
    </section>
    <section class="site-page-body" :aria-label="$t('privacyPolicyPage.bodyAriaLabel')">
      <div class="container">
        <div class="site-page-prose">
          <p class="last-updated">
            <strong>{{ $t('site.lastUpdatedLabel') }}</strong> {{ $t('site.lastUpdatedDate') }}
          </p>

          <h2>{{ $t('privacyPolicyPage.whoHeading') }}</h2>
          <p>
            {{ $t('privacyPolicyPage.whoLead') }}
            <a href="mailto:wyong@roadtovostok.org">wyong@roadtovostok.org</a>.
          </p>

          <h2>{{ $t('privacyPolicyPage.collectHeading') }}</h2>
          <p v-html="$t('privacyPolicyPage.collectP1Html')"></p>
          <p v-html="$t('privacyPolicyPage.collectP2Html')"></p>

          <h2>{{ $t('privacyPolicyPage.cookiesHeading') }}</h2>
          <p v-html="$t('privacyPolicyPage.cookiesHtml')"></p>

          <h2>{{ $t('privacyPolicyPage.thirdPartyHeading') }}</h2>
          <p v-html="$t('privacyPolicyPage.thirdPartyHtml')"></p>

          <h2>{{ $t('privacyPolicyPage.childrenHeading') }}</h2>
          <p v-html="$t('privacyPolicyPage.childrenHtml')"></p>

          <h2>{{ $t('privacyPolicyPage.rightsHeading') }}</h2>
          <p v-html="$t('privacyPolicyPage.rightsHtml')"></p>

          <h2>{{ $t('privacyPolicyPage.changesHeading') }}</h2>
          <p v-html="$t('privacyPolicyPage.changesHtml')"></p>

          <p>
            <a :href="getLocalizedPath('/terms-of-service')">{{ $t('privacyPolicyPage.footerTerms') }}</a>
            ·
            <a :href="getLocalizedPath('/contact')">{{ $t('privacyPolicyPage.footerContact') }}</a>
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
