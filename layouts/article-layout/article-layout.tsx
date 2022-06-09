import * as React from 'react'
import classnames from 'clsx'
import Image from 'next/image'
import { getDateString } from '@/utils/date'
import { CategoryItem, TableOfContent } from '@/components/common'
import { classes } from '@/styles'
import * as Styles from './article-layout.css'
import type { Post } from 'contentlayer/generated'

interface ArticleLayoutProps {
  title: string
  description: string
  categories: string[]
  headings: Post['headings']
  image: Post['image']
  children: React.ReactNode
  publishedDate?: string
  lastUpdated?: string
}

function ArticleLayout({
  title,
  description,
  categories,
  headings,
  image,
  publishedDate,
  lastUpdated,
  children
}: ArticleLayoutProps) {
  return (
    <div className={classnames(classes.pageSizing, Styles.container)}>
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
      <div id="article-content-container" className={Styles.contentContainer}>
        <TableOfContent headings={headings} className={Styles.tableOfContent} />
        <div className={Styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default ArticleLayout
