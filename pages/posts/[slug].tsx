import { ArticleLayout } from '@/layouts'
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
  return (
    <>
      <Metadata title={title} seoTitle={seoTitle} description={description} image={image?.url} imageAlt={image?.alt} />
      {layout === 'article' && (
        <ArticleLayout
          title={title}
          description={description}
          categories={categories}
          headings={headings}
          image={image}
          publishedDate={publishedDate}
          lastUpdated={lastUpdated}
        >
          <MDXContent code={body.code} />
        </ArticleLayout>
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
