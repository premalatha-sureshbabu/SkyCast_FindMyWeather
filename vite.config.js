// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/SkyCast_FindMyWeather/', // MUST match GitHub repo name
  plugins: [react()],
})
