<script setup>
import FilterHeader from './components/FilterHeader.vue'
</script>
<template>
  <v-app id="root">
    <filter-header />
    <v-main><router-view class="router-view" /></v-main>
  </v-app>
</template>

<style lang="scss" scoped>
main {
  background-color: #956c2f;
}
</style>
