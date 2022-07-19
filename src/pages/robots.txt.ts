import type { APIRoute } from 'astro'

export const get: APIRoute = () => ({
  body: `User-agent: *\nAllow: /\n\nSitemap: ${import.meta.env.SITE}sitemap-index.xml`
})
