import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import axios from 'axios'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faStar,
  faArrowCircleLeft,
  faBars,
  faHouse,
  faClockRotateLeft,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faArrowCircleLeft,
  faStar,
  faBars,
  faHouse,
  faClockRotateLeft,
  faMagnifyingGlass,
)

import router from './router'

//custom styles
import './css/app.scss'

const vuetify = createVuetify({
  components,
  directives,
})

const axiosInstance = axios.create({
  withCredentials: true,
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
//Axios - global
app.config.globalProperties.$axios = { ...axiosInstance }
app.mount('#app')
