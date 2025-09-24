import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'html/**/*',
          dest: '../'
        }
      ]
    })
  ],
  base: process.env.NODE_ENV === 'production' ? '/Al회의록BO/react/' : '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist/react',
    assetsDir: 'assets'
  }
})
