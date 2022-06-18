type Color = typeof light

const light = {
  pageBackground: '#f8f8f8',

  textDefault: '#121212',

  textHeaderDefault: '#626262',
  textHeaderSecondary: '#323232',
  textHeaderTertiary: '#121212',

  textAltDefault: '#e5e4e9',

  accentDefault: '#006adc',
  accentSecondary: '#067eff',
  accentTertiary: '#2f93ff',

  criticalDefault: '#ef233c',

  successDefault: '#05c793',

  alertDefault: '#ffc847',

  categoryItemBackground: '#e6f2ff',

  inlineCodeBackground: '#e5e4e9',

  // InfoBar
  infoBarInfoBackground: '#e6f2ff',
  infoBarSuccessBackground: '#d7fef4',
  infoBarWarningBackground: '#fff3d6',
  infoBarErrorBackground: '#fde7ea'
}

const dark: Color = {
  pageBackground: '#212121',

  textDefault: '#e8e8e8',

  textHeaderDefault: '#c8c8c8',
  textHeaderSecondary: '#e8e8e8',
  textHeaderTertiary: '#f8f8f8',

  textAltDefault: '#c4c5c9',

  accentDefault: '#d1e6fa',
  accentSecondary: '#067eff',
  accentTertiary: '#2f93ff',

  criticalDefault: '#f68895',

  successDefault: '#74fbd7',

  alertDefault: '#ffe7ad',

  categoryItemBackground: '#1e2731',

  inlineCodeBackground: '#313131',

  // InfoBar
  infoBarInfoBackground: '#202428',
  infoBarSuccessBackground: '#202625',
  infoBarWarningBackground: '#282622',
  infoBarErrorBackground: '#272122'
}

const color = {
  light,
  dark
}

export { color }
