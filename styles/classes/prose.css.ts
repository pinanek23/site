import { globalStyle, style } from '@vanilla-extract/css'

// https://github.com/unocss/unocss/blob/main/packages/preset-typography/src/preflights/default.ts
const prose = style({})

globalStyle(`${prose} p, ul, ol`, {
  margin: '1em 0',
  lineHeight: 'calc(1em + 0.7em)'
})

globalStyle(`${prose} h2`, {
  margin: '1.5em 0 0.5em',
  fontSize: '1.75em'
})

globalStyle(`${prose} h3`, {
  margin: '1.5rem 0 0.5rem',
  fontSize: '1.375em'
})

globalStyle(`${prose} h4`, {
  margin: '1em 0',
  fontSize: '1.125em'
})

globalStyle(`${prose} ul, ol`, {
  paddingInlineStart: '1.75em'
})

export { prose }
