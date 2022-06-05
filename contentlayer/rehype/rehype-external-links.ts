import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'
import type { Element, Parent } from 'hast'

const externalUrlRegex = /^https?:\/\/.+$/g
const target = '_blank'
const rel = 'nofollow noopener noreferrer'

const rehypeExternalLinks: Plugin<[{ icon: Element }]> = ({ icon }) =>
  function transformer(tree) {
    visit(tree, 'element', (node: Element, index: number, parent: Parent) => {
      if (node.tagName !== 'a') return
      if (node.properties === undefined || node.properties['href'] === undefined) return
      if (!externalUrlRegex.test(node.properties['href'] as string)) return

      node.properties.rel = rel
      node.properties.target = target

      node.children.push(icon)

      parent.children.splice(index, 1, node)
    })
  }

export default rehypeExternalLinks
