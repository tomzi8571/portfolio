import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pkg = await import('./package.json')

export default defineConfig({
  plugins: [react()],
  base: './',
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(pkg.default.version),
  },
})
