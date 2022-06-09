import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@/styles'

const main = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    fontSize: vars.fontSize.sm,
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

export { main }
