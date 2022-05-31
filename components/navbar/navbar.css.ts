import { style } from '@vanilla-extract/css'
import { vars } from '@/styles'

const wrapper = style({
  position: 'sticky',
  backgroundColor: vars.color.pageBackground,
  boxShadow: vars.shadow.sm,
  transitionProperty: 'background-color',
  transitionDuration: vars.duration.default,
  transitionTimingFunction: vars.ease.inOut
})

const container = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: vars.spacing[6],
  paddingTop: vars.spacing[4],
  paddingBottom: vars.spacing[4],

  '@media': {
    [`${vars.breakpoint.md}`]: {
      gap: vars.spacing[12]
    }
  }
})

const logo = style({
  width: vars.spacing[32]
})

const items = style({
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: vars.spacing[6],
  flex: '1 1 100%',
  order: 1,

  '@media': {
    [`${vars.breakpoint.md}`]: {
      alignItems: 'center',
      flexDirection: 'row',
      flex: '1 1 0'
    }
  }
})

const navItems = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[6],

  '@media': {
    [`${vars.breakpoint.md}`]: {
      alignItems: 'center',
      flexDirection: 'row'
    }
  }
})

const menuButton = style({
  display: 'block',

  '@media': {
    [`${vars.breakpoint.md}`]: {
      display: 'none'
    }
  }
})

const menuOpen = style({
  display: 'flex'
})

const menuClose = style({
  display: 'none',

  '@media': {
    [`${vars.breakpoint.md}`]: {
      display: 'flex'
    }
  }
})

export { wrapper, container, logo, items, navItems, menuButton, menuOpen, menuClose }
