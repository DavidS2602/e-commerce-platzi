/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '400px'},
        'tablet': {'max': '900px'},
        'laptop': {'max': '1024px'},
      }
    },
  },
  plugins: [],
}

