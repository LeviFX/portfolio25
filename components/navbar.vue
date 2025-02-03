<template>
    <nav class="navbar" :class="{'open': isOpen}">
        <ul>
            <NuxtLink to="/" exact-active-class="active">Home</NuxtLink>
            <NuxtLink to="/projects" exact-active-class="active">Projects</NuxtLink>
            <NuxtLink to="/blog" exact-active-class="active">Blog</NuxtLink>
            <div @click="toggleHamburger" class="hamburger-container">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
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