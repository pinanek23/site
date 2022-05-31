const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

const configWithPlugin = () => {
  const plugins = [withVanillaExtract]
  return plugins.reduce((config, withPlugin) => withPlugin(config), nextConfig)
}

module.exports = configWithPlugin
