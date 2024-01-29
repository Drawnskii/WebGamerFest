/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        mukta: ["Mukta", "sans-serif"],
      },
      colors: {
        "light-purple": "#6642B1",
        "dark-purple": "#2E1D4B",
        "sky-blue": "#72E3FF",
        "light-green": "#5CE8B1",
      },
      backgroundImage: {
        "login-1": "url('./img/Login_1.jpg')",
        "login-2": "url('./img/Login_2.jpg')",
        "login-3": "url('./img/Login_3.jpg')",
      },
    },
  },
  plugins: [],
};
