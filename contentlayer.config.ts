// eslint-disable-next-line import/no-unresolved
import { makeSource } from 'contentlayer/source-files'
import { Post } from './contentlayer'

const config = makeSource({
  contentDirPath: 'content',
  documentTypes: [Post]
})

export default config
