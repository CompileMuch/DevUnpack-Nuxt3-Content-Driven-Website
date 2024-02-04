<template>
    <header class="relative bg-white border-b border-gray-300/60">

        <nav class='flex items-center h-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>

            <!-- Main navbar for large screens -->
            <div class='flex items-center justify-between w-full'>

                <!-- Logo-->
                <div class='flex items-center shrink-0'>
                    <a href="/" class='lg:hidden'>
                        <img src='/logo.svg' class='w-auto h-9'>
                    </a>
                    <a href="/" class='hidden lg:block'>
                        <img src='/logo.svg' class='w-auto h-9'>
                    </a>
                    <a href="/">
                        <div>&nbsp;&nbsp;{{ name }}</div>
                    </a>

                </div>

                <!-- Navigation for large screens -->
                <div
                    class='ml-6 hidden md:flex justify-between items-center md:space-x-0.5 lg:space-x-2 text-xl md:text-base'>

                    <!-- Current: "text-red-700", Default: "text-gray-800 hover:text-red-700 transition duration-300 ease-in-out" -->
                    <a href="/"
                        class="hover:bg-gray-50 block rounded-lg text-gray-800 py-3.5 px-5 transition duration-300 ease-in-out hover:text-red-700 font-medium">
                        Home
                    </a>
                    <a href="/software"
                        class="hover:bg-gray-50 block rounded-lg text-gray-800 py-3.5 px-5 transition duration-300 ease-in-out hover:text-red-700 font-medium">
                        Software
                    </a>
                   
                </div>




                <button
                    class='flex items-center justify-center p-3 ml-6 transition duration-300 ease-in-out cursor-pointer rounded-xl bg-gray-50 hover:bg-gray-100 md:hidden group focus:outline-none'
                    aria-label="Menu" @click="toggleMenu">


                    <span class='relative w-4 h-3.5 transition duration-500 ease-in-out transform rotate-0'
                        :class="{ 'js-hamburger-open': isMenuOpen }">

                        <span
                            class='absolute top-0 left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-gray-600 rounded-full opacity-100 group-hover:bg-gray-900'></span>
                        <span
                            class='absolute left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-gray-600 rounded-full opacity-100 top-1.5 group-hover:bg-gray-900'></span>
                        <span
                            class='absolute left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-gray-600 rounded-full opacity-100 top-1.5 group-hover:bg-gray-900'></span>
                        <span
                            class='absolute left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-gray-600 rounded-full opacity-100 top-3 group-hover:bg-gray-900'></span>
                    </span>
                </button>

            </div>

        </nav>

        <!-- Mobile menu -->

        <nav v-show="isMenuOpen" class=" md:hidden" aria-label="Global">
            <div class="px-2 pt-2 pb-3 space-y-1">
 
                <a href="/" class="block px-4 py-3 font-medium text-red-700 rounded-lg bg-gray-50"
                    aria-current="page">Home</a>

                <a href="/software"
                    class="block px-4 py-3 font-medium text-gray-800 transition duration-300 ease-in-out rounded-lg hover:bg-gray-50 hover:text-red-700">Software</a>
           
            </div>

        </nav>

    </header>
</template>

<script setup lang="ts">

import type { RuntimeConfig } from '~/types/runtimeConfig.type';
import { ref } from 'vue';

const config = useRuntimeConfig() as RuntimeConfig;
const name = ref(config?.public?.name);

</script>