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
    keyframes: {
      "slide-bottom": {
        from: {
          transform: "translateY(-20px)",
          opacity: "0",
        },
        to: {
          transform: "translateY(0)",
          opacity: "1",
        },
      },
    },
    animation: {
      "slide-bottom": "slide-bottom 0.5s",
    },
  },
  plugins: [],
};
