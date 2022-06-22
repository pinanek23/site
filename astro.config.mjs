import { defineConfig } from 'astro/config'
import { astroImageTools } from 'astro-imagetools'
import solid from '@astrojs/solid-js'

import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

export default defineConfig({
  integrations: [solid(), astroImageTools],

  experimental: {
    integrations: true
  },

  markdown: {
    remarkPlugins: ['remark-gfm', ['remark-smartypants', { dashes: false }]],
    rehypePlugins: ['rehype-external-links'],

    shikiConfig: {
      theme: 'dark-plus'
    }
  },

  vite: {
    css: {
      postcss: {
        plugins: [autoprefixer(), cssnano()]
      }
    }
  }
})
