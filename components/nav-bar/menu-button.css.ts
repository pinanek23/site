import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const button = style({
  width: vars.spacing[6],
  height: vars.spacing[6],
  padding: 0,
  border: 0,
  background: 'none',
  cursor: 'pointer'
})

const svg = style({
  strokeWidth: 2,
  fill: 'none',
  strokeLinecap: 'round',
  stroke: vars.color.textHeaderDefault,
  transitionProperty: 'stroke',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut,

  selectors: {
    '&:hover': {
      stroke: vars.color.textHeaderSecondary
    },

    '&:active': {
      stroke: vars.color.textHeaderTertiary
    }
  }
})

export { button, svg }
