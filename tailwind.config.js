/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primary: "rgb(var(--color-primary))",
      secondary: "rgb(var(--color-secondary))",
      red: "rgb(var(--color-red))",
      gray: "rgb(var(--color-gray))",
      "gray-dark": "rgb(var(--color-gray-dark))",
      "gray-light": "rgb(var(--color-gray-light))",
      white: "rgb(var(--color-white))",
      black: "rgb(var(--color-black))",
    },
  },
  plugins: [],
};
