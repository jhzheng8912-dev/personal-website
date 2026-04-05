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
      title: '鄭鈞紘 | Full Stack Developer・接案工程師',
      meta: [
        { name: 'description', content: '3 年全端開發經驗，專注於 Nuxt/Vue 前端、Python 後端與 GCP 雲端部署。提供網頁開發、API 設計、雲端部署接案服務。' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'mGIJZ9b6GEqxNipg1Ejz1PWeinmb30qjMm0OZYhOjE4' },
        { name: 'google-site-verification', content: 'JKCoKjm0OJ18YD5-7EPvJT7k82_6w5Mx44fk1m3coJc' },
        // Open Graph
        { property: 'og:title', content: '鄭鈞紘 | Full Stack Developer・接案工程師' },
        { property: 'og:description', content: '3 年全端開發經驗，專注於 Nuxt/Vue 前端、Python 後端與 GCP 雲端部署。提供網頁開發、API 設計、雲端部署接案服務。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://jhzheng-dev.vercel.app' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '鄭鈞紘 | Full Stack Developer・接案工程師' },
        { name: 'twitter:description', content: '3 年全端開發經驗，專注於 Nuxt/Vue 前端、Python 後端與 GCP 雲端部署。提供網頁開發、API 設計、雲端部署接案服務。' },
      ],
      link: [
        { rel: 'canonical', href: 'https://jhzheng-dev.vercel.app' },
      ],
    },
  },
})
