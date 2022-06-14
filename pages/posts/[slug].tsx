import * as React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import {
  bundlePost,
  getPostFolderPath,
  getPostPathBySlug,
  getPostSlugs,
  getPostSource,
  type PostFrontMatter
} from '@/content-config'
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
import type { Page } from '@/types/next'
import type { GetStaticPaths, GetStaticProps } from 'next'

interface PostPageProps {
  content: string
  frontMatter: PostFrontMatter
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
} as never

const PostPage: Page<PostPageProps> = ({ content, frontMatter }) => {
  const ContentComponent = React.useMemo(() => getMDXComponent(content), [content])

  return (
    <>
      <Metadata
        title={frontMatter.title}
        seoTitle={frontMatter.seoTitle}
        description={frontMatter.description}
        image={frontMatter.image.url}
        imageAlt={frontMatter.image.alt}
      />
      <ArticleLayout frontMatter={frontMatter}>
        <ContentComponent components={proseComponents} />
      </ArticleLayout>
    </>
  )
}

const getStaticPaths: GetStaticPaths = () => {
  const slugs = getPostSlugs()
  const paths = slugs.map((slug) => `/posts/${slug}`)

  return {
    paths,
    fallback: false
  }
}

const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }

  const postPath = getPostPathBySlug(slug)
  const postFolderPath = getPostFolderPath(postPath)
  const postSource = getPostSource(postPath)

  const data = await bundlePost(postSource, postFolderPath, slug)

  return {
    props: data
  }
}

export default PostPage
export { getStaticPaths, getStaticProps }
