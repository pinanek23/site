/* eslint-disable import/order */

import remarmGfm from 'remark-gfm'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypeCodeAttributes from './rehype/rehype-code-attributes'
import rehypeCodeHighlight from './rehype/rehype-code-highlight'
import rehypeExternalLinks from './rehype/rehype-external-links'

import { getHighlighter } from './highlighter'
import * as HastIcons from './hast-icons'

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
          content: [HastIcons.linkIcon]
        }
      ],
      [rehypeExternalLinks, { icon: HastIcons.externalLinkIcon }],
      rehypeCodeAttributes,
      [rehypeCodeHighlight, { highlighter }]
    ]
  }
}

export { getMdxConfig }
