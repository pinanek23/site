import * as React from 'react'
import NextLink from 'next/link'
import { animated, useSpring } from '@react-spring/web'
import TableOfContentItemIcon from './table-of-content-item-icon'
import * as Styles from './table-of-content-item.css'
import type { Post } from 'contentlayer/generated'

interface TableOfContentItemProps {
  item: Post['headings'][number]
  isSelected: boolean
}

function TableOfContentItem({ item: { id, content, level }, isSelected }: TableOfContentItemProps): JSX.Element {
  const itemStyles = useSpring({
    transform: `translateX(${isSelected ? 0.5 : 0}rem)`,
    config: {
      mass: 1,
      tension: 250,
      friction: 35
    }
  })

  return (
    <NextLink href={`#${id}`} passHref={true}>
      <a
        className={Styles.main({
          level: level as 2 | 3 | 4 | undefined,
          state: isSelected ? 'isSelected' : undefined
        })}
      >
        <TableOfContentItemIcon isSelected={isSelected} />
        <animated.span style={itemStyles}>{content}</animated.span>
      </a>
    </NextLink>
  )
}

export default TableOfContentItem
