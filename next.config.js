/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["avatars.dicebear.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;