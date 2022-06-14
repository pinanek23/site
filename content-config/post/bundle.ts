/* eslint-disable import/order */

import * as path from 'path'
import * as fs from 'fs'
import { bundleMDX } from 'mdx-bundler'
import matter from 'gray-matter'

import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import { remarkMdxImages } from 'remark-mdx-images'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkHeadings from '@/content-config/remark/remark-headings'

import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import rehypeCodeAttributes from '@/content-config/rehype/rehype-code-attributes'
import rehypeCodeHighlight from '@/content-config/rehype/rehype-code-highlight'
import rehypeInlineCode from '@/content-config/rehype/rehype-inline-code'
import rehypeInfoBar from '@/content-config/rehype/rehype-info-bar'

import { getHighlighter } from './highlighter'
import type { PostFrontMatter } from './types'

async function bundlePost(source: string, folderPath: string, slug: string) {
  const highlighter = await getHighlighter()

  const publicPostAssetsDirPath = path.join(process.cwd(), 'public', 'assets', 'content', 'posts', slug)
  const publicPostAssetsPath = `/assets/content/posts/${slug}`

  const { frontmatter: frontMatter, code } = await bundleMDX({
    source,
    cwd: folderPath,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm, remarkUnwrapImages, remarkMdxImages]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeExternalLinks,
        rehypeSlug,
        rehypeExternalLinks,
        rehypeInfoBar,
        rehypeInlineCode,
        rehypeCodeAttributes,
        [rehypeCodeHighlight, { highlighter }]
      ]

      return options
    },

    esbuildOptions: (options) => {
      options.outdir = publicPostAssetsDirPath
      options.publicPath = `/assets/content/posts/${slug}`
      options.assetNames = '[name]'

      options.loader = {
        ...options.loader,
        '.webp': 'file',
        '.png': 'file',
        '.jpg': 'file',
        '.jpeg': 'file',
        '.gif': 'file'
      }

      options.write = true

      return options
    }
  })

  // Copy thumbnail image
  const imageUrl = (frontMatter as PostFrontMatter).image.url

  if (!path.isAbsolute(imageUrl)) {
    const imagePath = path.join(folderPath, imageUrl)
    const publicImagePath = path.join(publicPostAssetsDirPath, imageUrl)

    if (!fs.existsSync(publicImagePath)) {
      fs.copyFileSync(imagePath, publicImagePath)
    }

    ;(frontMatter as PostFrontMatter).image.url = `${publicPostAssetsPath}/${imageUrl}`
  }

  // Add headings (temporary ❤️)
  const { content } = matter(source)

  const file = await remark().use(remarkHeadings).process(content)
  frontMatter.headings = file.data.headings

  return {
    content: code,
    frontMatter: frontMatter as PostFrontMatter
  }
}

export { bundlePost }
