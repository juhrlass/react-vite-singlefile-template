/** @type {import("tailwindcss").Config} */
import config from "@manifold/tailwind-config/tailwind.config.js"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@manifold/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [config],
  plugins: [require("tailwindcss-animate")],
}
