<template>
    <section id="framework" class="py-16 bg-gray-900 text-white">
      <h2 class="text-4xl font-bold text-center mb-12">Frameworks</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="framework in frameworks" :key="framework.name" class="flex flex-col items-center">
          <img :src="framework.logo" :alt="framework.name" class="w-20 h-20 mb-4">
          <h3 class="text-xl font-semibold">{{ framework.name }}</h3>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        frameworks: [
          { name: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
          { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
          { name: 'Angular', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' },
          { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
          { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
          { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  /* Custom styles for Frameworks component */
  section {
    background-color: #1a1a1a;
  }
  
  img {
    filter: grayscale(100%);
    transition: filter 0.3s;
  }
  
  img:hover {
    filter: none;
  }
  </style>
  