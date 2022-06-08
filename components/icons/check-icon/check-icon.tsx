import * as React from 'react'
import classnames from 'clsx'
import * as CommonStyles from '@/components/icons/common.css'

type CheckIconProps = React.SVGAttributes<SVGElement>

// https://tablericons.com/

function CheckIcon({ className, ...props }: CheckIconProps): JSX.Element {
  return (
    <svg
      className={classnames(CommonStyles.main, className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2l4 -4" />
    </svg>
  )
}

export default CheckIcon
