import { visit } from 'unist-util-visit'
import { h } from 'hastscript'

const ProseInfoBarTagName = 'ProseInfoBar'

function infoBar() {
  /** @type {import('astro').AstroIntegration} */
  const integration = {
    name: 'infobar-integration',
    hooks: {
      'astro:config:setup': ({ config, updateConfig, injectScript }) => {
        const remarkPlugins = [...config.markdown.remarkPlugins]
        const rehypePlugins = [...config.markdown.rehypePlugins]

        remarkPlugins.push(remarkInfoBar)

        updateConfig({ markdown: { rehypePlugins, remarkPlugins } })

        injectScript(
          'page-ssr',
          `import ${ProseInfoBarTagName} from "@/components/prose/prose-info-bar.astro"; global.${ProseInfoBarTagName} = ${ProseInfoBarTagName};`
        )
      }
    }
  }

  return integration
}

function remarkInfoBar() {
  const infoBarVariantRegex = /^\[!(info|success|error|warning)\]\n/

  return function transformer(tree) {
    visit(tree, 'blockquote', (node, index, parent) => {
      if (node.children.length === 0) return

      const content = node.children[0].children[0]
      if (content.type !== 'text') return

      // Try to get InfoBar variant
      const match = content.value.match(infoBarVariantRegex)
      if (match === null) return

      // Remove variant syntax, remove it if it has empty value
      content.value = content.value.replace(infoBarVariantRegex, '')
      if (content.value === '') {
        node.children[0].children.splice(0, 1)
      }

      const data = node.data || (node.data = {})
      data.hName = ProseInfoBarTagName
      data.hProperties = h(ProseInfoBarTagName, { variant: match[1] }).properties

      parent.children.splice(index, 1, node)
    })
  }
}

export default infoBar
