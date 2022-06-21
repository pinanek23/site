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

  vite: {
    css: {
      postcss: {
        plugins: [autoprefixer(), cssnano()]
      }
    }
  }
})
