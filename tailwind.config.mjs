/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#F5EFE3', deep: '#EDE4D1' },
        paper: '#FAF6EC',
        ink: { DEFAULT: '#2A2320', soft: '#4A3F39', mute: '#8A7F77' },
        line: { DEFAULT: '#D9CFBE', soft: '#E6DDC9' },
        brand: {
          red: '#8B1A1A',
          'red-deep': '#6E1212',
          'red-soft': '#A13838',
          gold: '#B8935A',
          'gold-soft': '#D4B888',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Noto Serif KR"', 'Georgia', 'serif'],
        sans: ['"Work Sans"', '"Helvetica Neue"', 'sans-serif'],
        korean: ['"Noto Serif KR"', '"Cormorant Garamond"', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1320px',
      },
    },
  },
};
