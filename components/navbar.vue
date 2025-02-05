<template>
    <nav class="navbar" :class="{'open': isOpen}">
        <ul class="main-nav">
            <NuxtLink to="/" class="nav-link" exact-active-class="active">Home</NuxtLink>
            <NuxtLink to="/projects" class="nav-link" exact-active-class="active">Projects</NuxtLink>
            <NuxtLink to="/blog" class="nav-link" exact-active-class="active">Blog</NuxtLink>
            <div @click="toggleHamburger" class="hamburger-container">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </ul>
        <ul class="mobile-nav">
            <NuxtLink to="/" class="nav-link" exact-active-class="active">Home</NuxtLink>
            <NuxtLink to="/projects" class="nav-link" exact-active-class="active">Projects</NuxtLink>
            <NuxtLink to="/blog" class="nav-link" exact-active-class="active">Blog</NuxtLink>
        </ul>
    </nav>
</template>

<script setup lang="js">

import { ref } from "vue";

const isOpen = ref(false);

const toggleHamburger = () => {
  isOpen.value = !isOpen.value;
};

</script>