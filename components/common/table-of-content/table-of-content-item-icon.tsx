import { animated, useSpring } from '@react-spring/web'
import * as Styles from './table-of-content-item-icon.css'

interface TableOfContentItemIconProps {
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

const springConfig = {
  mass: 1,
  tension: 250,
  friction: 35
}

function TableOfContentItemIcon({ isSelected }: TableOfContentItemIconProps): JSX.Element {
  const currentProperties = properties[isSelected ? 'isSelected' : 'normal']

  const line1Properties = useSpring({ ...currentProperties[0], config: springConfig })
  const line2Properties = useSpring({ ...currentProperties[1], config: springConfig })
  const line3Properties = useSpring({ ...currentProperties[2], config: springConfig })

  const svgStyles = useSpring({ opacity: isSelected ? 1 : 0, config: springConfig })

  return (
    <animated.svg className={Styles.main} style={svgStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <animated.line {...line1Properties} />
      <animated.line {...line2Properties} />
      <animated.line {...line3Properties} />
    </animated.svg>
  )
}

export default TableOfContentItemIcon
