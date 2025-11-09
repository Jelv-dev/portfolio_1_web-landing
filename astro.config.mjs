// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // 'site' y 'base' se comentan para forzar rutas relativas.
  // site: 'https://jelv-dev.github.io/',
  // base: '/portfolio_1_web-landing',
  
  // Las integraciones deben estar aquí, correctamente llamadas como funciones
  integrations: [
    tailwind(),
    sitemap()
  ],

  // Configuración de Vite para optimización de build
  // La propiedad 'build.assets' es la clave para generar rutas relativas.
  vite: {
    build: {
      minify: true, // Asegura la minificación de JS/CSS
      cssCodeSplit: false, // Combina todo el CSS en un solo archivo
    },
  },
});