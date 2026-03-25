import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'occ-0-5547-1123.1.nflxso.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'help.nflxext.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
