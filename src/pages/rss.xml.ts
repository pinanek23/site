import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import type { MarkdownInstance } from 'astro'
import type { PostFrontMatter } from '@/types/post'

const postsImportResult = import.meta.globEager<MarkdownInstance<PostFrontMatter>>('/data/posts/**/index.md')
const posts = Object.values(postsImportResult)

const get: APIRoute = () =>
  rss({
    title: "Pinanek23's blog",
    description: 'My little garden 🌻 with knowledge and experience of what I have gained 😁',
    site: import.meta.env.SITE,
    items: posts.map(({ file, frontmatter: { seoTitle, description, publishedDate } }) => {
      const slug = file
        .replace(/\/index.md$/, '')
        .split(/[/\\]/)
        .pop()

      return {
        link: `/posts/${slug}/`,
        description: description,
        title: seoTitle,
        pubDate: new Date(publishedDate)
      }
    })
  })

export { get }
