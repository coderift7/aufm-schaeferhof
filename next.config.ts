import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/aufm-schaeferhof",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
