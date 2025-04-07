import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
        source: 'blog/*.md',
        type: 'page',
        schema: z.object({
            category: z.string(),
            order: z.number(),
            main: z.boolean(),
            highlight: z.boolean(),
            visible: z.boolean(),
            image: z.string(),
            lang: z.string(),
        })
    }),
    project: defineCollection({
      source: 'project/*.md',
        type: 'data',
        schema: z.object({
            title: z.string(),
            category: z.string(),
            link: z.string(),
            order: z.number(),
            main: z.boolean(),
            size: z.string(),
            contrast: z.boolean(),
            image: z.string(),
        })
    })
  }
})
