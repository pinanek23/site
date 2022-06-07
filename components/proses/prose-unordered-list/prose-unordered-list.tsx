import * as React from 'react'
import * as Styles from './prose-unordered-list.css'

type ProseUnorderedListProps = React.HTMLAttributes<HTMLUListElement>

function ProseUnorderedList({ children, ...props }: ProseUnorderedListProps): JSX.Element {
  return (
    <ul className={Styles.main} {...props}>
      {children}
    </ul>
  )
}

export default ProseUnorderedList
