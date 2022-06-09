import * as React from 'react'
import classnames from 'clsx'
import Image from 'next/image'
import { CategoryItem, TableOfContent } from '@/components/common'
import { classes } from '@/styles'
import * as Styles from './article-layout.css'

interface ArticleLayoutProps {
  title: string
  description: string
  categories: string[]
  headings: Array<{ id: string; level: number; content: string }>
  image?: string
  imageAlt?: string
  children: React.ReactNode
}

function ArticleLayout({ title, description, categories, headings, image, imageAlt, children }: ArticleLayoutProps) {
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
        {image && (
          <div className={Styles.imageContainer}>
            <Image className={Styles.image} src={image} alt={imageAlt} placeholder="blur" layout="fill" priority />
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
