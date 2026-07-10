import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// host/port pinned so the preview panel can connect (Vite does not read PORT by default)
export default defineConfig(({ command }) => ({
  // Served from a subpath on GitHub Pages in production, root in dev
  base: command === 'build' ? '/romanovich-prod/' : '/',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: Number(process.env.PORT) || 5173,
    // allow tunnel/LAN hostnames (e.g. *.loca.lt, *.trycloudflare.com) in dev
    allowedHosts: true,
  },
}))
