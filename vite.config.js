import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// host/port pinned so the preview panel can connect (Vite does not read PORT by default)
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: Number(process.env.PORT) || 5173,
  },
})
