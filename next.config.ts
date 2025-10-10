import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'neeuv3c4wu4qzcdw.public.blob.vercel-storage.com',
        pathname: '/logos/**',
      },
    ],
  },
};

export default nextConfig;
