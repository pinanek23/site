import { visit } from 'unist-util-visit'
import type { Element } from 'hast'
import type { Plugin } from 'unified'

const infoBarRegex = /^\[!(info|success|warning|error)\]\r?\n/g

const rehypeInfoBar: Plugin<[]> = () =>
  function transformer(tree) {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName !== 'blockquote' || node.children.length <= 1) return

      const blockquoteFirstLine = (node.children[1] as Element).children[0]
      if (blockquoteFirstLine.type !== 'text') return

      infoBarRegex.lastIndex = 0
      const variant = infoBarRegex.exec(blockquoteFirstLine.value)
      if (variant === null) return

      // Replace with 'infobar' tag name and add 'variant' property
      node.tagName = 'infobar'
      if (node.properties === undefined) node.properties = {}
      node.properties.variant = variant[1]

      // Remove variant in content
      blockquoteFirstLine.value = blockquoteFirstLine.value.replace(infoBarRegex, '')
      ;(node.children[1] as Element).children.splice(0, 1, blockquoteFirstLine)
    })
  }

export default rehypeInfoBar
