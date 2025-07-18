import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  images: {
    domains: ["localhost:3000", "giliza.com", "giliza-coffee.netlify.app"],
    unoptimized: true,
  },
};

export default nextConfig;
