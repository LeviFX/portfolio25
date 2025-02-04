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
            <div class="card">
                <div class="blog-content">
                    <h1 class="blog-title">
                        Blog 1
                    </h1>
                    <span class="blog-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio quidem rem, repudiandae ullam accusamus
                    </span>
                </div>
                <img src="/img/cover1.png" class="blog-thumbnail" alt="">
            </div>
            <div class="card">
                <div class="blog-content">
                    <h1 class="blog-title">
                        Blog 2
                    </h1>
                    <span class="blog-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio quidem rem, repudiandae ullam accusamus
                    </span>
                </div>
                <img src="/img/cover2.png" class="blog-thumbnail" alt="">
            </div>
            <div class="card">
                <div class="blog-content">
                    <h1 class="blog-title">
                        Blog 3
                    </h1>
                    <span class="blog-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio quidem rem, repudiandae ullam accusamus
                    </span>
                </div>
                <img src="/img/cover1.png" class="blog-thumbnail" alt="">
            </div>

        </div>
    </div>
    <div class="contact-section">
        <div class="contact-container">
            <div class="contact-description">
                <p>Write me a letter</p>
            </div>
        </div>
    </div>
</template>