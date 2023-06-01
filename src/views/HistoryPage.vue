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
    <v-btn
      class="flex items-center mx-1 my-2 text-red-500 cursor-pointer"
      @click="clearDictionary"
    >
      <span class="tracking-wide md:text-lg lg:text-sm">Clear Dictionary</span>
    </v-btn>

    <v-card v-if="recordDictionary.length > 0">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Keyword
            </th>
            <th class="text-left">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in recordDictionary"
            :key="index"
            :style="`background-color: ${item.status ? 'red' : 'green'};`"
          >
            <td>{{ item.keyword }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
    <v-card v-else>
      <v-card-title>
        Hmmmph somthing is off... Try seaching for a movie then comeback.
      </v-card-title>
    </v-card>
  </v-container>
</template>
