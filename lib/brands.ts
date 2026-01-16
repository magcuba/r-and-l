export type Brand = {
  name: string
  slug: string
  logo?: string
  featured?: boolean
}

export const BRANDS: Brand[] = [
  {
    name: "P&S",
    slug: "ps",
    logo: "/ps-logo.png",
    featured: true,
  },
  {
    name: "Koch-Chemie",
    slug: "koch-chemie",
    logo: "/koch-chemie-logo.png",
    featured: true,
  },
  {
    name: "FalconPro",
    slug: "falconpro",
    logo: "/falconpro-logo.png",
    featured: true,
  },
  {
    name: "Lake Country",
    slug: "lake-country",
    logo: "/lake-country-logo.png",
    featured: true,
  },
]

export const FEATURED_BRANDS = BRANDS.filter((b) => b.featured)
