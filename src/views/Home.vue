<template>
  <div>
    <div class="bg-gray-200"><Banner/></div>

    <div class="text-center text-2xl mt-10 pb-5  font-semibold">Produk Sering Dibeli</div>
    <div class="container mx-auto flex justify-end ml-5 mb-5">
      <router-link to="/product" class="bg-gray-500 hover:bg-gray-600 py-2 px-3 capitalize rounded text-white">lihat semua</router-link>
    </div>
    <div class="container mx-auto">
      <CardProduct :products="products"/>
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
    CardProduct
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
