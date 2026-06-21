/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cálido y humano
        crema: '#F8F3EA',
        papel: '#FFFDF8',
        tinta: '#231E1A',
        terracota: '#C8553D',
        terracotaDark: '#A8412E',
        ocre: '#E0A04D',
        verde: '#5B7B5A',
        muted: '#8C8378',
        linea: '#E7DDCD',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1140px',
      },
    },
  },
  plugins: [],
};
