<template>
  <div class="bg-gradient-to-br from-purple-500 to-indigo-400 dark:from-gray-900 dark:to-black"> 
    <div class="flex flex-col lg:flex-row justify-between">
      <div
        class="flex justify-between items-center px-4 py-4 lg:py-0 border-b dark:border-gray-600 border-purple-400 lg:border-0"
      >
        <div>
          <router-link
            to="/"
            class="uppercase font-semibold dark:text-gray-300 text-white antialiased"
            >lerada</router-link
          >
        </div>

        <div class="flex">
          <div class="flex lg:hidden items-center">
            <button v-on:click="selectTheme('light')" 
            class="bg-gray-200 hover:bg-white dark:bg-white dark:hover:bg-gray-200 focus:outline-none rounded-full p-2 mx-2 "></button>
            <button v-on:click="selectTheme('dark')" 
            class="bg-gray-700 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none rounded-full p-2 mr-2"></button>
          </div>

          <div>
            <button
              class="focus:outline-none text-white block lg:hidden"
              v-on:click="setIsOpen(!isOpen)"
            >
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
        <!-- <div>
          <button
            class="focus:outline-none text-white block lg:hidden"
            v-on:click="setIsOpen(!isOpen)"
          >
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
        </div> -->
      </div>

      <div class="flex">
          <div class="hidden lg:flex items-center">
            <button v-on:click="selectTheme('light')" 
            class="bg-gray-200 hover:bg-white dark:bg-white dark:hover:bg-gray-200 focus:outline-none rounded-full p-2 mx-2 "></button>
            <button v-on:click="selectTheme('dark')" 
            class="bg-gray-700 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none rounded-full p-2 mr-2"></button>
          </div>
          <div
        :class="[isOpen ? 'block' : 'hidden']"
        class="lg:flex flex-col lg:flex-row justify-end w-full py-4 lg:py-0"
      >
        <div class="flex flex-col lg:flex-row">
          <router-link
            class="px-4 py-2 lg:py-5 text-purple-200 hover:text-white capitalize"
            to="/"
            >home</router-link
          >
          <router-link
            class="px-4 py-2 lg:py-5 text-purple-200 hover:text-white capitalize"
            :to="{ name: 'product.all' }"
            >produk</router-link
          >
          <router-link
            class="px-4 py-2 lg:py-5 text-purple-200 hover:text-white capitalize"
            to=""
            >Sign In</router-link
          >
          <router-link
            class="px-4 py-2 lg:py-5 text-purple-200 hover:text-white capitalize"
            to=""
            >Sign Up</router-link
          >
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  mounted(){
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
       document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }

    localStorage.removeItem('theme')
    //document.querySelector('html').classList.add(localStorage.getItem('theme'))
    
  },

  methods: {

    setIsOpen(boolean) {
      this.isOpen = boolean
    },

    selectTheme(theme){
      localStorage.setItem('theme', theme)
      document.querySelector('html').classList.add(localStorage.getItem('theme'))
      if (theme == 'dark') {
          document.querySelector('html').classList.remove('light')
      }else{
        document.querySelector('html').classList.remove('dark')
      }
    }
  },
};
</script>
