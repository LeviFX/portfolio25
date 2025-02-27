<script setup>
    // Load blogs from content/blog dir
    const { data: blogs } = await useAsyncData('blog', () => queryCollection('blog')
    .select('title', 'image', 'path', 'highlight', 'category')
    .where('main', '=', true)
    .order('order', 'ASC')
    .limit(3)
    .all())
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
                <div class="expression">passionate</div> about <span class="greeting-3d">3D</span>
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
        <characterRender />
    </div>
    <div class="projects-section">
        <div class="projects-description">
            <h1>What I've been working on</h1>
            <p>A wide range of</p>
        </div>
        <div class="bento-grid">
            <div class="card large">
                <div class="category">
                    #3d
                </div>
                <div class="project-description">
                    Lorem ipsum dolor sit.
                </div>
                <img src="/img/animationkeyboard.webp" class="project-thumbnail" alt="">
            </div>
            <div class="card">
                <div class="category">
                    #dev
                </div>
                <div class="project-description">
                    Lorem ipsum dolor sit.
                </div>
                <img src="/img/astronaut.webp" class="project-thumbnail" alt="">
            </div>
            <div class="card">
                <div class="category">
                    #design
                </div>
                <div class="project-description">
                    Lorem ipsum dolor sit.
                </div>
                <img src="/img/cathedral.webp" class="project-thumbnail" alt="">
            </div>
            <div class="card vertical">
                <div class="category">
                    #3d #dev
                </div>
                <div class="project-description contrast">
                    Lorem ipsum dolor sit.
                </div>
                <img src="/img/remia_small.webp" class="project-thumbnail" alt="">
            </div>
            <div class="card">
                <div class="category">
                    #dev
                </div>
                <div class="project-description">
                    Lorem ipsum dolor sit.
                </div>
                <img src="/img/sgp3d.webp" class="project-thumbnail" alt="">
            </div>
            <div class="card">
                <div class="category">
                    #motion
                </div>
                <div class="project-description">
                    Lorem ipsum dolor sit.
                </div>
                <img src="/img/remia_small.webp" class="project-thumbnail" alt="">
            </div>
            <div class="card horizontal">
                <div class="category">
                    #test
                </div>
                <div class="project-description">
                    Lorem ipsum dolor sit.
                </div>
                <img src="/img/twirl.webp" class="project-thumbnail" alt="">
            </div>
            <div class="card">
                <div class="category">
                    #dev
                </div>
                <div class="project-description">
                    Lorem ipsum dolor sit.
                </div>
                <img src="/img/chess.webp" class="project-thumbnail" alt="">
            </div>
        </div>
    </div>
    <div class="blogs-section">
        <div class="blogs-description">
            <h1>Articles</h1>
            <p>Lorem, ipsum dolor.</p>
        </div>
        <div class="blog-grid">
            <div class="highlight">
                <div v-if="blogs && blogs.length">
                    <NuxtLink :to="blog.path" v-for="blog in blogs.filter(blog => blog.highlight)" :key="'highlight-' + blog.id" class="card">
                    <div class="blog-content">
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
            </div>
            <div class="featured">
                <div v-if="blogs && blogs.length">
                    <NuxtLink :to="blog.path" v-for="blog in blogs.filter(blog => !blog.highlight)" :key="blog.id" class="card">
                    <div class="blog-content">
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
            </div>
        </div>
    </div>
    <div class="contact-section">
        <div class="contact-description">
            asdasdas
        </div>
        <div class="envelope">
            <img src="/img/stamp_compressed.webp" class="stamp" alt="">
            <div class="input-section">
                <textarea name="" id="" placeholder="Message"></textarea>
                <div class="vertical-divider"></div>
                <div class="sender-wrapper">
                    <input type="text" placeholder="Name">
                    <input type="text" placeholder="E-mail">
                </div>
                <button class="send-seal"></button>
            </div>
        </div>
    </div>
</template>