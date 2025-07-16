// @ts-check
import { defineConfig, envField } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [preact()],
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
  env: {
    schema: {
      SUPABASE_URL: envField.string({ context: 'server', access: 'public' }),
      SUPABASE_ANON_KEY: envField.string({
        context: 'server',
        access: 'public',
      }),
    },
  },
})
