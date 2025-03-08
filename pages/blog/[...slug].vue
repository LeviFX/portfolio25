<script lang="ts" setup>

  const route = useRoute()
  const { data: blogData } = await useAsyncData(route.path, () => {
    return queryCollection('blog').path(route.path).first()
  })

  useHead({
    bodyAttrs: {
      class: 'blog-page'
    }
  })

</script>

<template v-if="blogData">
  <div class="blog-content">
    <div class="blog-banner">
      <img :src="blogData.image" alt="">
    </div>
    <div class="content">
      <ContentRenderer :value="blogData"/>
    </div>
  </div>
</template>