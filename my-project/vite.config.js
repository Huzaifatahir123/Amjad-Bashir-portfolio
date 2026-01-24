import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
   server: {
    host: true, // makes it accessible via IP
    port: 5173 // optional, default is 5173
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Separates core libraries
          icons: ['lucide-react'],        // Separates icons
        },
      },
    },
  },
})
