import * as React from 'react'
import { animated, useSpring } from '@react-spring/web'
import * as Styles from './theme-button.css'

interface ThemeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDarkColorMode: boolean
}

const properties = {
  light: {
    circle: { r: 4 },
    mask: { cx: 30, cy: 0 },
    svg: { transform: 'rotate(90deg)' },
    lines: { opacity: 1 }
  },
  dark: {
    circle: { r: 9 },
    mask: { cx: 12, cy: 3.5 },
    svg: { transform: 'rotate(40deg)' },
    lines: { opacity: 0 }
  }
}

const springConfig = {
  mass: 4,
  tension: 250,
  friction: 35
}

const ThemeButton = React.forwardRef<HTMLButtonElement, ThemeButtonProps>(function ThemeButton(
  { isDarkColorMode, ...props },
  ref
): JSX.Element {
  const [isHovered, setHovered] = React.useState<boolean>(false)

  const { svg, circle, mask, lines } = properties[isDarkColorMode ? 'dark' : 'light']

  const svgStyle = useSpring({ transform: isHovered ? 'rotate(65deg)' : svg.transform, config: springConfig })
  const linesStyle = useSpring({ ...lines, config: springConfig })
  const centerCircleProperty = useSpring({ ...circle, config: springConfig })
  const maskProperties = useSpring({ ...mask, config: springConfig })

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
      aria-label="Toggle color mode"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      <animated.svg className={Styles.svg} style={svgStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <mask id="theme-button-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <animated.circle r="9" fill="black" {...maskProperties} />
        </mask>
        <animated.circle
          className={Styles.centerCircle}
          cx="12"
          cy="12"
          mask="url(#theme-button-mask)"
          {...centerCircleProperty}
        />
        <animated.path
          className={Styles.lines}
          style={linesStyle}
          d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
        />
      </animated.svg>
    </button>
  )
})

export default ThemeButton
