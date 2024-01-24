// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: {
    enabled: true,
  },
  devServer: {
    port: 3033
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
