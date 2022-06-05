import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import { visit } from 'unist-util-visit'
import { toText, type HastNode } from 'hast-util-to-text'
import type * as Shiki from 'shiki'
import type { Plugin } from 'unified'
import type { Node, Parent } from './types'

const hastParser = unified().use(rehypeParse, { fragment: true })

const rehypeCodeHighlight: Plugin<[{ highlighter: Shiki.Highlighter }]> = ({ highlighter }) =>
  function transformer(tree) {
    visit(tree, 'element', (node: Node, index: number, parent: Parent) => {
      if (node.tagName !== 'pre') return

      const properties = node.properties

      const code = toText(node as HastNode).slice(0, -1)
      const language = node.properties['language'] as string
      const highlightedCode = highlighter.codeToHtml(code, { lang: language })

      const newNode = hastParser.parse(highlightedCode).children[0] as Node

      newNode.properties = {
        ...newNode.properties,
        ...properties
      }

      parent.children.splice(index, 1, newNode)
    })
  }

export default rehypeCodeHighlight
