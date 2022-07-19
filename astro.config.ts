import { defineConfig } from 'astro/config'

import solid from '@astrojs/solid-js'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'http://pinanek23.pages.dev/',

  integrations: [solid(), sitemap()]
})
