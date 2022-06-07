import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const main = style({
  position: 'relative',
  margin: '1em 0',
  fontSize: '1.125em',
  transitionProperty: 'color',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut
})

export { main }
