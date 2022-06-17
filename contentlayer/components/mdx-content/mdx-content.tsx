/* eslint-disable import/no-unresolved */
import { useMDXComponent } from 'next-contentlayer/hooks'
import ProseCodeBlock from '@/contentlayer/components/prose-code-block'
import ProseInlineCode from '../prose-inline-code'
import ProseBlockquote from '../prose-blockquote'
import ProseInfoBar from '../prose-info-bar'
import ProseLink from '../prose-link'
import ProseParagraph from '../prose-paragraph'
import ProseHeading2 from '../prose-heading-2'
import ProseHeading3 from '../prose-heading-3'
import ProseHeading4 from '../prose-heading-4'
import ProseImage from '../prose-image'
import ProseOrderedList from '../prose-ordered-list'
import ProseUnorderedList from '../prose-unordered-list'

interface MDXContentProps {
  code: string
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

function MDXContent({ code }: MDXContentProps): JSX.Element {
  const MDXComponent = useMDXComponent(code || '')

  return <MDXComponent components={{ ...proseComponents }} />
}

export default MDXContent
