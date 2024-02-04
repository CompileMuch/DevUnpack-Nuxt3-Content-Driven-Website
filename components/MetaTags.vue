<template></template>
  
<script setup lang="ts">


const props = defineProps({
    mainImage: String,
    mainImageAlt: String,
    title: String,
    description: String,
    url: String,
    keywords: String,
    author: String,
});



useHead(() => ({
    title: props.title,
    meta: [
        { name: 'description', content: props.description },
        { name: 'title', content: props.title },
        { name: 'keywords', content: props.keywords },
        { name: 'author', content: props.author },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { property: 'og:image', content: props.mainImage },
        { property: 'og:image:secure_url', content: props.mainImage },
        { property: 'og:image:alt', content: props.mainImageAlt },
        { property: 'og:title', content: props.title },
        { property: 'og:description', content: props.description },
        { property: 'og:type', content: 'website' },
    ],
}));
</script>
  