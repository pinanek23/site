import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const main = style({
  display: 'block',
  backgroundColor: vars.color.textAltDefault,
  height: '3px',
  borderRadius: vars.radii.sm
})

export { main }
