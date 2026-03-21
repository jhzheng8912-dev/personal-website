// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      'Noto+Sans+TC': [400, 500, 700],
    },
    display: 'swap',
  },
  app: {
    head: {
      title: '個人作品集',
      meta: [
        { name: 'description', content: '全端開發者・獨立創作者' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
})
