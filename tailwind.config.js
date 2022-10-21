/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#344E41",
        secondary: "#A3B18A",
        surface: "#DAD7CD",
        "dark-surface": "#212121",
        highlight: "#588157",
      },
    },
    plugins: [],
  },
};
