<template>
  <article class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true"> / </span>
          <a href="/wiki">Wiki</a>
          <span aria-hidden="true"> / </span>
          <span>Gathering</span>
        </nav>
        <h1>Road To Vostok Gathering &amp; Raw Materials</h1>
        <p class="lead">
          Environmental loot and harvest nodes that feed crafting and survival. For combat loot,
          see <a href="/wiki/weapons">weapons</a> and
          <a href="/wiki/ammunition">ammunition</a>; crafting context on
          <a href="/getting-started">Start here</a>.
        </p>
      </div>
    </section>
    <section class="page-body-section" aria-label="Gathering data table">
      <div class="container">
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th scope="col">Resource</th>
                <th scope="col">Typical source</th>
                <th scope="col">Used for</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in rows" :key="i">
                <td>{{ row.resource }}</td>
                <td>{{ row.source }}</td>
                <td>{{ row.usedFor }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cross-links">
          Crafting context:
          <a href="/getting-started">How to craft in Road To Vostok</a>
          ·
          <a href="/wiki/ammunition">Ammunition</a>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import rows from '../../data/item/gathering.js'
</script>

<style src="./item-db-shared.css"></style>
