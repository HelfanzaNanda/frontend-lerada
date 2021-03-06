import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/p',
    name: 'product.all',
    component: () => import('../views/product/Index.vue')
  },

  {
    path: '/p/me',
    name: 'product.me',
    component: () => import('../views/product-me/Index.vue')
  },

  {
    path: '/p/create',
    name: 'product.create',
    component: () => import('../views/product-me/Create.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
