import * as React from 'react'
import classnames from 'clsx'
import useInViewId from './use-in-view-id'
import * as Styles from './table-of-content.css'
import TableOfContentItem from './table-of-content-item'
import type { Post } from 'contentlayer/generated'

interface TableOfContentProps extends React.HTMLAttributes<HTMLElement> {
  headings: Post['headings']
}

function TableOfContent({ headings, className, ...props }: TableOfContentProps): JSX.Element {
  const [inViewId, setViewId] = React.useState(headings[0].id)

  useInViewId('h2[id], h3[id], h4[id]', setViewId)

  return (
    <nav aria-label="Table of content" className={classnames(Styles.container, className)} {...props}>
      {headings.map((heading) => (
        <TableOfContentItem key={heading.id} item={heading} isSelected={inViewId === heading.id} />
      ))}
    </nav>
  )
}

export default TableOfContent
