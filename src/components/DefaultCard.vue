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
  <v-card :key="movie.Title" class="card_base_layer" width="250" height="300">
    <v-img :src="movie.Poster" height="200px" cover>
      <!-- gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,1)" -->
    </v-img>
    <v-card-title>
      <span class="text-subtitle-2">{{ movie.Title }}</span>
      {{ movie.Year }}
    </v-card-title>
    <v-card-subtitle>{{ movie.Rated }} {{ movie.Genre }}</v-card-subtitle>
  </v-card>
</template>
<style lang="scss" scoped>
.card_base_layer {
  width: 400px;
  background: #fff;
  border-radius: 10px;
  .title {
    font-size: 20px;
  }
}
</style>
