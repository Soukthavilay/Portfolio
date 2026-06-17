import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages serves at https://soukthavilay.github.io/Portfolio/
// so all built assets need the /Portfolio/ prefix.
export default defineConfig({
  base: '/Portfolio/',
  plugins: [vue()],
})
