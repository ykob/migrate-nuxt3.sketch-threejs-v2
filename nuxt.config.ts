import { defineNuxtConfig } from 'nuxt'
import glsl from 'vite-plugin-glsl'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {},
    },
  },
  css: ['@/assets/css/tailwind.css'],
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  vite: {
    plugins: [glsl()],
  },
})
