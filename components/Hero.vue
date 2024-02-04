<template>
    <!-- Home Hero-->
    <section class="pt-12 sm:pt-16 lg:pt-20 bg-gray-50">
        <div class='max-w-2xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-2xl lg:flex lg:items-start'>

            <!-- Featured Article-->
            <article class='relative lg:top-8 lg:w-1/2 lg:sticky' v-for="(post, index) in hero" :key="index">

                <!-- Image -->
                <a :href="post.url"
                    class="relative z-10 block overflow-hidden bg-gray-100 rounded-2xl aspect-w-16 aspect-h-9 group ">
                    <img class="object-cover object-center transition duration-300 ease-in-out  rounded-2xl group-hover:scale-110 lazy"
                        :alt="post.title" :src="post.thumbnail" />
                </a>

                <!-- Content -->
                <div class='mt-6 md:align-middle'>
                    <a :href="post.url"
                        class='relative text-sm font-medium tracking-widest text-blue-700 uppercase duration-300 ease-in-out transition-color hover:text-red-600'>
                        {{ post.category }}</a>

                    <a :href="post.url" class="block mt-3 group">
                        <h2
                            class='text-3xl font-medium tracking-normal text-gray-900 transition duration-300 ease-in-out decoration-gray-800 decoration-3 group-hover:underline md:tracking-tight lg:leading-tight lg:text-4xl'>
                            {{ post.title }}</h2>
                        <div>
                            <p class='mt-4 text-base leading-loose text-gray-600'>
                                {{ post.description }}
                            </p>
                        </div>
                    </a>

                    <!-- Author -->
                    <!-- <div class='flex items-center mt-4 sm:mt-8'>
                        <a href="author.html" class='w-10 h-10 rounded-xl bg-gray-50 '>
                           <img   src="/images/images/author-01.jpeg"
                                class="object-cover object-center w-full h-full transition duration-300 ease-in-out  rounded-xl lazy">

                        </a>
                        <div class="ml-3">
                            <a href="author.html" class="text-sm font-medium text-gray-800 hover:underline">
                                Mark Jack
                            </a>
                            <p class="text-sm text-gray-500">
                                <time datetime="2021-12-16">Dec 16 2021</time>
                                <span aria-hidden="true"> &middot; </span>
                                <span> 6 min read </span>
                            </p>

                        </div>
                    </div> -->

                </div>

            </article>

            <!-- Recent Articles-->
            <div class='mt-12 sm:mt-16 lg:mt-0 lg:ml-12 lg:w-1/2 xl:ml-16'>
                <h3
                    class="pb-2.5 text-2xl font-medium text-gray-900 border-b border-gray-300/70 ">
                    Recent stories</h3>

                <!-- Articles Container -->
                <div class="grid lg:grid-cols-2 xl:grid-cols-1 lg:gap-x-5">


                    <!-- 1st Article -->
                    <article v-for="(post, index) in  posts " :key="index"
                        class='py-8 sm:flex xl:items-center lg:flex-col xl:flex-row'>

                        <!-- Image -->
                        <a :href="post.url" class="order-2 w-full sm:w-2/5 lg:w-full xl:w-2/5 lg:order-1">

                            <div
                                class='relative z-10 overflow-hidden bg-gray-100 rounded-2xl aspect-w-16 aspect-h-9 group '>
                                <a :href="post.url">

                                    <nuxt-img :src="post.thumbnail" :alt="post.title"
                                        class="object-cover object-center transition duration-300 ease-in-out  rounded-2xl group-hover:scale-110 lazy"
                                        sizes="100vw sm:80vw " height="auto" />
                                </a>
                            </div>

                        </a>

                        <!-- Content -->
                        <div
                            class='order-1 w-full px-2 mt-5 sm:max-w-sm sm:pr-5 sm:pl-0 sm:mt-0 lg:mt-4 xl:mt-0 xl:ml-5 xl:flex-1 lg:order-2'>

                            <a :href="post.url"
                                class='relative text-sm font-medium tracking-widest text-blue-700 uppercase duration-300 ease-in-out transition-color hover:text-red-600'>
                                {{ post.category }}</a>


                            <h3
                                class='mt-2 text-xl font-medium leading-normal tracking-normal text-gray-900 transition duration-300 ease-in-out hover:underline decoration-2 decoration-gray-800'>
                                <a :href="post.url">{{ post.title }}</a>
                            </h3>




                        </div>

                    </article>



                </div>

            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';

interface Post {
    title: string;
    thumbnail: string;
    url: string;
    description: string;
    category: string;
}

interface ContentData {
    [key: string]: Post[];
}

const props = defineProps({
    recent_category: {
        type: String,
        required: true,
    },
    title: String,
    link: String,
    hero_category: {
        type: String,
        required: true,
    }
});

let posts = ref<Post[]>([]);
let hero = ref<Post[]>([]);


async function getPostsByCategory() {
    const importedContents = await import('~/assets/data/contents.json');
    const postItems = importedContents.default as ContentData;
    posts.value = postItems[props.recent_category] || [];
    hero.value = postItems[props.hero_category] || [];


}

onMounted(getPostsByCategory);
</script>

<style scoped>
.image-container {
    position: relative;
    width: 100%;
}

.image-content {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    /* set your desired aspect ratio here */
}
</style>
