import { createGtm } from '@gtm-support/vue-gtm';
 

export default defineNuxtPlugin(nuxtApp => {
  
  const config: any = useRuntimeConfig(); // Explicitly type 'config' as 'any'
 
  if (!config.public.gtmId) {
    console.warn('GTM ID is not defined in nuxt.config');
    return;
  }


  nuxtApp.vueApp.use(
    createGtm({
      id: config.public.gtmId, // Use GTM ID from runtime config
      enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
      debug: true, // Whether or not display console logs debugs (optional)
      loadScript: true, // Script is loaded and executed when the app is mounted
      vueRouter: useRouter(), // Pass the router instance to automatically sync with router
      // ...other configuration options
    })
  );
});


