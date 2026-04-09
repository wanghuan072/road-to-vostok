<template>
  <article class="site-page page-article">
    <section class="page-hero-section page-hero-section--compact">
      <div class="container">
        <nav class="page-hero-breadcrumb" :aria-label="$t('site.breadcrumbAriaLabel')">
          <a :href="getLocalizedPath('/')">{{ $t('site.breadcrumbHome') }}</a>
          <span aria-hidden="true"> / </span>
          <span>{{ $t('notFoundPage.breadcrumb') }}</span>
        </nav>
        <h1>{{ $t('notFoundPage.title') }}</h1>
        <p class="lead">
          {{ $t('notFoundPage.lead') }}
        </p>
        <p>
          <a :href="getLocalizedPath('/')">{{ $t('notFoundPage.backHome') }}</a>
          ·
          <a :href="getLocalizedPath('/wiki')">{{ $t('notFoundPage.linkWiki') }}</a>
          ·
          <a :href="getLocalizedPath('/map')">{{ $t('notFoundPage.linkMap') }}</a> ·
          <a :href="getLocalizedPath('/tasks')">{{ $t('notFoundPage.linkTasks') }}</a>
          ·
          <a :href="getLocalizedPath('/guides')">{{ $t('notFoundPage.linkGuides') }}</a>
        </p>
      </div>
    </section>
  </article>
</template>

<script setup>
import { useLocalizedPath } from '../../composables/useLocalizedPath.js'

const { getLocalizedPath } = useLocalizedPath()
</script>

<style src="./site-pages.css"></style>
