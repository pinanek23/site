import * as React from 'react'
import classnames from 'clsx'
import * as CommonStyles from '@/components/icons/common.css'

type AlertIconProps = React.SVGAttributes<SVGElement>

// https://tablericons.com/

function AlertIcon({ className, ...props }: AlertIconProps): JSX.Element {
  return (
    <svg
      className={classnames(CommonStyles.main, className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

export default AlertIcon
