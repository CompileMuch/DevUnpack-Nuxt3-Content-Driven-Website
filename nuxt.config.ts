

export default defineNuxtConfig({
  components: {
    global: true,
   dirs: ['~/components']
   },
   experimental: {
    payloadExtraction: false,
  },
  
  css: ['~/assets/css/main.css'],
  plugins: ['~/plugins/vue-gtm.ts'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    'nuxt-simple-sitemap',
    'nuxt-lazy-load',
    '@nuxt/image'
  ],
  lazyLoad: {
    images: true
  },
  content: {
    documentDriven: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  prismjs: {
    theme: 'okaidia',
    languages: ['javascript', 'css', 'html', 'json'],
    plugins: ['line-numbers', 'show-language'],
    css: false
  },
  publicRuntimeConfig: {
    site: {
      url: process.env.SITE_URL // Your site's URL
    }
  },
  runtimeConfig: {
    public:{
      gtmId: process.env.GTM_ID,
      site: {
        url: process.env.SITE_URL,
        domain: process.env.DOMAIN
      },
      xUrl: process.env.X_URL,
      youTubeUrl: process.env.YOUTUBE_URL,
      name: process.env.NAME
    } 
  },
  site: {
    url: process.env.SITE_URL // Your site's URL
  },
  'nuxt-simple-sitemap': {
    siteUrl: process.env.SITE_URL,
  },
  image: {
    provider: "ipx"
  },
  nitro: {
    ssr: true,
    
      logLevel: 'debug' // Options are: 'debug', 'info', 'warn', 'error', and 'silent'
    
  }
});
