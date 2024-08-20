<template>
    <section id="skills" class="py-16 bg-gray-800">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center text-secondary mb-8">Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="skill in skills" :key="skill" class="text-center">
            <p class="text-xl">{{ skill }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        skills: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Node.js', 'C++', 'Unity', 'SQLServer']
      };
    }
  });
  </script>
  
  <style scoped>
  /* Custom styles for Skills Section */
  </style>
  