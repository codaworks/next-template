const withSvgr = require('next-plugin-svgr');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  fileLoader: true,
  experimental: {
    serverActions: true
  }
}

module.exports = withSvgr(nextConfig)
