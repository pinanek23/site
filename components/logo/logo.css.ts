import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const svg = style({
  fill: 'none',
  strokeLinecap: 'round'
})

globalStyle(`${svg} path`, {
  strokeWidth: 4,
  transitionProperty: 'stroke',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut
})

const heart = style({
  stroke: vars.color.criticalDefault
})

globalStyle(`${svg} path:not(${heart})`, {
  stroke: vars.color.accentDefault
})

export { svg, heart }
