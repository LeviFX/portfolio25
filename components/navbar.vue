<script setup lang="js">

    import { ref } from "vue";

    const isOpen = ref(false);

    const toggleHamburger = () => {
        isOpen.value = !isOpen.value;
    };

    const closeMenu = () => {
        isOpen.value = false;
    };

</script>

<template>
    <nav class="navbar" :class="{'open': isOpen}">
        <ul class="main-nav">
            <NuxtLink to="/" class="nav-link" exact-active-class="active">Home</NuxtLink>
            <NuxtLink to="/projects" class="nav-link" exact-active-class="active">Projects</NuxtLink>
            <NuxtLink to="/blog" class="nav-link" exact-active-class="active">Blog</NuxtLink>
            <NuxtLink to="/about" class="nav-link" exact-active-class="active">About</NuxtLink>
            <div @click="toggleHamburger" class="hamburger-container">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </ul>
        <ul class="mobile-nav">
            <NuxtLink to="/" class="nav-link" exact-active-class="active" @click="closeMenu">Home</NuxtLink>
            <NuxtLink to="/projects" class="nav-link" exact-active-class="active" @click="closeMenu">Projects</NuxtLink>
            <NuxtLink to="/blog" class="nav-link" exact-active-class="active" @click="closeMenu">Blog</NuxtLink>
            <NuxtLink to="/about" class="nav-link" exact-active-class="active" @click="closeMenu">About</NuxtLink>
        </ul>
    </nav>
</template>