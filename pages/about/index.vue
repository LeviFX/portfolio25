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
            <strong>Brilliant</strong><br>
            Said maybe someone, once.<br><br>
            What I do have, is a love for obscure knowledge, fine details, beauty and philosophising about stuff I might create.<br><br>
            Hi I'm Levi, 22 years old and would like to classify myself as a creative, developer and an all-round generalist specialised in doing everything.<br><br>
            Graduated in Software Development, dabbled with audiovisual software like After Effects and Blender and have a keen interest in social debates.
        </div>
        <aboutcharacterRender />
    </div>
</template>