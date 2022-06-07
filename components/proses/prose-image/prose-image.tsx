import * as React from 'react'
import NextImage, { type ImageProps as NextImageProps } from 'next/image'
import * as Styles from './prose-image.css'

type ProseImageProps = NextImageProps

function ProseImage({ ...props }: ProseImageProps): JSX.Element {
  return (
    <div className={Styles.main}>
      <NextImage className={Styles.image} layout="fill" placeholder="blur" {...props} />
    </div>
  )
}

export default ProseImage
