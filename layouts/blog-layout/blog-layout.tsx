import * as React from 'react'
import PostHeader, { type PostHeaderProps } from '@/layouts/post-header'
import * as Styles from './blog-layout.css'

interface BlogLayoutProps {
  header: PostHeaderProps
  children: React.ReactNode
}

function BlogLayout({ header, children }: BlogLayoutProps) {
  return (
    <div className={Styles.container}>
      <PostHeader {...header} />
      <div>
        <div className={Styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default BlogLayout
