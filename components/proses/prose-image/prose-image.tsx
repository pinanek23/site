import * as React from 'react'
import NextImage, { type ImageProps as NextImageProps } from 'next/image'
import * as Styles from './prose-image.css'

type ProseImageProps = NextImageProps

function ProseImage({ ...props }: ProseImageProps): JSX.Element {
  return (
    <span className={Styles.main}>
      <NextImage className={Styles.image} layout="fill" placeholder="blur" {...props} />
    </span>
  )
}

export default ProseImage
