import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@/styles'

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[2],
  width: '100%',

  '@media': {
    [`${vars.breakpoint.lg}`]: {
      top: vars.spacing[28],
      width: vars.spacing[56],
      position: 'sticky'
    }
  }
})

const tableOfContentItems = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9375rem',
    textDecoration: 'none',
    color: vars.color.textDefault,
    transitionProperty: 'color, font-weight',
    transitionDuration: vars.duration.default,
    transitionTimingFunction: vars.ease.inOut
  },
  variants: {
    level: {
      2: {},
      3: {
        paddingLeft: vars.spacing[3]
      },
      4: {
        paddingLeft: vars.spacing[6]
      }
    },
    state: {
      isSelected: {
        color: vars.color.accentDefault,
        fontWeight: vars.fontWeight.bold
      }
    }
  }
})

const icon = style({
  width: vars.spacing[6],
  height: vars.spacing[6],
  stroke: 'currentcolor',
  fill: 'none',
  strokeWidth: 2
})

export { container, tableOfContentItems, icon }
