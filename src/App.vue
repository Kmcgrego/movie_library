<script>
import CenterPanel from './components/CenterPanel.vue'
import LeftPanel from './components/LeftPanel.vue'
import FilterHeader from '@/components/FilterHeader.vue'

export default {
  name: 'App',
  components: {
    CenterPanel,
    LeftPanel,
    FilterHeader,
  },
}
</script>

<template>
  <!-- <v-app> -->
  <v-layout>
    <LeftPanel />
    <v-main>
      <FilterHeader />
      <CenterPanel />
    </v-main>
  </v-layout>
  <!-- </v-app> -->
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
