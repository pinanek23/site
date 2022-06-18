import * as React from 'react'
import NextLink from 'next/link'
import { animated, useSpring } from '@react-spring/web'
import * as Styles from './category-item.css'

interface CategoryItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

function CategoryItem({ href, children, ...props }: CategoryItemProps): JSX.Element {
  const [isHovered, setHovered] = React.useState(false)

  const scaleSpring = useSpring({
    transform: `scale(${isHovered ? 1.05 : 1})`,
    config: {
      mass: 1,
      tension: 250,
      friction: 35
    }
  })

  function handlePointerEnter(): void {
    setHovered(true)
  }

  function handlePointerLeave(): void {
    setHovered(false)
  }

  return (
    <NextLink href={href} passHref={true}>
      <animated.a
        className={Styles.main}
        style={scaleSpring}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        {children}
      </animated.a>
    </NextLink>
  )
}

export default CategoryItem
