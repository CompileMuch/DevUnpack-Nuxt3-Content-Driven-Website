
<script setup>

defineProps({
    src: {
        type: String,
        default: 'Default title'
    }
})
</script>

<template>
    <div
        class="mx-auto prose sm:prose-lg hover:prose-a:text-red-700 prose-a:duration-300 prose-a:ease-in-out prose-a:transition prose-img:rounded-xl  ">

        <div class="mx-auto my-10 relative" style="padding-bottom: 56.25%; width: 100%;">
            <iframe class="absolute top-0 left-0 w-full h-full" :src="src" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
</template>