<script setup>
import DisplayCard from '@/components/DefaultCard.vue'

import { moviesStore } from '@/store/movies'
const store = moviesStore()
</script>
<template>
  <v-container class="mt-10">
    <v-row v-if="store.movies.length > 0">
      <v-col
        v-for="movie in store.movies"
        :key="movie.imdbID"
        cols="12"
        lg="3"
        sm="2"
        class="text-center ma-xs-1"
      >
        <DisplayCard :movie="movie" />
      </v-col>
    </v-row>
    <v-card v-else height="90vh">
      <h1 class="welcome-text">
        Welcome to
      </h1>
      <h3 class="lib-name fill-height text-white">
        Movie Library
      </h3>
    </v-card>
  </v-container>
</template>
<style scoped>
.welcome-text {
  height: 40vh;
  color: #207092;
  font-size: 10vw;
  text-transform: uppercase;
  margin: 10px;
  background: url(../assets/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg);
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position-y: -150px;
}
.lib-name {
  font-size: 10vw;
  background-image: url(../assets/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg);
  background-position-y: -513px;
}
</style>
