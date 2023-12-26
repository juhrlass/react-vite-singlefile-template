/** @type {import("tailwindcss").Config} */
import config from "../../packages/tailwind-config/tailwind.config"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/sharedui/components/ui/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [config],
  plugins: [require("tailwindcss-animate")],
}
