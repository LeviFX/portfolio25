<script setup>
    // Load projects from content/project dir
    const { data: projects } = await useAsyncData('project', () => queryCollection('project')
    .select('title', 'image', 'link', 'category', 'contrast', 'size')
    .order('order', 'ASC')
    .all())

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
                <img :src="project.image" class="project-thumbnail" alt="">
            </NuxtLink>
        </div>
    </div>
</template>