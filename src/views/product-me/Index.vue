<template>
  <div class="container mx-auto">
      <div class="text-center text-2xl mt-10 pb-5 font-semibold">Semua Produk</div>
      <div class="justify-center">
          <table class="table-auto border-2">
          <thead class="bg-gray-300">
              <tr>
                  <th>No</th>
                  <th>Foto</th>
                  <th>Nama</th>
                  <th>Desc</th>
                  <th>Harga</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(product, index) in products" :key="product.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ product.image }}</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.desc }}</td>
                  <td>{{ product.price }}</td>
                  <td>
                      edit
                      delete
                  </td>
              </tr>
          </tbody>
      </table>

      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {

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
