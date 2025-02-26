import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
        source: 'blog/*.md',
        type: 'page',
        schema: z.object({
            category: z.string(),
            image: z.string(),
            order: z.number(),
            visible: z.boolean(),
            highlight: z.boolean(),
            main: z.boolean(),
        })
    })
  }
})
