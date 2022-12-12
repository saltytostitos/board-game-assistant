/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,vue,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  fontFamily: {
    sans: ["Helvetica Neue, Helvetica, Arial, sans-serif"],
    mono: ["Courier New", "Menlo", "Monaco"]
  },
  plugins: [
    require("daisyui"),

    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography")
  ],
  daisyUi: {
    themes: ["bumblebee", "halloween"]
  }
};
