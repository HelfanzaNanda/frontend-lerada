<template>
  <div class="container mx-auto">
    <div class="flex justify-between items-center">
      <div class="mb-20 w-full text-center">
        <div class="text-gray-800 font-bold text-3xl">Semua Produk Ada</div>
        <div class="text-gray-700">produk dengan harga murah</div>
      </div>
      <div class="py-10">
        <ImageBanner/>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import ImageBanner from '@/components/ImageBanner.vue'
export default {
    components:{
        
        ImageBanner
    }
}
</script>