/* eslint-disable import/order */

import remarmGfm from 'remark-gfm'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypeCodeAttributes from './rehype/rehype-code-attributes'
import rehypeCodeHighlight from './rehype/rehype-code-highlight'

import { s } from 'hastscript'
import { getHighlighter } from './highlighter'

import type { MDXOptions } from 'contentlayer/core'

async function getMdxConfig(): Promise<MDXOptions> {
  const highlighter = await getHighlighter()

  return {
    remarkPlugins: [remarmGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: { class: 'heading-link', ariaHidden: true, tabIndex: -1 },
          content: [
            s('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, [
              s('path', { d: 'M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5' }),
              s('path', { d: 'M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5' })
            ])
          ]
        }
      ],
      rehypeCodeAttributes,
      [rehypeCodeHighlight, { highlighter }]
    ]
  }
}

export { getMdxConfig }
