<template>
    <div
        class="mx-auto prose sm:prose-lg hover:prose-a:text-red-700 prose-a:duration-300 prose-a:ease-in-out prose-a:transition prose-img:rounded-xl  ">

        <div>
            <div class="aspect-[16/9]">

                <nuxt-img :src="src" :alt="alt" class="aspect-content rounded h-auto"
                    :class="[description ? 'mt-10' : 'my-10', 'mx-auto']" sizes="100vw sm:80vw md:736px" width="736"
                    height="auto" />


            </div>
            <p v-if="description" class="text-center text-gray-500 text-xs py-2">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    src: {
        type: String,
        default: 'Default title'
    },
    alt: {
        type: String,
        default: 'Default title'
    },
    description: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
