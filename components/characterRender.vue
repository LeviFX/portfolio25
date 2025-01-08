<script setup lang="js">

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { onMounted } from 'vue';

let scene, camera, renderer, loader, ambientLight;
let mouse = new THREE.Vector2();
let targetRotation = new THREE.Euler();
let character = null;

const init = () => {
    const container = document.getElementById('three');
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Create Scene
    scene = new THREE.Scene();

    // Create Camera
    camera = new THREE.PerspectiveCamera(56, width / height, 0.01, 10);
    camera.position.z = 2;
    camera.position.y = 2;

    // Create Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Add light
    ambientLight = new THREE.AmbientLight(0xcccccc, 1)
    scene.add(ambientLight);

    // Add character
    loader = new GLTFLoader();
    loader.load('3d/levi.glb', function(gltf) {
        character = gltf.scene;
        scene.add(character);
    }, undefined, function(error) {
        console.error(error);
    });

    // Handle window resize
    window.addEventListener('resize', onResize);

    // Handle mouse movement
    window.addEventListener('mousemove', onMouseMove);
};

const animate = () => {
    requestAnimationFrame(animate);


    if (character) {
        character.rotation.x += (targetRotation.x - character.rotation.x) * 0.1; // Smooth transition for X rotation
        character.rotation.y += (targetRotation.y - character.rotation.y) * 0.1; // Smooth transition for Y rotation
    }
    // Render Scene
    renderer.render(scene, camera);
};

const onResize = () => {
    const container = document.getElementById('three');
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
};

const onMouseMove = (event) => {
    const container = document.getElementById('three');
  const width = container.offsetWidth;
  const height = container.offsetHeight;


  // Calculate normalized device coordinates (NDC) for mouse position
  mouse.x = (event.clientX / width) * 2 - 1;
  mouse.y = -(event.clientY / height) * 2 + 1;

   // Update target rotation based on mouse position
   targetRotation.x = mouse.y * Math.PI * -0.25; // Rotate around the X-axis (up/down)
   targetRotation.y = mouse.x * Math.PI * 0.25; // Rotate around the Y-axis (left/right)
}

onMounted(() => {
    init();
    animate();
});

</script>

<template>
  <div>
    <div id="three" style="width: 50%; height: 55vh; overflow: hidden; position: absolute; bottom: 0; right: 0;"></div>
  </div>
</template>