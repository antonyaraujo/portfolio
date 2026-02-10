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
        sans: ['"VT323"', 'monospace'],
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        flicker: 'flicker 1.5s infinite',
      },
    },
  },
  plugins: [],
};
