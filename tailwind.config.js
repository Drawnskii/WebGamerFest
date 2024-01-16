/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "light-purple": "#6642B1",
        "dark-purple": "#2E1D4B",
        "sky-blue": "#72E3FF",
        "light-green": "#5CE8B1",
      },
    },
  },
  plugins: [],
};
