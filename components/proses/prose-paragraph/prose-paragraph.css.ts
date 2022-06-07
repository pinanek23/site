import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const main = style({
  margin: '1em 0',
  lineHeight: 'calc(1em + 0.75rem)',
  transitionProperty: 'color',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut
})

export { main }
