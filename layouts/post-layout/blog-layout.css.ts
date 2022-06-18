import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const container = style({
  margin: `${vars.spacing[12]} auto`,
  paddingLeft: vars.spacing[6],
  paddingRight: vars.spacing[6],
  maxWidth: '53rem'
})

const content = style({
  width: '100%',
  minWidth: 0
})

export { container, content }
