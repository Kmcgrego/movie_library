<script>
import DefaultButton from './DefaultButton.vue'
export default {
  components: { DefaultButton },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  // methods: {
  //   isTrucated() {
  //     this.isOverflowed = ()
  //   }
  // }
}
</script>
<template>
  <v-card :key="movie.Title" max-width="300" class="card_base_layer">
    <v-img
      class="background-img"
      :src="movie.Poster"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,1)"
      cover
    >
      <div class="date">
        {{ movie.Year }}
        <span class="rated">- {{ movie.Rated }}</span>
      </div>
      <v-container class="title-container pa-0 ma-0">
        <v-row no-gutters>
          <v-col style="word-break: break-word;" class="content" cols="7">
            <div class="title">
              {{ movie.Title }}
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-card-text class="details">
        <div class="content-plot">
          <div class="title align-start">Plot</div>
          {{ movie.Plot }}
        </div>
        <DefaultButton />
      </v-card-text>
    </v-img>
  </v-card>
</template>
