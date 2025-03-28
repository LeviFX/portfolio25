<script setup>

    import { ref } from 'vue'

    // Load blogs from content/blog dir
    const { data: blogs } = await useAsyncData('blog', () => queryCollection('blog')
    .select('title', 'image', 'path', 'highlight', 'category', 'lang')
    .where('main', '=', true)
    .order('order', 'ASC')
    .limit(3)
    .all())

    // Load projects from content/project dir
    const { data: projects } = await useAsyncData('project', () => queryCollection('project')
    .select('title', 'image', 'link', 'category', 'contrast', 'size')
    .where('main', '=', true)
    .order('order', 'ASC')
    .all())

    const message = ref('')
    const name = ref('')
    const email = ref('')
    const successMessage = ref('')
    const errorMessage = ref('')
    const loading = ref(false)

    const validateForm = () => {
        if (!name.value || !email.value || !message.value) {
            errorMessage.value = 'All fields are required'
            return false
        }
        return true
    }

    const submitForm = async () => {
        // Clear messages
        successMessage.value = ''
        errorMessage.value = ''

        if (!validateForm()) return

        loading.value = true
        try {
            const res = await fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    message: message.value
                })
            })

            // Manually parse JSON
            const data = await res.json()

            if (data?.success) {
                successMessage.value = data.message
                // Clear the form
                name.value = ''
                email.value = ''
                message.value = ''
                console.log('yep');
            } else {
                console.log("nope");
                errorMessage.value = data?.error || 'Something went wrong'
            }
        } catch (err) {
            errorMessage.value = 'Error sending message. Please try again.'
            console.error(err)
            console.log('nope2')
        } finally {
            loading.value = false
        }
    }
</script>

<template>
    <div class="landing">
        <div class="greeting-text">
            <span class="sentence developer">
                I am a <span class="greeting-creative">
                    <div class="warped-text">
                        <span class="warp">
                            c
                        </span>
                        <span class="warp">
                            r
                        </span>
                        <span class="warp">
                            e
                        </span>
                        <span class="warp">
                            a
                        </span>
                        <span class="warp">
                            t
                        </span>
                        <span class="warp">
                            i
                        </span>
                        <span class="warp">
                            v
                        </span>
                        <span class="warp">
                            e
                        </span>
                        <span class="warp">
                            ✨
                        </span>
                    </div>
                </span>
                <span class="greeting-developer">Developer</span>
            </span>
            <span class="sentence n3d">
                <div class="expression"><img src="/img/passionate.png" alt="passionate"></div> <span class="index">about</span> <span class="greeting-3d">3D</span>
            </span>
            <br>
            <span class="sentence design">
                and <span class="greeting-design">Design
                    <span class="handles-top"></span>
                    <span class="handles-bottom"></span>
                    <span class="handles-middle"></span>
                </span>
            </span>
        </div>
        <div class="greeting-text-mobile">
            <div class="dev">
                Dev<span class="dot">.</span>
            </div>
            <div class="n3d">
                3D<span class="dot">.</span>
            </div>
            <div class="design">
                Design<span class="dot">.</span>
            </div>
        </div>
        <div class="blob-gradient"></div>
        <div class="blob-gradient-2"></div>
        <img class="swipeme" src="/img/swipe.webp" alt="">
        <characterRender />
    </div>
    <div class="projects-section">
        <div class="projects-description">
            <h1>What I've been working on</h1>
        </div>
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
            <div class="view-more">
                Want to see more?
                <NuxtLink to="/projects" class="btn"><button>&#8594;</button></NuxtLink>
            </div>
        </div>
    </div>
    <div class="blogs-section">
        <div class="blogs-description">
            <h1>Articles</h1>
        </div>
        <div class="blog-grid">
            <div class="highlight">
                <div v-if="blogs && blogs.length && blogs.some(blog => blog.highlight)">
                    <NuxtLink :to="blog.path" v-for="blog in blogs.filter(blog => blog.highlight)" :key="'highlight-' + blog.id" class="card">
                    <div class="blog-content">
                        <span class="language">{{ blog.lang }}</span>
                        <div class="blog-category">
                            {{ blog.category }}
                        </div>
                        <span class="blog-description">
                            {{ blog.title }}
                        </span>
                    </div>
                    <img :src="blog.image" class="blog-thumbnail" alt="">
                    </NuxtLink>
                </div>
                <div v-else class="card dummy">
                    <div class="blog-content">
                        <div class="blog-category"></div>
                        <span class="blog-description">
                        No blog yet..
                        </span>
                    </div>
                    <img src="/img/notfound.webp" class="blog-thumbnail" alt="">
                </div>
            </div>
            <div class="featured">
                <div v-if="blogs && blogs.length">
                    <NuxtLink :to="blog.path" v-for="blog in blogs.filter(blog => !blog.highlight)" :key="blog.id" class="card">
                    <div class="blog-content">
                        <span class="language">{{ blog.lang }}</span>
                        <div class="blog-category">
                            {{ blog.category }}
                        </div>
                        <span class="blog-description">
                            {{ blog.title }}
                        </span>
                    </div>
                        <img :src="blog.image" class="blog-thumbnail" alt="">
                    </NuxtLink>
                </div>
                <div v-for="n in (2 - blogs.filter(blog => !blog.highlight).length)" :key="'dummy-' + n" class="card dummy">
                    <div class="blog-content">
                        <div class="blog-category"></div>
                        <span class="blog-description">
                        No blog yet..
                        </span>
                    </div>
                    <img src="/img/notfound.webp" class="blog-thumbnail" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="contact-section">
        <div class="contact-description">
            <h1>Message me</h1>
        </div>
        <form @submit.prevent="submitForm" class="envelope">
            <img src="/img/stamp_compressed.webp" class="stamp" alt="">
            <div class="input-section">
                <textarea v-model="message" name="message" placeholder="Message"></textarea>
                <div class="vertical-divider"></div>
                <div class="sender-wrapper">
                    <input v-model="name" type="text" placeholder="Name">
                    <input v-model="email" type="text" placeholder="E-mail">
                    <button type="submit" :disabled="loading">{{ loading? 'Sending' : 'Send' }}</button>
                    <p v-if="successMessage" class="succes message">{{ successMessage }}</p>
                    <p v-if="errorMessage" class="error message">{{ errorMessage }}</p>
                </div>
            </div>
        </form>
    </div>
</template>