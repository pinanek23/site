import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const container = style({
  marginTop: vars.spacing[12],
  marginBottom: vars.spacing[12]
})

const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.spacing[3],
  textAlign: 'center',
  transitionProperty: 'color',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut
})

globalStyle(`${header} h1`, {
  lineHeight: 'calc(1em + 0.6rem)'
})

const categories = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[3]
})

const dates = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[1.5],
  fontSize: vars.fontSize.lg,

  '@media': {
    [`${vars.breakpoint.lg}`]: {
      gap: vars.spacing[3]
    }
  }
})

const imageContainer = style({
  position: 'relative',
  width: '100%',
  margin: '1.5em 0'
})

globalStyle(`${imageContainer} > span`, {
  position: 'unset !important' as 'unset'
})

const image = style({
  position: 'relative !important' as 'relative',
  objectFit: 'contain',
  width: '100% !important',
  height: 'unset !important',
  borderRadius: vars.radii.lg
})

const contentContainer = style({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  marginTop: vars.spacing[4],
  marginBottom: vars.spacing[4],

  '@media': {
    [`${vars.breakpoint.lg}`]: {
      flexDirection: 'row-reverse',
      gap: vars.spacing[16]
    }
  }
})

const tableOfContent = style({
  flexGrow: 1,
  flexShrink: 0
})

const content = style({
  width: '100%',
  minWidth: 0
})

export { container, header, categories, dates, imageContainer, image, contentContainer, tableOfContent, content }
