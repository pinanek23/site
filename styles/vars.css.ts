import { createGlobalThemeContract, createGlobalTheme } from '@vanilla-extract/css'
import * as Tokens from './tokens'

const camelCaseToKebabCaseRegex = /((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g

function getBaseVarName(_value: string | null, path: string[]): string {
  const name = path
    .join('-')
    .replace('.', '_')
    .replace('/', '__')
    .replace(camelCaseToKebabCaseRegex, '-$1')
    .toLowerCase()

  return name
}

function getColorVarName(_value: string | null, path: string[]): string {
  const name = path.join('-').replace(camelCaseToKebabCaseRegex, '-$1').toLowerCase()

  return `color-${name}`
}

const { color: colorTokens, breakpoint, ...baseTokens } = Tokens

const baseVars = createGlobalThemeContract({ ...baseTokens }, getBaseVarName)
createGlobalTheme(':root', baseVars, { ...baseTokens })

const colorVars = createGlobalThemeContract(colorTokens.light, getColorVarName)
createGlobalTheme(':root', colorVars, colorTokens.light)
createGlobalTheme(':root.dark', colorVars, colorTokens.dark)

const vars = {
  color: colorVars,
  breakpoint,
  ...baseVars
}

export { vars }
