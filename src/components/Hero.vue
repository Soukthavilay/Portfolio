<template>
    <section class="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-8 relative overflow-hidden">
      <!-- Background Animation -->
      <div class="absolute inset-0 z-0 bg-animation"></div>
  
      <div class="md:w-1/2 flex justify-center items-center z-10">
        <img src="../assets/726D0F07-5469-40CB-8DCF-730F2FEC0739.jpg" alt="Boupaphan Soukthavilay" class="w-64 h-64 rounded-full mx-auto md:mx-0 shadow-lg" />
      </div>
      <div class="md:w-1/2 text-white z-10">
        <h2 class="text-5xl font-bold mb-4">Hello, I'm Boupaphan Soukthavilay</h2>
        <p class="text-xl mb-8">I am a passionate Software Developer with expertise in web and game development. I enjoy solving complex problems and bringing ideas to life through code. Currently working at FREEMIND company.</p>
        <a href="#projects" class="px-8 py-4 bg-secondary text-primary rounded-md hover:bg-gray-300">
          View My Projects
        </a>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({});
  </script>
  
  <style scoped>
  /* Background Animation */
  .bg-animation {
    background: linear-gradient(130deg, rgba(136, 37, 37, 0.1), rgba(215, 26, 26, 0.1));
    position: absolute;
    width: 200%;
    height: 200%;
    animation: animateBG 10s infinite linear;
  }
  
  @keyframes animateBG {
    0% {
      transform: translateX(0) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(-50%);
    }
    100% {
      transform: translateX(0) translateY(0);
    }
  }
  </style>
  