// eslint-disable-next-line import/no-unresolved
import { defineDocumentType } from 'contentlayer/source-files'
import { Image } from './image'

const postCategories = ['Hello', 'Nothing']

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/*.md',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
      description: 'Title of a post'
    },
    seoTitle: {
      type: 'string',
      required: true,
      description: 'SEO title of a post'
    },
    image: {
      type: 'nested',
      of: Image,
      description: 'Thumbnail information'
    },
    description: {
      type: 'string',
      required: true,
      description: 'Description of a post'
    },
    categories: {
      type: 'list',
      required: true,
      of: { type: 'enum', options: postCategories },
      description: 'Categories of a post (Tags)'
    },
    layout: {
      type: 'enum',
      options: ['article', 'blog'],
      default: 'article',
      description: "Layout of the post, ArticleLayout has a TOC but BlogLayout doesn't 😖"
    },
    isPublished: {
      type: 'boolean',
      required: true,
      default: false,
      description: 'Indicate a post is published or not'
    },
    publishedDate: {
      type: 'date',
      description: 'Published date of a post'
    },
    lastUpdated: {
      type: 'date',
      description: 'Last updated date of a post'
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace(/\.md$/, ''),
      description: 'Use to find a post in getStaticProps 😖'
    }
  }
}))

export { Post }
