<template>
    <footer class="py-4 bg-primary text-center">
      <p>&copy; {{ new Date().getFullYear() }} Boupaphan Soukthavilay</p>
      <div class="flex justify-center mt-4 space-x-4">
        <a href="https://github.com/Soukthavilay" target="_blank" class="hover:text-gray-500">
            <i class="fab fa-github text-xl"></i>
          </a>
          <!-- Add other social links as needed -->
        </div>
      </footer>
    </template>
    
    <script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
      setup() {
        return {
          year: new Date().getFullYear(),
        };
      },
    });
    </script>
    
    <style scoped>
    /* Custom styles for Footer */
    </style>
    