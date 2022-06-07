import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const main = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing[1],
  color: vars.color.accentDefault,
  borderRadius: vars.radii.md,
  textDecoration: 'underline',
  textDecorationColor: 'transparent',
  transitionProperty: 'color, text-decoration-color',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut,

  selectors: {
    '&:hover': {
      textDecorationColor: vars.color.accentDefault
    }
  }
})

export { main }
