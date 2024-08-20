<template>
  <div class="bg-primary text-secondary">
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Project.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  components: {
    Header,
    Hero,
    About,
    Skills,
    Projects,
    Contact,
    Footer
  }
});
</script>

<style scoped>
/* Global styles if needed */
</style>
