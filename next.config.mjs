/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
}

export default nextConfig
