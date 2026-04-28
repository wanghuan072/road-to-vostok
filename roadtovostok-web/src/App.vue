<template>
  <!-- 与 windrose-web 一致：无固定壳层，背景在 body（main.css） -->
  <div class="app-root" @click.capture="onContentLinkClick">
    <AppHeader />
    <main id="main-content" class="app-main">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { useHtmlContentLinkNavigation } from './composables/htmlContentLinks.js'
import { useRouteSeo } from './seo/composables.js'

useRouteSeo()
const { onContentLinkClick } = useHtmlContentLinkNavigation()
</script>

<style scoped>
.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1 0 auto;
  position: relative;
  z-index: 1;
  padding-top: 4.5rem;
}

@media (max-width: 768px) {
  .app-main {
    padding-top: 4.15rem;
  }
}

</style>
