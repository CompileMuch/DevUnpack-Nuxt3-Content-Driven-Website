  <!-- Footer -->
  <template>

  <footer class="py-12 bg-white sm:py-20 lg:py-24">
    <div class="max-w-2xl px-4 mx-auto lg:max-w-screen-xl sm:px-6 lg:px-8">

      <!-- Logo -->
      <div class='flex items-center justify-center mx-auto '>
        <a href="/" class='block'>
          <img src='/logo.svg' class='w-auto h-10 mx-auto'>
          devunpack
        </a>
      </div>
      <!-- Logo & Social Links -->


      <!-- Footer Links Container -->
      <div class="pt-10 mt-10 border-t md:flex md:justify-between md:items-center border-t-gray-300/70">
        <div class="container mx-auto">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <div class="text-center py-6">
                <div class="text-sm  font-semibold py-1">
                  <a href="/" class=" hover:text-gray-400 text-sm font-semibold py-1">Home</a>
                </div>
                <div class="text-sm  font-semibold py-1">
                  <a :href="youTubeUrl"
                    class=" hover:text-gray-400 text-sm font-semibold py-1">YouTube</a>
                </div>
                <div class="text-sm  font-semibold py-1">
                  <a href="/about-us" class="hover:text-gray-400 text-sm font-semibold py-1">About Us</a>
                </div>
                <div class="text-sm  font-semibold py-1">
                  <a href="/site-map" class=" hover:text-gray-400 text-sm font-semibold py-1">Site Map</a>
                </div>
                <div class="text-sm  font-semibold py-1">
                  <a href="/info/privacy" class=" hover:text-gray-400 text-sm font-semibold py-1">Privacy
                    Policy</a>
                </div>
                <div class="text-sm  font-semibold py-1">
                  <a href="/info/terms" class=" hover:text-gray-400 text-sm font-semibold py-1">Terms and
                    Conditions</a>
                </div>
                <div class="text-sm  font-semibold py-1">
                  © {{ currentYear }}
                  <a :href="siteUrl"
                    class=" hover:text-gray-400 text-sm font-semibold py-1">{{ domain }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

// Importing the RuntimeConfig type definition from '~/types/runtimeConfig.type'.
// This is a type-only import, used for TypeScript type checking and has no runtime impact.
import type { RuntimeConfig } from '~/types/runtimeConfig.type';
 
// Retrieves the runtime configuration object using Nuxt's useRuntimeConfig() hook,
// and asserts its type to be RuntimeConfig for type-safe access to its properties.
// The RuntimeConfig type definition ensures that we are accessing only the properties
// defined in our application's runtime configuration schema.
const config = useRuntimeConfig() as RuntimeConfig;
const isMenuOpen = ref(false);
const route = useRoute();
const currentYear = computed(() => new Date().getFullYear());
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
const colorMode = useColorMode()
const youTubeUrl = config.public?.youTubeUrl?? "";
const siteUrl = config.public?.site?.url?? "";
const domain = config.public?.site?.domain?? "";


colorMode.preference = 'light'

 
 

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

const title = computed(() => {
    const path = route.path.split("/").filter(Boolean);
    return path.length > 0
        ? toTitleCase(path[path.length - 1].split("-").join(" "))
        : "Home";
});

const image = computed(() => {
    const path = route.path;
    return `${siteUrl}${path}.jpg`;
});

const ogUrl = computed(() => {
    const path = route.path;
    return `${siteUrl}${path}`;
});

useHead(() => ({
    title: title.value,
    meta: [
        { charset: "utf-8" },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
        { name: "theme-color", content: "#94A3B8" },
        { name: "author", content: "streetvillageeats" },
        { name: "keywords", content: title.value },
        { name: "og:url", content: ogUrl.value },
        { name: "og:image", content: image.value },
        { name: "og:title", content: title.value },
        { name: "og:description", content: title.value },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: image.value },
        { name: "twitter:title", content: title.value },
        { name: "twitter:description", content: title.value },
    ],
}));
</script>
