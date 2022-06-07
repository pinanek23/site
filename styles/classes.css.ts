import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/vars.css'

const pageSizing = style({
  maxWidth: '63rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: vars.spacing[6],
  paddingRight: vars.spacing[6]
})

const classes = {
  pageSizing
}

export { classes }
