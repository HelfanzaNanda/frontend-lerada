<template>
  <div>
    <Banner/>
    <div class="p-10">
      <div class="justify-center flex text-2xl mt-10 pb-5 font-semibold">Produk Sering Dibeli</div>
    
      <div class="flex justify-center lg:justify-end lg:ml-5 lg:mb-5">
        <router-link :to="{name: 'product.all'}" class="bg-gray-500 hover:bg-gray-600 py-2 px-3 capitalize rounded text-white">lihat semua</router-link>
      </div>
      <!-- <div class="container mx-auto">
        <CardProduct :products="products"/>
      </div> -->

      <div class="flex justify-center lg:hidden">
        <router-link :to="{name: 'product.all'}" class="bg-gray-500 hover:bg-gray-600 py-2 px-3 capitalize rounded text-white">lihat semua</router-link>
      </div>
    </div>
    
    
  </div>

</template>

<script>

import Banner from '@/components/Banner.vue'
//import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios'

export default {
  name: 'Home',
  
  components: {
    Banner,
    //CardProduct,
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
        let { data } = await axios.get('product/best-seller')
        this.products = data.data
    }
  }

}
</script>
