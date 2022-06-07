import * as React from 'react'
import * as Styles from './prose-inline-code.css'

interface ProseInlineCodeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

function ProseInlineCode({ children, ...props }: ProseInlineCodeProps): JSX.Element {
  return (
    <code className={Styles.main} {...props}>
      {children}
    </code>
  )
}

export default ProseInlineCode
