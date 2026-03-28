<template>
  <article class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true"> / </span>
          <RouterLink to="/wiki">Wiki</RouterLink>
          <span aria-hidden="true"> / </span>
          <span>Gathering</span>
        </nav>
        <h1>Gathering &amp; raw materials</h1>
        <p class="lead">
          Environmental loot and harvest nodes that feed crafting and survival. For combat loot,
          see <RouterLink to="/wiki/weapons">weapons</RouterLink> and
          <RouterLink to="/wiki/ammunition">ammunition</RouterLink>; crafting context on
          <RouterLink to="/getting-started">Start here</RouterLink>.
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
          <RouterLink to="/getting-started">How to craft in Road To Vostok</RouterLink>
          ·
          <RouterLink to="/wiki/ammunition">Ammunition</RouterLink>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import rows from '../../data/item/gathering.js'
</script>

<style src="./item-db-shared.css"></style>
