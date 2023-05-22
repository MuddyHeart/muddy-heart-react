/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-purple":"#210F29",
        "main-green": "#61D730",
      }
    },
  },
  plugins: [],
}