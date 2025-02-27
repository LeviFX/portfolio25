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
        })
    })
  }
})
