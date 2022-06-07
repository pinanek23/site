import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const main = style({
  position: 'relative',
  width: '100%',
  margin: '1.5em 0'
})

globalStyle(`${main} > span`, {
  position: 'unset !important' as 'unset'
})

const image = style({
  position: 'relative !important' as 'relative',
  objectFit: 'contain',
  width: '100% !important',
  height: 'unset !important',
  borderRadius: vars.radii.md
})

export { main, image }
