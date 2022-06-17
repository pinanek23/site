import * as React from 'react'
import NextLink from 'next/link'
import * as Styles from './nav-item.css'

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

function NavItem({ href, children, ...props }: NavItemProps): JSX.Element {
  return (
    <NextLink href={href} passHref={true}>
      <a className={Styles.main} {...props}>
        {children}
      </a>
    </NextLink>
  )
}

export default NavItem
