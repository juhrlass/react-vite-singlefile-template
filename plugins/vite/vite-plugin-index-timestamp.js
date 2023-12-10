/**
  * @returns {import('vite').Plugin}
 */
export const vitePluginIndexTimestamp = () => {

    return {
        name: 'vite-plugin-index-timestamp',
        enforce: 'post',
        generateBundle(options, bundle) {
            const buildDate = new Date();
            const timestamp=
                buildDate.getFullYear() +
                String(buildDate.getMonth() + 1).padStart(2, "0") +
                String(buildDate.getDate()).padStart(2, "0") +
                String(buildDate.getHours()).padStart(2, "0") +
                String(buildDate.getMinutes()).padStart(2, "0") +
                String(buildDate.getSeconds()).padStart(2, "0");
            const indexHtml = bundle['index.html']
            indexHtml.fileName = 'index_'+timestamp+'.html'
        },
    }
}