<template>
  <div class="bg-gray-200 dark:bg-gray-900">
    <div class="flex flex-col lg:flex-row justify-between p-10 items-center">
      <div class="text-center lg:w-full lg:mb-10">
        <div class="text-gray-800 dark:text-gray-300 text-3xl font-bold text-center">Handphone Murah</div>
        <div class="text-gray-700 dark:text-gray-400 text-center">hp dengan harga murah</div>
      </div>
      <div class="justify-center">
        <ImageBanner/>
      </div>
    </div>
  </div>

</template>

<script>
import ImageBanner from "@/components/ImageBanner.vue";
export default {
  components: {
    ImageBanner,
  },
};
</script>