<template>
    <section class='relative max-w-screen-xl bg-white py-12 mx-auto md:py-16 lg:py-20 lg:px-8'>
        <div class='w-full lg:grid lg:gap-8 lg:grid-cols-3'>

            <!-- Feed Articles Container -->
            <div class='col-span-2'>

                <!-- Advertisement Banner -->


                <!-- Articles-->
                <div
                    class='grid max-w-xl gap-6 px-4 mx-auto mt-8 sm:px-6 md:px-8 lg:px-0 md:max-w-3xl lg:max-w-none md:grid-cols-2'>

                    <!-- Article -->
                    <article v-for="(post, index) in topics" :key="index"
                        class='relative flex flex-col flex-wrap transition duration-300 ease-in-out rounded-2xl group hover:shadow-xl'>

                        <!-- Image -->
                        <div class='relative z-10 w-full overflow-hidden aspect-w-2 aspect-h-1 rounded-t-2xl bg-gray-50 '>
                            <a href:="post.url">
                                <img class='absolute inset-0 object-cover object-center w-full h-full transition duration-300 ease-in-out  rounded-t-2xl group-hover:scale-110 lazy'
                                    :src="post.thumbnail" :alt="post.title" />
                            </a>
                        </div>

                        <!-- Content -->
                        <div
                            class='box-border flex flex-col justify-between flex-1 w-full p-6 transition duration-300 ease-in-out bg-white border-b-2 border-l-2 border-r-2 border-gray-100 rounded-b-2xl xl:p-7 group-hover:border-transparent'>
                            <div>
                                <a :href="post.url"
                                    class="relative z-10 font-medium tracking-widest text-blue-700 uppercase duration-300 ease-in-out text-tiny transition-color hover:text-blue-600">
                                    {{ post.category }}
                                </a>

                                <h3
                                    class='mt-3 text-xl font-medium leading-tight text-gray-900 transition duration-300 ease-in-out lg:text-xl sm:text-2xl xl:text-2xl decoration-gray-800 decoration-2 hover:underline'>
                                    <a :href="post.url">
                                        {{ post.title }}
                                    </a>
                                </h3>

                                <p class='block mt-4 text-base leading-relaxed text-gray-500'>
                                    {{ post.description }}
                                </p>
                            </div>


                        </div>

                    </article>



                </div>

            </div>

            <!-- Sidebar -->
            <div
                class='w-full max-w-xl px-4 mx-auto mt-12 sm:mt-16 lg:mt-0 md:max-w-3xl sm:px-6 md:px-8 lg:px-0 lg:col-span-1 lg:max-w-none'>

                <!-- Trending Articles -->
                <div class='w-full p-5 bg-gray-50 sm:p-8 rounded-2xl'>
                    <h3
                        class="pb-2.5 text-2xl font-medium text-gray-900 border-b border-gray-300/70">
                        Trending</h3>

                    <!-- Articles -->
                    <div class='pt-6 space-y-6 sm:space-y-5 lg:space-y-6 xl:space-y-5'>

                        <!-- 1st Article -->
                        <article v-for="(post, index) in trending" :key="index"
                            class='flex space-x-4 sm:space-x-6 lg:space-x-4'>

                            <!-- Image -->
                            <a :href="post.url" class="relative z-10 overflow-hidden bg-gray-100 group rounded-2xl ">
                                <img :src="post.thumbnail"
                                    class='object-cover object-center w-24 h-24 transition duration-300 ease-in-out  rounded-2xl sm:w-28 sm:h-28 lg:w-20 lg:h-20 xl:w-24 xl:h-24 group-hover:scale-110 lazy' />
                            </a>

                            <!-- Content -->
                            <div class='w-2/3'>
                                <div class='flex flex-col justify-center flex-1 w-full h-full'>
                                    <div>
                                        <a :href="post.url"
                                            class='font-medium leading-snug tracking-normal text-gray-900 transition duration-300 ease-in-out text-md hover:underline decoration-2 decoration-gray-800'>
                                            {{ post.title }}
                                        </a>
                                    </div>



                                </div>
                            </div>

                        </article>


                    </div>

                </div>


                <!-- Social Media Links -->
                <div class='w-full p-5 mt-8 bg-gray-50 sm:p-8 rounded-2xl'>
                    <h3
                        class="pb-2.5 text-2xl font-medium text-gray-900 border-b border-gray-300/70 ">
                        Follow us</h3>

                    <!-- Links -->
                    <div class='pt-5'>
                        <div class='overflow-hidden'>

                            <!-- Twitter -->
                            <a :href="xUrl" class='flex items-center justify-between w-full group' target="_blank">
  
                                <div class="flex items-center">
                                    <div>
                                        <span
                                            class='flex items-center justify-center transition duration-300 ease-in-out bg-transparent border rounded-full w-9 h-9 border-gray-300/70'>
                                            <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 462.799"><path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/></svg>
                                        </span>
                                    </div>

                                    <div class='relative flex flex-col flex-wrap col-span-3'>

                                        <div class='box-border flex flex-col justify-between flex-1 w-full px-6 md:px-0'>
                                            <div
                                                class="relative z-10 ml-3 text-base font-medium text-gray-700 duration-300 ease-in-out transition-color group-hover:text-blue-600">
                                               
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                 

                            </a>

                            <hr class="w-full my-2.5 border-t border-dashed border-gray-300/70 ml-13" />

                            <!-- Facebook -->
                            <!-- <a href="https://www.facebook.com/temp-site/"
                                class='flex items-center justify-between w-full group'>
                                <div class="flex items-center">
                                    <div>
                                        <span
                                            class='flex items-center justify-center transition duration-300 ease-in-out bg-transparent border rounded-full w-9 h-9 border-gray-300/70'>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="w-3.5 h-3.5 text-gray-700 transition duration-300 ease-in-out transform group-hover:text-blue-700 group-hover:scale-110"
                                                viewBox="0 0 512 512" fill='currentColor'>
                                                <path xmlns="http://www.w3.org/2000/svg"
                                                    d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                                                    fill-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>

                                    <div class='relative flex flex-col flex-wrap col-span-3'>

                                        <div class='box-border flex flex-col justify-between flex-1 w-full px-6 md:px-0'>
                                            <div
                                                class="relative z-10 ml-3 text-base font-medium text-gray-700 duration-300 ease-in-out transition-color group-hover:text-blue-600">
                                                Facebook
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>

                                    
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="text-red-400 w-5 h-5 mx-2 transition duration-300 ease-in-out group-hover:text-blue-600 group-hover:translate-x-1.5"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>

                                </div>

                            </a> -->

                            <!-- <hr class="w-full my-2.5 border-t border-dashed border-gray-300/70 ml-13" /> -->

                            <!-- Instagram -->
                            <!-- <a href="https://www.instagram.com/temp-site/"
                                class='flex items-center justify-between w-full group'>
                                <div class="flex items-center">
                                    <div>
                                        <span
                                            class='flex items-center justify-center transition duration-300 ease-in-out bg-transparent border rounded-full w-9 h-9 border-gray-300/70'>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="w-3.5 h-3.5 text-gray-700 transition duration-300 ease-in-out transform group-hover:text-blue-700 group-hover:scale-110"
                                                viewBox="0 0 512 512" fill='currentColor'>
                                                <path xmlns="http://www.w3.org/2000/svg"
                                                    d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                                                <path xmlns="http://www.w3.org/2000/svg"
                                                    d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                                            </svg>
                                        </span>
                                    </div>

                                    <div class='relative flex flex-col flex-wrap col-span-3'>

                                        <div class='box-border flex flex-col justify-between flex-1 w-full px-6 md:px-0'>
                                            <div
                                                class="relative z-10 ml-3 text-base font-medium text-gray-700 duration-300 ease-in-out transition-color group-hover:text-blue-600">
                                                Instagram
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>

                                    
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="text-red-400 w-5 h-5 mx-2 transition duration-300 ease-in-out group-hover:text-blue-600 group-hover:translate-x-1.5"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>

                                </div>

                            </a> -->

                            <!-- <hr class="w-full my-2.5 border-t border-dashed border-gray-300/70 ml-13" /> -->

                            <!-- Tiktok -->
                            <!-- <a href="https://www.tiktok.com/@temp-site"
                                class='flex items-center justify-between w-full group'>
                                <div class="flex items-center">
                                    <div>
                                        <span
                                            class='flex items-center justify-center transition duration-300 ease-in-out bg-transparent border rounded-full w-9 h-9 border-gray-300/70'>




                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="w-3.5 h-3.5 text-gray-700 transition duration-300 ease-in-out transform group-hover:text-blue-700 group-hover:scale-110"
                                                viewBox="0 0 512 512" fill='currentColor'>
                                                <path
                                                    d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                                            </svg>
                                        </span>
                                    </div>

                                    <div class='relative flex flex-col flex-wrap col-span-3'>

                                        <div class='box-border flex flex-col justify-between flex-1 w-full px-6 md:px-0'>
                                            <div
                                                class="relative z-10 ml-3 text-base font-medium text-gray-700 duration-300 ease-in-out transition-color group-hover:text-blue-600">
                                                Tiktok
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div>

                                    
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="text-red-400 w-5 h-5 mx-2 transition duration-300 ease-in-out group-hover:text-blue-600 group-hover:translate-x-1.5"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>

                                </div>

                            </a> -->
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </section>
</template>


<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';
import type { RuntimeConfig } from '~/types/runtimeConfig.type';

const feedSection = "Feed";
const trendingSection = "Trending";
const config  = useRuntimeConfig() as RuntimeConfig;
 
const xUrl = config.public?.xUrl ?? "";


interface Post {
    title: string;
    thumbnail: string;
    url: string;
    description: string;
    category: string;
}

interface ContentData {
    [key: string]: Post[];
}



let topics = ref<Post[]>([]);
let trending = ref<Post[]>([]);



async function getPostsByCategory() {
    const importedContents = await import('~/assets/data/contents.json');
    const postItems = importedContents.default as ContentData;
    topics.value = postItems[feedSection] || [];
    trending.value = postItems[trendingSection] || [];


}

onMounted(getPostsByCategory);
</script>
