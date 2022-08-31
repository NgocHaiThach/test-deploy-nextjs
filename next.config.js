/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'st.quantrimang.com'
    ],
  },
}

module.exports = nextConfig
