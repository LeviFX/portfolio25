<script setup>

    const config = useRuntimeConfig();
    const siteUrl = config.public.prodUrl

    // Load projects from content/project dir
    const { data: projects } = await useAsyncData('project', () => queryCollection('project')
    .select('title', 'image', 'link', 'category', 'contrast', 'size')
    .order('order', 'ASC')
    .all(), {
        revalidate: 60,
    })

    // SEO & Metadata
    useSeoMeta({
        title: 'Projects',
        ogTitle: `Levi's projects`,
        description: `All the projects I've been working on`,
        ogDescription: 'Projects Levi has been working on',
        ogImage: siteUrl + '/img/ogimage.webp',
        twitterTitle: `Levi's projects`,
        twitterDescription: `Projects Levi has been working on`,
        twitterImage: siteUrl + '/img/ogimage.webp',
        twitterCard: 'summary_large_image',
    })

    useHead({
    bodyAttrs: {
        class: 'projects-overview'
        }
    })
</script>

<template>
    <div class="projects-section">
        <div class="bento-grid">
            <NuxtLink :to="project.link" v-for="project in projects" :key="project.id" target="__blank" class="card" :class="[project.size, { contrast: project.contrast }]">
                <div class="category">
                    {{ project.category }}
                </div>
                <div class="project-description">
                    {{ project.title }}
                </div>
                <img :src="project.image" class="project-thumbnail" :alt="project.title">
            </NuxtLink>
        </div>
    </div>
</template>