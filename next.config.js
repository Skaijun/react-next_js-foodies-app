/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.S3_IMAGES_STORAGE_HOSTNAME,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
