/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "nicovideo.cdn.nimg.jp",
      },
    ],
  },
};

module.exports = nextConfig;
