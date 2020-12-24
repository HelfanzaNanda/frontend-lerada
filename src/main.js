import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toasted from 'vue-toasted';
import "tailwindcss/tailwind.css"
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000/api/"
Vue.config.productionTip = false
Vue.use(Toasted)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
