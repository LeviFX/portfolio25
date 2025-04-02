// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxt/content'],
  runtimeConfig: {
    mailUser: process.env.NUXT_MAIL_USER,
    mailPass: process.env.NUXT_MAIL_PASS,
    mailPersonal: process.env.NUXT_PERSONAL_MAIL,
  },
  app: {
    head: {
      script: [{
        'data-goatcounter': 'https://levianalytics.goatcounter.com/count',
        async: true,
        src: '//gc.zgo.at/count.js'
      }]
    }
  }
})
