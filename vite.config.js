import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/utube-clone/', // 👉 Your repo name here
  plugins: [react()],
})
