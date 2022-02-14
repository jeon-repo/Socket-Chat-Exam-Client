/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // comment test
  async redirects() {
    return [
      {
        source: '/api/test-redirect/:path*',
        destination: 'https://www.google.com/:path*',
        permanent: false
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/test-rewrite',
        destination: `http://www.naver.com`
      },
    ];
  }
}

module.exports = nextConfig
