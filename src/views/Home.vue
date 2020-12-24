<template>
  <div>
    <div class="bg-gray-200"><Banner/></div>
    <div class="text-center text-2xl mt-10 font-semibold">Produk Sering Dibeli</div>
    <CardProduct/>
  </div>

</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import CardProduct from '@/components/CardProduct.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    CardProduct
  }
}
</script>
