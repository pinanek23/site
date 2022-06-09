import { globalStyle } from '@vanilla-extract/css'
import { vars } from '@/styles/vars.css'
import './reset.css'
import './typography.css'

globalStyle('html', {
  scrollBehavior: 'smooth'
})

globalStyle('body', {
  color: vars.color.textDefault,
  backgroundColor: vars.color.pageBackground,
  transitionProperty: 'background-color',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut
})
