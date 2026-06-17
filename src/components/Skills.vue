<template>
  <section id="skills" ref="root" class="relative bg-ink overflow-hidden">
    <!-- Cinematic title strip -->
    <div class="py-24 md:py-32 relative">
      <div class="container mx-auto px-6 grid md:grid-cols-12 gap-10 items-end">
        <div class="md:col-span-6">
          <div class="eyebrow mb-4">Scene · 03 — The Arsenal</div>
          <h2 class="font-display font-black text-6xl md:text-8xl leading-[.85]">
            <span class="reveal-line block"><span ref="t1" class="text-bone">Tools that</span></span>
            <span class="reveal-line block"><span ref="t2" class="text-blood text-glow-red italic">Don't</span></span>
            <span class="reveal-line block"><span ref="t3" class="text-gold">Whisper.</span></span>
          </h2>
        </div>
        <div class="md:col-span-6">
          <p ref="desc" class="text-bone/70 text-lg max-w-md md:ml-auto">
            A sharpened toolkit refined across years of late nights and shipping cycles —
            <span class="text-gold">8 disciplines</span>, one workflow.
          </p>
        </div>
      </div>
    </div>

    <!-- Skill rows: marquee-style -->
    <div ref="rows" class="relative border-y border-gold/20">
      <div
        v-for="(skill, i) in skills"
        :key="skill.name"
        class="group relative border-b last:border-b-0 border-gold/10 overflow-hidden cursor-pointer"
        data-cursor
      >
        <div class="container mx-auto px-6 py-8 md:py-10 flex items-center justify-between relative z-10">
          <div class="flex items-center gap-6">
            <span class="font-mono text-xs text-gold/60">0{{ i + 1 }} /</span>
            <span class="font-display text-4xl md:text-6xl text-bone group-hover:text-bone transition-colors">{{ skill.name }}</span>
          </div>
          <div class="flex items-center gap-6">
            <span class="hidden md:block text-[10px] tracking-[.4em] uppercase text-bone/40 group-hover:text-gold transition-colors">{{ skill.category }}</span>
            <span class="font-mono text-sm text-blood">{{ skill.level }}</span>
          </div>
        </div>
        <!-- Hover wash -->
        <div class="absolute inset-0 bg-gradient-to-r from-blood/0 via-blood/20 to-blood/0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
        <!-- Hover marquee mega-word -->
        <div class="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
          <div class="whitespace-nowrap font-display text-[10vw] leading-none text-blood/0 group-hover:text-blood/10 translate-x-10 group-hover:-translate-x-20 transition-all duration-1000">
            {{ skill.name }} · {{ skill.name }} · {{ skill.name }}
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
    const t1 = ref<HTMLElement | null>(null);
    const t2 = ref<HTMLElement | null>(null);
    const t3 = ref<HTMLElement | null>(null);
    const desc = ref<HTMLElement | null>(null);
    const rows = ref<HTMLElement | null>(null);

    const skills = [
      { name: 'TypeScript', category: 'Language', level: '95%' },
      { name: 'PHP / Laravel 11', category: 'Backend', level: '92%' },
      { name: 'React + Next.js', category: 'Frontend', level: '93%' },
      { name: 'Python + Pandas', category: 'Data / ML', level: '88%' },
      { name: 'LightGBM · Optuna', category: 'Machine Learning', level: '85%' },
      { name: 'Docker · Laradock', category: 'DevOps', level: '88%' },
      { name: 'GitLab CI · MR Review', category: 'Workflow', level: '90%' },
      { name: 'Gemini · Claude Agent SDK', category: 'AI Tooling', level: '90%' },
    ];

    onMounted(() => {
      gsap.set([t1.value, t2.value, t3.value], { yPercent: 120 });
      gsap.to([t1.value, t2.value, t3.value], {
        yPercent: 0, duration: 1.1, stagger: .12, ease: 'expo.out',
        scrollTrigger: { trigger: root.value, start: 'top 70%' },
      });

      gsap.from(desc.value, {
        y: 30, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: desc.value, start: 'top 80%' },
      });

      if (rows.value) {
        const items = rows.value.querySelectorAll(':scope > div');
        gsap.from(items, {
          x: -60, opacity: 0, duration: .8, stagger: .08, ease: 'power3.out',
          scrollTrigger: { trigger: rows.value, start: 'top 80%' },
        });
      }

      ScrollTrigger.create({
        trigger: root.value, start: 'top center', end: 'bottom center',
        onToggle: (s) => s.isActive && emit('scene', '03'),
      });
    });

    return { root, t1, t2, t3, desc, rows, skills };
  },
});
</script>
