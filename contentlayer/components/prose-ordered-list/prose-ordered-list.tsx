import * as React from 'react'
import * as Styles from './prose-ordered-list.css'

type ProseUnorderedListProps = React.HTMLAttributes<HTMLUListElement>

function ProseUnorderedList({ children, ...props }: ProseUnorderedListProps): JSX.Element {
  return (
    <ol className={Styles.main} {...props}>
      {children}
    </ol>
  )
}

export default ProseUnorderedList
