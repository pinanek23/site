// eslint-disable-next-line import/no-unresolved
import { useMDXComponent } from 'next-contentlayer/hooks'
import { ArticleLayout } from '@/layouts'
import { Metadata } from '@/components/common'
import {
  ProseBlockquote,
  ProseCodeBlock,
  ProseHeading2,
  ProseHeading3,
  ProseHeading4,
  ProseImage,
  ProseInfoBar,
  ProseInlineCode,
  ProseLink,
  ProseOrderedList,
  ProseParagraph,
  ProseUnorderedList
} from '@/components/proses'
import { allPosts, type Post } from 'contentlayer/generated'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { Page } from '@/types/next'

interface PostPageProps {
  post: Post
}

const proseComponents = {
  pre: ProseCodeBlock,
  inlineCode: ProseInlineCode,
  blockquote: ProseBlockquote,
  infobar: ProseInfoBar,
  a: ProseLink,
  p: ProseParagraph,
  h2: ProseHeading2,
  h3: ProseHeading3,
  h4: ProseHeading4,
  img: ProseImage,
  ol: ProseOrderedList,
  ul: ProseUnorderedList
}

const PostPage: Page<PostPageProps> = ({
  post: { title, seoTitle, description, categories, headings, image, body, layout, publishedDate, lastUpdated }
}) => {
  const MDXContent = useMDXComponent(body.code || '')

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
          <MDXContent components={{ ...proseComponents }} />
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
