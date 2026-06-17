<template>
  <section id="about" ref="root" class="relative py-32 md:py-48 overflow-hidden bg-onyx">
    <!-- Background quote -->
    <div ref="bgQuote" class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span class="font-display text-[18vw] leading-none text-bone/[.03] whitespace-nowrap">ABOUT</span>
    </div>

    <div class="container mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-10">
      <!-- Eyebrow column -->
      <div class="md:col-span-3">
        <div ref="eyebrow" class="sticky top-32">
          <div class="eyebrow mb-4">Scene · 02</div>
          <div class="font-display text-bone text-3xl leading-tight">The<br /><span class="text-blood">Origin</span><br /><span class="text-gold italic">Story</span></div>
          <div class="hairline mt-6 w-24"></div>
        </div>
      </div>

      <!-- Content -->
      <div class="md:col-span-9 space-y-12">
        <p ref="para" class="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-bone">
          <span class="text-bone/30">Full-stack engineer building </span><span class="text-gold">Datacom Laos ERP</span><span class="text-bone/30"> — and a Master's-thesis researcher predicting </span><span class="text-blood">student dropout</span><span class="text-bone/30"> with </span><span class="text-gold italic">LightGBM</span><span class="text-bone/30">. I automate my own pipeline with AI agents.</span>
        </p>

        <!-- Quote -->
        <div ref="quote" class="border-l-2 border-blood pl-6 py-2 max-w-2xl">
          <p class="font-display italic text-bone/80 text-xl">"Code is poetry the machine reads aloud."</p>
          <div class="mt-3 text-[10px] tracking-[.4em] uppercase text-gold/80">— Director's Note</div>
        </div>

        <!-- Credit cards: timeline -->
        <div class="grid sm:grid-cols-3 gap-6">
          <div
            v-for="(c, i) in credits"
            :key="c.year"
            ref="cards"
            class="group relative border border-gold/20 p-6 bg-coal/40 backdrop-blur hover:border-blood transition-colors"
          >
            <div class="font-mono text-[10px] tracking-[.3em] text-gold/70 mb-2">REEL · 0{{ i + 1 }}</div>
            <div class="font-display text-4xl text-bone group-hover:text-blood transition-colors">{{ c.year }}</div>
            <div class="mt-4 text-sm text-bone/70 leading-relaxed">{{ c.text }}</div>
            <div class="absolute top-4 right-4 w-2 h-2 bg-blood rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
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
    const eyebrow = ref<HTMLElement | null>(null);
    const para = ref<HTMLElement | null>(null);
    const quote = ref<HTMLElement | null>(null);
    const cards = ref<HTMLElement[]>([]);
    const bgQuote = ref<HTMLElement | null>(null);
    const credits = [
      { year: '2019', text: 'Enrolled at Da Nang University of Science & Technology — Information Technology.' },
      { year: '2022', text: 'FREEMIND internship — Hugo, jQuery, JS. Shipped freemind.vn.' },
      { year: '2023', text: 'Junior dev at FREEMIND. Svelte map project, then VinFast rollout across VN · DE · NL · FR on Salesforce.' },
      { year: '2024', text: 'Joined Datacom Laos ERP — building CRM, Quotation & Sales modules on Laravel 11 + React + Docker.' },
      { year: '2025', text: 'Master\'s research — Student-Dropout Prediction with LightGBM, Optuna, SHAP.' },
      { year: '2026', text: 'Shipping Datacom ERP. Built MR-Review AI + Coordinator Agent to multiply my output.' },
    ];

    onMounted(() => {
      // Phrase reveal of the big paragraph
      if (para.value) {
        const phrases = para.value.querySelectorAll('span');
        gsap.from(phrases, {
          opacity: 0,
          y: 30,
          duration: .9,
          stagger: .12,
          ease: 'power3.out',
          scrollTrigger: { trigger: para.value, start: 'top 80%' },
        });
      }

      gsap.from(eyebrow.value, {
        x: -40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: root.value, start: 'top 70%' },
      });

      gsap.from(quote.value, {
        x: 40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: quote.value, start: 'top 80%' },
      });

      gsap.from(cards.value, {
        y: 80, opacity: 0, duration: 1, stagger: .15, ease: 'expo.out',
        scrollTrigger: { trigger: cards.value[0], start: 'top 85%' },
      });

      // Parallax bg word
      gsap.to(bgQuote.value, {
        xPercent: -10,
        scrollTrigger: { trigger: root.value, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });

      ScrollTrigger.create({
        trigger: root.value, start: 'top center', end: 'bottom center',
        onToggle: (s) => s.isActive && emit('scene', '02'),
      });
    });

    return { root, eyebrow, para, quote, cards, bgQuote, credits };
  },
});
</script>
