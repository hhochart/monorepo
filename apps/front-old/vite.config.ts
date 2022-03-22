import { fileURLToPath, URL } from 'url'
import viteSSR from 'vite-ssr/plugin'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteSSR(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    watch: {
      include: ['**/node_modules/@mdm/**']
    }
  }
})
