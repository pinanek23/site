import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import { visit } from 'unist-util-visit'
import { toText, type HastNode } from 'hast-util-to-text'
import type * as Shiki from 'shiki'
import type { Element, Parent } from 'hast'
import type { Plugin } from 'unified'

const hastParser = unified().use(rehypeParse, { fragment: true })

const rehypeCodeHighlight: Plugin<[{ highlighter: Shiki.Highlighter }]> = ({ highlighter }) =>
  function transformer(tree) {
    visit(tree, 'element', (node: Element, index: number, parent: Parent) => {
      if (node.tagName !== 'pre') return

      // Ensure nodes properties are initialized
      if (node.properties === undefined) node.properties = {}

      const properties = node.properties

      // Get the code and highlight it 😜
      const code = toText(node as HastNode).slice(0, -1)
      const language = node.properties['language'] as string
      const highlightedCode = highlighter.codeToHtml(code, { lang: language })

      const newNode = hastParser.parse(highlightedCode).children[0] as Element

      newNode.properties = {
        ...newNode.properties,
        ...properties
      }

      parent.children.splice(index, 1, newNode)
    })
  }

export default rehypeCodeHighlight
