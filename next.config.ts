import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      { hostname: "localhost" },
    ],
  },
  /* config options here */
};

export default nextConfig;
