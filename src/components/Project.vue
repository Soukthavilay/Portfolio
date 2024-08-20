<template>
    <section id="projects" class="py-16">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-8">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title" class="bg-gray-900 p-6 rounded-lg">
            <h3 class="text-2xl font-bold mb-4">{{ project.title }}</h3>
            <p class="mb-4">{{ project.description }}</p>
            <a :href="project.link" class="text-secondary underline">View Project</a>
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
        projects: [
          { title: 'PetShop Web E-Commerce', description: 'eCommerce website with client and admin actors.', link: 'https://github.com/Soukthavilay/MERN-PetShop.git' },
          { title: 'Clothing App', description: 'An app for easy ordering from a store.', link: 'https://github.com/Soukthavilay/API_ClotingApp.git' },
          { title: 'USB Web Detect', description: 'Detect USB devices plugged into a computer.', link: 'https://github.com/Soukthavilay/PBL4_USB_Web_Detect.git' },
          { title: 'Pharmacy System Manager', description: 'An application to manage a pharmacy system.', link: 'https://github.com/Soukthavilay/PBL_Pharmacy_System_Manager.git' }
        ]
      };
    }
  });
  </script>
  
  <style scoped>
  /* Custom styles for Projects Section */
  </style>
  