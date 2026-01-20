export type Product = {
  id: string
  brandSlug: string
  name: string
  image: string // stored in /public and referenced as /filename.ext
  href?: string
}

export const PRODUCTS: Product[] = [
  // Koch-Chemie (slug: koch-chemie)
  { id: "kc-protector-wax-pw", brandSlug: "koch-chemie", name: "Protector Wax (PW)", image: "/koch-chemie-protector-wax.png" },
  { id: "kc-mzr-degreaser", brandSlug: "koch-chemie", name: "MZR Degreaser", image: "/placeholder.png" },
  { id: "kc-eulex-adhesive-tar-remover", brandSlug: "koch-chemie", name: "Eulex – Adhesive & Tar Remover", image: "/placeholder.png" },
  { id: "kc-detailing-bucket", brandSlug: "koch-chemie", name: "Koch Chemie Detailing Bucket", image: "/placeholder.png" },
  { id: "kc-pol-star", brandSlug: "koch-chemie", name: "Pol Star – Interior & Leather Cleaner", image: "/placeholder.png" },
  { id: "kc-fine-cut-f6-01", brandSlug: "koch-chemie", name: "Fine Cut F6.01 – Medium Cut Polish", image: "/placeholder.png" },
  { id: "kc-fresh-up", brandSlug: "koch-chemie", name: "Fresh Up – Odor Eliminator", image: "/placeholder.png" },
  { id: "kc-guf", brandSlug: "koch-chemie", name: "GUF – Rubber & Plastic Care", image: "/placeholder.png" },
  { id: "kc-dosing-cap", brandSlug: "koch-chemie", name: "Dosing Cap", image: "/placeholder.png" },
  { id: "kc-motorplast", brandSlug: "koch-chemie", name: "Motorplast – Engine Bay Protectant", image: "/placeholder.png" },
  { id: "kc-panel-prep-spray", brandSlug: "koch-chemie", name: "Panel Preparation Spray", image: "/placeholder.png" },
  { id: "kc-active-foam", brandSlug: "koch-chemie", name: "Active Foam", image: "/placeholder.png" },
  { id: "kc-leather-star", brandSlug: "koch-chemie", name: "Leather Star – Leather Conditioner", image: "/placeholder.png" },
  { id: "kc-tea-textile-cleaner", brandSlug: "koch-chemie", name: "Tea – Textile & Upholstery Cleaner", image: "/placeholder.png" },
  { id: "kc-foamer", brandSlug: "koch-chemie", name: "Foamer", image: "/placeholder.png" },
  { id: "kc-glass-cleaner", brandSlug: "koch-chemie", name: "Glass Cleaner", image: "/placeholder.png" },
  { id: "kc-green-star", brandSlug: "koch-chemie", name: "Green Star – Universal Cleaner", image: "/placeholder.png" },
  { id: "kc-hydro-plast-care", brandSlug: "koch-chemie", name: "Hydro Plast Care", image: "/placeholder.png" },
  { id: "kc-h902-heavy-cut", brandSlug: "koch-chemie", name: "H902 – Heavy Cut Compound", image: "/placeholder.png" },
  { id: "kc-hydrofoam-sealant", brandSlug: "koch-chemie", name: "HydroFoam Sealant", image: "/placeholder.png" },
  { id: "kc-gentle-snow-foam", brandSlug: "koch-chemie", name: "Gentle Snow Foam", image: "/placeholder.png" },
  { id: "kc-magic-wheel-cleaner", brandSlug: "koch-chemie", name: "Magic Wheel Cleaner", image: "/placeholder.png" },
  { id: "kc-nano-magic-shampoo", brandSlug: "koch-chemie", name: "Nano Magic Shampoo", image: "/placeholder.png" },
  { id: "kc-alkaline-wheel-cleaner", brandSlug: "koch-chemie", name: "Alkaline Wheel Cleaner", image: "/placeholder.png" },
  { id: "kc-one-cut-finish-p6-02", brandSlug: "koch-chemie", name: "One Cut & Finish P6.02", image: "/placeholder.png" },
  { id: "kc-gentle-snow-foam-xmas", brandSlug: "koch-chemie", name: "Gentle Snow Foam – Christmas Edition", image: "/placeholder.png" },
  { id: "kc-allround-surface-cleaner", brandSlug: "koch-chemie", name: "Allround Surface Cleaner", image: "/placeholder.png" },
  { id: "kc-m302-micro-cut", brandSlug: "koch-chemie", name: "M302 – Micro Cut Polish", image: "/placeholder.png" },
]
