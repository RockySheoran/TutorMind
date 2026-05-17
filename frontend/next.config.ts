import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
