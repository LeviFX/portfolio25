// https://nuxt.com/docs/api/configuration/nuxt-config
import { queryCollection } from '@nuxt/content'

export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  nitro: {
    prerender: {
      routes: async () => {
        const blogs = await queryCollection('blog').all() // Fetch all blogs
        return [
          '/', // Homepage
          '/projects', // Projects page
          '/blog', // Blog overview page
          '/about', // About page
          ...blogs.map((blog) => `/blog/${blog.slug}`), // Dynamic blog slugs
        ]
      },
    },
  },
  experimental: {
    revalidate: true
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
