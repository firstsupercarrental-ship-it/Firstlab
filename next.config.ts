import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes a plain HTML site to /out that can be
  // uploaded to any host (Hostinger, Vercel, Netlify, S3...).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
