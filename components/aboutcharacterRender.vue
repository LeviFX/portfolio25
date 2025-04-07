<script setup lang="js">

// COPY of characterRender.vue but without the mouse following, auto rotate & different camera position
// This is for the /about page
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { onMounted } from 'vue';

let scene, camera, renderer, loader, ambientLight, container;
let group = new THREE.Group();
let touchStartX = 0;
let touchStartY = 0;
let touchLastX = 0;
let touchLastY = 0;
let swipeVelocity = 0;
let isHorizontalSwipe = false;

const interpolationSpeed = .03 // Higher = overall faster turn speed

// Check if client is on a mobile phone
const isMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileAgent = /android|iphone|ipad|ipod|blackberry|opera mini|iemobile|windows phone|mobile/i.test(userAgent);

    const smallScreen = window.innerWidth <= 768;

    // True if either is correct
    return mobileAgent || smallScreen;
}

// Initial loading
const init = () => {
    container = document.getElementById('three');
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Create Scene
    scene = new THREE.Scene();

    // Add group
    scene.add(group);
    // Start with left side of character
    group.rotation.y = -2

    // Create Camera
    camera = new THREE.PerspectiveCamera(52, width / height, 0.01, 10);
    camera.position.set(-0.5, 1.6, 2.5);

    // Create Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Add light
    ambientLight = new THREE.AmbientLight(0xcccccc, 2)
    scene.add(ambientLight);

    // Add character
    loader = new GLTFLoader();
    loader.load('3d/levi.glb', function(gltf) {
        group.add(gltf.scene)
    }, undefined, function(error) {
        console.error(error);
    });

    if (!isMobile()) {
        // Desktop visual setting
        group.position.set(0, 0, 0)
        camera.position.set(-0.5, 1.6, 2.5);
    } else {
        // Mobile visual setting
        group.position.set(0, 0, 0)
        camera.position.set(0, 1.5, 4.5);
    }

    // Handle window resize
    window.addEventListener('resize', onResize);

    // Handle mobile touch
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
};

// Update camera on resize
const onResize = () => {
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    if (!isMobile()) {
        // Desktop visual setting
        group.position.set(0, 0, 0)
        camera.position.set(-0.5, 1.6, 2.5);
    } else {
        // Mobile visual setting
        group.position.set(0, 0, 0)
        camera.position.set(0, 1.5, 4.5);
    }

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
};

const onTouchStart = (event) => {
    if (event.touches.length === 1) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        touchLastX = event.touches[0].clientX;
        touchLastY = event.touches[0].clientY;
        isHorizontalSwipe = false;
    }
}

const onTouchMove = (event) => {
    if (event.touches.length === 1) {
        const touchX = event.touches[0].clientX;
        const touchY = event.touches[0].clientY;

        const deltaX = Math.abs(touchX - touchLastX);
        const deltaY = Math.abs(touchY - touchLastY);

        // Check if swipe is vertical or horizontal, if vertical make sure to disable interaction with canvas
        if (deltaX > deltaY) {
            isHorizontalSwipe = true;
            if (event.cancelable) {
                event.preventDefault();
            }
        }

        if (isHorizontalSwipe) {
            // Calculate swipe velocity based on the difference in touch positions
            swipeVelocity = (touchX - touchLastX) * 0.006; // Adjust multiplier for sensitivity
            touchLastX = touchX;
        }
        
        touchLastY = touchY;
    }
}

// Rerender frames
const animate = () => {
    requestAnimationFrame(animate);

    if (!isMobile()) {
        // Desktop
        group.rotation.y += 0.005;
    } else {
        // Mobile, respond to swipes
        group.rotation.y += 0.005;
        group.rotation.y += swipeVelocity;
        swipeVelocity *= 0.97

        if (Math.abs(swipeVelocity) < 0.001) {
            swipeVelocity = 0; //
        }
    }

    // Render scene
    renderer.render(scene, camera);
};

onMounted(() => {
    // Add timeout for some reason to properly load on first load without refresh/resize
    setTimeout(() => {
        init();
        animate();
    }, 1);
});

</script>

<template>
  <div>
    <div id="three"></div>
  </div>
</template>