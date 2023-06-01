<script setup>
import { ref } from '@vue/reactivity'
import { defineProps } from '@vue/runtime-core'
import { moviesStore } from '../store/movies'
const store = moviesStore()
const props = defineProps({
  isRecent: String,
})
const recents = ref(
  localStorage.getItem('recents')
    ? JSON.parse(localStorage.getItem('recents'))
    : [],
)
const recordDictionary = ref(
  localStorage.getItem('recordDictionary')
    ? JSON.parse(localStorage.getItem('recordDictionary'))
    : [],
)
const keyword = ref(localStorage.getItem('keyword') ?? '')
const isRecent = ref(localStorage.getItem('isRecent') == 'true' ? true : false)

const lookUpWithKeywords = () => {
  localStorage.setItem('keyword', keyword.value)

  localStorage.setItem('isRecent', true)

  isRecent.value = true
  let str = keyword.value.toLowerCase()
  str = str.trim()
  if (keyword.value || props.isRecent) {
    const cek = recents.value.filter((item) => item == str)
    if (cek.length < 1) {
      recordDictionary.value.push({ keyword: str, status: '' })
      localStorage.setItem(
        'recordDictionary',
        JSON.stringify(recordDictionary.value),
      )
      recents.value.push(str)
      localStorage.setItem('recents', JSON.stringify(recents.value))
    }
    store.getAllMovies(str)
  }
}
</script>

<template>
  <form id="search" @submit.prevent="lookUpWithKeywords">
    <v-text-field
      :loading="loading"
      density="compact"
      variant="solo"
      label="Which movie are you looking for?"
      single-line
      hide-details
      v-model="keyword"
      @keydown.enter.prevent="lookUpWithKeywords"
      class="w-full px-6 py-3 rounded-md"
    ></v-text-field>
  </form>
</template>

<style lang="scss" scoped>
#search {
  min-width: 250px;
}
</style>
