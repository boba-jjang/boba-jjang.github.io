/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: "export",

  images: {
    unoptimized: true,
  },

  compress: true,
  swcMinify: true,

  productionBrowserSourceMaps: false,
  poweredByHeader: false,
};

module.exports = nextConfig;