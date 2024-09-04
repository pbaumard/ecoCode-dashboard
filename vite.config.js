import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        entryFileNames: `assets/view.js`,
        assetFileNames: `assets/view.css`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  esbuild: {
    legalComents: 'external'
  }
})
