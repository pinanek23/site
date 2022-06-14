import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'
import type { Element, Parent } from 'hast'

const attributesRegex = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g
const textLang = 'text'

const rehypeCodeAttributes: Plugin<[]> = () =>
  function transformer(tree) {
    function getLanguage(classNames: string[]): string {
      if (classNames === undefined) return textLang

      const languageClass = classNames.find((className) => className.startsWith('language-'))
      if (languageClass === undefined) return textLang
      return languageClass.slice(9)
    }

    visit(tree, 'element', (node: Element, index: number, parent: Parent) => {
      if (node.tagName !== 'pre') return

      const codeNode = node.children[0] as Element

      // Ensure nodes properties are initialized
      if (node.properties === undefined) node.properties = {}
      if (codeNode.properties === undefined) codeNode.properties = {}

      // Code lang
      const classNames = codeNode.properties.className as string[]
      const language = getLanguage(classNames)
      node.properties.language = language

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

export default rehypeCodeAttributes
