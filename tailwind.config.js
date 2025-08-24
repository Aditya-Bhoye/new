/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      colors: {
        'samsung-blue': '#1428A0',
        'samsung-dark-blue': '#001E70',
        'samsung-light-blue': '#1D9BF0',
        'samsung-gray': '#F2F2F2',
        'samsung-dark-gray': '#292929',
      },
      fontFamily: {
        sans: ['SamsungOne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
