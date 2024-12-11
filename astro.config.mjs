import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Or 'hybrid' if you also want to pre-render static routes
  output: 'server',
  server: {
    port: 1234 // Cambia esto al puerto deseado
  },
  integrations: [tailwind(), react()]
});