<template>
  <section id="framework" ref="root" class="relative py-32 md:py-48 overflow-hidden bg-onyx">
    <!-- Backdrop -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-blood/10 blur-[180px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
        <div>
          <div class="eyebrow mb-4">Scene · 04 — The Stack</div>
          <h2 class="font-display font-black text-6xl md:text-8xl leading-[.85]">
            <span ref="t1" class="block text-bone">Frameworks</span>
            <span ref="t2" class="block italic text-gold">in rotation.</span>
          </h2>
        </div>
        <div ref="meta" class="text-bone/60 text-sm tracking-[.3em] uppercase">
          <span class="text-blood">06</span> / 06 — featured
        </div>
      </div>

      <!-- 3D grid -->
      <div ref="grid" class="grid grid-cols-2 md:grid-cols-3 gap-px bg-gold/10 border border-gold/10">
        <div
          v-for="(fw, i) in frameworks"
          :key="fw.name"
          class="group relative bg-coal/60 p-10 flex flex-col items-center justify-center text-center aspect-square overflow-hidden"
          data-cursor
          ref="cards"
        >
          <!-- Hover red glow -->
          <div class="absolute inset-0 bg-gradient-to-br from-blood/0 via-blood/0 to-blood/0 group-hover:from-blood/20 group-hover:to-ember/40 transition-all duration-700"></div>
          <!-- Big index -->
          <span class="absolute top-4 left-4 font-mono text-[10px] tracking-[.3em] text-gold/40">0{{ i + 1 }}</span>
          <span class="absolute top-4 right-4 w-2 h-2 rounded-full bg-blood/0 group-hover:bg-blood transition-colors"></span>

          <img
            :src="fw.logo"
            :alt="fw.name"
            class="w-20 h-20 mb-6 relative z-10 grayscale brightness-150 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 group-hover:scale-110 object-contain"
          />
          <h3 class="font-display text-xl text-bone group-hover:text-gold transition-colors relative z-10">{{ fw.name }}</h3>
          <div class="mt-2 text-[10px] tracking-[.3em] uppercase text-bone/40 group-hover:text-bone/80 transition-colors relative z-10">{{ fw.tag }}</div>

          <!-- Corner ticks -->
          <span class="absolute top-2 left-2 w-3 h-px bg-gold/40 group-hover:bg-blood transition-colors"></span>
          <span class="absolute top-2 left-2 w-px h-3 bg-gold/40 group-hover:bg-blood transition-colors"></span>
          <span class="absolute bottom-2 right-2 w-3 h-px bg-gold/40 group-hover:bg-blood transition-colors"></span>
          <span class="absolute bottom-2 right-2 w-px h-3 bg-gold/40 group-hover:bg-blood transition-colors"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineComponent({
  emits: ['scene'],
  setup(_, { emit }) {
    const root = ref<HTMLElement | null>(null);
    const t1 = ref<HTMLElement | null>(null);
    const t2 = ref<HTMLElement | null>(null);
    const meta = ref<HTMLElement | null>(null);
    const grid = ref<HTMLElement | null>(null);
    const cards = ref<HTMLElement[]>([]);

    const frameworks = [
      { name: 'Laravel 11', tag: 'Backend · ERP', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
      { name: 'React', tag: 'Frontend · ERP', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { name: 'Next.js 15', tag: 'App Router', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
      { name: 'Docker', tag: 'Laradock · Compose', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
      { name: 'Tailwind', tag: 'Design System', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
      { name: 'TypeScript', tag: 'Strict · Typed', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
    ];

    onMounted(() => {
      gsap.from([t1.value, t2.value], {
        y: 80, opacity: 0, duration: 1, stagger: .15, ease: 'expo.out',
        scrollTrigger: { trigger: root.value, start: 'top 70%' },
      });
      gsap.from(meta.value, {
        opacity: 0, x: 30, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: meta.value, start: 'top 85%' },
      });
      gsap.from(cards.value, {
        opacity: 0, y: 60, scale: .9, duration: .9, stagger: .08, ease: 'expo.out',
        scrollTrigger: { trigger: grid.value, start: 'top 80%' },
      });

      ScrollTrigger.create({
        trigger: root.value, start: 'top center', end: 'bottom center',
        onToggle: (s) => s.isActive && emit('scene', '04'),
      });
    });

    return { root, t1, t2, meta, grid, cards, frameworks };
  },
});
</script>
