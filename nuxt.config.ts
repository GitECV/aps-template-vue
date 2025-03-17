// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 7000
  },
  ssr: false,
  runtimeConfig: {
    // The private keys which are only available within server-side
    apsClientSecret: "",
    apsClientId: "",
  },
})
