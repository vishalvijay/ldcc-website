import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "*.manuscdn.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "files.manuscdn.com" },
    ],
  },
};

export default nextConfig;
