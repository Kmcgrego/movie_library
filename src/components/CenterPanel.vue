<script setup>
import DisplayCard from '@/components/DefaultCard.vue'
import { moviesStore } from '@/store/movies'

const store = moviesStore()
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12"></v-col>
      <v-col v-for="(movie, n) in store" :key="n" cols="12" sm="4">
        <DisplayCard :movie="movie" />
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped></style>
