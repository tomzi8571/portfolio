import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

const pkg = await import('./package.json')

export default defineConfig({
  plugins: [react(), svgr()],
  base: './',
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(pkg.default.version),
  },
})
