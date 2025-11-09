// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // 'site' y 'base' se comentan para forzar rutas relativas y evitar conflictos.
  // site: 'https://jelv-dev.github.io/', // Comentado
  // base: '/portfolio_1_web-landing',    // Comentado
  build: {
    assetsPrefix: 'relative', // Fuerza a Astro a generar rutas relativas para todos los assets
  },
  
  // Las integraciones deben estar aquí, correctamente llamadas como funciones
  integrations: [
    tailwind(),
    sitemap()
  ],

  // Configuración de Vite para optimización de build (independiente de assetsPrefix)
  vite: {
    build: {
      minify: true, // Asegura la minificación de JS/CSS
      cssCodeSplit: false, // Combina todo el CSS en un solo archivo
    },
  },
});