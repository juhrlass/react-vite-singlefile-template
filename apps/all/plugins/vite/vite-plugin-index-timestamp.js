/**
 * @returns {import("vite").Plugin}
 */
export const vitePluginIndexTimestamp = () => {
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
      indexHtml.fileName = "index_" + effectiveName + timestamp + ".html"
    },
  }
}
