// eslint-disable-next-line import/no-unresolved
import { defineNestedType } from 'contentlayer/source-files'

const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    url: {
      type: 'string',
      required: true,
      description: 'Thumbnail URL'
    },
    alt: {
      type: 'string',
      required: true,
      description: 'Thumbnail description'
    }
  }
}))

export { Image }
