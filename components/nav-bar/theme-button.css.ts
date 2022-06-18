import { globalStyle, style } from '@vanilla-extract/css'
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
  strokeLinecap: 'round'
})

const centerCircle = style({
  fill: vars.color.textHeaderDefault,
  transitionProperty: 'fill',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut
})

globalStyle(`${button}:hover ${centerCircle}`, {
  fill: vars.color.textHeaderSecondary
})

globalStyle(`${button}:active ${centerCircle}`, {
  fill: vars.color.textHeaderTertiary
})

const lines = style({
  stroke: vars.color.textHeaderDefault,
  transitionProperty: 'stroke',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut
})

globalStyle(`${button}:hover ${lines}`, {
  stroke: vars.color.textHeaderSecondary
})

globalStyle(`${button}:active ${lines}`, {
  stroke: vars.color.textHeaderTertiary
})

export { button, svg, centerCircle, lines }
