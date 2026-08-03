import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Dominio propio. El CNAME de public/ es lo que hace que GitHub Pages lo sirva.
export default defineConfig({
  site: 'https://mialdeastudio.com',
  base: '/',
  integrations: [
    tailwind(),
    // La pagina de gracias no entra en el sitemap: solo se llega a ella
    // despues de enviar el formulario.
    sitemap({ filter: (page) => !page.includes('/gracias') }),
  ],
});
