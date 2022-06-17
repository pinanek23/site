import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const main = style({
  textDecoration: 'none',
  color: vars.color.accentDefault,
  backgroundColor: vars.color.categoryItemBackground,
  padding: `${vars.spacing[1]} ${vars.spacing[4]}`,
  borderRadius: vars.radii.md,
  cursor: 'pointer',
  transitionProperty: 'color, background-color',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut
})

export { main }
