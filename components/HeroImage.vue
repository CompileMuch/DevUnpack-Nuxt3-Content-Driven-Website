<template>
    <div class="aspect-[16/9]">
        <nuxt-img :src="url" :alt="alt" class="aspect-content rounded w-full h-auto my-10 mx-auto lg:w-9/12"
            sizes="100vw sm:100vw md:651px" width="651" height="auto" />

    </div>
</template>
  
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    url: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: 'Default alt text'
    }
})
</script>
