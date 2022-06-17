import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const main = style({
  width: vars.spacing[6],
  height: vars.spacing[6],
  stroke: 'currentcolor',
  fill: 'none',
  strokeWidth: 2
})

export { main }
