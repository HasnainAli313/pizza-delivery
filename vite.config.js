import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This will allow network access
    port: 3000, // You can specify a port if needed
  },
  base:"/pizza-delivery"
})
