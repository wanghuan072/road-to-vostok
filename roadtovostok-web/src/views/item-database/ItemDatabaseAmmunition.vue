<template>
  <article class="item-db-page">
    <section class="page-hero-section">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span aria-hidden="true"> / </span>
          <RouterLink to="/item-database">Item database</RouterLink>
          <span aria-hidden="true"> / </span>
          <span>Ammunition</span>
        </nav>
        <h1>Ammunition types &amp; calibers</h1>
        <p class="lead">
          Road To Vostok ammo types, stack sizes, and which guns use each caliber. Pairs with the
          <RouterLink to="/item-database/weapons">weapons &amp; attachments</RouterLink> list.
        </p>
      </div>
    </section>
    <section class="page-body-section" aria-label="Ammunition data table">
      <div class="container">
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th scope="col">Ammunition</th>
                <th scope="col">Value (€) / round</th>
                <th scope="col">Weight (kg) / round</th>
                <th scope="col">Max stack</th>
                <th scope="col">Weapon compatibility</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in rows" :key="i">
                <td>{{ row.caliber }}</td>
                <td>{{ row.valueEur }}</td>
                <td>{{ row.weightKg }}</td>
                <td>{{ row.maxStack }}</td>
                <td>{{ row.compatibility }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cross-links">
          See which firearms use each caliber in
          <RouterLink to="/item-database/weapons">Weapons &amp; attachments</RouterLink>.
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import rows from '../../data/item/ammunition.js'
</script>

<style src="./item-db-shared.css"></style>
