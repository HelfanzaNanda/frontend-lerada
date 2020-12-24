<template>
  <div>
    <nav class="bg-gradient-to-r from-gray-400 to-gray-500">
      <div class="block lg:flex items-center justify-between">
        <div class="text-white antialiased font-semibold uppercase whitespace-nowrap text-lg pl-5">
          lerada
        </div>
        <div class="block lg:flex lg:items-center ">
          <router-link class="text-white hover:bg-gray-600 p-4 capitalize" to="/">home</router-link>
          <router-link class="text-white hover:bg-gray-600 p-4 capitalize" to="/product/me">produk saya</router-link>
          <router-link class="text-white hover:bg-gray-600 p-4 capitalize" to="/product/me">
            <div class="static">
              <div><IconCart/> </div>
              <div class="bg-gray-600 p-1 rounded text-xs absolute top-1 right-14">1</div>
            </div>
          </router-link>
          <router-link class="text-white hover:bg-gray-600 p-4 capitalize" to="/product/me">
          <IconUser/>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>

import IconUser from '@/components/IconUser.vue'
import IconCart from '@/components/IconCart.vue'

export default {
  components:{
    IconUser,
    IconCart
  }
}
</script>