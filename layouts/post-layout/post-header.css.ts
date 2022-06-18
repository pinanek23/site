import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@/styles'

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

export { categories, dates, header, image, imageContainer }
