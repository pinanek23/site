import { visit } from 'unist-util-visit'
import type { Plugin, Transformer } from 'unified'
import type { Node, Parent } from './types'

const transformer: Transformer = (tree) => {
  const attributesRegex = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g

  function getLanguage(classNames: string[]): string {
    const textLang = 'text'

    if (classNames === undefined) return textLang

    const languageClass = classNames.find((className) => className.startsWith('language-'))
    if (languageClass === undefined) return textLang
    return languageClass.slice(9)
  }

  visit(tree, 'element', (node: Node, index: number, parent: Parent) => {
    if (node.tagName !== 'pre') return

    const codeNode = node.children[0] as Node

    // Code lang
    const classNames = codeNode.properties['className'] as string[]
    const language = getLanguage(classNames)
    node.properties['language'] = language

    // Meta as attributes
    if (codeNode.data !== undefined && codeNode.data.meta !== undefined) {
      let match
      const meta = codeNode.data.meta as string
      attributesRegex.lastIndex = 0

      while ((match = attributesRegex.exec(meta))) {
        node.properties[match[1]] = match[2] || match[3] || match[4] || true
      }
    }

    parent.children[index] = node
  })
}

const rehypeCodeAttributes: Plugin<[]> = () => transformer

export default rehypeCodeAttributes
