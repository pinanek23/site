function get() {
  return {
    body: `User-agent: *\nAllow: /\nSitemap: ${import.meta.env.SITE}sitemap-index.xml`
  }
}

export { get }
