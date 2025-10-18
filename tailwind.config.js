/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        baseColor: "#EF6223",
        baseColorDarker: "#D9561F",
      },
      colors: {
        baseColor: "#EF6223",
        black: "#090B19",
        gray: "#5B5C66",
      },
      fontFamily: {
        baseFont: ["'Raleway', sans-serif"],
        textFont: ["'Inter', sans-serif"],
      },
    },
  },
  plugins: [],
};
