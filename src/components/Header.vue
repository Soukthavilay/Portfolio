<template>
  <header
    ref="header"
    class="fixed top-0 left-0 right-0 z-[90] transition-all duration-500"
    :class="scrolled ? 'py-3 bg-ink/80 backdrop-blur-md border-b border-gold/20' : 'py-6 bg-transparent'"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <a href="#hero" class="flex items-center gap-3 group">
        <span class="w-8 h-8 grid place-items-center border border-gold/60 rotate-45 transition-all group-hover:bg-blood group-hover:border-blood">
          <span class="-rotate-45 font-display font-bold text-gold group-hover:text-bone">S</span>
        </span>
        <span class="hidden md:inline font-display tracking-[.3em] text-sm text-bone">SOUKTHAVILAY</span>
      </a>

      <nav class="hidden md:block">
        <ul class="flex space-x-10 text-[11px] tracking-[.35em] uppercase">
          <li v-for="item in items" :key="item.id">
            <a :href="`#${item.id}`" class="relative text-bone/70 hover:text-gold transition-colors group">
              {{ item.label }}
              <span class="absolute left-0 -bottom-2 w-0 h-px bg-gold group-hover:w-full transition-all duration-500"></span>
            </a>
          </li>
        </ul>
      </nav>

      <a href="#contact" class="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-blood/60 text-bone hover:bg-blood hover:border-blood transition-all text-[11px] tracking-[.3em] uppercase">
        Let's Talk
        <span class="text-gold">→</span>
      </a>

      <button @click="open = !open" class="md:hidden text-bone" aria-label="menu">
        <span class="block w-7 h-px bg-bone mb-1.5"></span>
        <span class="block w-7 h-px bg-gold mb-1.5"></span>
        <span class="block w-7 h-px bg-blood"></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition name="fade">
      <div v-if="open" class="md:hidden bg-ink/95 backdrop-blur-md border-t border-gold/20">
        <ul class="flex flex-col p-6 space-y-4 text-sm tracking-[.3em] uppercase">
          <li v-for="item in items" :key="item.id">
            <a :href="`#${item.id}`" @click="open = false" class="text-bone/80 hover:text-gold">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  setup() {
    const header = ref<HTMLElement | null>(null);
    const scrolled = ref(false);
    const open = ref(false);
    const items = [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'framework', label: 'Stack' },
      { id: 'projects', label: 'Work' },
      { id: 'contact', label: 'Contact' },
    ];

    const onScroll = () => { scrolled.value = window.scrollY > 60; };
    onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); });
    onUnmounted(() => window.removeEventListener('scroll', onScroll));

    return { header, scrolled, open, items };
  },
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
