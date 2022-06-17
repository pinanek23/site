import Image from 'next/image'
import { getDateString } from '@/utils/date'
import { CategoryItem } from '@/components'
import * as Styles from './post-header.css'
import type { Post } from 'contentlayer/generated'

interface PostHeaderProps {
  title: string
  description: string
  categories: string[]
  image: Post['image']
  publishedDate?: string
  lastUpdated?: string
}

function PostHeader({
  title,
  description,
  categories,
  image,
  publishedDate,
  lastUpdated
}: PostHeaderProps): JSX.Element {
  return (
    <div className={Styles.header}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={Styles.categories}>
        {categories.map((category) => (
          <CategoryItem key={category} href={`/categories/${category}`}>
            {category}
          </CategoryItem>
        ))}
      </div>
      {publishedDate && (
        <div className={Styles.dates}>
          <span>{getDateString(publishedDate)}</span>
          {lastUpdated && (
            <>
              <span>-</span>
              <span>Last updated: {getDateString(lastUpdated)}</span>
            </>
          )}
        </div>
      )}
      {image && (
        <div className={Styles.imageContainer}>
          <Image className={Styles.image} src={image.url} alt={image.alt} placeholder="blur" layout="fill" priority />
        </div>
      )}
    </div>
  )
}

export default PostHeader
export type { PostHeaderProps }
