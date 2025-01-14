import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      manifest:{
        icons:[
          {
            src:'vite.svg',
            size:'512x512',
            type:'image/svg',
            purpose:'any maskable'
          }
        ]
      },
      registerType: 'autoUpdate' 
    }),
  ],
})
