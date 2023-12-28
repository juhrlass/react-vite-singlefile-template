import { PluginOption } from "vite"

export interface PluginConfig {
  prefix?: string
}

export const indexTimestamp = (
  configParams: PluginConfig = {}
): PluginOption => {
  const { prefix = "index" } = configParams
  return {
    name: "vite-plugin-index-timestamp",
    enforce: "post",
    generateBundle(options, bundle) {
      //console.dir(options)
      const effectiveName = options.name ? options.name + "_" : ""
      const buildDate = new Date()
      const timestamp =
        buildDate.getFullYear() +
        "_" +
        String(buildDate.getMonth() + 1).padStart(2, "0") +
        "_" +
        String(buildDate.getDate()).padStart(2, "0") +
        "_" +
        String(buildDate.getHours()).padStart(2, "0") +
        "_" +
        String(buildDate.getMinutes()).padStart(2, "0") +
        "_" +
        String(buildDate.getSeconds()).padStart(2, "0")
      const indexHtml = bundle["index.html"]
      indexHtml.fileName = prefix + "_" + effectiveName + timestamp + ".html"
    },
  }
}
