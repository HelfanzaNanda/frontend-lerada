<template>
  <div class="bg-gradient-to-br from-purple-500 to-indigo-400">
    <div class="flex flex-col lg:flex-row">
      <div class="flex justify-between items-center px-4 py-4 lg:py-0 border-b border-purple-400 lg:border-0">
        <div>
          <router-link
            to="/"
            class="uppercase font-semibold text-white antialiased"
            >lerada</router-link>
        </div>
        <div>
          <button class="focus:outline-none text-white block lg:hidden" v-on:click="setIsOpen(!isOpen)">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div :class="[isOpen ? 'block' : 'hidden']"
      class="lg:flex flex-col lg:flex-row justify-end w-full py-4 lg:py-0">
        <div class="flex flex-col lg:flex-row">
          <router-link class="px-4 py-2 lg:py-5 text-purple-200 hover:text-white capitalize" to="/">home</router-link>
          <router-link class="px-4 py-2 lg:py-5 text-purple-200 hover:text-white capitalize" :to="{name : 'product.all'}">produk</router-link>
          <router-link class="px-4 py-2 lg:py-5 text-purple-200 hover:text-white capitalize" to="">Sign In</router-link>
          <router-link class="px-4 py-2 lg:py-5 text-purple-200 hover:text-white capitalize" to="">Sign Up</router-link>
        </div>
      </div>
    </div>

    <!-- <router-link class="text-white hover:bg-gray-600 p-4 capitalize" to="/">home</router-link>
          <router-link class="text-white hover:bg-gray-600 p-4 capitalize" :to="{ name:'product.me' }">produk saya</router-link>
          <router-link class="text-white hover:bg-gray-600 p-4 capitalize" to="/product/me">
            <div class="static">
              <div><IconCart/> </div>
              <div class="bg-gray-600 p-1 rounded text-xs absolute top-1 right-14">1</div>
            </div>
          </router-link>
          <router-link class="text-white hover:bg-gray-600 p-4 capitalize" to="/product/me">
          <IconUser/>
          </router-link> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      isOpen : false,
    }
  },

  methods : {
    setIsOpen(boolean) {
       this.isOpen = boolean
    }
  }
}
</script>
