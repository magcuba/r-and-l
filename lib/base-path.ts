const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

export function withBasePath(src: string): string {
  if (!src) return src
  if (!src.startsWith("/")) return src
  if (!basePath) return src
  return `${basePath}${src}`
}
