<template>
    <div
        class="mx-auto prose sm:prose-lg hover:prose-a:text-red-700 prose-a:duration-300 prose-a:ease-in-out prose-a:transition prose-img:rounded-xl  ">

        <h2 class="text-xl pt-5 px-5 md:px-0 font-bold   text-gray-900">
            <a :href="url" target='_blank' class="hover:text-gray-500">
                {{ text }}
            </a>
        </h2>
    </div>
</template>


<script setup>
import { defineProps } from 'vue'

defineProps({
    url: {
        type: String,
        default: 'Default title'
    },
    text: {
        type: String,
        default: 'Default title'
    }
})
</script>