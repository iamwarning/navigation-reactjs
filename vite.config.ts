/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    coverage: {
      reporter: ['text', 'json', 'html', 'lcov'],
    },
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts',
    includeSource: ['**/*.ts']
  },
  build: {
    outDir: 'dist'
  },
  base: '/',
  server: {
    host: '0.0.0.0',
  },
  preview: {
    port: 8080,
  },
})
