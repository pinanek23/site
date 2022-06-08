import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const main = style({
  textDecoration: 'none',
  fontWeight: vars.fontWeight.semiBold,
  color: vars.color.textHeaderDefault,
  transitionProperty: 'color',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut,

  selectors: {
    '&:hover': {
      color: vars.color.textHeaderSecondary
    },

    '&:active': {
      color: vars.color.textHeaderTertiary
    }
  }
})

export { main }
