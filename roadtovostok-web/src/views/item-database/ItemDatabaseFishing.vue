<template>
  <article class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true"> / </span>
          <RouterLink to="/item-database">Item database</RouterLink>
          <span aria-hidden="true"> / </span>
          <span>Fishing</span>
        </nav>
        <h1>Fishing in Road To Vostok</h1>
        <p class="lead">
          How to fish in Road To Vostok depends on your build: fishing appears on the official
          long-term roadmap. Use this list as a reference and confirm against patch notes and your
          installed build.
        </p>
      </div>
    </section>
    <section class="page-body-section" aria-label="Fishing checklist">
      <div class="container">
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th scope="col">Topic</th>
                <th scope="col">What to check</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in rows" :key="i">
                <td>{{ row.topic }}</td>
                <td>{{ row.detail }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cross-links">
          Patch timing:
          <RouterLink to="/dev-updates">Road ahead</RouterLink>
          ·
          <RouterLink to="/getting-started">Start here</RouterLink>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import rows from '../../data/item/fishing.js'
</script>

<style src="./item-db-shared.css"></style>
