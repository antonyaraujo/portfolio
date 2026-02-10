/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00ff95',
        secondary: '#ff00c1',
        background: '#0d0221',
        'light-background': '#1a0a3d',
        text: '#00ff95',
        accent: '#ff00c1',
      },
      fontFamily: {
        sans: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
};
