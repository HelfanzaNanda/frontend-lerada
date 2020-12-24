<template>
  <div>
    <nav class="bg-gradient-to-r from-purple-500 to-indigo-400">
      <div class="flex items-center justify-between">
        <div class="text-white antialiased font-semibold uppercase whitespace-nowrap text-lg p-3">
          lerada
        </div>
        <div class="flex items-center">
          <router-link class="text-white hover:bg-indigo-500 p-4" to="/">home</router-link>
          <router-link class="text-white hover:bg-indigo-500 p-4" to="/product/me">produk saya</router-link>
          <router-link class="text-white hover:bg-indigo-500 p-4" to="/product/me">
            <svg class="w-5  h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>