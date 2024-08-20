<template>
    <section id="contact" class="py-16 bg-gray-800">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center text-secondary mb-8">Contact Me</h2>
        <form class="max-w-lg mx-auto">
          <input type="text" placeholder="Name" class="w-full mb-4 p-2 bg-gray-900 text-white rounded" />
          <input type="email" placeholder="Email" class="w-full mb-4 p-2 bg-gray-900 text-white rounded" />
          <textarea placeholder="Message" class="w-full mb-4 p-2 bg-gray-900 text-white rounded"></textarea>
          <button type="submit" class="w-full py-2 bg-secondary text-primary rounded">Send Message</button>
        </form>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({});
  </script>
  
  <style scoped>
  /* Custom styles for Contact Section */
  </style>
  