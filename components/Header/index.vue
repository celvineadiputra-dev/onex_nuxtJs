<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div class="container">
        <a class="navbar-brand" href="#">{{ title }}</a
        ><button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav align-items-center-md">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link active"
                >Home</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">Beverages</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">Chef</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">Ingredient</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">Stories</NuxtLink>
            </li>
            <li class="nav-item">
              <bread-button
                text="My Kitchen"
                bgcolor="bg-lightPink"
                class="ml-md-20px"
                :style="{
                  width: 155 + 'px',
                  height: 50 + 'px',
                }"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import breadButton from '../Buttons/breadButton.vue'
export default {
  name: 'Header',
  componets: {
    breadButton,
  },
  data() {
    return {
      title: 'OnexFoods',
    }
  },
}
</script>

<style>
.nav-item:nth-child(1),
.nav-item:nth-child(2),
.nav-item:nth-child(3),
.nav-item:nth-child(4),
.nav-item:nth-child(5) {
  margin-right: 10px;
}
</style>
