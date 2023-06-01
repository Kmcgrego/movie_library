import axios from 'axios'
import { defineStore } from 'pinia'

const API_URL = 'https://www.omdbapi.com/'
const API_KEY = '5ec117b5'

export const moviesStore = defineStore('movies', {
  state: () => {
    return {
      movies: [],
      movie: {},
    }
  },
  actions: {
    async getAllMovies(keyword) {
      try {
        const { data } = await axios.get(
          `${API_URL}?apikey=${API_KEY}&s=${keyword}`,
        )
        console.log(data.response)
        if (data.Response == 'False') {
          throw new Error(data.Error)
        }
        this.movies = data.Search
      } catch (error) {
        // Get the existing data and parse it
        var existing = JSON.parse(localStorage.getItem('recordDictionary'))
        // get index using keyword
        let index = existing.findIndex((item) => item.keyword === keyword)
        // Add new data to localStorage Array
        existing[index].status = 'error'
        // Save back to localStorage
        localStorage.setItem('recordDictionary', JSON.stringify(existing))
        console.log(error.message)
      }
    },

    async getMovieByID(id) {
      try {
        const { data, status } = await axios.get(
          `${API_URL}?apikey=${API_KEY}&i=${id}`,
        )
        if (status != 200) {
          throw new Error(data.Error)
        }
        this.movie = data
      } catch (err) {
        console.log(err.message)
      }
    },
  },
})
