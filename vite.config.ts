import react from '@vitejs/plugin-react'
import { defineConfig, type UserConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      src: "/src"
    }
  },
  server:{
    cors: false
}}) satisfies UserConfig
