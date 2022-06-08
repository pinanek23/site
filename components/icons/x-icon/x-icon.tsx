import * as React from 'react'
import classnames from 'clsx'
import * as CommonStyles from '@/components/icons/common.css'

type XIconProps = React.SVGAttributes<SVGElement>

// https://tablericons.com/

function XIcon({ className, ...props }: XIconProps): JSX.Element {
  return (
    <svg
      className={classnames(CommonStyles.main, className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M10 10l4 4m0 -4l-4 4" />
    </svg>
  )
}

export default XIcon
