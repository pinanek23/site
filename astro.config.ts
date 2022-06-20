import { defineConfig } from 'astro/config'
import solid from '@astrojs/solid-js'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

export default defineConfig({
  integrations: [solid()],
  vite: {
    css: {
      postcss: {
        plugins: [autoprefixer(), cssnano()]
      }
    }
  }
})
