/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#64748b',
        darkSecondary: '#0ea2f2',
        dark: '#0f172a',
        
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
