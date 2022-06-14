type PostLayout = 'article' | 'blog'

interface PostImage {
  url: string
  alt: string
}

interface PostHeadings {
  id: string
  level: number
  content: string
}

interface PostFrontMatter {
  title: string
  seoTitle: string
  description: string
  categories: string[]
  image: PostImage
  headings: PostHeadings[]
  layout?: PostLayout
  isPublished: boolean
  publishedDate?: string
  lastUpdated?: string
}

export type { PostFrontMatter }
