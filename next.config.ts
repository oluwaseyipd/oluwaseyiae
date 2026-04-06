import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "oluwaseyiae.vercel.app" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  distDir: 'dist', // Next.js will now build into a folder named "dist"

};

export default nextConfig;
