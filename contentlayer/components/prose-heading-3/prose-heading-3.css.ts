import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const main = style({
  position: 'relative',
  margin: '1.5rem 0 0.5rem',
  fontSize: '1.375em',
  transitionProperty: 'color',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut,
  scrollMarginTop: vars.spacing[28]
})

export { main }
