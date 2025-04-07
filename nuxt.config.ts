// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  routeRules: {
    '/': { isr: 60 },
    '/projects': { isr: 60 },
    '/blog': { isr: 60 },
    '/about': { prerender: true},
    '/blog/**': { isr: 60 },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxt/content'],
  runtimeConfig: {
    mailUser: process.env.NUXT_MAIL_USER,
    mailPass: process.env.NUXT_MAIL_PASS,
    mailPersonal: process.env.NUXT_PERSONAL_MAIL,
    public: {
      prodUrl: process.env.NUXT_PUBLIC_SITE_URL,
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      script: [{
        'data-goatcounter': 'https://levianalytics.goatcounter.com/count',
        async: true,
        src: '//gc.zgo.at/count.js'
      }]
    }
  }
})
