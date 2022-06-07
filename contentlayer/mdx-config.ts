/* eslint-disable import/order */

import remarmGfm from 'remark-gfm'

import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import rehypeCodeAttributes from './rehype/rehype-code-attributes'
import rehypeCodeHighlight from './rehype/rehype-code-highlight'
import rehypeInlineCode from './rehype/rehype-inline-code'

import { getHighlighter } from './highlighter'

import type { MDXOptions } from 'contentlayer/core'

async function getMdxConfig(): Promise<MDXOptions> {
  const highlighter = await getHighlighter()

  return {
    remarkPlugins: [remarmGfm],
    rehypePlugins: [
      rehypeExternalLinks,
      rehypeSlug,
      rehypeExternalLinks,
      rehypeInlineCode,
      rehypeCodeAttributes,
      [rehypeCodeHighlight, { highlighter }]
    ]
  }
}

export { getMdxConfig }
