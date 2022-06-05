import { s } from 'hastscript'

// https://tablericons.com/

const linkIcon = s('svg', { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, [
  s('path', { d: 'M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5' }),
  s('path', { d: 'M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5' })
])

export { linkIcon }
