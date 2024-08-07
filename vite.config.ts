import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@lib': '/src/lib/modul.ts',
      '@lib-store': '/src/lib/store.ts',
      '@controlers': '/src/config/shared/imports/controlers.ts',
      '@validate': '/src/config/shared/imports/validate.ts',
      '@store': '/src/config/base/store.ts',
      '@utils-alerts': '/src/utils/alerts.ts',
      '@utils-interfaces': '/src/utils/interfaces.ts',
      '@utils-helpers': '/src/utils/helpers.ts',
      '@routes': '/src/utils/api_routes.ts',
    }
  }
})
