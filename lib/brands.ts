export type Brand = {
  name: string
  slug: string
  logo?: string
  featured?: boolean
}

export const BRANDS: Brand[] = [
  { name: "P&S", slug: "ps", logo: "/images/placeholder-logo.png", featured: true },
  { name: "Koch-Chemie", slug: "koch-chemie", logo: "/images/placeholder-logo.png", featured: true },
  { name: "FalconPro", slug: "falconpro", logo: "/images/placeholder-logo.png", featured: true },
  { name: "Lake Country", slug: "lake-country", logo: "/images/placeholder-logo.png", featured: true },
]

export const FEATURED_BRANDS = BRANDS.filter((b) => b.featured)
