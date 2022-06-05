// eslint-disable-next-line import/no-unresolved
import { makeSource } from 'contentlayer/source-files'
import { Post, getMdxConfig } from './contentlayer'

const config = makeSource(async () => {
  const mdxConfig = await getMdxConfig()

  return {
    contentDirPath: 'content',
    documentTypes: [Post],
    mdx: mdxConfig
  }
})

export default config
