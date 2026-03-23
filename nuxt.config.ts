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
