import * as path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import { indexTimestamp } from "vite-plugin-index-timestamp"
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 4096 * 1024,
  },
  plugins: [
    react(),
    viteSingleFile(),
    indexTimestamp({
      prefix: "demo",
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
})
