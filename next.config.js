/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "nicovideo.cdn.nimg.jp",
        port: "",
        pathname: "/thumbnails/**"
      },
      {
        protocol: "https",
        hostname: "*.cloudfront.net",
        port: "",
        pathname: "/avatar/**"
      },
      {
        protocol: "https",
        hostname: "kiite.jp",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
