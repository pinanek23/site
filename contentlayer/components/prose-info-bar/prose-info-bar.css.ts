import { recipe, type RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/styles'

const proseInfoBarVariants = recipe({
  base: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    alignItems: 'center',
    gap: vars.spacing[4],
    margin: '1em 0',
    padding: `${vars.spacing[0.5]} ${vars.spacing[4]}`,
    borderRadius: vars.radii.md,
    transitionProperty: 'background-color',
    transitionDuration: vars.duration.default,
    transitionTimingFunction: vars.ease.inOut
  },

  variants: {
    variant: {
      info: {
        backgroundColor: vars.color.infoBarInfoBackground
      },
      success: {
        backgroundColor: vars.color.infoBarSuccessBackground
      },
      warning: {
        backgroundColor: vars.color.infoBarWarningBackground
      },
      error: {
        backgroundColor: vars.color.infoBarErrorBackground
      }
    }
  }
})

type ProseInfoBarVariants = RecipeVariants<typeof proseInfoBarVariants>

const proseInfoBarIconVariants = recipe({
  base: {
    transitionProperty: 'stroke',
    transitionDuration: vars.duration.default,
    transitionTimingFunction: vars.ease.inOut
  },

  variants: {
    variant: {
      info: {
        stroke: vars.color.accentDefault
      },
      success: {
        stroke: vars.color.successDefault
      },
      warning: {
        stroke: vars.color.alertDefault
      },
      error: {
        stroke: vars.color.criticalDefault
      }
    }
  }
})

type ProseInfoBarIconVariants = RecipeVariants<typeof proseInfoBarIconVariants>

export { proseInfoBarVariants, proseInfoBarIconVariants }
export type { ProseInfoBarVariants, ProseInfoBarIconVariants }
