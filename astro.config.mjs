// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  /* Replace with your actual live domain — required for sitemap generation */
  site: 'https://mansha-enterprises.com',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: { '@': new URL('./src', import.meta.url).pathname },
    },
  },

  integrations: [
    react(),
    sitemap({
      /* Exclude noindex pages — legal pages and error pages don't belong in the sitemap */
      filter: (page) =>
        !['/privacy-policy/', '/terms/', '/404/', '/500/'].some((p) =>
          page.endsWith(p)
        ),
    }),
  ],
});