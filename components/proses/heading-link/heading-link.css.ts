import { globalStyle, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { vars } from '@/styles'

const main = style({
  position: 'absolute',
  left: calc.negate(vars.spacing[8]),
  top: '50%',
  transform: 'translateY(-50%)',
  width: vars.spacing[6],
  height: vars.spacing[6],
  opacity: 0,
  color: vars.color.accentDefault,
  transitionProperty: 'opacity, color',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut,

  selectors: {
    '&:hover': {
      opacity: 1
    }
  }
})

globalStyle(`${main} svg`, {
  fill: 'none',
  stroke: 'currentcolor',
  strokeWidth: 2,
  strokeLinecap: 'round'
})

globalStyle(`:where(h2, h3, h4):hover ${main}`, {
  opacity: 1
})

export { main }
