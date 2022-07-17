import { globalStyle } from '@vanilla-extract/css'
import { vars } from './vars.css'

/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box'
})

globalStyle('*', {
  margin: 0
})

globalStyle('html, body', {
  height: '100%'
})

globalStyle('body', {
  lineHeight: vars.lineHeight.default,
  WebkitFontSmoothing: 'antialiased'
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%'
})

globalStyle('input, button, textarea, select', {
  font: 'inherit'
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word'
})

globalStyle('#__next', {
  isolation: 'isolate'
})

globalStyle('p', {
  hyphens: 'auto'
})
