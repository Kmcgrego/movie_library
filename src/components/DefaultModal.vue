<script>
import json from '@/json/movie.json'
import DisplayCard from '@/components/DefaultCard.vue'
// import LeftPanel from './LeftPanel.vue'

export default {
  components: {
    DisplayCard,
    // LeftPanel,
  },
  data() {
    return {
      catalog: json,
    }
  },
}
</script>
<template>
  <!-- <LeftPanel /> -->

  <v-container>
    <v-row>
      <v-col cols="12"></v-col>
      <v-col v-for="(movie, n) in catalog" :key="n" cols="12" sm="4">
        <DisplayCard :movie="movie" />
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  .modal {
    width: 400px;
    background: #fff;
    border-radius: 10px;
  }
}
</style>
