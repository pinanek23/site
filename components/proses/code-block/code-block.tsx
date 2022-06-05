import * as React from 'react'
import classnames from 'clsx'
import * as Styles from './code-block.css'
import type { SupportedLanguages } from '@/contentlayer'

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  language: SupportedLanguages
  fileName: string
  showLineNumbers?: boolean
}

const languageNames: Record<SupportedLanguages, string> = {
  'c#': 'CSharp',
  bash: 'Bash',
  c: 'C',
  cpp: 'C++',
  html: 'HTML',
  js: 'Javascript',
  json: 'JSON',
  jsonc: ' JSONC',
  php: 'PHP',
  py: 'Python',
  ts: 'Typescript',
  tsx: 'TSX',
  yaml: 'YAML',
  text: 'Text'
}

function CodeBlock({
  language,
  fileName,
  showLineNumbers,
  className,
  children,
  ...props
}: CodeBlockProps): JSX.Element {
  return (
    <pre className={classnames(className, Styles.container, showLineNumbers && Styles.showLineNumbers)} {...props}>
      <div className={Styles.infoContainer}>
        {fileName && <span>{fileName}</span>}
        <span className={Styles.language}>{languageNames[language]}</span>
      </div>
      <div className={classnames(Styles.main)}>{children}</div>
    </pre>
  )
}

export default CodeBlock
