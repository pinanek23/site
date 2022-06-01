import * as React from 'react'
import { classes } from '@/styles'

interface ArticleLayoutProps {
  children: React.ReactNode
}

function ArticleLayout({ children }: ArticleLayoutProps) {
  return <div className={classes.pageSizing}>{children}</div>
}

export default ArticleLayout
