// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  
  // Las integraciones deben estar aquí, correctamente llamadas como funciones
  integrations: [
    tailwind(),
    sitemap()
  ],

  // Configuración de Vite para optimización de build
  vite: {
    build: {
      minify: true, // Asegura la minificación de JS/CSS
      cssCodeSplit: true, // Habilita la división de código CSS para mejor rendimiento
      sourcemap: false, // Deshabilita sourcemaps en producción para reducir tamaño
    },
  },
});