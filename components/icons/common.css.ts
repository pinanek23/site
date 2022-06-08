import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const main = style({
  stroke: 'currentcolor',
  fill: 'none',
  width: vars.spacing[6],
  height: vars.spacing[6],
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: 2
})

export { main }
