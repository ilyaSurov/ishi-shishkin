import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Относительный base: работает при открытии index.html локально и на GitHub Pages при любом имени репо
  base: './',
  build: {
    outDir: 'docs',
  },
})
