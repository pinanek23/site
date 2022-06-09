import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const main = style({
  position: 'relative',
  margin: '1.5em 0 0.5em',
  fontSize: '1.75em',
  transitionProperty: 'color',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut,
  scrollMarginTop: vars.spacing[28]
})

export { main }
