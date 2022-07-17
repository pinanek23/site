import { createGlobalThemeContract, createGlobalTheme } from '@vanilla-extract/css'
import * as Tokens from './tokens'

type ColorTokens = {
  [Property in keyof typeof colorTokens]: string
}

interface ColorTokensMode {
  light: ColorTokens
  dark: ColorTokens
}

const camelCaseToKebabCaseRegex = /((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g

function getColorVarName(_value: string | null, path: string[]): string {
  const name = path.join('-').replace(camelCaseToKebabCaseRegex, '-$1').toLowerCase()

  return `color-${name}`
}

const { color: colorTokens, ...baseTokens } = Tokens
const { light: colorTokensLight, dark: colorTokensDark } = Object.entries(colorTokens).reduce(
  (acc: { light: Record<string, string>; dark: Record<string, string> }, [key, value]) => {
    acc.light[key] = value[0]
    acc.dark[key] = value[1]

    return acc
  },
  {
    light: {},
    dark: {}
  }
) as ColorTokensMode

const colorVars = createGlobalThemeContract(colorTokensLight, getColorVarName)
createGlobalTheme(':root', colorVars, colorTokensLight)
createGlobalTheme(':root.dark', colorVars, colorTokensDark)

const vars = {
  color: colorVars,
  ...baseTokens
}

export { vars }
