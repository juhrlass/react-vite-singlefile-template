import * as path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"

import { vitePluginIndexTimestamp } from "../../packages/vite-plugins/vite-plugin-index-timestamp.js"
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 4096 * 1024,
  },
  plugins: [react(), viteSingleFile(), vitePluginIndexTimestamp("bingo")],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
})
