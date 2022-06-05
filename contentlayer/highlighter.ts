import * as Shiki from 'shiki'

type SupportedLanguages = typeof supportedLanguages[number]

const supportedLanguages = [
  'text',
  'bash',
  'c',
  'cpp',
  'c#',
  'html',
  'js',
  'json',
  'jsonc',
  'php',
  'ts',
  'tsx',
  'py',
  'yaml'
] as const

const [, ...highlightLanguages] = supportedLanguages

function getHighlighter() {
  return Shiki.getHighlighter({
    theme: 'dark-plus',
    langs: [...highlightLanguages]
  })
}

export { getHighlighter, type SupportedLanguages }
