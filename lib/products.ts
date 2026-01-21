export type Product = {
  id: string
  brandSlug: string
  slug: string
  name: string
  image: string
  href?: string

  content?: {
    description: { en: string; es: string }
    benefits: { en: string[]; es: string[] }
    howToUse: { en: string; es: string }
  }
}

export const PRODUCTS: Product[] = [
  {
    id: "kc-protector-wax-pw",
    brandSlug: "koch-chemie",
    slug: "protector-wax-pw",
    name: "Protector Wax (PW)",
    image: "/koch-chemie-protector-wax.png",
    content: {
      description: {
  en: "Koch Chemie Protector Wax is a high-performance spray wax designed to add instant gloss, protection, and strong water beading in just one step. Applied during the wash process, it creates a smooth, hydrophobic protective layer that helps repel water, dirt, and road grime while leaving a deep, showroom-style shine. This advanced formula is safe for paint, glass, plastic, rubber, and trim, making it perfect for both professional detailers and car enthusiasts looking for fast, consistent results. Protector Wax is ideal as a maintenance wax or drying aid, helping vehicles stay cleaner longer and making drying quicker and easier.",
  es: "Koch Chemie Protector Wax es una cera en spray de alto rendimiento diseñada para brindar brillo instantáneo, protección y una fuerte repelencia al agua en un solo paso. Aplicada durante el proceso de lavado, crea una capa protectora hidrofóbica y suave que ayuda a repeler el agua, la suciedad y los residuos de la carretera, dejando un brillo profundo tipo showroom. Su fórmula avanzada es segura para pintura, vidrio, plástico, goma y molduras, lo que la hace perfecta tanto para detallistas profesionales como para entusiastas que buscan resultados rápidos y consistentes. Protector Wax es ideal como cera de mantenimiento o como ayuda de secado, manteniendo el vehículo limpio por más tiempo y facilitando un secado más rápido y sencillo.",
},

      benefits: {
  en: [
    "Adds instant gloss and slickness",
    "Strong hydrophobic water beading",
    "Protects against dirt and environmental contaminants",
    "Safe for paint, glass, trim, plastic, and rubber",
    "Fast spray-on, rinse-off application",
    "Perfect for maintenance washes and high-volume detailing",
  ],
  es: [
    "Aporta brillo instantáneo y acabado sedoso",
    "Fuerte repelencia al agua (efecto hidrofóbico)",
    "Protege contra la suciedad y contaminantes ambientales",
    "Seguro para pintura, vidrio, molduras, plástico y goma",
    "Aplicación rápida con spray y enjuague",
    "Ideal para lavados de mantenimiento y detallado de alto volumen",
  ],
},

     howToUse: {
  en: "Apply to a clean, wet vehicle using a foam cannon or sprayer, rinse off, and dry. Protection and shine in minutes.",
  es: "Aplicar sobre un vehículo limpio y mojado usando una pistola de espuma o pulverizador, enjuagar y secar. Protección y brillo en minutos.",
},

    },
  },
  {
  id: "kc-mzr-degreaser",
  brandSlug: "koch-chemie",
  slug: "mzr-degreaser",
  name: "MZR Degreaser",
  image: "/mzr-degreaser.png",
 content: {
  description: {
    en: "MZR Degreaser is a powerful, fast-acting degreaser designed to remove heavy grease, oil, road grime, and built-up dirt from tough surfaces. Formulated for professional use, it cuts through stubborn contamination while remaining versatile enough for multiple cleaning applications. Ideal for engines, wheel wells, undercarriages, shop floors, and industrial surfaces, this degreaser delivers strong cleaning performance without excessive scrubbing, helping you save time and effort on every job.",
    es: "MZR Degreaser es un desengrasante potente y de acción rápida diseñado para eliminar grasa pesada, aceite, suciedad de la carretera y acumulación de contaminantes en superficies difíciles. Formulado para uso profesional, corta la contaminación más resistente manteniendo la versatilidad para múltiples aplicaciones de limpieza. Es ideal para motores, pasos de rueda, bajos, pisos de taller y superficies industriales, ofreciendo un alto poder de limpieza sin necesidad de frotar en exceso, ahorrando tiempo y esfuerzo en cada trabajo.",
  },
  benefits: {
    en: [
      "Heavy-duty degreasing power",
      "Removes oil, grease, and road grime fast",
      "Ideal for engines, undercarriages, and wheel wells",
      "Works on metal, plastic, and hard surfaces",
      "Concentrated formula for dilution control",
      "Perfect for professional and high-volume use",
    ],
    es: [
      "Alto poder desengrasante de uso pesado",
      "Elimina rápidamente aceite, grasa y suciedad de la carretera",
      "Ideal para motores, bajos y pasos de rueda",
      "Funciona en metal, plástico y superficies duras",
      "Fórmula concentrada para control de dilución",
      "Perfecto para uso profesional y de alto volumen",
    ],
  },
  howToUse: {
    en: "Dilute as needed based on contamination level, spray on the surface, agitate if necessary, and rinse thoroughly.",
    es: "Diluir según el nivel de suciedad, aplicar sobre la superficie, agitar si es necesario y enjuagar completamente.",
  },
},
},

  {
  id: "kc-eulex-adhesive-tar-remover",
  brandSlug: "koch-chemie",
  slug: "eulex-adhesive-tar-remover",
  name: "Eulex – Adhesive & Tar Remover",
  image: "/eulex.png",
  content: {
    description: {
      en: "Eulex is a powerful solvent-based cleaner designed to safely and effectively remove adhesive residues, tar, rubber marks, tree sap, and stubborn contamination from paint, glass, and hard surfaces. Its fast-acting formula dissolves sticky and oily residues without damaging clear coat, making it ideal for decal removal, shipping film, and label glue.",
      es: "Eulex es un limpiador potente a base de solventes diseñado para eliminar de forma segura y eficaz residuos de adhesivos, alquitrán, marcas de goma, savia de árboles y contaminantes difíciles de pintura, vidrio y superficies duras. Su fórmula de acción rápida disuelve residuos pegajosos y aceitosos sin dañar el barniz, siendo ideal para remover calcomanías, películas de transporte y restos de pegamento.",
    },
    benefits: {
      en: [
        "Removes adhesive, tar, sap, and rubber residue",
        "Safe on paint, glass, and clear coat",
        "Fast-acting solvent formula",
        "Ideal for decal and sticker removal",
        "Leaves surfaces clean with no sticky residue",
        "Professional-grade cleaning performance",
      ],
      es: [
        "Elimina residuos de adhesivos, alquitrán, savia y goma",
        "Seguro para pintura, vidrio y barniz",
        "Fórmula solvente de acción rápida",
        "Ideal para remover calcomanías y pegatinas",
        "Deja las superficies limpias sin residuos pegajosos",
        "Rendimiento de limpieza de nivel profesional",
      ],
    },
    howToUse: {
      en: "Apply to the contaminated area, allow to dwell briefly, wipe off with a microfiber towel, and repeat if necessary. Do not use on hot surfaces or in direct sunlight.",
      es: "Aplicar sobre el área contaminada, dejar actuar brevemente, limpiar con una toalla de microfibra y repetir si es necesario. No usar sobre superficies calientes ni bajo luz solar directa.",
    },
  },
},
  {
  id: "kc-pol-star",
  brandSlug: "koch-chemie",
  slug: "pol-star",
  name: "Pol Star – Interior & Leather Cleaner",
  image: "/pol-star.png",
  content: {
    description: {
      en: "Pol Star is a gentle yet effective interior and leather cleaner designed to remove dirt, body oils, and light stains while preserving the natural look and feel of surfaces. Its pH-balanced formula cleans deeply without drying out or damaging delicate materials, making it ideal for leather, vinyl, plastic, and upholstery.",
      es: "Pol Star es un limpiador interior y de cuero suave pero eficaz, diseñado para eliminar suciedad, aceites corporales y manchas ligeras, conservando el aspecto y la textura natural de las superficies. Su fórmula con pH balanceado limpia a profundidad sin resecar ni dañar materiales delicados, siendo ideal para cuero, vinilo, plástico y tapicería.",
    },
    benefits: {
      en: [
        "Safe for leather, vinyl, plastic, and fabric",
        "pH-balanced formula for gentle cleaning",
        "Removes body oils and interior grime",
        "Preserves natural texture and finish",
        "Leaves no sticky or glossy residue",
        "Ideal for professional interior detailing",
      ],
      es: [
        "Seguro para cuero, vinilo, plástico y telas",
        "Fórmula con pH balanceado para limpieza suave",
        "Elimina aceites corporales y suciedad interior",
        "Conserva la textura y el acabado natural",
        "No deja residuos pegajosos ni brillosos",
        "Ideal para detallado interior profesional",
      ],
    },
    howToUse: {
      en: "Dilute as recommended, apply with a soft brush or microfiber, gently agitate, and wipe clean. For leather, follow with a conditioner if desired.",
      es: "Diluir según recomendación, aplicar con cepillo suave o microfibra, agitar ligeramente y limpiar. En cuero, aplicar acondicionador después si se desea.",
    },
  },
},
  { id: "kc-pol-star", brandSlug: "koch-chemie", slug: "pol-star", name: "Pol Star – Interior & Leather Cleaner", image: "/placeholder.png" },
  { id: "kc-fine-cut-f6-01", brandSlug: "koch-chemie", slug: "fine-cut-f6-01", name: "Fine Cut F6.01 – Medium Cut Polish", image: "/placeholder.png" },
  { id: "kc-fresh-up", brandSlug: "koch-chemie", slug: "fresh-up", name: "Fresh Up – Odor Eliminator", image: "/placeholder.png" },
  { id: "kc-guf", brandSlug: "koch-chemie", slug: "guf", name: "GUF – Rubber & Plastic Care", image: "/placeholder.png" },
  { id: "kc-dosing-cap", brandSlug: "koch-chemie", slug: "dosing-cap", name: "Dosing Cap", image: "/placeholder.png" },
  { id: "kc-motorplast", brandSlug: "koch-chemie", slug: "motorplast", name: "Motorplast – Engine Bay Protectant", image: "/placeholder.png" },
  { id: "kc-panel-prep-spray", brandSlug: "koch-chemie", slug: "panel-prep-spray", name: "Panel Preparation Spray", image: "/placeholder.png" },
  { id: "kc-active-foam", brandSlug: "koch-chemie", slug: "active-foam", name: "Active Foam", image: "/placeholder.png" },
  { id: "kc-leather-star", brandSlug: "koch-chemie", slug: "leather-star", name: "Leather Star – Leather Conditioner", image: "/placeholder.png" },
  { id: "kc-tea-textile-cleaner", brandSlug: "koch-chemie", slug: "tea-textile-cleaner", name: "Tea – Textile & Upholstery Cleaner", image: "/placeholder.png" },
  { id: "kc-foamer", brandSlug: "koch-chemie", slug: "foamer", name: "Foamer", image: "/placeholder.png" },
  { id: "kc-glass-cleaner", brandSlug: "koch-chemie", slug: "glass-cleaner", name: "Glass Cleaner", image: "/placeholder.png" },
  { id: "kc-green-star", brandSlug: "koch-chemie", slug: "green-star", name: "Green Star – Universal Cleaner", image: "/placeholder.png" },
  { id: "kc-hydro-plast-care", brandSlug: "koch-chemie", slug: "hydro-plast-care", name: "Hydro Plast Care", image: "/placeholder.png" },
  { id: "kc-h902-heavy-cut", brandSlug: "koch-chemie", slug: "h902-heavy-cut", name: "H902 – Heavy Cut Compound", image: "/placeholder.png" },
  { id: "kc-hydrofoam-sealant", brandSlug: "koch-chemie", slug: "hydrofoam-sealant", name: "HydroFoam Sealant", image: "/placeholder.png" },
  { id: "kc-gentle-snow-foam", brandSlug: "koch-chemie", slug: "gentle-snow-foam", name: "Gentle Snow Foam", image: "/placeholder.png" },
  { id: "kc-magic-wheel-cleaner", brandSlug: "koch-chemie", slug: "magic-wheel-cleaner", name: "Magic Wheel Cleaner", image: "/placeholder.png" },
  { id: "kc-nano-magic-shampoo", brandSlug: "koch-chemie", slug: "nano-magic-shampoo", name: "Nano Magic Shampoo", image: "/placeholder.png" },
  { id: "kc-alkaline-wheel-cleaner", brandSlug: "koch-chemie", slug: "alkaline-wheel-cleaner", name: "Alkaline Wheel Cleaner", image: "/placeholder.png" },
  { id: "kc-one-cut-finish-p6-02", brandSlug: "koch-chemie", slug: "one-cut-finish-p6-02", name: "One Cut & Finish P6.02", image: "/placeholder.png" },
  { id: "kc-gentle-snow-foam-xmas", brandSlug: "koch-chemie", slug: "gentle-snow-foam-christmas-edition", name: "Gentle Snow Foam – Christmas Edition", image: "/placeholder.png" },
  { id: "kc-allround-surface-cleaner", brandSlug: "koch-chemie", slug: "allround-surface-cleaner", name: "Allround Surface Cleaner", image: "/placeholder.png" },
  { id: "kc-m302-micro-cut", brandSlug: "koch-chemie", slug: "m302-micro-cut", name: "M302 – Micro Cut Polish", image: "/placeholder.png" },
]
