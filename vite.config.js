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
      },
    },
  },
})
