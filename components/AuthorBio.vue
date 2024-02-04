<script setup lang="ts">
import { withDefaults, computed } from 'vue';

const props = withDefaults(defineProps<{
    authorName: string,
    date?: string,
    url: string,
}>(), {
    date: new Date().toISOString(), // Default to current date if not provided
});

const formattedDate = computed(() => {
    if (props.date) {
        const dateObj = new Date(props.date);
        return dateObj.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }
    return '';
});
</script>


<template>
    <div
        class="mx-auto prose sm:prose-lg hover:prose-a:text-red-700 prose-a:duration-300 prose-a:ease-in-out prose-a:transition prose-img:rounded-xl">

        <div class="pb-3 my-2 px-5 md:px-0 text-gray-900 not-prose">
            <a :href="url" class="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
                {{ authorName }}
            </a>
            - {{ formattedDate }}
        </div>
    </div>
</template>
