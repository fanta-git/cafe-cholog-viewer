/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "nicovideo.cdn.nimg.jp",
      },
      {
        hostname: "*.cloudfront.net",
      },
    ],
  },
};

module.exports = nextConfig;
