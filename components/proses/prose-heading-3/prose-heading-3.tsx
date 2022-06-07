import * as React from 'react'
import HeadingLink from '@/components/proses/heading-link'
import * as Styles from './prose-heading-3.css'

type ProseHeading3Props = React.HTMLAttributes<HTMLHeadingElement>

function ProseHeading3({ children, id, ...props }: ProseHeading3Props): JSX.Element {
  return (
    <h3 className={Styles.main} id={id} {...props}>
      <HeadingLink href={`#${id}`} />
      {children}
    </h3>
  )
}

export default ProseHeading3
