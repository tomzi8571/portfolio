import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = process.env.GITHUB_REPOSITORY && process.env.GITHUB_REPOSITORY.split('/')[1]
const isCI = process.env.GITHUB_ACTIONS === 'true'
const isUserSite = repo && /\.github\.io$/i.test(repo)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isCI && repo ? (isUserSite ? '/' : `/${repo}/`) : '/',
})
