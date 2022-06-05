import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'
import type { Element } from 'hast'
import type { Node, Parent } from './types'

const externalUrlRegex = /^https?:\/\/.+$/g
const target = '_blank'
const rel = 'nofollow noopener noreferrer'

const rehypeExternalLinks: Plugin<[{ icon: Element }]> = ({ icon }) =>
  function transformer(tree) {
    visit(tree, 'element', (node: Node, index: number, parent: Parent) => {
      if (node.tagName !== 'a') return
      if (node.properties['href'] === undefined) return
      if (!externalUrlRegex.test(node.properties['href'] as string)) return

      node.properties.rel = rel
      node.properties.target = target

      node.children.push(icon as Node)

      parent.children.splice(index, 1, node)
    })
  }

export default rehypeExternalLinks
