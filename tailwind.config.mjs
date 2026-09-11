/** @type {import('tailwindcss').Config} */
//
// Tokens del sitio. Los nombres se mantienen (crema, tinta, terracota...) para
// no tocar cuarenta ficheros; lo que cambia son los valores, ahora en OKLCH y
// con contraste comprobado sobre crema:
//   tinta 16:1 · tinta2 13:1 · muted 7,5:1 · terracota 4,8:1 · wa 5,3:1
// El muted antiguo (#8C8378) daba 3,4:1 y el terracota 3,9:1 como texto, los
// dos por debajo del mínimo AA (4,5) y usados en decenas de sitios.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        crema: 'oklch(96% 0.012 55 / <alpha-value>)',
        crema2: 'oklch(93% 0.014 55 / <alpha-value>)',
        papel: 'oklch(98.5% 0.008 70 / <alpha-value>)',
        tinta: 'oklch(20% 0.012 45 / <alpha-value>)',
        tinta2: 'oklch(28% 0.012 45 / <alpha-value>)',
        terracota: 'oklch(54% 0.155 32 / <alpha-value>)',
        terracotaDark: 'oklch(46% 0.15 32 / <alpha-value>)',
        // Verde de WhatsApp oscurecido: el botón de acción es verde porque el
        // comprador reconoce el icono sin leer. Solo se usa ahí.
        wa: 'oklch(48% 0.15 152 / <alpha-value>)',
        waDark: 'oklch(44% 0.15 152 / <alpha-value>)',
        ocre: 'oklch(74% 0.13 75 / <alpha-value>)',
        verde: 'oklch(52% 0.07 150 / <alpha-value>)',
        muted: 'oklch(42% 0.012 45 / <alpha-value>)',
        linea: 'oklch(84% 0.010 55 / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        sans: ['Switzer', '"Segoe UI"', 'system-ui', 'sans-serif'],
        wordmark: ['Fraunces', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1140px',
      },
    },
  },
  plugins: [],
};
