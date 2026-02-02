import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import node from '@astrojs/node';

import markdoc from '@astrojs/markdoc';

export default defineConfig({
  output: 'static', // Keystatic gérera les routes serveur automatiquement
  integrations: [react(), keystatic(), markdoc()],
  adapter: node({
    mode: "standalone"
  }),
  vite: {
    ssr: {
      // Pour corriger l'erreur de "lodash" vue plus tôt
      noExternal: ['@keystatic/core', '@keystatic/astro', 'lodash']
    }
  }
});