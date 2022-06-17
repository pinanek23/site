import * as React from 'react'
import * as Styles from './prose-blockquote.css'

type ProseBlockquoteProps = React.HTMLAttributes<HTMLQuoteElement>

function ProseBlockquote({ children, ...props }: ProseBlockquoteProps): JSX.Element {
  return (
    <blockquote className={Styles.main} {...props}>
      {children}
    </blockquote>
  )
}

export default ProseBlockquote
