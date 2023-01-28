/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakeimg.pl', 'localhost', 'https://test.employee.tokoweb.xyz'],
  },
}

module.exports = nextConfig
