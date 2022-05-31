import NextHead from 'next/head'
import { useRouter } from 'next/router'

interface MetadataProps {
  title?: string
  seoTitle?: string
  description?: string
  image?: string
  imageAlt?: string
}

const HOSTNAME = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000' : process.env.NEXT_PUBLIC_HOSTNAME

function Metadata({
  title,
  seoTitle,
  description = "Pinanek23 's personal site",
  image = '/default-logo',
  imageAlt = "Logo of Pinanek23's personal site"
}: MetadataProps): JSX.Element {
  const router = useRouter()

  const formattedTitle = title === undefined ? 'Pinanek23' : `${title} - Pinanek23`
  const formattedSeoTitle = seoTitle === undefined ? formattedTitle : `${seoTitle} - Pinanek23`
  const canonicalUrl = HOSTNAME + (router.pathname === '/' ? '' : router.pathname)

  return (
    <NextHead>
      <title key="meta-title">{formattedTitle}</title>

      <meta key="meta-description" name="description" content={formattedSeoTitle} />

      <meta key="meta-og:type" property="og:type" content="website" />
      <meta key="meta-og:url" property="og:url" content={canonicalUrl} />
      <meta key="meta-og:title" property="og:title" content={formattedSeoTitle} />
      <meta key="meta-og:description" property="og:description" content={description} />
      <meta key="meta-og:image" property="og:image" content={image} />
      <meta key="meta-og:image:alt" property="og:image:alt" content={imageAlt} />

      <meta key="meta-twitter:card" property="twitter:card" content="summary_large_image" />
      <meta key="meta-twitter:url" property="twitter:url" content={canonicalUrl} />
      <meta key="meta-twitter:title" property="twitter:title" content={formattedSeoTitle} />
      <meta key="meta-twitter:description" property="twitter:description" content={description} />
      <meta key="meta-twitter:image" property="twitter:image" content={image} />
      <meta key="meta-twitter:image:alt" property="twitter:image:alt" content={imageAlt} />

      <link key="meta-canonical" rel="canonical" href={canonicalUrl} />
    </NextHead>
  )
}

export default Metadata
