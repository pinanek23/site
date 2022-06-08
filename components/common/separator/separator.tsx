import * as React from 'react'
import classnames from 'clsx'
import * as Styles from './separator.css'

type SeparatorProps = React.HTMLAttributes<HTMLSpanElement>

function Separator({ className, ...props }: SeparatorProps): JSX.Element {
  return <span className={classnames(Styles.main, className)} {...props} />
}

export default Separator
