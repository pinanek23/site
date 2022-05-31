import * as React from 'react'
import { animated, useSpring } from '@react-spring/web'
import * as Styles from './menu-button.css'

interface MenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isMenuOpened: boolean
}

const properties = {
  normal: {
    line1: { x1: '4', y1: '6', x2: '20', y2: '6' },
    line2: { x1: '4', y1: '12', x2: '20', y2: '12' },
    line3: { x1: '4', y1: '18', x2: '20', y2: '18' }
  },
  normalHovered: {
    line1: { x1: '4', y1: '6', x2: '12', y2: '6' },
    line2: { x1: '4', y1: '12', x2: '20', y2: '12' },
    line3: { x1: '4', y1: '18', x2: '16', y2: '18' }
  },

  active: {
    line1: { x1: '6', y1: '6', x2: '12', y2: '12' },
    line2: { x1: '6', y1: '18', x2: '18', y2: '6' },
    line3: { x1: '12', y1: '12', x2: '18', y2: '18' }
  },
  activeHovered: {
    line1: { x1: '7.5', y1: '7.5', x2: '12', y2: '12' },
    line2: { x1: '7.5', y1: '16.5', x2: '16.5', y2: '7.5' },
    line3: { x1: '12', y1: '12', x2: '16.5', y2: '16.5' }
  }
}

function getState(isMenuOpened: boolean, isHovered: boolean): keyof typeof properties {
  if (isMenuOpened) {
    return isHovered ? 'activeHovered' : 'active'
  }

  return isHovered ? 'normalHovered' : 'normal'
}

const springConfig = {
  mass: 1,
  tension: 250,
  friction: 35
}

const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(function MenuButton(
  { isMenuOpened, ...props },
  ref
): JSX.Element {
  const [isHovered, setHovered] = React.useState<boolean>(false)

  const currentState = getState(isMenuOpened, isHovered)
  const { line1, line2, line3 } = properties[currentState]

  const line1Properties = useSpring({ ...line1, config: springConfig })
  const line2Properties = useSpring({ ...line2, config: springConfig })
  const line3Properties = useSpring({ ...line3, config: springConfig })

  function handlePointerEnter(): void {
    setHovered(true)
  }

  function handlePointerLeave(): void {
    setHovered(false)
  }

  return (
    <button
      className={Styles.button}
      ref={ref}
      type="button"
      aria-label="Toggle menu"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      <svg className={Styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <animated.line {...line1Properties} />
        <animated.line {...line2Properties} />
        <animated.line {...line3Properties} />
      </svg>
    </button>
  )
})

export default MenuButton
