<template>
  <section
    id="hero"
    ref="root"
    class="relative min-h-[100svh] w-full overflow-hidden grain vignette flex flex-col justify-start pt-28 md:pt-32 lg:pt-36 pb-24 md:pb-24"
  >
    <!-- Parallax backdrop layers -->
    <div ref="bg" class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-ink via-onyx to-coal"></div>
      <!-- Red orb -->
      <div ref="orbRed" class="absolute -top-32 -left-32 w-[42rem] h-[42rem] rounded-full bg-blood/30 blur-[140px]"></div>
      <!-- Gold orb -->
      <div ref="orbGold" class="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-gold/15 blur-[160px]"></div>
      <!-- Grid lines -->
      <div class="absolute inset-0 opacity-[.07]"
           style="background-image: linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px); background-size: 80px 80px;"></div>
    </div>

    <!-- Background mega-text (parallax) -->
    <div ref="megaText" class="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none">
      <h1 class="font-display font-black text-[34vw] md:text-[26vw] leading-none outlined whitespace-nowrap">PORTFOLIO</h1>
    </div>

    <!-- Foreground content -->
    <div class="container mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-10 md:gap-12 items-center">

      <!-- Scene marker (mobile shows above, desktop floats top-left) -->
      <div class="md:hidden eyebrow flex items-center gap-3 col-span-full">
        <span class="w-2 h-2 bg-blood rounded-full animate-pulse"></span>
        SCENE · 01 — OVERTURE
      </div>
      <div class="hidden md:flex absolute top-28 left-6 lg:left-12 z-10 eyebrow items-center gap-3">
        <span class="w-2 h-2 bg-blood rounded-full animate-pulse"></span>
        SCENE · 01 — OVERTURE
      </div>

      <!-- Portrait -->
      <div class="md:col-span-5 flex justify-center relative">
        <div ref="frame" class="relative">
          <!-- Decorative frame -->
          <div class="absolute -inset-4 md:-inset-6 border border-gold/30"></div>
          <div class="absolute -inset-2 md:-inset-3 border border-blood/40"></div>
          <div class="relative w-48 h-60 sm:w-56 sm:h-72 md:w-72 md:h-[24rem] lg:w-80 lg:h-[26rem] overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-blood/40 via-transparent to-transparent z-10 mix-blend-multiply"></div>
            <img
              ref="portrait"
              src="../assets/514401675_2480267668978471_6021294976918673459_n.jpg"
              alt="Boupaphan Soukthavilay"
              class="w-full h-full object-cover saturate-125 contrast-110"
            />
          </div>
          <!-- Corner gold ticks -->
          <span class="absolute -top-1 -left-1 md:-top-2 md:-left-2 w-3 md:w-4 h-px bg-gold"></span>
          <span class="absolute -top-1 -left-1 md:-top-2 md:-left-2 w-px h-3 md:h-4 bg-gold"></span>
          <span class="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-3 md:w-4 h-px bg-gold"></span>
          <span class="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-px h-3 md:h-4 bg-gold"></span>
          <span class="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-3 md:w-4 h-px bg-gold"></span>
          <span class="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-px h-3 md:h-4 bg-gold"></span>
          <span class="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-3 md:w-4 h-px bg-gold"></span>
          <span class="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-px h-3 md:h-4 bg-gold"></span>
          <!-- Floating badge -->
          <div ref="badge" class="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-blood text-bone px-3 md:px-4 py-1.5 md:py-2 font-mono text-[9px] md:text-[10px] tracking-[.3em]">
            EST · 2020
          </div>
        </div>
      </div>

      <!-- Headline -->
      <div class="md:col-span-7">
        <div class="hidden md:block eyebrow mb-6">FULL-STACK ENGINEER · ML RESEARCHER · LAOS</div>

        <h2 class="font-display font-black leading-[.95] md:leading-[.9] text-[2rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.75rem] xl:text-[4.5rem]">
          <span class="block"><span ref="l1">I'm </span><span ref="l2" class="text-blood text-glow-red">KOH.</span></span>
          <span class="block"><span ref="l3" class="text-bone">I ship </span><span ref="l4" class="text-gold text-glow-gold italic">production software</span></span>
          <span class="block"><span ref="l5">&amp; train ML models.</span></span>
        </h2>

        <p ref="sub" class="mt-6 md:mt-8 max-w-xl text-bone/70 text-base md:text-lg leading-relaxed">
          Đà&nbsp;Nẵng-based full-stack engineer. Shipped <span class="text-gold">VinFast</span> across VN&nbsp;·&nbsp;DE&nbsp;·&nbsp;NL&nbsp;·&nbsp;FR markets at <span class="text-blood">FREEMIND</span>, now building <span class="text-gold">Datacom Laos ERP</span> on Laravel&nbsp;11 + React + Docker, and researching <span class="text-blood">Student Dropout Prediction</span> with LightGBM + SHAP for my Master's thesis.
        </p>

        <div ref="ctaWrap" class="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4 items-center">
          <a href="#projects" class="group relative inline-flex items-center gap-3 px-5 md:px-7 py-3 md:py-4 bg-blood text-bone overflow-hidden">
            <span class="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            <span class="relative tracking-[.3em] text-[10px] md:text-[11px] uppercase">View the Reel</span>
            <span class="relative">→</span>
          </a>
          <a href="#contact" class="group inline-flex items-center gap-3 px-5 md:px-7 py-3 md:py-4 border border-gold/50 text-gold hover:bg-gold hover:text-ink transition-all">
            <span class="tracking-[.3em] text-[10px] md:text-[11px] uppercase">Hire Me</span>
          </a>
        </div>

        <!-- Stats -->
        <div ref="stats" class="mt-10 md:mt-14 grid grid-cols-3 gap-4 md:gap-6 max-w-lg">
          <div class="border-l border-gold/30 pl-3 md:pl-4">
            <div class="font-display text-2xl md:text-3xl text-gold">03<span class="text-blood">+</span></div>
            <div class="text-[9px] md:text-[10px] tracking-[.3em] text-bone/60 uppercase mt-1">Years</div>
          </div>
          <div class="border-l border-gold/30 pl-3 md:pl-4">
            <div class="font-display text-2xl md:text-3xl text-gold">30<span class="text-blood">+</span></div>
            <div class="text-[9px] md:text-[10px] tracking-[.3em] text-bone/60 uppercase mt-1">Shipped</div>
          </div>
          <div class="border-l border-gold/30 pl-3 md:pl-4">
            <div class="font-display text-2xl md:text-3xl text-gold">7K<span class="text-blood">+</span></div>
            <div class="text-[9px] md:text-[10px] tracking-[.3em] text-bone/60 uppercase mt-1">Records ML</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator (desktop only — overlaps content on mobile) -->
    <div ref="scrollHint" class="hidden md:flex absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-bone/60">
      <span class="eyebrow !text-bone/60">Scroll · the · reel</span>
      <!-- <div class="w-px h-12 bg-gradient-to-b from-gold to-transparent"></div> -->
    </div>

    <!-- Marquee bottom strip -->
    <div ref="marqueeWrap" class="absolute bottom-0 left-0 right-0 z-10 border-y border-gold/20 bg-ink/80 backdrop-blur overflow-hidden">
      <div ref="marquee" class="flex whitespace-nowrap py-2.5 md:py-3 font-display text-xs md:text-sm tracking-[.4em]">
        <template v-for="i in 2" :key="i">
          <span class="px-6 md:px-8 text-bone">VUE</span><span class="text-blood">✦</span>
          <span class="px-6 md:px-8 text-gold">REACT</span><span class="text-blood">✦</span>
          <span class="px-6 md:px-8 text-bone">UNITY</span><span class="text-blood">✦</span>
          <span class="px-6 md:px-8 text-gold">NODE</span><span class="text-blood">✦</span>
          <span class="px-6 md:px-8 text-bone">TYPESCRIPT</span><span class="text-blood">✦</span>
          <span class="px-6 md:px-8 text-gold">GSAP</span><span class="text-blood">✦</span>
          <span class="px-6 md:px-8 text-bone">SVELTE</span><span class="text-blood">✦</span>
          <span class="px-6 md:px-8 text-gold">HUGO</span><span class="text-blood">✦</span>
        </template>
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
    const bg = ref<HTMLElement | null>(null);
    const orbRed = ref<HTMLElement | null>(null);
    const orbGold = ref<HTMLElement | null>(null);
    const portrait = ref<HTMLElement | null>(null);
    const frame = ref<HTMLElement | null>(null);
    const badge = ref<HTMLElement | null>(null);
    const megaText = ref<HTMLElement | null>(null);
    const sub = ref<HTMLElement | null>(null);
    const ctaWrap = ref<HTMLElement | null>(null);
    const stats = ref<HTMLElement | null>(null);
    const scrollHint = ref<HTMLElement | null>(null);
    const marquee = ref<HTMLElement | null>(null);
    const marqueeWrap = ref<HTMLElement | null>(null);
    const l1 = ref<HTMLElement | null>(null);
    const l2 = ref<HTMLElement | null>(null);
    const l3 = ref<HTMLElement | null>(null);
    const l4 = ref<HTMLElement | null>(null);
    const l5 = ref<HTMLElement | null>(null);

    onMounted(() => {
      const headline = document.querySelector('#hero h2') as HTMLElement | null;
      const reveals = [sub.value, ctaWrap.value, stats.value, scrollHint.value, badge.value].filter(Boolean);

      let played = false;
      const playIntro = () => {
        if (played) return;
        played = true;
        gsap.from(frame.value, { autoAlpha: 0, scale: .9, duration: .9, ease: 'expo.out' });
        if (headline) gsap.from(headline, { autoAlpha: 0, y: 40, duration: .8, ease: 'expo.out', delay: .1 });
        gsap.from(reveals, { autoAlpha: 0, y: 30, duration: .6, stagger: .08, ease: 'power3.out', delay: .35 });
      };

      window.addEventListener('loader:done', playIntro, { once: true });
      // Belt-and-braces: if the loader has already finished by mount time, fire after a frame
      window.setTimeout(playIntro, 50);

      // Floating orbs
      gsap.to(orbRed.value, { x: 60, y: 40, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to(orbGold.value, { x: -50, y: -30, duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut' });

      // Marquee
      if (marquee.value) {
        const w = marquee.value.scrollWidth / 2;
        gsap.to(marquee.value, { x: -w, duration: 30, repeat: -1, ease: 'none' });
      }

      // Scroll parallax — cinema feel
      gsap.to(megaText.value, {
        yPercent: 30,
        scrollTrigger: { trigger: root.value, start: 'top top', end: 'bottom top', scrub: 1 },
      });
      gsap.to(portrait.value, {
        scale: 1.15,
        scrollTrigger: { trigger: root.value, start: 'top top', end: 'bottom top', scrub: 1 },
      });
      gsap.to(frame.value, {
        y: -80,
        scrollTrigger: { trigger: root.value, start: 'top top', end: 'bottom top', scrub: 1 },
      });
      gsap.to([orbRed.value, orbGold.value], {
        scale: 1.4,
        opacity: .3,
        scrollTrigger: { trigger: root.value, start: 'top top', end: 'bottom top', scrub: 1 },
      });

      // Scene emit
      ScrollTrigger.create({
        trigger: root.value, start: 'top center', end: 'bottom center',
        onToggle: (s) => s.isActive && emit('scene', '01'),
      });
    });

    return { root, bg, orbRed, orbGold, portrait, frame, badge, megaText, sub, ctaWrap, stats, scrollHint, marquee, marqueeWrap, l1, l2, l3, l4, l5 };
  },
});
</script>
