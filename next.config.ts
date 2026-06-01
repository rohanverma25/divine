import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.divinecosmeticsurgery.com',
      },
    ],
  },
};

export default nextConfig;
