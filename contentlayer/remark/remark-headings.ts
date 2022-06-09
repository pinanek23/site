import Slugger from 'github-slugger'
import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import type { Heading } from 'mdast'
import type { Plugin } from 'unified'

const slugger = new Slugger()

const remarkHeadings: Plugin<[]> = () =>
  function transformer(tree, file) {
    const headings: Array<{ id: string; level: number; content: string }> = []

    visit(tree, 'heading', (node: Heading) => {
      const content = toString(node)

      headings.push({
        id: slugger.slug(content),
        level: node.depth,
        content
      })
    })

    file.data.headings = headings
  }

export default remarkHeadings
