import config from "@manifold/tailwind-config/tailwind.config.js"

/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@manifold/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [config],
  plugins: [require("tailwindcss-animate")],
}
