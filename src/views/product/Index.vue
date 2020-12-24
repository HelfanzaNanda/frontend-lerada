<template>
<div>
    <div class="text-center text-2xl mt-10 pb-5  font-semibold">Semua Produk</div>
    <div class="container mx-auto">
        <CardProduct :products="products"/>
    </div>
    
</div>
    
</template>

<script>

import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios'

export default {
  components: {
    CardProduct
  },

  
  data() {
    return {
      products : [],
    }
  },

  mounted() {
    this.fetchProducts()
  },

  methods : {
    async fetchProducts() {
        let { data } = await axios.get('product')
        this.products = data.data
    }
  }

}
</script>
