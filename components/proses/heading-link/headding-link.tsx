import NextLink from 'next/link'
import * as Styles from './heading-link.css'

interface HeadingLinkProps {
  href: string
}

function HeadingLink({ href }: HeadingLinkProps): JSX.Element {
  return (
    <NextLink href={href} passHref={true}>
      <a className={Styles.main} aria-hidden="true" tabIndex={-1}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
          <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
        </svg>
      </a>
    </NextLink>
  )
}

export default HeadingLink
