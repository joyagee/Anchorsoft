/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public//*.{html,js}"],
  theme: {
    extend: {
      colors: {
        header: "rgb(255, 255, 255)",
        banner1: "rgb(207, 207, 207)",
        circle1: "rgb(61, 0, 194)",
        circle2: "rgb(57, 0, 200)",
        banner2: "rgb(126, 34, 230)",
        icon1: "rgb(60, 0, 195)",
      },

      fontSize: {
        fat: "300px",
      },
    },
  },
  plugins: [],
};