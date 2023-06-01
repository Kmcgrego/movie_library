<script>
import Search from './SearchBar.vue'

export default {
  components: {
    search: Search,
  },
  data() {
    return {
      routes: this.$router.options.routes,
      name: 'Movie Library',
      dialog: false,
    }
  },
}
</script>
<template>
  <v-toolbar app dark color="blue-grey darken-1" class="hidden-sm-and-down">
    <v-toolbar-title>{{ name }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <search />
      <v-btn
        v-for="route in routes"
        :key="route.icon"
        :to="route.path"
        :title="route.name"
        flat
      >
        <font-awesome-icon :icon="route.icon" />
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>

  <v-toolbar app dark color="blue-grey darken-3" class="hidden-md-and-up">
    <v-toolbar-title>{{ name }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-toolbar-side-icon dark></v-toolbar-side-icon>
      <v-card>
        <v-toolbar flat color="blue-grey darken-2">
          <search />
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="dialog = !dialog">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </v-btn>
        </v-toolbar>

        <v-list>
          <v-list-tile v-for="(route, index) in routes" :key="index" to="#">
            <v-list-tile-action>
              <v-icon v-if="route.icon">{{ route.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title :title="route.name">
                {{ route.name }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-dialog>
    <v-btn @click.stop="dialog = !dialog">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </v-btn>
  </v-toolbar>
</template>
<style lang="scss" scoped>
.header-wrapper {
  background-color: #efefef;
}
</style>
