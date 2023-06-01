<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
}
</script>
<template>
  <router-link :to="{ name: 'Details', params: { id: movie.imdbID } }">
    <v-card
      :key="movie.Title"
      max-width="300"
      height="420"
      class="card_base_layer"
    >
      <v-img
        class="background-img"
        :src="movie.Poster"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,1)"
        cover
      >
        <v-container class="title-container pa-3">
          <v-row align-content="end" no-gutters>
            <v-col
              style="word-break: break-word;"
              class="content text-center"
              cols="7"
            >
              <div class="title text-center">
                {{ movie.Title }}
              </div>
            </v-col>
          </v-row>
        </v-container>

        <div class="details pa-1">
          <v-container class="content-plot">
            <v-row>
              <v-col cols="12" class="date text-right">
                {{ movie.Year }}
                <br />
                {{ movie.Type }}
              </v-col>
            </v-row>
            <v-row justify="space-between" align="center">
              <v-col cols="12">
                <div class="text-left">{{ movie.Title }}</div>
              </v-col>
              <v-col class="action">
                <v-btn>more details</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-img>
    </v-card>
  </router-link>
</template>
