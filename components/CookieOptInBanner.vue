<template>
  <div v-if="!accepted" class="cookie-banner">
    <p>
      We use cookies to enhance your experience on our website. By continuing to use our site, you agree to our use of
      cookies. Affiliate Links: Some of the links on this website are affiliate links, which means that we may earn a
      commission if you click on the link or make a purchase using the link. When you make a purchase, the price you pay
      will be the same whether you use the affiliate link or go directly to the vendor's website using a non-affiliate
      link. By using the affiliate links, you are helping support our website, and we genuinely appreciate your support.
      <a href="/info/privacy">Learn more</a>
    </p>
    <button @click="acceptCookies">Accept</button>
  </div>
</template>
  
<style>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  z-index: 1000;
}

.cookie-banner a {
  color: #fff;
  text-decoration: underline;
}
</style>
  
<script setup>
import { ref, onBeforeMount } from 'vue';

const accepted = ref(false);

onBeforeMount(() => {
  if (typeof window !== 'undefined') {
    accepted.value = localStorage.getItem('cookieOptIn') === 'accepted';
  }
});

function acceptCookies() {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cookieOptIn', 'accepted');
    accepted.value = true;
  }
}
</script>
  