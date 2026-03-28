<template>
  <article class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <nav class="page-hero-breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true"> / </span>
          <RouterLink to="/wiki">Wiki</RouterLink>
          <span aria-hidden="true"> / </span>
          <span>Core tasks</span>
        </nav>
        <h1>Road To Vostok Core Tasks &amp; Power Items</h1>
        <p class="lead">
          Items players pair with shelter power, cabling, and quest chains (<strong>all tasks</strong>).
          Cross-check the
          <RouterLink to="/guides/inverter-location">inverter</RouterLink> guide and the
          <RouterLink to="/map">Map</RouterLink> / <RouterLink to="/tasks">Tasks</RouterLink> pages.
        </p>
      </div>
    </section>
    <section class="page-body-section" aria-label="Core tasks data table">
      <div class="container">
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Role</th>
                <th scope="col">Related progression</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in rows" :key="i">
                <td>{{ row.item }}</td>
                <td>{{ row.role }}</td>
                <td>{{ row.taskLink }}</td>
                <td>{{ row.notes }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cross-links">
          Deeper walkthroughs:
          <RouterLink to="/guides/inverter-location">Inverter location</RouterLink>
          ·
          <RouterLink to="/tasks">Tasks</RouterLink>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import rows from '../../data/item/coreTasks.js'
</script>

<style src="./item-db-shared.css"></style>
