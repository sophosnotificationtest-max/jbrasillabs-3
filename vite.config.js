import { defineConfig } from 'vite'

export default defineConfig({
  root: 'client', // pasta onde está o index.html
  build: {
    outDir: '../dist/client' // saída do build
  }
})
