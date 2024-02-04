<template>
    <Header />

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section class="py-12 lg:py-24">
            <div class="text-center">
                <h1 class="text-3xl font-bold">About Us</h1>
                <p class="mt-4 text-lg">
                    DevUnpack is a cutting-edge platform dedicated to delivering the latest and most insightful content in
                    AI and software development. Our mission is to unpack complex tech topics, making them accessible to a
                    wide audience of tech enthusiasts, professionals, and curious minds alike.
                </p>
            </div>

            <div class="mt-10">
                <h2 class="text-2xl font-semibold">Our Expertise & Experience</h2>
                <p class="mt-4">
                    With a combined experience of over 50 years in the tech industry, our team brings a wealth of knowledge
                    in software engineering, artificial intelligence, and tech innovations. We are committed to staying
                    ahead of the curve and sharing our expertise through in-depth articles, tutorials, and industry news.
                </p>
            </div>

            <div class="mt-10">
                <h2 class="text-2xl font-semibold">Meet Our Team</h2>
                <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="team-card">
                        <img src="/about-us/alex-morgan.jpg" alt="Alex Morgan" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-lg font-medium">Alex Morgan</h3>
                            <p class="text-sm">Co-Founder & Chief Editor, specializing in AI and Machine Learning</p>
                        </div>
                    </div>
                    <div class="team-card">
                        <img src="/about-us/jamie-lee.jpg" alt="Jamie Lee" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-lg font-medium">Jamie Lee</h3>
                            <p class="text-sm">Senior Software Analyst with a focus on emerging software technologies</p>
                        </div>
                    </div>
                    <div class="team-card">
                        <img src="/about-us/taylor-kim.jpg" alt="Taylor Kim" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-lg font-medium">Taylor Kim</h3>
                            <p class="text-sm">Tech News Correspondent, always on the lookout for the next big thing in tech
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <h2 class="text-2xl font-semibold">Our Commitment to Quality</h2>
                <p class="mt-4">
                    At DevUnpack, our commitment to quality is unwavering. We ensure that every piece of content is not only
                    informative but also backed by thorough research and expert insights. Our readers trust us to provide
                    accurate, up-to-date, and actionable information in the rapidly evolving world of technology.
                </p>
            </div>
        </section>
    </main>
 
    <Footer />
    <CookieOptInBanner />
</template>
 

<script setup lang="ts">
import CookieOptInBanner from "@/components/CookieOptInBanner.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
  
</script>
