import type { Config } from 'aleph/types'
import markdown from 'aleph/plugins/markdown.ts'

export default <Config>{
    plugins: [
        markdown(),
        {
            name: 'plugin-name',
            setup: async aleph => {
                aleph.onRender(({ path, html, data }) => {
                    html.head.push(
                        '<link rel="preconnect" href="https://fonts.googleapis.com" />' +
                        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />' +
                        '<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />');
                })
            }
        }
    ]
}