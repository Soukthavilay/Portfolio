<template>
  <section id="contact" ref="root" class="relative py-32 md:py-48 overflow-hidden bg-onyx">
    <!-- Background mega text -->
    <div ref="megaWord" class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span class="font-display text-[22vw] leading-none text-blood/10 whitespace-nowrap">CONTACT</span>
    </div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-blood/10 blur-[180px]"></div>

    <div class="container mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12">
      <!-- Left: pitch -->
      <div class="md:col-span-5 space-y-8">
        <div class="eyebrow">Scene · 06 — The Encore</div>
        <h2 class="font-display font-black text-5xl md:text-7xl leading-[.9]">
          <span ref="t1" class="block text-bone">Roll the</span>
          <span ref="t2" class="block text-blood italic">Credits.</span>
          <span ref="t3" class="block text-gold">Or write</span>
          <span ref="t4" class="block text-bone">a new scene.</span>
        </h2>
        <p ref="desc" class="text-bone/70 max-w-md leading-relaxed">
          ERP work, ML research, AI-agent tooling, or an ambitious side project —
          <span class="text-gold">I'd love to hear about it</span>.
        </p>

        <!-- Contact list -->
        <ul ref="list" class="space-y-4 pt-6 border-t border-gold/20">
          <li class="flex items-center justify-between group">
            <span class="font-mono text-[10px] tracking-[.3em] text-gold/70">EMAIL</span>
            <a href="mailto:vivopakselaocom@gmail.com" class="text-bone group-hover:text-blood transition-colors">vivopakselaocom@gmail.com</a>
          </li>
          <li class="flex items-center justify-between group">
            <span class="font-mono text-[10px] tracking-[.3em] text-gold/70">PHONE</span>
            <a href="tel:+84888946837" class="text-bone group-hover:text-blood transition-colors">+84 888 946 837</a>
          </li>
          <li class="flex items-center justify-between group">
            <span class="font-mono text-[10px] tracking-[.3em] text-gold/70">BASED</span>
            <span class="text-bone">Đà Nẵng · Vietnam</span>
          </li>
          <li class="flex items-center justify-between group">
            <span class="font-mono text-[10px] tracking-[.3em] text-gold/70">SPEAKS</span>
            <span class="text-bone text-right text-sm">Vietnamese · English · Thai</span>
          </li>
          <li class="flex items-center justify-between group">
            <span class="font-mono text-[10px] tracking-[.3em] text-gold/70">NOW</span>
            <span class="text-bone text-right text-sm">Datacom Laos ERP &middot; Master's thesis</span>
          </li>
          <li class="flex items-center justify-between group">
            <span class="font-mono text-[10px] tracking-[.3em] text-gold/70">STATUS</span>
            <span class="text-gold flex items-center gap-2">
              <span class="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              Open to collaborations
            </span>
          </li>
        </ul>
      </div>

      <!-- Right: form -->
      <div class="md:col-span-7">
        <form ref="form" class="space-y-6 p-8 md:p-10 border border-gold/20 bg-coal/40 backdrop-blur relative">
          <!-- Corner ticks -->
          <span class="absolute -top-px -left-px w-6 h-px bg-gold"></span>
          <span class="absolute -top-px -left-px w-px h-6 bg-gold"></span>
          <span class="absolute -bottom-px -right-px w-6 h-px bg-gold"></span>
          <span class="absolute -bottom-px -right-px w-px h-6 bg-gold"></span>

          <div class="flex items-center justify-between">
            <div class="font-mono text-[10px] tracking-[.3em] text-gold/70">TRANSMISSION</div>
            <div class="font-mono text-[10px] tracking-[.3em] text-blood blink">REC</div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <label class="block">
              <span class="text-[10px] tracking-[.3em] uppercase text-bone/50">Name</span>
              <input type="text" placeholder="Your name" class="mt-2 w-full bg-transparent border-b border-bone/20 focus:border-gold outline-none py-3 text-bone placeholder:text-bone/30 transition-colors" />
            </label>
            <label class="block">
              <span class="text-[10px] tracking-[.3em] uppercase text-bone/50">Email</span>
              <input type="email" placeholder="you@studio.com" class="mt-2 w-full bg-transparent border-b border-bone/20 focus:border-gold outline-none py-3 text-bone placeholder:text-bone/30 transition-colors" />
            </label>
          </div>

          <label class="block">
            <span class="text-[10px] tracking-[.3em] uppercase text-bone/50">Subject</span>
            <input type="text" placeholder="A short pitch" class="mt-2 w-full bg-transparent border-b border-bone/20 focus:border-gold outline-none py-3 text-bone placeholder:text-bone/30 transition-colors" />
          </label>

          <label class="block">
            <span class="text-[10px] tracking-[.3em] uppercase text-bone/50">Message</span>
            <textarea rows="5" placeholder="Tell me everything…" class="mt-2 w-full bg-transparent border-b border-bone/20 focus:border-gold outline-none py-3 text-bone placeholder:text-bone/30 resize-none transition-colors"></textarea>
          </label>

          <button
            type="submit"
            class="group relative w-full py-5 bg-blood text-bone overflow-hidden border border-blood hover:border-gold transition-colors"
          >
            <span class="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            <span class="relative tracking-[.3em] text-xs uppercase group-hover:text-ink">Send the Message</span>
          </button>
        </form>
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
    const megaWord = ref<HTMLElement | null>(null);
    const t1 = ref<HTMLElement | null>(null);
    const t2 = ref<HTMLElement | null>(null);
    const t3 = ref<HTMLElement | null>(null);
    const t4 = ref<HTMLElement | null>(null);
    const desc = ref<HTMLElement | null>(null);
    const list = ref<HTMLElement | null>(null);
    const form = ref<HTMLElement | null>(null);

    onMounted(() => {
      gsap.from([t1.value, t2.value, t3.value, t4.value], {
        y: 80, opacity: 0, duration: 1, stagger: .12, ease: 'expo.out',
        scrollTrigger: { trigger: root.value, start: 'top 70%' },
      });
      gsap.from(desc.value, {
        y: 30, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: desc.value, start: 'top 80%' },
      });
      if (list.value) {
        gsap.from(list.value.querySelectorAll('li'), {
          x: -40, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out',
          scrollTrigger: { trigger: list.value, start: 'top 85%' },
        });
      }
      gsap.from(form.value, {
        y: 60, opacity: 0, duration: 1.1, ease: 'expo.out',
        scrollTrigger: { trigger: form.value, start: 'top 80%' },
      });
      gsap.to(megaWord.value, {
        xPercent: 10,
        scrollTrigger: { trigger: root.value, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });

      ScrollTrigger.create({
        trigger: root.value, start: 'top center', end: 'bottom center',
        onToggle: (s) => s.isActive && emit('scene', '06'),
      });
    });

    return { root, megaWord, t1, t2, t3, t4, desc, list, form };
  },
});
</script>
