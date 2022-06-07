import * as React from 'react'
import * as Styles from './prose-paragraph.css'

type ProseParagraphProps = React.HTMLAttributes<HTMLParagraphElement>

function ProseParagraph({ children, ...props }: ProseParagraphProps): JSX.Element {
  return (
    <p className={Styles.main} {...props}>
      {children}
    </p>
  )
}

export default ProseParagraph
