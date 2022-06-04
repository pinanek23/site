import { globalFontFace, globalStyle } from '@vanilla-extract/css'
import { vars } from '@/styles/vars.css'

globalFontFace('Lexend Deca', {
  fontStyle: 'normal',
  fontWeight: '100 900',
  fontDisplay: 'swap',
  src: 'url("/fonts/LexendDecaVariableFont.woff2") format("woff2")'
})

globalStyle('body', {
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.normal
})
