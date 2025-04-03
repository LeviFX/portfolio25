<script setup>

    const config = useRuntimeConfig();
    const siteUrl = config.public.prodUrl

    useSeoMeta({
        title: 'About',
        ogTitle: `About Levi`,
        description: 'All about me',
        ogDescription: `All about Levi`,
        ogImage: siteUrl + '/img/ogimage.webp',
        twitterTitle: `About Levi`,
        twitterDescription: `All about Levi`,
        twitterImage: siteUrl + '/img/ogimage.webp',
        twitterCard: 'summary_large_image',
    })

    useHead({
    bodyAttrs: {
        class: 'about'
        }
    })

</script>

<template>
    <div class="about-landing">
        <div class="about-content">
            Lorem ipsum <strong>test</strong> dolor sit amet consectetur adipisicing elit. Dicta laborum necessitatibus voluptatibus temporibus tempore, quasi ratione explicabo ipsa dolore excepturi facere beatae laboriosam distinctio, placeat facilis nam! Similique, sint fugit, iusto dicta sequi exercitationem culpa perspiciatis id totam animi ea iste quos nostrum eos in accusamus labore ipsa voluptatum reiciendis.
        </div>
        <aboutcharacterRender />
    </div>
</template>