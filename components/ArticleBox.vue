<template>
    <div
        class='mx-auto px-10 prose sm:prose-lg hover:prose-a:text-red-700 prose-a:duration-300 prose-a:ease-in-out prose-a:transition prose-img:rounded-xl'>

        <!-- Articles-->
        <div class='   '>

            <!-- Article -->
            <article
                class='relative flex flex-col flex-wrap transition duration-300 ease-in-out rounded-2xl group hover:shadow-xl'>

                <!-- Image -->
                <div class='relative z-10 w-full overflow-hidden aspect-w-2 aspect-h-1 rounded-t-2xl bg-gray-50 '>
                    <a href:="url">
                        <img class='absolute inset-0 object-cover object-center w-full h-full transition duration-300 ease-in-out  rounded-t-2xl group-hover:scale-110 lazy'
                            :src="thumbnail" :alt="title" />
                    </a>
                </div>

                <!-- Content -->
                <div
                    class='box-border flex flex-col justify-between flex-1 w-full p-6 transition duration-300 ease-in-out bg-white border-b-2 border-l-2 border-r-2 border-gray-100 rounded-b-2xl xl:p-7 group-hover:border-transparent'>
                    <div>


                        <h3
                            class='mt-3 text-xl font-medium leading-tight text-gray-900 transition duration-300 ease-in-out lg:text-xl sm:text-2xl xl:text-2xl decoration-gray-800 decoration-2 hover:underline'>
                            <a :href="url">{{ title }}
                                <span class="absolute inset-0" aria-hidden="true">{{ title }}</span>
                            </a>
                        </h3>

                        <p class='block mt-4 text-base leading-relaxed text-gray-500'>
                            {{ description }}
                        </p>
                    </div>



                </div>

            </article>


        </div>
    </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({

    title: String,
    url: String,
    description: String,
    category: String,
    thumbnail: String,

});

</script>

 
