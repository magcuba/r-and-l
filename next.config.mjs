/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  output: "export",
  basePath: isProd ? "/r-and-l" : "",
  assetPrefix: isProd ? "/r-and-l" : "",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
}

export default nextConfig
