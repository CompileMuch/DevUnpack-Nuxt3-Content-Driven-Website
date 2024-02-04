<template>
  <Header />


  <article class="pb-12 sm:pb-16 lg:pb-24 bg-gray-50">

    <slot></slot>

  </article>

  <!-- Footer -->
  <Footer />

  <CookieOptInBanner />
</template>

<script setup lang="ts">
import CookieOptInBanner from "@/components/CookieOptInBanner.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
 
</script>
