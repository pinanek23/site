// eslint-disable-next-line import/no-unresolved
import { useMDXComponent } from 'next-contentlayer/hooks'
import { ArticleLayout } from '@/layouts'
import { Metadata } from '@/components'
import { allPosts, type Post } from 'contentlayer/generated'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { Page } from '@/types/next'

interface PostPageProps {
  post: Post
}

const PostPage: Page<PostPageProps> = ({ post: { title, seoTitle, description, image, imageAlt, body, layout } }) => {
  const MDXContent = useMDXComponent(body.code)

  return (
    <>
      <Metadata title={title} seoTitle={seoTitle} description={description} image={image} imageAlt={imageAlt} />
      {layout === 'article' && (
        <ArticleLayout>
          <MDXContent />
        </ArticleLayout>
      )}
    </>
  )
}

const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = allPosts.map((post) => post.url)

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
