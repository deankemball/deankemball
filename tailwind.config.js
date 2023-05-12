/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      red: "#EF3E36",
      black: "#04080F",
      white: "#FCFCFC",
      darkGreen: "#8BBC78",
      lightGreen: "#E7F5D9",
      whiteGreen: "#F6F8ED",
      brown: "#513131",
      orange: "#FB7E56",
      mbOrange: "#FF4C00",
      wilma1: "#9381FF",
      wilma2: "#FF84E8",
      dwred: "#FF0000",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ibm: ["IBM Plex Mono", "monospace"],
        grotesk: ["Space Grotesk", "sans-serif"],

        hubot: ["Hubot-Sans", "sans-serif"],
      },
      backgroundImage: {
        confetti: "url('../public/wilma/confetti.webp')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
