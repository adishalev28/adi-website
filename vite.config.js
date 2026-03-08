import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Service pages
        'dikur-sini': resolve(__dirname, 'dikur-sini/index.html'),
        'shiatsu': resolve(__dirname, 'shiatsu/index.html'),
        'cupping': resolve(__dirname, 'cupping/index.html'),
        'herbs': resolve(__dirname, 'herbs/index.html'),
        // Blog
        'blog': resolve(__dirname, 'blog/index.html'),
        'blog-what-is-acupuncture': resolve(__dirname, 'blog/what-is-acupuncture/index.html'),
        'blog-back-pain': resolve(__dirname, 'blog/back-pain/index.html'),
        'blog-faq-complete': resolve(__dirname, 'blog/faq-complete/index.html'),
        '404': resolve(__dirname, '404.html'),
      },
    },
  },
})
