import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[2],
  width: '100%',

  '@media': {
    [`${vars.breakpoint.lg}`]: {
      top: vars.spacing[28],
      width: vars.spacing[56],
      position: 'sticky'
    }
  }
})

export { container }
