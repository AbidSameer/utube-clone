import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/utube-clone/',  // 👉 repo name ikkad petta
  plugins: [react()]
})
