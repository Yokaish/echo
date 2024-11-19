import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: "/echo",
  server: {
    port: 3000, // Substitua pelo número da porta desejada
  },
})
