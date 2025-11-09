// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://jelv-dev.github.io/',
  base: '/portfolio_1_web-landing',
  
  // Las integraciones deben estar aquí, correctamente llamadas como funciones
  integrations: [
    tailwind(),
    sitemap()
  ],
});