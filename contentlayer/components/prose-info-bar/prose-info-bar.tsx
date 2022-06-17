import * as React from 'react'
import { AlertIcon, CheckIcon, InfoIcon, XIcon } from '@/components/icons'
import * as Styles from './prose-info-bar.css'

type ProseInfoBarProps = Styles.ProseInfoBarVariants & {
  children: React.ReactNode
}

function ProseInfoBar({ variant, children }: ProseInfoBarProps): JSX.Element {
  return (
    <div className={Styles.proseInfoBarVariants({ variant })}>
      <span>
        <ProseInfoBarIcon variant={variant} />
      </span>
      <div>{children}</div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/ban-types
type ProseInfoBarIconProps = Styles.ProseInfoBarIconVariants & {}

function ProseInfoBarIcon({ variant }: ProseInfoBarIconProps): JSX.Element {
  const className = Styles.proseInfoBarIconVariants({ variant })

  switch (variant) {
    case 'info':
      return <InfoIcon className={className} />

    case 'success':
      return <CheckIcon className={className} />

    case 'warning':
      return <AlertIcon className={className} />

    case 'error':
      return <XIcon className={className} />

    default:
      return <></>
  }
}

export default ProseInfoBar
