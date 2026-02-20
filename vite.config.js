import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// read .api-port if available (written by local API server)
const apiPortFile = path.resolve(process.cwd(), '.api-port')
let apiTarget = 'http://localhost:3001'
try {
  if (fs.existsSync(apiPortFile)) {
    const content = fs.readFileSync(apiPortFile, 'utf8').trim()
    if (content) apiTarget = `http://localhost:${content}`
  }
} catch (err) {
  // ignore and use default
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: apiTarget,
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
