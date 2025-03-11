/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        optima: ['Optima', 'sans-serif'],
        'optima-italic': ['Optima Italic', 'serif'],
        'optima-bold': ['Optima Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};