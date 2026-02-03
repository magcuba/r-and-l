/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  output: "export",
  basePath: isProd ? "/r-and-l" : "",
  assetPrefix: isProd ? "/r-and-l" : "",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/r-and-l" : "",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
}

export default nextConfig
