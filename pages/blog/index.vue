<script setup>

    const config = useRuntimeConfig();
    const siteUrl = config.public.prodUrl

    // Load blogs from content/blog dir
    const { data: blogs } = await useAsyncData('blog', () => queryCollection('blog')
    .select('title', 'image', 'path', 'highlight', 'category', 'lang')
    .where('visible', '=', true)
    .order('highlight', 'DESC')
    .order('order', 'ASC')
    .all())

    // SEO & Metadata
    useSeoMeta({
        title: 'Blog',
        ogTitle: `Levi's blog`,
        description: 'Repository of my written articles',
        ogDescription: `Repository of Levi's written articles`,
        ogImage: siteUrl + '/img/ogimage.webp',
        twitterTitle: `Levi's blog`,
        twitterDescription: `Repository of Levi's written articles`,
        twitterImage: siteUrl + '/img/ogimage.webp',
        twitterCard: 'summary_large_image',
    })

    useHead({
    bodyAttrs: {
        class: 'blog-overview'
        }
    })

</script>

<template>
    <div class="blogs-page">
        <div v-if="blogs && blogs.length" class="blogs-grid">
            <NuxtLink :to="blog.path" v-for="blog in blogs" :key="blog.id" class="card" :class="{ highlighted: blog.highlight}">
            <div class="blog-content">
                <span class="language">{{ blog.lang }}</span>
                <div class="blog-category">
                    {{ blog.category }}
                </div>
                <span class="blog-description">
                    {{ blog.title }}
                </span>
            </div>
                <img :src="blog.image" class="blog-thumbnail" :alt="blog.title">
            </NuxtLink>
        </div>
        <div v-else class="no-blog">
            <p>There are no blogs yet... :(</p>
            <NuxtLink to="/">Go back</NuxtLink>
        </div>
    </div>
</template>