import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ogport',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
