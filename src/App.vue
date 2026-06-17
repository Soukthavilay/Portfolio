<template>
  <div class="bg-ink text-bone relative">
    <!-- Page loader (cinematic curtain) -->
    <div ref="loader" class="fixed inset-0 z-[120] bg-ink flex items-center justify-center pointer-events-none">
      <div class="text-center">
        <div class="eyebrow mb-4">A Cinematic Portfolio</div>
        <div ref="loaderTitle" class="font-display text-4xl md:text-6xl text-bone tracking-widest">
          <span class="text-blood">S</span>OUKTHAVILAY
        </div>
        <div ref="loaderBar" class="mx-auto mt-8 h-[2px] w-0 bg-gradient-to-r from-blood via-gold to-blood"></div>
      </div>
    </div>

    <!-- Custom cursor -->
    <div ref="cursor" class="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold pointer-events-none z-[110] mix-blend-difference hidden md:block" style="transform: translate(-50%, -50%);"></div>
    <div ref="cursorDot" class="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-blood pointer-events-none z-[110] hidden md:block" style="transform: translate(-50%, -50%);"></div>

    <!-- Scroll progress bar -->
    <div class="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-transparent">
      <div ref="progress" class="h-full bg-gradient-to-r from-blood via-gold to-blood origin-left scale-x-0"></div>
    </div>

    <!-- Side rail -->
    <div class="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-6 text-[10px] tracking-[.4em] text-bone/40">
      <div class="rotate-180" style="writing-mode: vertical-rl;">SCROLL · CINEMA · 2026</div>
      <div class="w-px h-24 bg-gradient-to-b from-gold to-transparent"></div>
    </div>
    <div class="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-6 text-[10px] tracking-[.4em] text-gold/50">
      <div class="w-px h-24 bg-gradient-to-t from-gold to-transparent"></div>
      <div style="writing-mode: vertical-rl;">SCENE · {{ currentScene }}</div>
    </div>

    <Header />
    <main>
      <Hero @scene="setScene" />
      <About @scene="setScene" />
      <Skills @scene="setScene" />
      <Frameworks @scene="setScene" />
      <Projects @scene="setScene" />
      <Contact @scene="setScene" />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Project.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Frameworks from './components/Framework.vue';

export default defineComponent({
  components: { Header, Hero, About, Skills, Frameworks, Projects, Contact, Footer },
  setup() {
    const loader = ref<HTMLElement | null>(null);
    const loaderTitle = ref<HTMLElement | null>(null);
    const loaderBar = ref<HTMLElement | null>(null);
    const cursor = ref<HTMLElement | null>(null);
    const cursorDot = ref<HTMLElement | null>(null);
    const progress = ref<HTMLElement | null>(null);
    const currentScene = ref('01');

    const setScene = (n: string) => (currentScene.value = n);

    onMounted(() => {
      // Lock scroll during loader
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      const releaseScroll = () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        ScrollTrigger.refresh();
        window.dispatchEvent(new CustomEvent('loader:done'));
      };

      // Fallback in case the timeline is interrupted (HMR / browser tab throttling)
      const safetyTimeout = window.setTimeout(() => {
        if (loader.value) {
          loader.value.style.display = 'none';
        }
        releaseScroll();
      }, 4000);

      // Loader curtain
      const tl = gsap.timeline({
        onComplete: () => {
          window.clearTimeout(safetyTimeout);
          releaseScroll();
        },
      });
      tl.from(loaderTitle.value, { y: 30, opacity: 0, duration: .7, ease: 'power3.out' })
        .to(loaderBar.value, { width: '220px', duration: .8, ease: 'power3.inOut' }, '-=.35')
        .to(loader.value, { yPercent: -100, duration: .9, ease: 'expo.inOut' }, '+=.15')
        .set(loader.value, { display: 'none' });

      // Cursor follow
      let mx = 0, my = 0, cx = 0, cy = 0;
      window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
      gsap.ticker.add(() => {
        cx += (mx - cx) * 0.18;
        cy += (my - cy) * 0.18;
        if (cursor.value) cursor.value.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
        if (cursorDot.value) cursorDot.value.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      });
      // Cursor hover state
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', () => gsap.to(cursor.value, { scale: 2.2, borderColor: '#c8102e', duration: .3 }));
        el.addEventListener('mouseleave', () => gsap.to(cursor.value, { scale: 1, borderColor: '#d4af37', duration: .3 }));
      });

      // Progress bar
      ScrollTrigger.create({
        start: 0,
        end: () => document.documentElement.scrollHeight - window.innerHeight,
        onUpdate: (self) => {
          if (progress.value) progress.value.style.transform = `scaleX(${self.progress})`;
        },
      });

      // Smooth-scroll feel using gsap.ticker + lerp on body? we keep native, just refresh
      ScrollTrigger.refresh();
    });

    return { loader, loaderTitle, loaderBar, cursor, cursorDot, progress, currentScene, setScene };
  },
});
</script>

<style scoped>
main { position: relative; }
</style>
