import * as React from 'react'
import NextLink from 'next/link'
import * as Styles from './prose-link.css'

interface ProseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

function ProseLink({ href, children, ...props }: ProseLinkProps): JSX.Element {
  return (
    <NextLink href={href}>
      <a className={Styles.main} {...props}>
        {children}
      </a>
    </NextLink>
  )
}

export default ProseLink
