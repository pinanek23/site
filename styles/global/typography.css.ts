import { globalFontFace, globalStyle } from '@vanilla-extract/css'
import { vars } from '@/styles/vars.css'

globalFontFace('Cabin', {
  fontStyle: 'normal',
  fontWeight: '400 700',
  fontDisplay: 'swap',
  src: 'url("/fonts/CabinVariable.woff2") format("woff2")'
})

globalFontFace('Cabin', {
  fontStyle: 'italic',
  fontWeight: '400 700',
  fontDisplay: 'swap',
  src: 'url("/fonts/CabinItalicVariable.woff2") format("woff2")'
})

globalStyle('body', {
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.normal
})
