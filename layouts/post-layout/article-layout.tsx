import * as React from 'react'
import classnames from 'clsx'
import { TableOfContent } from '@/components'
import { classes } from '@/styles'
import PostHeader, { type PostHeaderProps } from './post-header'
import * as Styles from './article-layout.css'
import type { Post } from 'contentlayer/generated'

interface ArticleLayoutProps {
  header: PostHeaderProps
  headings: Post['headings']
  children: React.ReactNode
}

function ArticleLayout({ header, headings, children }: ArticleLayoutProps) {
  return (
    <div className={classnames(classes.pageSizing, Styles.container)}>
      <PostHeader {...header} />
      <div id="article-content-container" className={Styles.contentContainer}>
        <TableOfContent headings={headings} className={Styles.tableOfContent} />
        <div className={Styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default ArticleLayout
