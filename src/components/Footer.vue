<template>
  <footer ref="footer" class="relative bg-ink border-t border-gold/20 overflow-hidden">
    <!-- Mega outro signature -->
    <div class="relative overflow-hidden">
      <div ref="signature" class="font-display font-black text-[20vw] leading-none text-bone whitespace-nowrap select-none flex w-max will-change-transform">
        <template v-for="i in 2" :key="i">
          <span class="pr-12">KOTI</span>
          <span class="pr-12 text-blood">·</span>
          <span class="pr-12 outlined">KOTI</span>
          <span class="pr-12 text-blood">·</span>
          <span class="pr-12 text-gold/70">KOTI</span>
        </template>
      </div>
    </div>

    <div class="container mx-auto px-6 py-10 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-bone/50 text-sm">&copy; {{ year }} Boupaphan Soukthavilay · Portfolio</p>
      <div class="flex items-center gap-6 text-sm">
        <a href="https://github.com/Soukthavilay" target="_blank" class="text-bone/70 hover:text-gold transition-colors flex items-center gap-2">
          <span class="w-2 h-2 bg-blood rounded-full"></span> GitHub
        </a>
        <a href="#hero" class="text-bone/70 hover:text-gold transition-colors flex items-center gap-2">
          Back to top <span class="text-gold">↑</span>
        </a>
      </div>
      <div class="font-mono text-[10px] tracking-[.3em] text-gold/60">FADE TO BLACK · {{ year }}</div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

export default defineComponent({
  setup() {
    const footer = ref<HTMLElement | null>(null);
    const signature = ref<HTMLElement | null>(null);
    const year = new Date().getFullYear();
    let context: gsap.Context | null = null;

    onMounted(() => {
      nextTick(() => {
        if (!footer.value || !signature.value) return;

        context = gsap.context(() => {
          gsap.to(signature.value, {
            xPercent: -50,
            duration: 24,
            ease: 'none',
            repeat: -1,
          });
        }, footer.value);
      });
    });

    onUnmounted(() => {
      context?.revert();
      context = null;
    });

    return { footer, signature, year };
  },
});
</script>
