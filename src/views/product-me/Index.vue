<template>
  <div class="container mx-auto">
    <div class="text-center text-2xl mt-10 pb-5 font-semibold">
      Semua Produk Saya
    </div>
    <div class="flex justify-end ml-5 mb-5">
      <router-link :to="{ name:'product.create' }" class="bg-gray-500 text-xs hover:bg-gray-600 py-2 px-3 capitalize rounded text-white">tambah produk</router-link>
    </div>

    <div>
      <div class="table w-full bg-gray-100 p-2">
        <div class="table-row-group">
          <div class="table-row">
            <div class="table-cell text-gray-700 font-bold">No</div>
            <div class="table-cell text-gray-700 font-bold">Foto</div>
            <div class="table-cell text-gray-700 font-bold">Nama</div>
            <div class="table-cell text-gray-700 font-bold">Desc</div>
            <div class="table-cell text-gray-700 font-bold">Harga</div>
            <div class="table-cell text-gray-700 font-bold">Action</div>
          </div>
          <div
            class="table-row"
            v-for="(product, index) in products"
            :key="product.id"
          >
            <div class="table-cell text-gray-600">{{ index + 1 }}</div>
            <div class="table-cell text-gray-600">
              <img src="product.image" alt="" />
            </div>
            <div class="table-cell text-gray-600">{{ product.name }}</div>
            <div class="table-cell text-gray-600">{{ product.desc }}</div>
            <div class="table-cell text-gray-600">{{ product.price }}</div>
            <div class="table-cell text-gray-600">
              <div class="flex">
                    <router-link to="" class="bg-blue-500 hover:bg-blue-600 mr-1 p-1 text-white rounded-lg"><IconEdit /></router-link>
                    <router-link to="" class="bg-red-500 hover:bg-red-600 p-1 text-white rounded-lg"><IconDelete /></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import IconEdit from "@/components/IconEdit.vue";
import IconDelete from "@/components/IconDelete.vue";

export default {
  components: {
    IconEdit,
    IconDelete,
  },
  data() {
    return {
      products: [],
    };
  },

  mounted() {
    this.fetchProducts();
  },

  methods: {
    async fetchProducts() {
      let { data } = await axios.get("product/me");
      this.products = data.data;
    },
  },
};
</script>
