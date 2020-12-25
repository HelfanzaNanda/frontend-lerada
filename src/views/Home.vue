<template>
  <div class="dark:bg-gray-700">
    <Banner/>
    <div class="p-10">
      <div class="justify-center dark:text-gray-300 flex text-2xl mt-10 pb-5 font-semibold">Produk Sering Dibeli</div>
    
        
        <div class="lg:justify-end hidden lg:flex">
          <router-link :to="{name: 'product.all'}" class="bg-indigo-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-900 hover:bg-indigo-600 py-1 px-2 capitalize rounded text-white">lihat semua</router-link >
        </div>
        
      <CardProduct :products="products"/>

      <div class="flex justify-center lg:hidden">
        <router-link :to="{name: 'product.all'}" 
        class="dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-900 bg-indigo-500 hover:bg-indigo-600 py-1 px-2 capitalize rounded text-white">lihat semua</router-link>
      </div>
    </div>
    
    
  </div>

</template>

<script>

import Banner from '@/components/Banner.vue'
import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios'

export default {
  name: 'Home',
  
  components: {
    Banner,
    CardProduct,
  },

  data() {
    return {
      products : [],
    }
  },

  mounted() {
    this.fetchBestSeller()
  },

  methods : {
    async fetchBestSeller() {
        let { data } = await axios.get('product')
        this.products = data.data
    }
  }

}
</script>
