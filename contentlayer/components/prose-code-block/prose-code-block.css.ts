import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const container = style({
  borderRadius: vars.radii.md,
  overflow: 'hidden',
  margin: '1.5em 0'
})

const main = style({
  padding: `${vars.spacing[4]} ${vars.spacing[6]}`,
  overflow: 'auto'
})

globalStyle(`${main} code`, {
  fontFamily: vars.font.mono,
  counterReset: 'line-number',
  counterIncrement: 'line-number 0'
})

// Info
const infoContainer = style({
  fontFamily: vars.font.mono,
  color: '#d4d4d4',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  padding: `${vars.spacing[0.5]} ${vars.spacing[6]}`,
  backgroundColor: '#2e2e2e'
})

const language = style({
  gridColumn: 3
})

// With line numbers
const showLineNumbers = style({})

globalStyle(`${showLineNumbers} ${main}`, {
  paddingLeft: 0
})

globalStyle(`${showLineNumbers} code .line::before`, {
  position: 'sticky',
  left: 0,
  display: 'inline-block',
  textAlign: 'right',
  content: 'counter(line-number)',
  counterIncrement: 'line-number',
  width: vars.spacing[8],
  marginRight: vars.spacing[3],
  color: '#d4d4d4',
  paddingLeft: vars.spacing[2],
  paddingRight: vars.spacing[2],
  backgroundColor: '#1e1e1e'
})

export { container, main, showLineNumbers, infoContainer, language }
