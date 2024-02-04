<template>
    <header>

        <!-- Image 123 -->
        <div class="w-full aspect-w-3 aspect-h-2 sm:aspect-h-1">
            <img :src="src" :alt="alt" class="object-cover object-center" />
        </div>

        <!-- Post Header Content -->
        <div class="px-5 lg:px-0">

            <!-- Article Information -->
            <div class="pt-10 pb-8 mx-auto mb-8 text-lg border-b max-w-prose border-gray-300/70 sm:pt-16">

                <h2
                    class='mt-3.5 text-4xl font-medium tracking-normal text-gray-900 transition duration-300 ease-in-out sm:mt-5 decoration-red-300 decoration-3 group-hover:underline md:tracking-tight sm:leading-tight sm:text-5xl lg:text-6xl'>
                    {{ title }}
                </h2>

                <div>
                    <p class='mt-4 text-base leading-loose text-gray-600'>
                        {{ intro }}
                    </p>
                </div>


            </div>

        </div>

    </header>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    src: {
        type: String,
        default: 'Image src'
    },
    alt: {
        type: String,
        default: 'Image alt'
    },
    title: {
        type: String,
        default: 'Title'
    },
    intro: {
        type: String,
        default: 'Introduction'
    }
})
</script>