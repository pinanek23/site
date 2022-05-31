type Color = typeof light

const light = {
  pageBackground: '#f8f8f8',

  textDefault: '#121212',

  accentDefault: '#006adc',

  criticalDefault: '#dc2f02'
}

const dark: Color = {
  pageBackground: '#212121',

  textDefault: '#e8e8e8',

  accentDefault: '#d1e6fa',

  criticalDefault: '#fd5d35'
}

const color = {
  light,
  dark
}

export { color }
