import { defineConfig } from 'vite'

// Frontend estático (HTML/CSS/JS puro + Phaser via import de node_modules).
// O Vite atua apenas como dev server com proxy para a API Laravel.
export default defineConfig({
  root: './',
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/sanctum': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})
