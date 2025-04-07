<script lang="ts" setup>

  const config = useRuntimeConfig()
  const route = useRoute()
  const { data: blogData } = await useAsyncData(route.path, () => {
    return queryCollection('blog').path(route.path).first()
  })

  const siteUrl = config.public.prodUrl

  useHead({
    bodyAttrs: {
      class: 'blog-page'
    },
    htmlAttrs: {
        lang: blogData.value?.lang || 'EN'
    },
    script: [{
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': blogData.value?.title,
        'description': blogData.value?.description,
        'image': siteUrl + blogData.value?.image,
      })
    }]
  })

  // SEO & Metadata
  useSeoMeta({
    title: () => blogData.value?.title,
    ogTitle: () => blogData.value?.title,
    description: () => blogData.value?.description,
    ogDescription: () => blogData.value?.description,
    ogType: 'article',
    ogImage: () => siteUrl + blogData.value?.image,
    twitterTitle: () => blogData.value?.title,
    twitterDescription: () => blogData.value?.description,
    twitterImage: () => siteUrl + blogData.value?.image,
    twitterCard: 'summary_large_image',
  })
  
</script>

<template v-if="blogData">
  <div class="blog-content">
    <div class="blog-banner">
      <img :src="blogData.image" :alt="blogData.title + ` blog banner`">
    </div>
    <div class="content">
      <ContentRenderer :value="blogData"/>
    </div>
  </div>
</template>