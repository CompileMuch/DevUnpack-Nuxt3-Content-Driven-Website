<template>
    <div
        class="mx-auto prose   sm:prose-lg hover:prose-a:text-red-700 prose-a:duration-300 prose-a:ease-in-out prose-a:transition prose-img:rounded-xl">


        <div>

            <nuxt-img :src="src" :alt="alt" class="aspect-content rounded h-auto custom-width mx-auto"
                sizes="100vw sm:80vw md:589px" width="589" height="auto" />

        </div>
        <p v-if="description" class="text-center text-gray-500 text-xs py-2">{{ description }}</p>

    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
.custom-width {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
</style>
