import * as React from 'react'
import classnames from 'clsx'
import { classes } from '@/styles'

interface ArticleLayoutProps {
  children: React.ReactNode
}

function ArticleLayout({ children }: ArticleLayoutProps) {
  return <div className={classnames(classes.pageSizing, classes.prose)}>{children}</div>
}

export default ArticleLayout
