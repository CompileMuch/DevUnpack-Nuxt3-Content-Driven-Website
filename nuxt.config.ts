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
      url: process.env.SITE_URL || 'https://default-site-url.com' // Default site URL
    }
  },
  runtimeConfig: {
    public: {
      gtmId: process.env.GTM_ID || 'GTM-ID', // Default GTM ID
      site: {
        url: process.env.SITE_URL || 'https://default-site-url.com', // Default site URL
        domain: process.env.DOMAIN || 'default-domain.com' // Default domain
      },
      xUrl: process.env.X_URL || 'https://default-x-url.com', // Default X_URL
      youTubeUrl: process.env.YOUTUBE_URL || 'https://default-youtube-url.com', // Default YouTube URL
      name: process.env.NAME || 'Default Name' // Default name
    } 
  },
  site: {
    url: process.env.SITE_URL || 'https://default-site-url.com' // Your site's URL
  },
  'nuxt-simple-sitemap': {
    siteUrl: process.env.SITE_URL || 'https://default-site-url.com', // Default site URL for sitemap
  },
  image: {
    provider: "ipx"
  },
  nitro: {
    ssr: true,
    logLevel: 'debug' // Options are: 'debug', 'info', 'warn', 'error', and 'silent'
  }
});
