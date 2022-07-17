const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin({ identifiers: 'debug' })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true
  }
}

const configWithPlugin = () => {
  const plugins = [withVanillaExtract]
  return plugins.reduce((config, withPlugin) => withPlugin(config), nextConfig)
}

module.exports = configWithPlugin
