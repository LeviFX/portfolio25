<script setup lang="js">

// TODO: Only import nescessary
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { onMounted } from 'vue';

let scene, camera, renderer, loader, ambientLight, container;
let target = new THREE.Vector3();
let mouse = new THREE.Vector2();
let group = new THREE.Group();

const interpolationSpeed = .03 // Higher = overall faster turn speed
const negativeMultiplier = 3 // Higher = faster left turn speed

// Initial loading
const init = () => {
    container = document.getElementById('three');
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Create Scene
    scene = new THREE.Scene();

    // Add group
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

    // Tone character a bit to the right
    group.position.set(0.15, 0, 0)

    // Handle window resize
    window.addEventListener('resize', onResize);

    // Handle mouse movement
    window.addEventListener('mousemove', onMouseMove);
};

// Update camera on resize
const onResize = () => {
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
};

// Interpolate mouse coordinates on move
const onMouseMove = (event) => {
    const container = document.getElementById('three');
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    // Make negative number larger to compensate for cursor position
    if (mouse.x < 0) {
        mouse.x *= negativeMultiplier;
    }
}

// Rerender frames
const animate = () => {
    requestAnimationFrame(animate);

    // Interpolate target goal based on mouse position
    target.x += (mouse.x - target.x) * interpolationSpeed * 1.2; // Horizontal movement
    target.y += (mouse.y - target.y) * interpolationSpeed; // Vertical movement
    target.z = camera.position.z;

    group.lookAt(target);

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