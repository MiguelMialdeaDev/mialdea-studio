import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// GitHub Pages (temporal). Cuando muevas a Vercel/dominio propio:
// pon site: 'https://mialdeastudio.com' y base: '/'
export default defineConfig({
  site: 'https://miguelmialdeadev.github.io',
  base: '/mialdea-studio',
  integrations: [
    tailwind(),
    // La pagina de gracias no entra en el sitemap: solo se llega a ella
    // despues de enviar el formulario.
    sitemap({ filter: (page) => !page.includes('/gracias') }),
  ],
});
