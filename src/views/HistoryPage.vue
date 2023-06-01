<script setup>
import { ref } from '@vue/reactivity'

const recordDictionary = ref(
  localStorage.getItem('recordDictionary')
    ? JSON.parse(localStorage.getItem('recordDictionary'))
    : [],
)

const clearDictionary = () => {
  localStorage.setItem('recordDictionary', JSON.stringify([]))
}
</script>
<template>
  <v-container>
    <div
      class="flex items-center mx-1 my-2 text-red-500 cursor-pointer"
      @click="clearDictionary"
    >
      <span class="tracking-wide md:text-lg lg:text-sm">Clear Recent</span>
    </div>
    <v-card>
      <v-list v-if="recordDictionary.length > 0">
        <v-list-item
          v-for="(item, index) in recordDictionary"
          :key="index"
          ripple
        >
          <v-list-tile-content>
            <v-list-tile-sub-title class="text--primary">
              {{ item.keyword }}
            </v-list-tile-sub-title>
            <v-list-tile-sub-title class="font-weight-thin">
              {{ item.status }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-item>
      </v-list>
      <v-table>
    <thead v-if="recordDictionary.length > 0">
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-card>Z</v-card>
      <v-card-title v-else>
        Hmmmph somthing is off... Try seaching for a movie then comeback.
      </v-card-title>
    </v-card>
  </v-container>
</template>
