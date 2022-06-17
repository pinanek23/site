import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const main = style({
  position: 'relative',
  margin: '1em 0',
  paddingLeft: vars.spacing[4],
  paddingRight: vars.spacing[4],
  fontStyle: 'italic',
  borderLeft: `${vars.spacing[1.5]} solid ${vars.color.inlineCodeBackground}`,
  transitionProperty: 'border-color',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut
})

export { main }
