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
      // Se houver outros domínios da netflix, você precisará adicionar aqui também
    ],
  },
};

export default nextConfig;
