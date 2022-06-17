import { ArticleLayout, BlogLayout } from '@/layouts'
import { Metadata } from '@/components'
import { MDXContent } from '@/contentlayer/components'
import { allPosts, type Post } from 'contentlayer/generated'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { Page } from '@/types/next'

interface PostPageProps {
  post: Post
}

const PostPage: Page<PostPageProps> = ({
  post: { title, seoTitle, description, categories, headings, image, body, layout, publishedDate, lastUpdated }
}) => {
  const header = { title, categories, description, image, publishedDate, lastUpdated }

  return (
    <>
      <Metadata title={title} seoTitle={seoTitle} description={description} image={image?.url} imageAlt={image?.alt} />
      {layout === 'article' && (
        <ArticleLayout header={header} headings={headings}>
          <MDXContent code={body.code} />
        </ArticleLayout>
      )}
      {layout === 'blog' && (
        <BlogLayout header={header}>
          <MDXContent code={body.code} />
        </BlogLayout>
      )}
    </>
  )
}

const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = allPosts.filter(({ isPublished }) => isPublished).map(({ slug }) => `/posts/${slug}`)

  return {
    paths,
    fallback: false
  }
}

const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }

  const post = allPosts.find((post) => post.slug === slug)

  return {
    props: { post }
  }
}

export default PostPage
export { getStaticPaths, getStaticProps }
