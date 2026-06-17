<template>
  <section id="projects" ref="root" class="relative bg-ink overflow-hidden">
    <!-- Intro panel -->
    <div ref="intro" class="relative py-32 md:py-48">
      <div class="container mx-auto px-6 grid md:grid-cols-12 gap-10 items-end">
        <div class="md:col-span-7">
          <div class="eyebrow mb-4">Scene · 05 — Featured Reel</div>
          <h2 class="font-display font-black text-6xl md:text-[8rem] leading-[.85] text-bone">
            <span ref="t1" class="block">Selected</span>
            <span ref="t2" class="block italic text-blood text-glow-red">Works.</span>
          </h2>
        </div>
        <div class="md:col-span-5">
          <p ref="lede" class="text-bone/70 text-lg max-w-md md:ml-auto">
            Six chapters. Each one shipped, each one a different problem.
            <span class="text-gold">Scroll horizontally</span> through the reel.
          </p>
        </div>
      </div>
    </div>

    <!-- Pinned horizontal reel (desktop) -->
    <div ref="pinWrap" class="relative hidden md:block">
      <div ref="track" class="flex" style="will-change: transform;">
        <!-- spacer -->
        <div class="flex-none w-[10vw]"></div>

        <article
          v-for="(p, i) in projects"
          :key="p.title"
          class="flex-none w-[80vw] md:w-[60vw] lg:w-[50vw] h-screen pr-10 md:pr-20 flex items-center"
          data-cursor
        >
          <a :href="p.link" target="_blank" class="group relative block w-full h-[78vh] overflow-hidden border border-gold/20 bg-coal/40">
            <!-- Number plate -->
            <div class="absolute top-6 left-6 z-20 flex items-center gap-3">
              <span class="font-mono text-[10px] tracking-[.3em] text-gold/80">CHAPTER</span>
              <span class="font-display text-2xl text-blood">0{{ i + 1 }}</span>
            </div>
            <div class="absolute top-6 right-6 z-20 text-[10px] tracking-[.3em] uppercase text-bone/60">{{ p.tag }}</div>

            <!-- Visual: gradient + initials artwork -->
            <div class="absolute inset-0" :style="{ background: p.bg }"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"></div>
            <div class="absolute inset-0 grain"></div>

            <!-- Initials art -->
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="font-display font-black text-[22vw] md:text-[14vw] leading-none text-bone/10 group-hover:text-bone/20 transition-all duration-700">
                {{ initials(p.title) }}
              </span>
            </div>

            <!-- Bottom content -->
            <div class="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-10">
              <div class="hairline mb-6 w-16"></div>
              <h3 class="font-display text-3xl md:text-5xl text-bone leading-tight">{{ p.title }}</h3>
              <p class="mt-4 text-bone/70 max-w-md leading-relaxed">{{ p.description }}</p>
              <div class="mt-6 inline-flex items-center gap-3 text-gold border-b border-gold/40 pb-1 group-hover:text-blood group-hover:border-blood transition-colors">
                <span class="text-[11px] tracking-[.3em] uppercase">View on GitHub</span>
                <span>→</span>
              </div>
            </div>

            <!-- Hover red curtain -->
            <div class="absolute inset-0 bg-blood translate-y-full group-hover:translate-y-[90%] transition-transform duration-700 z-0"></div>
          </a>
        </article>

        <!-- End card -->
        <div class="flex-none w-[80vw] md:w-[50vw] h-screen pr-10 md:pr-20 flex items-center">
          <div class="relative w-full h-[78vh] border border-gold/30 flex flex-col items-center justify-center text-center p-10">
            <div class="font-mono text-[10px] tracking-[.4em] text-gold mb-4">— END OF REEL —</div>
            <div class="font-display text-5xl md:text-7xl text-bone leading-tight">
              <span class="block">Have a story</span>
              <span class="block italic text-blood">worth telling?</span>
            </div>
            <a href="#contact" class="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gold text-ink hover:bg-blood hover:text-bone transition-colors">
              <span class="text-[11px] tracking-[.3em] uppercase">Start a Conversation</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div class="flex-none w-[10vw]"></div>
      </div>

      <!-- Counter HUD -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 font-mono text-xs text-bone/60">
        <span class="text-blood text-lg" ref="counter">01</span>
        <span class="w-24 h-px bg-gold/40 relative overflow-hidden">
          <span ref="bar" class="absolute inset-y-0 left-0 w-0 bg-blood"></span>
        </span>
        <span>0{{ projects.length + 1 }}</span>
      </div>
    </div>

    <!-- Mobile vertical reel -->
    <div class="md:hidden px-6 pb-24 space-y-8">
      <article
        v-for="(p, i) in projects"
        :key="'m-' + p.title"
        ref="mobileCards"
      >
        <a :href="p.link" target="_blank" class="group relative block w-full aspect-[4/5] overflow-hidden border border-gold/20 bg-coal/40">
          <div class="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span class="font-mono text-[9px] tracking-[.3em] text-gold/80">CHAPTER</span>
            <span class="font-display text-xl text-blood">0{{ i + 1 }}</span>
          </div>
          <div class="absolute top-4 right-4 z-20 text-[9px] tracking-[.3em] uppercase text-bone/60">{{ p.tag }}</div>

          <div class="absolute inset-0" :style="{ background: p.bg }"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"></div>

          <div class="absolute inset-0 flex items-center justify-center">
            <span class="font-display font-black text-[28vw] leading-none text-bone/10">{{ initials(p.title) }}</span>
          </div>

          <div class="absolute bottom-0 left-0 right-0 p-5 z-10">
            <div class="hairline mb-3 w-10"></div>
            <h3 class="font-display text-2xl text-bone leading-tight">{{ p.title }}</h3>
            <p class="mt-2 text-bone/70 text-sm leading-relaxed">{{ p.description }}</p>
            <div class="mt-4 inline-flex items-center gap-2 text-gold border-b border-gold/40 pb-1 text-[10px] tracking-[.3em] uppercase">
              View on GitHub <span>→</span>
            </div>
          </div>
        </a>
      </article>

      <!-- Mobile end card -->
      <div class="relative w-full aspect-[4/5] border border-gold/30 flex flex-col items-center justify-center text-center p-6">
        <div class="font-mono text-[9px] tracking-[.4em] text-gold mb-3">— END OF REEL —</div>
        <div class="font-display text-3xl text-bone leading-tight">
          <span class="block">Have a story</span>
          <span class="block italic text-blood">worth telling?</span>
        </div>
        <a href="#contact" class="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-gold text-ink">
          <span class="text-[10px] tracking-[.3em] uppercase">Start a Conversation</span>
          <span>→</span>
        </a>
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
    const intro = ref<HTMLElement | null>(null);
    const pinWrap = ref<HTMLElement | null>(null);
    const track = ref<HTMLElement | null>(null);
    const t1 = ref<HTMLElement | null>(null);
    const t2 = ref<HTMLElement | null>(null);
    const lede = ref<HTMLElement | null>(null);
    const counter = ref<HTMLElement | null>(null);
    const bar = ref<HTMLElement | null>(null);

    const projects = [
      {
        title: 'Datacom Laos ERP',
        tag: 'Laravel 11 · React · 2024–26',
        description: 'Enterprise ERP for Datacom Laos — CRM, Quotation, Sale Order, Purchase, Inventory, Invoice, Customer Portal. Laravel 11 monorepo behind Laradock Docker, React frontend, GitLab CI.',
        link: 'https://github.com/Soukthavilay',
        bg: 'linear-gradient(135deg, #050505 0%, #7a0a18 100%)',
      },
      {
        title: 'MR Review Assistant',
        tag: 'Gemini · Docker · 2026',
        description: 'A Dockerised Node service that polls GitLab MRs every 5 min and pre-reviews them with Gemini 2.5 — encodes my team conventions, flags bugs, human-gated post. Caught the CUSTOMER_TYPE bug in MR !469.',
        link: 'https://github.com/Soukthavilay',
        bg: 'linear-gradient(135deg, #0b0b0b 0%, #d4af37 220%)',
      },
      {
        title: 'Coordinator Agent',
        tag: 'Next.js 15 · Claude SDK · 2026',
        description: 'Local orchestrator that runs three Claude Code agents (Coordinator, Frontend, Backend) over a filesystem message bus — SQLite, SSE, chokidar. One chat → parallel work across two ERP repos.',
        link: 'https://github.com/Soukthavilay',
        bg: 'linear-gradient(135deg, #111111 0%, #c8102e 180%)',
      },
      {
        title: 'Student-Dropout Prediction',
        tag: 'LightGBM · Master Thesis',
        description: 'Master\'s-thesis ML pipeline on 7 523 student records (13.2 % dropout). EDA → feature engineering → Optuna-tuned LightGBM. Latin-1 Vietnamese rating decoding.',
        link: 'https://github.com/Soukthavilay',
        bg: 'linear-gradient(135deg, #050505 0%, #d4af37 200%)',
      },
      {
        title: 'VinFast EU & VN',
        tag: 'Salesforce · Multi-market · 2023',
        description: 'Front-end engineer on the VinFast brand site for VN, DE, NL and FR markets at FREEMIND — Salesforce-backed, multi-locale, production traffic. Live at vinfast.vn & vinfastauto.eu.',
        link: 'https://vinfastauto.eu/en',
        bg: 'linear-gradient(135deg, #050505 0%, #c8102e 180%)',
      },
      {
        title: 'freemind.vn + Svelte Map',
        tag: 'Hugo · Svelte · 2022–23',
        description: 'Shipped the FREEMIND company website with Hugo + jQuery during my internship, then a Svelte-based interactive map project after promotion to junior developer.',
        link: 'https://freemind.vn/',
        bg: 'linear-gradient(135deg, #1a1a1a 0%, #d4af37 200%)',
      },
      {
        title: 'PetShop & Fashion Commerce',
        tag: 'MERN · PayPal · 2022–24',
        description: 'University capstone scaled up — PetShop (MERN), Fashion Store, Technology Store. Admin + storefront + PayPal checkout. Also a Clothing App API on Node + Firebase.',
        link: 'https://github.com/Soukthavilay/MERN-PetShop.git',
        bg: 'linear-gradient(135deg, #1a1a1a 0%, #7a0a18 100%)',
      },
      {
        title: 'Pharmacy Manager · USB Detect',
        tag: 'C# · Academic · 2020–22',
        description: 'Early academic work: a Pharmacy back-office (C# + SQL Server) and a browser-driven USB device detector — bridging hardware and the web.',
        link: 'https://github.com/Soukthavilay/PBL_Pharmacy_System_Manager.git',
        bg: 'linear-gradient(135deg, #0b0b0b 0%, #c8102e 180%)',
      },
    ];

    const initials = (s: string) => s.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();

    onMounted(() => {
      // Title in
      gsap.from([t1.value, t2.value], {
        y: 80, opacity: 0, duration: 1, stagger: .15, ease: 'expo.out',
        scrollTrigger: { trigger: intro.value, start: 'top 70%' },
      });
      gsap.from(lede.value, {
        y: 30, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: lede.value, start: 'top 80%' },
      });

      const setupDesktopPin = () => {
        if (!track.value || !pinWrap.value) return;
        const t = track.value;
        const w = t.scrollWidth - window.innerWidth;
        gsap.to(t, {
          x: -w,
          ease: 'none',
          scrollTrigger: {
            trigger: pinWrap.value,
            start: 'top top',
            end: () => `+=${w}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(projects.length, Math.floor(self.progress * (projects.length + 1)) + 1);
              if (counter.value) counter.value.textContent = '0' + idx;
              if (bar.value) bar.value.style.width = `${self.progress * 100}%`;
            },
            onToggle: (s) => s.isActive && emit('scene', '05'),
          },
        });
      };

      const mql = window.matchMedia('(min-width: 768px)');
      if (mql.matches) setupDesktopPin();

      // Mobile cards reveal
      const cards = document.querySelectorAll('#projects .md\\:hidden > article');
      if (cards.length) {
        cards.forEach((c) => {
          gsap.from(c, {
            opacity: 0, y: 60, duration: 1, ease: 'expo.out',
            scrollTrigger: { trigger: c, start: 'top 85%' },
          });
        });
        ScrollTrigger.create({
          trigger: root.value, start: 'top center', end: 'bottom center',
          onToggle: (s) => s.isActive && emit('scene', '05'),
        });
      }

      window.addEventListener('resize', () => ScrollTrigger.refresh());
    });

    return { root, intro, pinWrap, track, t1, t2, lede, counter, bar, projects, initials };
  },
});
</script>
