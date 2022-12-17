/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // content: ["./src/**/*.{html,js}"],
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      backgroundImage: {
        "icon-moon": "url('/public/icon-moon.svg')",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Helvetica: ["Helvatica", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
        Epilogue: ["Epilogue", "sans-serif"],
        PassionOne: ["Passion One", "cursive"],
        Muli: ["Muli", "sans-serif"],
      },
      colors: {
        dark: {
          blue: "#2d4271",
          primary: "#13131A",
          secondary: "#1C1C24",
          soft: "#22222C",
          stroke: "#3A3A43",
        },
        background: "#FAFBFF",
        primary: {
          blue: "#316BFF",
          red: "#FF543D",
          violet: "#878CFF",
        },
        c1: "#141416",
        c2: "#222529",
        c3: "#3B3E44",
        c4: "#84878B",
        c5: "#B1B5C4",
        c6: "#E7ECF3",
        c7: "#F4F5F6",
        c8: "#FCFCFD",
      },
    },
  },
  plugins: [],
};
