import * as React from 'react'
import HeadingLink from '@/components/proses/heading-link'
import * as Styles from './prose-heading-4.css'

type ProseHeading4Props = React.HTMLAttributes<HTMLHeadingElement>

function ProseHeading4({ children, id, ...props }: ProseHeading4Props): JSX.Element {
  return (
    <h4 className={Styles.main} id={id} {...props}>
      <HeadingLink href={`#${id}`} />
      {children}
    </h4>
  )
}

export default ProseHeading4
