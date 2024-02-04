<template>
   <Header />

    <slot></slot>


    <Footer />

    <CookieOptInBanner />
</template>

<script setup lang="ts">
import CookieOptInBanner from "@/components/CookieOptInBanner.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
   
</script>
