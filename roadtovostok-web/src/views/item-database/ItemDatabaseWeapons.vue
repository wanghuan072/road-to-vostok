<template>
  <article class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true"> / </span>
          <RouterLink to="/item-database">Item database</RouterLink>
          <span aria-hidden="true"> / </span>
          <span>Weapons</span>
        </nav>
        <h1>Weapons &amp; attachments</h1>
        <p class="lead">
          Road To Vostok guns (SMGs, rifles, shotguns, pistols) and the ammunition types they feed.
          For per-round stats, open the
          <RouterLink to="/item-database/ammunition">ammunition table</RouterLink>.
        </p>
      </div>
    </section>
    <section class="page-body-section" aria-label="Weapons data table">
      <div class="container">
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th scope="col">Weapon</th>
                <th scope="col">Category</th>
                <th scope="col">Primary ammo</th>
                <th scope="col">Attachments / notes</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in rows" :key="i">
                <td>{{ row.name }}</td>
                <td>{{ row.category }}</td>
                <td>{{ row.caliber }}</td>
                <td>{{ row.attachmentsNote }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cross-links">
          Caliber stats:
          <RouterLink to="/item-database/ammunition">Ammunition types</RouterLink>.
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import rows from '../../data/item/weapons.js'
</script>

<style src="./item-db-shared.css"></style>
