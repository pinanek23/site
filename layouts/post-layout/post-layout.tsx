import * as React from 'react'
import ArticleLayout from './article-layout'
import BlogLayout from './blog-layout'
import type { PostHeaderProps } from './post-header'
import type { Post } from 'contentlayer/generated'

interface PostLayoutProps {
  type: Post['layout']
  header: PostHeaderProps
  headings: Post['headings']
  children: React.ReactNode
}

function PostLayout({ type = 'article', header, children, headings }: PostLayoutProps): JSX.Element {
  if (type === 'blog') return <BlogLayout header={header}>{children}</BlogLayout>

  return (
    <ArticleLayout header={header} headings={headings}>
      {children}
    </ArticleLayout>
  )
}

export default PostLayout
