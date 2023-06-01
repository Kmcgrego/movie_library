<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      routes: this.$router.options.routes,
    }
  },
  computed: {
    showLeftPanel() {
      if (this.drawer) {
        return this.drawer
      } else {
        return false
      }
    },
  },
}
</script>
<template>
  <v-navigation-drawer
    v-model="showLeftPanel"
    class="navigation"
    :color="dark_blue"
  >
    <v-list color="transparent">
      <router-link v-for="route in routes" :key="route.path" :to="route.path">
        <v-list-item
          class="text-caption text-uppercase justify-center ml-1 my-2 align-self-center"
          v-if="route.showInMenu"
        >
          <v-list-item-icon v-if="route.icon" class="my-1 align-self-center">
            <font-awesome-icon :icon="route.icon" fixed-width />
          </v-list-item-icon>

          <v-list-item-content v-if="route.name">
            <v-list-item-title>{{ route.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>
