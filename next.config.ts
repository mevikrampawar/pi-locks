import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/pi-locks',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;