const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withExportImages = require('next-export-optimize-images')

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

const configWithPlugin = () => {
  const plugins = [withVanillaExtract, withExportImages]
  return plugins.reduce((config, withPlugin) => withPlugin(config), nextConfig)
}

module.exports = configWithPlugin
