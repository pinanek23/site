/* eslint-disable import/order */

import remarmGfm from 'remark-gfm'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypeCodeAttributes from './rehype/rehype-code-attributes'
import rehypeCodeHighlight from './rehype/rehype-code-highlight'
import rehypeExternalLinks from './rehype/rehype-external-links'

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
      [
        rehypeExternalLinks,
        {
          icon: s('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, [
            s('path', { d: 'M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5' }),
            s('line', { x1: '10', y1: '14', x2: '20', y2: '4' }),
            s('polyline', { points: '15 4 20 4 20 9' })
          ])
        }
      ],
      rehypeCodeAttributes,
      [rehypeCodeHighlight, { highlighter }]
    ]
  }
}

export { getMdxConfig }
