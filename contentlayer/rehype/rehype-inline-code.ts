import { visit } from 'unist-util-visit'
import type { Element, Parent } from 'hast'
import type { Plugin } from 'unified'

const rehypeInlineCode: Plugin<[]> = () =>
  function transformer(tree) {
    visit(tree, 'element', (node: Element, index: number, parent: Parent) => {
      if (node.tagName !== 'code' || (parent as Element).tagName === 'pre') return

      node.tagName = 'inlineCode'
      parent.children.splice(index, 1, node)
    })
  }

export default rehypeInlineCode
