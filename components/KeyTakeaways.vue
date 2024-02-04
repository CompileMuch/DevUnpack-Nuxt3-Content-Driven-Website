<template>
    <div class="max-w-2xl mx-auto my-8 p-4 bg-gray-100 rounded-lg shadow-lg">

        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Key Takeaways</h2>

        <table class="min-w-full table-auto">
            <thead>
                <tr class="bg-gray-200">
                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aspect
                    </th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detail
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(row, index) in rows" :key="index">
                    <td class="px-4 py-4   text-sm font-medium text-gray-900">{{ row.aspect }}</td>
                    <td class="px-4 py-4  text-sm text-gray-500">{{ row.detail }}</td>
                </tr>
            </tbody>
        </table>

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
  