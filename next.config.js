/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['education.securiti.ai', 'catalog-education.oracle.com', 'www.hackerrank.com', 'www.credly.com'],
  },
}

module.exports = nextConfig