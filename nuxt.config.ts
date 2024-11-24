// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/layouts/global.css'],
  modules:['@pinia/nuxt', '@nuxt/eslint', '@nuxt/icon', '@nuxt/image'],
  pinia: {
    autoImports: [
      // automatically imports defineStore
      'defineStore' // import { defineStore } from 'pinia'
    ]
  },

})