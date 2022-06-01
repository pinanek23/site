const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const { withContentlayer } = require('next-contentlayer')

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

const configWithPlugin = () => {
  const plugins = [withVanillaExtract, withContentlayer]
  return plugins.reduce((config, withPlugin) => withPlugin(config), nextConfig)
}

module.exports = configWithPlugin
