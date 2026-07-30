import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export — builds to `out/`, deployable to any shared hosting via FTP.
  output: 'export',
  // Emits `/marka/index.html` so Apache serves subpages without rewrite rules.
  trailingSlash: true,
  images: {
    // Image optimization needs a server; static export must serve images as-is.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dobreoknaszczecin.pl',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'vekaprod-media.e-spirit.cloud',
      },
    ],
  },
};

export default nextConfig;
