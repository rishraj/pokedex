import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'www.pokemon.com',
      port: '',
    }]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  //reactStrictMode: false
};


export default nextConfig;
