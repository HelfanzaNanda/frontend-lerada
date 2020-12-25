<template>
    <div >
        <div class="flex flex-col lg:flex-row items-center lg:justify-items-center">
            <div class="bg-indigo-100 rounded-xl lg:m-5 mb-10" v-for="product in products" :key="product.id">
                    <img class="w-52 lg:w-96 rounded-t-xl" src="https://images.unsplash.com/photo-1548138081-d02590416982?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=836&q=80" alt="">
                    <div class="p-3">
                        <div class="text-gray-800 text-lg font-semibold font-sans">{{ product.name }}</div>
                        <div class="text-gray-700 text-sm font-sans">{{ product.price }}</div>
                    </div>
                    <div class="flex justify-end bg-indigo-200 p-2 rounded-b-xl">
                        <router-link to="" class="bg-indigo-500 hover:bg-indigo-600 text-white text-sm py-1 px-2 rounded">beli</router-link>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['products'],
    
}
</script>