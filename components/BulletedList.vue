<template>
    <div class="max-w-2xl mx-auto my-8 p-4 bg-gray-100 rounded-lg shadow-lg">
        <div
            class="mx-auto prose sm:prose-lg hover:prose-a:text-red-700 prose-a:duration-300 prose-a:ease-in-out prose-a:transition prose-img:rounded-xl  ">

            <div class="pb-3  px-5 md:px-0 text-gray-900 not-prose">
                <ul class="list-disc">
                    <li v-for="(row, index) in rows" :key="index">
                        <strong>{{ row.bold }}:</strong> {{ row.detail }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    rows: {
        type: Array,
        default: () => []
    }
})
</script>
  