/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["citisquare.sfo3.digitaloceanspaces.com"],
  },
};

module.exports = nextConfig;
