type Color = typeof light

const light = {
  pageBackground: '#f8f8f8',

  textDefault: '#121212',

  textHeaderDefault: '#626262',
  textHeaderSecondary: '#323232',
  textHeaderTertiary: '#121212',

  accentDefault: '#006adc',
  accentSecondary: '#067eff',
  accentTertiary: '#2f93ff',

  criticalDefault: '#dc2f02',

  inlineCodeBackground: '#e5e4e9'
}

const dark: Color = {
  pageBackground: '#212121',

  textDefault: '#e8e8e8',

  textHeaderDefault: '#c8c8c8',
  textHeaderSecondary: '#e8e8e8',
  textHeaderTertiary: '#f8f8f8',

  accentDefault: '#d1e6fa',
  accentSecondary: '#067eff',
  accentTertiary: '#2f93ff',

  criticalDefault: '#fd5d35',

  inlineCodeBackground: '#313131'
}

const color = {
  light,
  dark
}

export { color }
