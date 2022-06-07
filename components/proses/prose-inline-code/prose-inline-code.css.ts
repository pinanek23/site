import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const main = style({
  fontFamily: vars.font.mono,
  padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
  borderRadius: vars.radii.sm,
  backgroundColor: vars.color.inlineCodeBackground,
  transitionProperty: 'background-color',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut
})

export { main }
