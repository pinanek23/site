import * as React from 'react'
import classnames from 'clsx'
import * as CommonStyles from '@/components/icons/common.css'

type InfoIconProps = React.SVGAttributes<SVGElement>

// https://tablericons.com/

function InfoIcon({ className, ...props }: InfoIconProps): JSX.Element {
  return (
    <svg
      className={classnames(CommonStyles.main, className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
      <polyline points="11 12 12 12 12 16 13 16" />
    </svg>
  )
}

export default InfoIcon
