import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@react-three/postprocessing'],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
    assetsDir: 'assets',
    copyPublicDir: true
  },
  publicDir: 'public'
});