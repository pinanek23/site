// eslint-disable-next-line import/no-unresolved
import { makeSource } from 'contentlayer/source-files'
import { Post, mdxConfig } from './contentlayer'

const config = makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: mdxConfig
})

export default config
