import * as React from 'react'
import classnames from 'clsx'
import { animated, useSpring } from '@react-spring/web'
import NextLink from 'next/link'
import useInViewId from './use-in-view-id'
import * as Styles from './table-of-content.css'

interface TableOfContentProps extends React.HTMLAttributes<HTMLElement> {
  headings: Array<{ id: string; level: number; content: string }>
}

function TableOfContent({ headings, className, ...props }: TableOfContentProps): JSX.Element {
  const { inViewId } = useInViewId('h2[id], h3[id], h4[id]')

  return (
    <nav className={classnames(Styles.container, className)} {...props}>
      {headings.map(({ level, id, content }) => (
        <NextLink key={id} href={`#${id}`} passHref={true}>
          <a
            className={Styles.tableOfContentItems({
              level: level as 2 | 3 | undefined,
              state: inViewId === id ? 'isSelected' : undefined
            })}
          >
            <ItemIcon isSelected={inViewId === id} />
            {content}
          </a>
        </NextLink>
      ))}
    </nav>
  )
}

interface ItemIconProps {
  isSelected: boolean
}

const properties = {
  normal: [
    { x1: 5, y1: 12, x2: 9, y2: 12 },
    { x1: -5, y1: 12, x2: 9, y2: 12 },
    { x1: 5, y1: 12, x2: 9, y2: 12 }
  ],
  isSelected: [
    { x1: 15, y1: 8, x2: 19, y2: 12 },
    { x1: 5, y1: 12, x2: 19, y2: 12 },
    { x1: 15, y1: 16, x2: 19, y2: 12 }
  ]
}

function ItemIcon({ isSelected }: ItemIconProps): JSX.Element {
  const props = properties[isSelected ? 'isSelected' : 'normal']

  const line1Props = useSpring({ ...props[0] })
  const line2Props = useSpring({ ...props[1] })
  const line3Props = useSpring({ ...props[2] })

  const svgStyles = useSpring({ opacity: isSelected ? 1 : 0 })

  return (
    <animated.svg className={Styles.icon} style={svgStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <animated.line {...line1Props} />
      <animated.line {...line2Props} />
      <animated.line {...line3Props} />
    </animated.svg>
  )
}

export default TableOfContent
