import { defineConfig } from 'astro/config'

import solid from '@astrojs/solid-js'

export default defineConfig({
  site: 'http://pinanek23.pages.dev/',

  integrations: [solid()]
})
