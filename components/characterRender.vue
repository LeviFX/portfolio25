<script setup lang="js">

// TODO: Only import nescessary
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { onMounted } from 'vue';

let scene, camera, renderer, loader, ambientLight, container;
let target = new THREE.Vector3();
let mouse = new THREE.Vector2();
let group = new THREE.Group();
let touchStartX = 0;
let touchStartY = 0;
let touchLastX = 0;
let swipeVelocity = 0;

const interpolationSpeed = .03 // Higher = overall faster turn speed
const negativeMultiplier = 3 // Higher = faster left turn speed

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

    // Add group, lookAt() somehow only works when the model is in a group
    scene.add(group);

    // Create Camera
    camera = new THREE.PerspectiveCamera(52, width / height, 0.01, 10);
    camera.position.set(0, 2, 2);

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
        group.position.set(0.15, 0, 0)
        camera.position.set(0, 2, 2);
    } else {
        // Mobile visual setting
        group.position.set(0, 0, 0)
        camera.position.set(0, 2, 3.5);
    }

    // Handle window resize
    window.addEventListener('resize', onResize);

    // Handle mouse movement
    window.addEventListener('mousemove', onMouseMove);

    // Handle mobile touch
    container.addEventListener('touchstart', onTouchStart, { passive: false });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
};

// Update camera on resize
const onResize = () => {
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    if (!isMobile()) {
        // Desktop visual setting
        group.position.set(0.15, 0, 0)
        camera.position.set(0, 2, 2);
    } else {
        // Mobile visual setting
        group.position.set(0, 0, 0)
        camera.position.set(0, 2, 3.5);
    }

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
};

// Interpolate mouse coordinates on move
const onMouseMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    // Make negative number larger to compensate for cursor position
    if (mouse.x < 0) {
        mouse.x *= negativeMultiplier;
    }
}

const onTouchStart = (event) => {
    if (event.touches.length === 1) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        touchLastX = event.touches[0].clientX;
    }
}

const onTouchMove = (event) => {
    if (event.touches.length === 1) {
        const touchX = event.touches[0].clientX;

        // Calculate swipe velocity based on the difference in touch positions
        swipeVelocity = (touchX - touchLastX) * 0.006; // Adjust multiplier for sensitivity
        touchLastX = touchX;

        event.preventDefault();
    }
}

// Rerender frames
const animate = () => {
    requestAnimationFrame(animate);

    // Interpolate target goal based on mouse position
    target.x += (mouse.x - target.x) * interpolationSpeed * 1.2; // Horizontal movement
    target.y += (mouse.y - target.y) * interpolationSpeed; // Vertical movement
    target.z = camera.position.z;

    if (!isMobile()) {
        // Desktop, respond to mouse movement
        group.lookAt(target);
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
    init();
    animate();
});

</script>

<template>
  <div>
    <div id="three"></div>
  </div>
</template>