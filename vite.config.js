import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use base: './' so the build works on GitHub Pages, Netlify, Vercel, or any static host.
export default defineConfig({
  plugins: [react()],
  base: './',
})
