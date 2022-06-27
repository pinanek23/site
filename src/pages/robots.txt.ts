import type { APIRoute } from 'astro'

const get: APIRoute = () => ({
  body: `User-agent: *\nAllow: /\nSitemap: ${import.meta.env.SITE}sitemap-index.xml`
})

export { get }
