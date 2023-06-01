<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { moviesStore } from '../store/movies'
import { defineProps } from 'vue'

const store = moviesStore()
const props = defineProps({
  id: String,
})

const defaultImage = '../assets/shubham-dhage-WtolM5hsj14-unsplash.jpg'

store.getMovieByID(props.id)
</script>
<template>
  <v-container
    :style="`background-image:url(${store.movie.Poster})`"
    class="movie-panel-wrapper"
  >
    <v-row align-content="space-between">
      <v-col xs="12" md="4">
        <v-card class="poster">
          <v-img
            :src="
              store.movie.Poster == 'N/A' ? defaultImage : store.movie.Poster
            "
          />
        </v-card>
      </v-col>
      <v-col xs="12" md="8" class="movie-data-wrapper">
        <v-card height="100%" class="movie-info-card">
          <v-card-title class="movie-head">
            <h1 class="mx-2 my-9 movie-title">{{ store.movie.Title }}</h1>
          </v-card-title>
          <v-card-subtitle class="movie-subdata">
            <v-row class="mx-2">
              <v-col cols="6" class="movie-left">
                <FontAwesomeIcon :icon="['fas', 'star']" />
                {{ store.movie.imdbRating }}
              </v-col>
              <v-col cols="6" class="text-right">
                {{ store.movie.Year }}
                <br />
                {{ store.movie.Rated }}
              </v-col>
            </v-row>
          </v-card-subtitle>
          <v-container class="grow d-flex flex-column flex-nowrap">
            <v-row class="mx-2 shrink background-red">
              <v-col cols="12">
                <h3 class="movie-fields">Genre</h3>
                <div class="movie-tags">
                  <span class="movie-taxonomy">{{ store.movie.Genre }}</span>
                </div>
              </v-col>
            </v-row>
            <v-row class="mx-2 grow background-red">
              <v-col cols="12">
                <h3 class="movie-fields">The Synopsis</h3>
                <p class="movie-description">
                  {{ store.movie.Plot }}
                </p>
              </v-col>
            </v-row>
            <v-row class="mx-2 shrink background-red">
              <v-col cols="12">
                <h3 class="movie-fields">The Actors</h3>
                <div class="movie-tags">
                  {{ store.movie.Actors }}
                </div>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions class="mx-7">
            <router-link
              :to="{ name: 'Home' }"
              id="backbutton"
              class="exit"
              style="font-size: 30px;"
            >
              <font-awesome-icon
                :icon="['fas', 'arrow-circle-left']"
                :color="custom_red"
              />
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.movie-panel-wrapper {
  background-size: cover;
  background-position-y: 50%;
}
.card-actions-wrap {
  top: 0;
  // position: relative;
}
</style>
