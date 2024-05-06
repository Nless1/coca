import { defineConfig } from 'vite'

export default defineConfig({
  root: './src',
  server: {
    port: 228,
    open: true,
  },
  build: {
    outDir: "../dist",
  }
})