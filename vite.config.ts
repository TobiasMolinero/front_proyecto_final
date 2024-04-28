import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@lib': '/src/lib/modul.ts',
      '@controlers': '/src/shared/imports/controlers.ts',
      '@validate': '/src/shared/imports/validate.ts'
    }
  }
})
