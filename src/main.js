import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toasted from 'vue-toasted';
import "tailwindcss/tailwind.css"

Vue.config.productionTip = false
Vue.use(Toasted)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
