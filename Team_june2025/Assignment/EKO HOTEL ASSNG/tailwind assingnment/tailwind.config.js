/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public//*.{html,js}"],
  theme: {
    extend: {
      colors: {
        header: "rgb(255, 255, 255)",
      },

      fontSize: {
        fat: "300px",
      },
    },
  },
  plugins: [],
};