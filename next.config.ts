import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serves the page shell from the CDN and streams only the GitHub section,
  // which is the one part that renders per request.
  experimental: { cacheComponents: true },
};

export default nextConfig;
