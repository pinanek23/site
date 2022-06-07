import * as React from 'react'
import HeadingLink from '@/components/proses/heading-link'
import * as Styles from './prose-heading-2.css'

type ProseHeading2Props = React.HTMLAttributes<HTMLHeadingElement>

function ProseHeading2({ children, id, ...props }: ProseHeading2Props): JSX.Element {
  return (
    <h2 className={Styles.main} id={id} {...props}>
      <HeadingLink href={`#${id}`} />
      {children}
    </h2>
  )
}

export default ProseHeading2
