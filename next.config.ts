import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: false,   // ✅ disables built-in Auth.js interception
  },
  images: {
    remotePatterns: [
      
      {
        protocol: "https",
        hostname: "example.com", // ✅ allows https://example.com/*
      },{
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

export default nextConfig;
