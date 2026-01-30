export type Variant = {
  size: "1L" | "5L" | "1 Gal" | "5 Gal" | "32 oz" | "16 oz" | "1 Pint" | "1 Quart"
  image: string
  sku?: string
  price?: number
}

export type Product = {
  id: string
  brandSlug: string
  slug: string
  name: string
  image: string
  href?: string

  // Optional size variants (1L / 5L)
  variants?: Variant[]

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
    image: "/koch-chemie-protector-wax.png", // 1L (default)
    variants: [
      { size: "1L", image: "/koch-chemie-protector-wax.png" },
      { size: "5L", image: "/koch-chemie-protector-wax5L.png" },
    ],
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
    image: "/mzr-degreaser.png", // 1L (default)
    variants: [
      { size: "1L", image: "/mzr-degreaser.png" },
      { size: "5L", image: "/mzr-degreaser5L.png" },
    ],
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
    image: "/pol-star.png", // 1L (default)
    variants: [
      { size: "1L", image: "/pol-star.png" },
      { size: "5L", image: "/pol-star5L.png" },
    ],
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

  {
    id: "kc-fine-cut-f6-01",
    brandSlug: "koch-chemie",
    slug: "fine-cut-f6-01",
    name: "Fine Cut F6.01 – Medium Cut Polish",
    image: "/fine-cut-f6-01.png",
    content: {
      description: {
        en: "Fine Cut F6.01 is a medium cut polish designed to remove moderate defects such as swirl marks, oxidation, and sanding marks while leaving a high-gloss finish. It delivers strong correction with an excellent finishing result, making it a go-to polish for one-step or two-step paint correction on modern clear coats.",
        es: "Fine Cut F6.01 es un pulimento de corte medio diseñado para eliminar defectos moderados como marcas circulares, oxidación y marcas de lijado, dejando un acabado de alto brillo. Ofrece buena corrección con un excelente resultado de terminación, siendo ideal para correcciones de pintura de uno o dos pasos en barnices modernos.",
      },
      benefits: {
        en: [
          "Removes swirl marks and moderate paint defects",
          "High-gloss finish with strong correction",
          "Low dusting and easy wipe-off",
          "Works well in one-step or two-step correction",
          "Suitable for modern clear coats",
          "Professional-grade polishing performance",
        ],
        es: [
          "Elimina marcas circulares y defectos moderados",
          "Acabado de alto brillo con buena corrección",
          "Bajo polvo y fácil de retirar",
          "Ideal para corrección en uno o dos pasos",
          "Apto para barnices modernos",
          "Rendimiento de pulido de nivel profesional",
        ],
      },
      howToUse: {
        en: "Use with a polishing machine and appropriate pad. Work section by section, then wipe off residue with a clean microfiber towel.",
        es: "Usar con máquina pulidora y el pad adecuado. Trabajar por secciones y retirar los residuos con una microfibra limpia.",
      },
    },
  },

  {
    id: "kc-fresh-up",
    brandSlug: "koch-chemie",
    slug: "fresh-up",
    name: "Fresh Up – Odor Eliminator",
    image: "/fresh-up.png",
    content: {
      description: {
        en: "Fresh Up is an interior odor eliminator designed to neutralize unpleasant smells and leave a clean, fresh scent behind. It helps reduce odors caused by smoke, pets, food, and general interior contamination, making it ideal for professional detailing and quick refresh services.",
        es: "Fresh Up es un eliminador de olores para interiores diseñado para neutralizar malos olores y dejar una fragancia limpia y fresca. Ayuda a reducir olores causados por humo, mascotas, comida y contaminación general del interior, siendo ideal para detallado profesional y servicios rápidos de refrescado.",
      },
      benefits: {
        en: [
          "Neutralizes unpleasant interior odors",
          "Leaves a fresh, clean scent",
          "Ideal for smoke, pet, and food odors",
          "Quick and easy spray application",
          "Great add-on service for detail shops",
          "Professional interior finishing touch",
        ],
        es: [
          "Neutraliza malos olores en el interior",
          "Deja una fragancia fresca y limpia",
          "Ideal para olores de humo, mascotas y comida",
          "Aplicación rápida y sencilla en spray",
          "Excelente servicio adicional para detallistas",
          "Toque final profesional para interiores",
        ],
      },
      howToUse: {
        en: "Lightly mist into the interior (carpets, mats, and air space). Allow to dry and ventilate as needed. Avoid over-application.",
        es: "Rociar ligeramente en el interior (alfombras, tapetes y el ambiente). Dejar secar y ventilar si es necesario. Evitar aplicar en exceso.",
      },
    },
  },

  {
    id: "kc-guf",
    brandSlug: "koch-chemie",
    slug: "guf",
    name: "GUF – Rubber & Plastic Care",
    image: "/guf.png",
    content: {
      description: {
        en: "GUF is a conditioning and care product designed to restore and protect rubber and plastic surfaces with a clean, factory-fresh look. It helps revive faded trim, seals, and exterior plastics while providing long-lasting protection against UV exposure and environmental wear.",
        es: "GUF es un producto de acondicionamiento y cuidado diseñado para restaurar y proteger superficies de goma y plástico con un aspecto limpio, tipo original de fábrica. Ayuda a revitalizar molduras, sellos y plásticos exteriores, ofreciendo protección duradera contra los rayos UV y el desgaste ambiental.",
      },
      benefits: {
        en: [
          "Restores rubber and plastic to a fresh appearance",
          "Helps revive faded trim and exterior plastics",
          "Provides UV and environmental protection",
          "Leaves a clean, non-greasy finish",
          "Suitable for seals, trim, and plastic components",
          "Long-lasting professional results",
        ],
        es: [
          "Restaura la goma y el plástico a un aspecto renovado",
          "Ayuda a revitalizar molduras y plásticos desgastados",
          "Ofrece protección contra UV y el ambiente",
          "Deja un acabado limpio sin sensación grasosa",
          "Apto para sellos, molduras y componentes plásticos",
          "Resultados duraderos de nivel profesional",
        ],
      },
      howToUse: {
        en: "Apply a small amount to a foam applicator or microfiber, spread evenly on the surface, and allow to dry. Buff lightly if needed.",
        es: "Aplicar una pequeña cantidad en un aplicador de espuma o microfibra, distribuir de forma uniforme y dejar secar. Retirar exceso suavemente si es necesario.",
      },
    },
  },

  {
    id: "kc-dosing-cap",
    brandSlug: "koch-chemie",
    slug: "dosing-cap",
    name: "Dosing Cap",
    image: "/dosing-cap.png",
    content: {
      description: {
        en: "The Koch Chemie Dosing Cap is a practical measuring accessory designed to ensure accurate dilution of cleaning and care products. It helps maintain correct mixing ratios, improving product performance and preventing waste during professional and DIY detailing.",
        es: "El Dosing Cap de Koch Chemie es un accesorio práctico de medición diseñado para garantizar una dilución precisa de productos de limpieza y cuidado. Ayuda a mantener las proporciones correctas de mezcla, mejorando el rendimiento del producto y evitando desperdicios tanto en uso profesional como doméstico.",
      },
      benefits: {
        en: [
          "Ensures precise product dilution",
          "Helps maintain correct mixing ratios",
          "Prevents product waste and overuse",
          "Easy to read measurement markings",
          "Ideal for professional detailing and workshops",
          "Durable and chemical-resistant design",
        ],
        es: [
          "Garantiza una dilución precisa del producto",
          "Ayuda a mantener proporciones correctas de mezcla",
          "Evita el desperdicio y el uso excesivo",
          "Marcas de medición fáciles de leer",
          "Ideal para detallado profesional y talleres",
          "Diseño duradero y resistente a químicos",
        ],
      },
      howToUse: {
        en: "Attach the dosing cap to the product bottle, measure the required amount according to dilution guidelines, and mix with water as instructed.",
        es: "Colocar el dosificador en la botella, medir la cantidad requerida según las indicaciones de dilución y mezclar con agua conforme a las instrucciones.",
      },
    },
  },

  {
    id: "kc-motorplast",
    brandSlug: "koch-chemie",
    slug: "motorplast",
    name: "Motorplast – Engine Bay Protectant",
    image: "/motorplast.png",
    content: {
      description: {
        en: "Engine bay dressing that restores and protects plastic, rubber, and metal surfaces.",
        es: "Acondicionador para motor que restaura y protege plástico, goma y metal.",
      },
      benefits: {
        en: ["Natural satin finish", "Water-repellent", "Heat resistant", "Prevents corrosion"],
        es: ["Acabado satinado natural", "Repelente al agua", "Resistente al calor", "Previene corrosión"],
      },
      howToUse: {
        en: "Spray on clean engine bay and allow to dry.",
        es: "Rociar en el motor limpio y dejar secar.",
      },
    },
  },

  {
    id: "kc-panel-prep-spray",
    brandSlug: "koch-chemie",
    slug: "panel-prep-spray",
    name: "Panel Preparation Spray",
    image: "/panel-prep-spray.png",
    content: {
      description: {
        en: "Surface cleaner that removes oils and residues before wax or coating application.",
        es: "Limpiador de superficie que elimina aceites y residuos antes de aplicar cera o recubrimiento.",
      },
      benefits: {
        en: ["Improves coating bonding", "Removes polish oils", "Residue-free finish", "Easy spray application"],
        es: ["Mejora la adhesión del recubrimiento", "Elimina aceites de pulimento", "Acabado sin residuos", "Aplicación fácil en spray"],
      },
      howToUse: {
        en: "Spray onto surface and wipe with microfiber.",
        es: "Rociar sobre la superficie y limpiar con microfibra.",
      },
    },
  },

  {
    id: "kc-active-foam",
    brandSlug: "koch-chemie",
    slug: "active-foam",
    name: "Active Foam",
    image: "/active-foam.png", // 1L (default)
    variants: [
      { size: "1L", image: "/active-foam.png" },
      // If you keep the space in the filename, keep this line as-is.
      // Recommended rename: /active-foam5L.png (no space) and update this line.
      { size: "5L", image: "/active-foam 5L.png" },
    ],
    content: {
      description: {
        en: "High-foaming pre-wash shampoo that loosens dirt and road film for safer washing.",
        es: "Champú de prelavado de alta espuma que afloja la suciedad y la película de carretera para un lavado más seguro.",
      },
      benefits: {
        en: ["Thick foam clings to surfaces", "Loosens heavy dirt", "pH-friendly for many surfaces", "Ideal for foam cannons"],
        es: ["Espuma espesa que se adhiere", "Afloja suciedad pesada", "pH amigable para muchas superficies", "Ideal para pistolas de espuma"],
      },
      howToUse: {
        en: "Dilute, apply with foam cannon, allow to dwell, then rinse.",
        es: "Diluir, aplicar con cañón de espuma, dejar actuar y enjuagar.",
      },
    },
  },

  {
    id: "kc-leather-star",
    brandSlug: "koch-chemie",
    slug: "leather-star",
    name: "Leather Star – Leather Conditioner",
    image: "/leather-star.png",
    content: {
      description: {
        en: "Leather care conditioner that nourishes, protects, and maintains a natural finish.",
        es: "Acondicionador para cuero que nutre, protege y mantiene un acabado natural.",
      },
      benefits: {
        en: ["Keeps leather soft", "Prevents drying and cracking", "Natural look finish", "Adds light protection"],
        es: ["Mantiene el cuero suave", "Previene resequedad y grietas", "Acabado de aspecto natural", "Aporta protección ligera"],
      },
      howToUse: {
        en: "Apply thinly with applicator, allow to absorb, then buff if needed.",
        es: "Aplicar una capa fina, dejar absorber y retirar exceso si es necesario.",
      },
    },
  },

  {
    id: "kc-tea-textile-cleaner",
    brandSlug: "koch-chemie",
    slug: "tea-textile-cleaner",
    name: "Tea – Textile & Upholstery Cleaner",
    image: "/tea-textile-cleaner.png",
    content: {
      description: {
        en: "Textile cleaner for upholstery and carpets that lifts dirt and stains while leaving fibers refreshed.",
        es: "Limpiador textil para tapicería y alfombras que elimina suciedad y manchas dejando las fibras renovadas.",
      },
      benefits: {
        en: ["Effective stain removal", "Safe on upholstery and carpets", "Freshens fibers", "Great for interior detailing"],
        es: ["Eliminación efectiva de manchas", "Seguro para tapicería y alfombras", "Renueva las fibras", "Ideal para detallado interior"],
      },
      howToUse: {
        en: "Dilute, apply, agitate, then extract or wipe clean.",
        es: "Diluir, aplicar, agitar y extraer o limpiar.",
      },
    },
  },

  {
    id: "kc-foamer",
    brandSlug: "koch-chemie",
    slug: "foamer",
    name: "Foamer",
    image: "/foamer.png",
    content: {
      description: {
        en: "Foam sprayer accessory for applying cleaners evenly to surfaces with controlled foam output.",
        es: "Accesorio espumador para aplicar limpiadores de manera uniforme con espuma controlada.",
      },
      benefits: {
        en: ["Even product distribution", "Reduces overspray", "Adjustable foam output", "Ideal for interiors and wheels"],
        es: ["Distribución uniforme", "Reduce el exceso de rociado", "Espuma ajustable", "Ideal para interiores y ruedas"],
      },
      howToUse: {
        en: "Fill with diluted product, pump, and apply foam to surface.",
        es: "Llenar con producto diluido, bombear y aplicar espuma.",
      },
    },
  },

  {
    id: "kc-glass-cleaner",
    brandSlug: "koch-chemie",
    slug: "glass-cleaner",
    name: "Glass Cleaner",
    image: "/glass-cleaner.png",
    content: {
      description: {
        en: "Streak-free glass cleaner that removes fingerprints, film, and light contamination for crystal clarity.",
        es: "Limpiador de vidrios sin rayas que elimina huellas, película y suciedad ligera para una claridad total.",
      },
      benefits: {
        en: ["Streak-free finish", "Cuts through film and fingerprints", "Safe on tinted windows", "Fast wipe-off"],
        es: ["Acabado sin rayas", "Elimina película y huellas", "Seguro en vidrios polarizados", "Fácil de retirar"],
      },
      howToUse: {
        en: "Spray onto glass and wipe with microfiber or glass towel.",
        es: "Rociar sobre el vidrio y limpiar con microfibra.",
      },
    },
  },

  {
    id: "kc-green-star",
    brandSlug: "koch-chemie",
    slug: "green-star",
    name: "Green Star – Universal Cleaner",
    image: "/green-star.png", // 1L (default)
    variants: [
      { size: "1L", image: "/green-star.png" },
      // Recommended: rename your 5L image to /green-star5L.png so the selector changes the image.
      { size: "5L", image: "/green-star5L.png" },
    ],
    content: {
      description: {
        en: "Concentrated universal cleaner for interior and exterior use, suitable for heavy and general cleaning.",
        es: "Limpiador universal concentrado para uso interior y exterior, ideal para limpieza general o pesada.",
      },
      benefits: {
        en: ["Highly concentrated", "Versatile interior/exterior use", "Strong cleaning performance", "Dilution control"],
        es: ["Altamente concentrado", "Uso versátil interior/exterior", "Gran poder de limpieza", "Control de dilución"],
      },
      howToUse: {
        en: "Dilute based on task, apply, agitate if needed, then wipe or rinse.",
        es: "Diluir según la tarea, aplicar, agitar si es necesario y limpiar o enjuagar.",
      },
    },
  },

  {
    id: "kc-hydro-plast-care",
    brandSlug: "koch-chemie",
    slug: "hydro-plast-care",
    name: "Hydro Plast Care",
    image: "/hydro-plast-care.png",
    content: {
      description: {
        en: "Water-based plastic care product that refreshes and protects exterior plastics with a clean finish.",
        es: "Producto a base de agua para cuidar plásticos exteriores, renovando y protegiendo con un acabado limpio.",
      },
      benefits: {
        en: ["Water-based formula", "Restores plastics", "UV protection support", "Non-greasy finish"],
        es: ["Fórmula a base de agua", "Restaura plásticos", "Apoyo contra rayos UV", "Acabado no grasoso"],
      },
      howToUse: {
        en: "Apply with applicator, spread evenly, allow to dry.",
        es: "Aplicar con aplicador, distribuir y dejar secar.",
      },
    },
  },

  {
    id: "kc-h902-heavy-cut",
    brandSlug: "koch-chemie",
    slug: "h902-heavy-cut",
    name: "H902 – Heavy Cut Compound",
    image: "/h902-heavy-cut.png",
    content: {
      description: {
        en: "Heavy cut compound for removing severe defects such as deep swirls and sanding marks.",
        es: "Compuesto de corte fuerte para eliminar defectos severos como remolinos profundos y marcas de lijado.",
      },
      benefits: {
        en: ["Strong defect removal", "Effective on hard clear coats", "Professional correction", "Good working time"],
        es: ["Gran eliminación de defectos", "Eficaz en barnices duros", "Corrección profesional", "Buen tiempo de trabajo"],
      },
      howToUse: {
        en: "Use with cutting pad and machine polisher, then wipe residue.",
        es: "Usar con pad de corte y pulidora, luego retirar residuos.",
      },
    },
  },

  {
    id: "kc-hydrofoam-sealant",
    brandSlug: "koch-chemie",
    slug: "hydrofoam-sealant",
    name: "HydroFoam Sealant",
    image: "/hydrofoam-sealant.png",
    content: {
      description: {
        en: "Foam-applied sealant that adds hydrophobic protection and gloss during the wash process.",
        es: "Sellador aplicado con espuma que agrega protección hidrofóbica y brillo durante el proceso de lavado.",
      },
      benefits: {
        en: ["Adds hydrophobic protection", "Enhances gloss", "Fast application", "Great for maintenance washes"],
        es: ["Aporta protección hidrofóbica", "Mejora el brillo", "Aplicación rápida", "Ideal para lavados de mantenimiento"],
      },
      howToUse: {
        en: "Apply via foam cannon, allow to dwell briefly, rinse off, and dry.",
        es: "Aplicar con cañón de espuma, dejar actuar brevemente, enjuagar y secar.",
      },
    },
  },

  {
    id: "kc-gentle-snow-foam",
    brandSlug: "koch-chemie",
    slug: "gentle-snow-foam",
    name: "Gentle Snow Foam",
    image: "/gentle-snow-foam.png", // 1L (default)
    variants: [
      { size: "1L", image: "/gentle-snow-foam.png" },
      { size: "5L", image: "/gentle-snow-foam5L.png" },
    ],
    content: {
      description: {
        en: "Gentle foaming pre-wash that loosens dirt while being friendly to protected surfaces.",
        es: "Prelavado de espuma suave que afloja la suciedad siendo amigable con superficies protegidas.",
      },
      benefits: {
        en: ["Gentle on wax/sealants", "Rich foam", "Helps reduce wash marring", "Pleasant wash experience"],
        es: ["Suave con ceras/selladores", "Espuma rica", "Reduce marcas de lavado", "Lavado más seguro"],
      },
      howToUse: {
        en: "Dilute, foam the vehicle, let dwell, then rinse thoroughly.",
        es: "Diluir, espumar el vehículo, dejar actuar y enjuagar.",
      },
    },
  },

  {
    id: "kc-magic-wheel-cleaner",
    brandSlug: "koch-chemie",
    slug: "magic-wheel-cleaner",
    name: "Magic Wheel Cleaner",
    image: "/magic-wheel-cleaner.png",
    content: {
      description: {
        en: "Wheel cleaner designed to remove brake dust and road grime effectively from wheel surfaces.",
        es: "Limpiador de ruedas diseñado para eliminar polvo de frenos y suciedad de carretera de manera efectiva.",
      },
      benefits: {
        en: ["Removes brake dust", "Strong cleaning action", "Works on many wheel finishes", "Easy rinse-off"],
        es: ["Elimina polvo de frenos", "Acción de limpieza fuerte", "Funciona en varios acabados", "Fácil de enjuagar"],
      },
      howToUse: {
        en: "Spray on wheels, allow to dwell, agitate if needed, then rinse.",
        es: "Rociar en las ruedas, dejar actuar, agitar si es necesario y enjuagar.",
      },
    },
  },

  {
    id: "kc-nano-magic-shampoo",
    brandSlug: "koch-chemie",
    slug: "nano-magic-shampoo",
    name: "Nano Magic Shampoo",
    image: "/nano-magic-shampoo.png",
    content: {
      description: {
        en: "Wash shampoo that cleans while leaving a protective, hydrophobic effect and enhanced gloss.",
        es: "Champú de lavado que limpia mientras deja un efecto protector hidrofóbico y más brillo.",
      },
      benefits: {
        en: ["Cleans and protects", "Hydrophobic effect", "Improves gloss", "Great maintenance shampoo"],
        es: ["Limpia y protege", "Efecto hidrofóbico", "Mejora el brillo", "Ideal para mantenimiento"],
      },
      howToUse: {
        en: "Dilute in wash bucket, wash as normal, then rinse and dry.",
        es: "Diluir en cubeta, lavar normalmente, enjuagar y secar.",
      },
    },
  },

  {
    id: "kc-alkaline-wheel-cleaner",
    brandSlug: "koch-chemie",
    slug: "alkaline-wheel-cleaner",
    name: "Alkaline Wheel Cleaner",
    image: "/alkaline-wheel-cleaner.png",
    content: {
      description: {
        en: "Alkaline wheel cleaner for strong removal of road grime and oily contamination from wheels and tires.",
        es: "Limpiador alcalino de ruedas para eliminar suciedad de carretera y contaminación aceitosa de ruedas y llantas.",
      },
      benefits: {
        en: ["Strong alkaline cleaning", "Cuts oily grime", "Great for tires and wheels", "Professional performance"],
        es: ["Limpieza alcalina fuerte", "Corta suciedad aceitosa", "Ideal para llantas y ruedas", "Rendimiento profesional"],
      },
      howToUse: {
        en: "Dilute if needed, spray on, agitate, and rinse thoroughly.",
        es: "Diluir si es necesario, rociar, agitar y enjuagar bien.",
      },
    },
  },

  {
    id: "kc-one-cut-finish-p6-02",
    brandSlug: "koch-chemie",
    slug: "one-cut-finish-p6-02",
    name: "One Cut & Finish P6.02",
    image: "/one-cut-finish-p6-02.png",
    content: {
      description: {
        en: "One-step polish that combines defect removal with high-gloss finishing for efficient paint correction.",
        es: "Pulimento de un paso que combina corrección de defectos con acabado de alto brillo para una corrección eficiente.",
      },
      benefits: {
        en: ["One-step correction and finish", "High-gloss result", "Efficient workflow", "Reduced dusting"],
        es: ["Corrección y acabado en un paso", "Resultado de alto brillo", "Flujo de trabajo eficiente", "Menos polvo"],
      },
      howToUse: {
        en: "Use with polishing pad and machine, work section by section, wipe off.",
        es: "Usar con pad de pulido y máquina, trabajar por secciones y limpiar.",
      },
    },
  },

  {
    id: "kc-gentle-snow-foam-xmas",
    brandSlug: "koch-chemie",
    slug: "gentle-snow-foam-christmas-edition",
    name: "Gentle Snow Foam – Christmas Edition",
    image: "/gentle-snow-foam-christmas-edition.png",
    content: {
      description: {
        en: "Limited edition Gentle Snow Foam with the same safe cleaning performance and festive presentation.",
        es: "Edición limitada de Gentle Snow Foam con el mismo rendimiento de limpieza seguro y presentación festiva.",
      },
      benefits: {
        en: ["Gentle on protected surfaces", "Rich foam cleaning", "Ideal pre-wash step", "Limited edition packaging"],
        es: ["Suave con superficies protegidas", "Limpieza con espuma rica", "Ideal como prelavado", "Empaque edición limitada"],
      },
      howToUse: {
        en: "Dilute, foam the vehicle, let dwell, then rinse thoroughly.",
        es: "Diluir, espumar el vehículo, dejar actuar y enjuagar.",
      },
    },
  },

  {
    id: "kc-allround-surface-cleaner",
    brandSlug: "koch-chemie",
    slug: "allround-surface-cleaner",
    name: "Allround Surface Cleaner",
    image: "/allround-surface-cleaner.png",
    content: {
      description: {
        en: "All-purpose surface cleaner for interior and exterior areas that removes dirt and light contamination.",
        es: "Limpiador multiusos para interior y exterior que elimina suciedad y contaminación ligera.",
      },
      benefits: {
        en: ["Versatile use", "Effective daily cleaning", "Safe on many hard surfaces", "Easy wipe-off"],
        es: ["Uso versátil", "Limpieza diaria efectiva", "Seguro en muchas superficies duras", "Fácil de limpiar"],
      },
      howToUse: {
        en: "Spray onto surface and wipe clean; dilute if needed.",
        es: "Rociar sobre la superficie y limpiar; diluir si es necesario.",
      },
    },
  },

  {
    id: "kc-m302-micro-cut",
    brandSlug: "koch-chemie",
    slug: "m302-micro-cut",
    name: "M302 – Micro Cut Polish",
    image: "/m302-micro-cut.png",
    content: {
      description: {
        en: "Micro cut polish designed for refining paint and removing fine haze to achieve a high-gloss finish.",
        es: "Pulimento de micro corte diseñado para refinar la pintura y eliminar velo fino logrando un acabado de alto brillo.",
      },
      benefits: {
        en: ["Refines finish to high gloss", "Removes fine haze and micro-marring", "Great final polishing step", "Professional results"],
        es: ["Refina el acabado a alto brillo", "Elimina velo fino y micro marcas", "Ideal como paso final", "Resultados profesionales"],
      },
      howToUse: {
        en: "Use with finishing pad and polisher, then wipe off residue.",
        es: "Usar con pad de acabado y pulidora, luego retirar residuos.",
      },
    },
  },
  {
    id: "falconpro-pot-pan-dish-washing-detergent",
    brandSlug: "falconpro",
    slug: "pot-pan-dish-washing-detergent",
    name: "FalconPro Pot & Pan Dish Washing Detergent",
    image: "/placeholder.jpg",
    variants: [
      { size: "1 Gal", image: "/placeholder.jpg" },
      { size: "5 Gal", image: "/placeholder.jpg" },
    ],
    content: {
      description: {
        en: "Heavy-duty, concentrated dishwashing detergent designed for powerful cleaning of pots, pans, dishes, and utensils. Its superior grease-cutting formula quickly dissolves tough food residue, baked-on grime, and stubborn grease. Ideal for commercial kitchens, restaurants, and food service operations, delivering spotless, streak-free results while remaining gentle on hands.",
        es: "Detergente concentrado de alta resistencia diseñado para la limpieza profunda de ollas, sartenes, platos y utensilios. Su potente fórmula corta grasa elimina rápidamente residuos de comida, suciedad incrustada y grasa difícil. Ideal para cocinas comerciales y servicios de alimentos, ofreciendo resultados impecables sin dañar las manos.",
      },
      benefits: {
        en: [
          "Heavy-duty grease-cutting power",
          "Concentrated formula for maximum efficiency",
          "High-foaming, long-lasting lather",
          "Removes baked-on food and stubborn residue",
          "Rinses clean with no streaks or residue",
          "Gentle on hands despite strong cleaning action",
          "Ideal for commercial and professional kitchens",
        ],
        es: [
          "Gran poder desengrasante",
          "Fórmula concentrada de alto rendimiento",
          "Espuma abundante y duradera",
          "Elimina residuos de comida adheridos",
          "Enjuague limpio sin marcas ni residuos",
          "Suave para las manos",
          "Ideal para cocinas profesionales",
        ],
      },
      howToUse: {
        en: "Dilute with warm water as needed. Wash dishes using sponge or brush, then rinse thoroughly with clean water.",
        es: "Diluir con agua tibia según necesidad. Lavar con esponja o cepillo y enjuagar completamente.",
      },
    },
  },
  {
    id: "falconpro-pink-hand-soap",
    brandSlug: "falconpro",
    slug: "pink-hand-soap",
    name: "FalconPro Pink Hand Soap",
    image: "/placeholder.jpg",
    variants: [{ size: "1 Gal", image: "/placeholder.jpg" }],
    content: {
      description: {
        en: "Moisturizing hand soap formulated with protective ingredients to gently clean and soften skin. Effectively removes light-duty soils while producing a thick, luxurious lather. Ideal for offices, restaurants, supermarkets, bakeries, hotels, schools, and public restrooms. Biodegradable surfactants ensure effective and responsible cleaning.",
        es: "Jabón de manos hidratante formulado con ingredientes protectores que limpian y suavizan la piel. Elimina suciedad ligera mientras produce una espuma rica y cremosa. Ideal para oficinas, restaurantes, supermercados, panaderías, hoteles, escuelas y baños públicos. Contiene surfactantes biodegradables.",
      },
      benefits: {
        en: [
          "Fortified with moisturizers and skin protectants",
          "Gentle yet effective for light-duty hand cleaning",
          "Produces rich, luxurious lather",
          "One pump provides sufficient soap per wash",
          "Biodegradable surfactants",
          "Ideal for commercial and public restrooms",
        ],
        es: [
          "Enriquecido con humectantes y protectores de la piel",
          "Limpieza suave y efectiva",
          "Espuma espesa y lujosa",
          "Una sola dosificación es suficiente por lavado",
          "Surfactantes biodegradables",
          "Ideal para uso comercial y público",
        ],
      },
      howToUse: {
        en: "Dispense one pump onto wet hands, lather thoroughly, and rinse with clean water.",
        es: "Aplicar una dosificación sobre las manos mojadas, frotar y enjuagar con agua limpia.",
      },
    },
  },
  {
    id: "falconpro-formula-83-degreaser",
    brandSlug: "falconpro",
    slug: "formula-83-degreaser",
    name: "Formula 83 Degreaser",
    image: "/placeholder.jpg",
    variants: [{ size: "1 Gal", image: "/placeholder.jpg" }],
    content: {
      description: {
        en: "Heavy-duty industrial degreaser formulated for superior removal of grease, oil, and grime. This concentrated, biodegradable formula offers controlled foam for fast rinsing and can be diluted for economical use. Highly versatile, it can be applied with sprayers, mops, brushes, pressure sprayers, or automatic scrubbers.",
        es: "Desengrasante industrial concentrado de alta potencia diseñado para eliminar grasa, aceite y suciedad pesada. Su fórmula biodegradable produce espuma controlada para un enjuague rápido y puede diluirse para mayor economía. Apto para múltiples métodos de aplicación.",
      },
      benefits: {
        en: [
          "Powerful removal of heavy grease and oil",
          "Concentrated for economical dilution",
          "Controlled foam for fast rinsing",
          "Biodegradable formula",
          "Highly versatile application methods",
          "Ideal for engines, machinery, floors, and masonry",
        ],
        es: [
          "Elimina grasa y aceite difíciles",
          "Fórmula concentrada y económica",
          "Espuma controlada para enjuague rápido",
          "Biodegradable",
          "Aplicación versátil",
          "Ideal para motores, maquinaria y superficies de mampostería",
        ],
      },
      howToUse: {
        en: "Dilute according to soil level. Apply using preferred method, scrub if needed, and rinse thoroughly.",
        es: "Diluir según el nivel de suciedad. Aplicar, frotar si es necesario y enjuagar completamente.",
      },
    },
  },
  {
    id: "falconpro-purple-lightning",
    brandSlug: "falconpro",
    slug: "purple-lightning",
    name: "Purple Lightning",
    image: "/placeholder.jpg",
    variants: [
      { size: "1 Gal", image: "/placeholder.jpg" },
      { size: "5 Gal", image: "/placeholder.jpg" },
    ],
    content: {
      description: {
        en: "Ultra-powerful, highly concentrated heavy-duty degreaser engineered to tackle the toughest grease, oil, and grime. Up to three times stronger than Formula 83 Degreaser, making it ideal for extreme cleaning applications on engines, machinery, concrete, and heavy equipment.",
        es: "Desengrasante ultra potente y altamente concentrado diseñado para las aplicaciones más exigentes. Hasta tres veces más fuerte que el Formula 83 Degreaser, elimina eficazmente grasa, aceite y suciedad pesada en motores, maquinaria, concreto y equipos industriales.",
      },
      benefits: {
        en: [
          "Extremely powerful degreasing action",
          "Up to 3× stronger than Formula 83",
          "Highly concentrated for dilution",
          "Removes heavy grease, oil, and grime",
          "Ideal for industrial and commercial use",
          "Effective on concrete, engines, and equipment",
        ],
        es: [
          "Acción desengrasante extrema",
          "Hasta 3 veces más potente que Formula 83",
          "Fórmula concentrada y económica",
          "Elimina grasa y suciedad pesada",
          "Ideal para uso industrial y comercial",
          "Eficaz en concreto y maquinaria pesada",
        ],
      },
      howToUse: {
        en: "Dilute as needed based on soil level. Apply, agitate if required, and rinse thoroughly.",
        es: "Diluir según el nivel de suciedad. Aplicar, frotar si es necesario y enjuagar completamente.",
      },
    },
  },
  {
    id: "falconpro-black-lightning",
    brandSlug: "falconpro",
    slug: "black-lightning",
    name: "Black Lightning",
    image: "/placeholder.jpg",
    variants: [
      { size: "1 Gal", image: "/placeholder.jpg" },
      { size: "5 Gal", image: "/placeholder.jpg" },
    ],
    content: {
      description: {
        en: "Fast-acting, non-acid wheel and tire cleaner formulated to remove stubborn brake dust, road grime, and grease buildup. Safe for all wheel finishes including chrome, aluminum, and painted surfaces. Enhances appearance while helping reduce future buildup for longer-lasting cleanliness.",
        es: "Limpiador rápido y no ácido para ruedas y llantas diseñado para eliminar polvo de frenos, suciedad del camino y acumulación de grasa. Seguro para todo tipo de acabados, incluyendo cromo, aluminio y superficies pintadas. Mejora la apariencia y ayuda a reducir futuras acumulaciones.",
      },
      benefits: {
        en: [
          "Non-acid formula safe for all wheel finishes",
          "Removes brake dust, grease, and road grime",
          "Fast-acting and easy to use",
          "Safe on chrome, aluminum, and painted wheels",
          "Enhances wheel and tire appearance",
          "Helps reduce future buildup",
        ],
        es: [
          "Fórmula no ácida, segura para ruedas",
          "Elimina polvo de frenos y suciedad pesada",
          "Acción rápida y fácil aplicación",
          "Seguro para cromo, aluminio y pintura",
          "Mejora el aspecto de ruedas y llantas",
          "Reduce la acumulación futura",
        ],
      },
      howToUse: {
        en: "Spray directly onto wheels and tires. Allow to dwell briefly, agitate if necessary, and rinse thoroughly with water.",
        es: "Rociar directamente sobre ruedas y llantas. Dejar actuar brevemente, frotar si es necesario y enjuagar completamente.",
      },
    },
  },
  {
    id: "falconpro-sterling-metal-polish",
    brandSlug: "falconpro",
    slug: "sterling-metal-polish",
    name: "FalconPro Sterling Metal Polish",
    image: "/placeholder.jpg",
    variants: [{ size: "1 Pint", image: "/placeholder.jpg" }],
    content: {
      description: {
        en: "Premium metal polish designed to clean, restore, and protect aluminum, chrome, brass, and stainless steel. Removes tarnish, oxidation, and surface contaminants while leaving a brilliant, long-lasting shine with a protective coating to help prevent future tarnishing.",
        es: "Pulidor premium para limpiar, restaurar y proteger aluminio, cromo, latón y acero inoxidable. Elimina oxidación y opacidad, dejando un brillo duradero con capa protectora contra el desgaste futuro.",
      },
      benefits: {
        en: [
          "Cleans and restores metal surfaces",
          "Removes tarnish and oxidation",
          "Leaves long-lasting protective shine",
          "Safe for aluminum, chrome, brass, stainless steel",
          "Ideal for automotive, industrial, and home use",
        ],
        es: [
          "Limpia y restaura metales",
          "Elimina oxidación y suciedad",
          "Brillo duradero con protección",
          "Seguro para múltiples metales",
          "Uso automotriz, industrial y doméstico",
        ],
      },
      howToUse: {
        en: "Apply a small amount to a clean cloth, rub onto surface, then buff to a high shine.",
        es: "Aplicar con un paño limpio y pulir hasta obtener brillo.",
      },
    },
  },
  {
    id: "falconpro-bug-off",
    brandSlug: "falconpro",
    slug: "bug-off",
    name: "Bug Off",
    image: "/placeholder.jpg",
    variants: [{ size: "1 Gal", image: "/placeholder.jpg" }],
    content: {
      description: {
        en: "Fast-acting, high-foaming bug remover that softens and removes bugs, bird droppings, tree sap, brake dust, and road film. Produces stable foam when used with foam-generating equipment and rinses freely without residue.",
        es: "Removedor de insectos de acción rápida y alta espuma. Elimina insectos, excrementos de aves, savia y suciedad del camino. Se enjuaga fácilmente sin dejar residuos.",
      },
      benefits: {
        en: [
          "Quickly removes bugs and organic residue",
          "High-foaming, fast-acting formula",
          "Loosens brake dust and road film",
          "Rinses clean without residue",
          "Compatible with foam equipment",
        ],
        es: [
          "Elimina insectos y residuos orgánicos",
          "Alta espuma y acción rápida",
          "Afloja suciedad y polvo de frenos",
          "Enjuague limpio",
          "Compatible con equipos de espuma",
        ],
      },
      howToUse: {
        en: "Apply to surface, allow to dwell briefly, agitate if needed, and rinse thoroughly.",
        es: "Aplicar, dejar actuar brevemente, frotar si es necesario y enjuagar.",
      },
    },
  },
  {
    id: "falconpro-aluminum-brightener",
    brandSlug: "falconpro",
    slug: "aluminum-brightener",
    name: "Aluminum Brightener",
    image: "/placeholder.jpg",
    variants: [
      { size: "1 Gal", image: "/placeholder.jpg" },
      { size: "5 Gal", image: "/placeholder.jpg" },
    ],
    content: {
      description: {
        en: "Heavy-duty aluminum cleaner designed for trailers, non-polished rims, and ferrous metals. Quickly cuts through road film, diesel smoke, brake dust, and grime. Do not use on anodized or highly polished metals. Recommended dilution: minimum 1:1 with water.",
        es: "Limpiador potente para aluminio y metales no pulidos. Elimina suciedad, humo diésel y polvo de frenos. No usar en aluminio anodizado o pulido.",
      },
      benefits: {
        en: [
          "Restores brightness to aluminum surfaces",
          "Removes heavy road grime and oxidation",
          "Fast-acting professional formula",
          "Ideal for trailers and industrial metals",
        ],
        es: [
          "Restaura el brillo del aluminio",
          "Elimina suciedad pesada",
          "Acción rápida",
          "Ideal para remolques y uso industrial",
        ],
      },
      howToUse: {
        en: "Dilute at least 1:1 with water. Apply, allow short dwell time, and rinse thoroughly.",
        es: "Diluir mínimo 1:1 con agua. Aplicar y enjuagar completamente.",
      },
    },
  },
  {
    id: "falconpro-carpet-interior-cleaner",
    brandSlug: "falconpro",
    slug: "carpet-interior-cleaner",
    name: "Carpet & Interior Cleaner",
    image: "/placeholder.jpg",
    variants: [
      { size: "16 oz", image: "/placeholder.jpg" },
      { size: "1 Gal", image: "/placeholder.jpg" },
      { size: "5 Gal", image: "/placeholder.jpg" },
    ],
    content: {
      description: {
        en: "High-foaming carpet, fabric, and upholstery cleaner with a pleasant lavender fragrance. Removes stains effectively and economically. Simply spray, scrub, and vacuum.",
        es: "Limpiador de alfombras y tapicería de alta espuma con fragancia a lavanda. Fácil de usar y muy económico.",
      },
      benefits: {
        en: [
          "Removes carpet and upholstery stains",
          "High-foaming, easy to use",
          "Pleasant lavender scent",
          "Economical concentrated formula",
        ],
        es: [
          "Elimina manchas en telas y alfombras",
          "Espuma abundante",
          "Aroma agradable",
          "Uso sencillo",
        ],
      },
      howToUse: {
        en: "Spray onto surface, scrub, and vacuum once dry.",
        es: "Rociar, frotar y aspirar.",
      },
    },
  },
  {
    id: "falconpro-super-high-gloss-protectant",
    brandSlug: "falconpro",
    slug: "super-high-gloss-protectant",
    name: "Super High Gloss Protectant",
    image: "/placeholder.jpg",
    variants: [{ size: "1 Gal", image: "/placeholder.jpg" }],
    content: {
      description: {
        en: "Premium protectant for rubber, vinyl, plastic, and leather surfaces. Provides deep gloss and UV protection while preventing cracking and fading. Do not use on floors, fabrics, or pedals.",
        es: "Protector premium para superficies de goma, vinilo, plástico y cuero. Proporciona brillo profundo y protección UV mientras previene agrietamiento y decoloración. No usar en pisos, telas o pedales.",
      },
      benefits: {
        en: [
          "Deep, rich gloss finish",
          "UV protection",
          "Prevents cracking and fading",
          "Ideal for interiors, trim, and tires",
        ],
        es: [
          "Brillo profundo",
          "Protección UV",
          "Previene agrietamiento y decoloración",
          "Ideal para interiores, molduras y llantas",
        ],
      },
      howToUse: {
        en: "Apply evenly with applicator. Wipe excess if needed.",
        es: "Aplicar de manera uniforme con aplicador. Retirar exceso si es necesario.",
      },
    },
  },
  {
    id: "falconpro-formula83-interior-shine-protectant",
    brandSlug: "falconpro",
    slug: "formula83-interior-shine-protectant",
    name: "Formula83 Interior Shine & Protectant",
    image: "/placeholder.jpg",
    variants: [{ size: "16 oz", image: "/placeholder.jpg" }],
    content: {
      description: {
        en: "Interior protectant that restores dashboards, vinyl, and plastic with a satin, non-greasy finish. Provides UV protection and long-lasting appearance enhancement.",
        es: "Protector interior que restaura tableros, vinilo y plástico con un acabado satinado y no grasoso. Proporciona protección UV y mejora duradera de la apariencia.",
      },
      benefits: {
        en: [
          "Non-greasy satin finish",
          "UV protection",
          "Restores interior surfaces",
          "Easy spray-and-wipe application",
        ],
        es: [
          "Acabado satinado no grasoso",
          "Protección UV",
          "Restaura superficies interiores",
          "Aplicación fácil en spray y limpieza",
        ],
      },
      howToUse: {
        en: "Spray onto a clean microfiber, wipe surface evenly, and buff if desired.",
        es: "Rociar sobre una microfibra limpia, aplicar de forma uniforme y pulir si se desea.",
      },
    },
  },
  {
    id: "falconpro-premium-tire-gel",
    brandSlug: "falconpro",
    slug: "premium-tire-gel",
    name: "Premium Tire Gel",
    image: "/placeholder.jpg",
    variants: [{ size: "1 Gal", image: "/placeholder.jpg" }],
    content: {
      description: {
        en: "Water-based tire gel delivering ultra-high gloss without sling. Thick formula coats evenly and repels water for long-lasting shine.",
        es: "Gel para llantas a base de agua que ofrece brillo ultra alto sin salpicaduras. Fórmula espesa que cubre de manera uniforme y repele el agua para un brillo duradero.",
      },
      benefits: {
        en: ["Ultra-high gloss", "No sling", "Water-repellent", "Easy single-coat application"],
        es: ["Brillo ultra alto", "Sin salpicaduras", "Repelente al agua", "Aplicación fácil en una sola capa"],
      },
      howToUse: {
        en: "Apply to clean, dry tires with an applicator. Allow to level and dry.",
        es: "Aplicar sobre llantas limpias y secas con un aplicador. Dejar nivelar y secar.",
      },
    },
  },
  {
    id: "falconpro-super-high-gloss-silicone-tire-dressing",
    brandSlug: "falconpro",
    slug: "super-high-gloss-silicone-tire-dressing",
    name: "Super High Gloss Silicone Tire Dressing",
    image: "/placeholder.jpg",
    variants: [
      { size: "16 oz", image: "/placeholder.jpg" },
      { size: "1 Gal", image: "/placeholder.jpg" },
      { size: "5 Gal", image: "/placeholder.jpg" },
    ],
    content: {
      description: {
        en: "Silicone-based tire dressing that restores a deep wet shine while protecting against UV damage, cracking, and fading.",
        es: "Acondicionador de llantas a base de silicona que restaura un brillo húmedo profundo mientras protege contra rayos UV, agrietamiento y decoloración.",
      },
      benefits: {
        en: ["Deep wet-look shine", "UV protection", "Helps prevent cracking and fading", "Long-lasting finish"],
        es: ["Brillo profundo efecto mojado", "Protección UV", "Ayuda a prevenir grietas y decoloración", "Acabado duradero"],
      },
      howToUse: {
        en: "Apply evenly to clean, dry tires and allow to dry.",
        es: "Aplicar de manera uniforme sobre llantas limpias y secas y dejar secar.",
      },
    },
  },
  {
    id: "falconpro-blue-silicone",
    brandSlug: "falconpro",
    slug: "blue-silicone",
    name: "Blue Silicone",
    image: "/placeholder.jpg",
    variants: [
      { size: "1 Gal", image: "/placeholder.jpg" },
      { size: "5 Gal", image: "/placeholder.jpg" },
    ],
    content: {
      description: {
        en: "Extreme high-gloss, fast-drying silicone tire dressing. Minimal sling, professional finish. Extremely flammable – tires only.",
        es: "Acondicionador de llantas de silicona de alto brillo y secado rápido. Mínima salpicadura, acabado profesional. Extremadamente inflamable: solo para llantas.",
      },
      benefits: {
        en: ["Extreme high-gloss finish", "Fast-drying", "Minimal sling", "Professional appearance"],
        es: ["Acabado de alto brillo extremo", "Secado rápido", "Mínima salpicadura", "Apariencia profesional"],
      },
      howToUse: {
        en: "Apply to clean, dry tires only. Allow to dry before driving.",
        es: "Aplicar solo en llantas limpias y secas. Dejar secar antes de conducir.",
      },
    },
  },
  {
    id: "falconpro-spring-breeze",
    brandSlug: "falconpro",
    slug: "spring-breeze",
    name: "Spring Breeze",
    image: "/placeholder.jpg",
    variants: [{ size: "1 Gal", image: "/placeholder.jpg" }],
    content: {
      description: {
        en: "Long-lasting air freshener and neutral pH all-purpose cleaner. Cleans and freshens floors and surfaces while eliminating odors.",
        es: "Ambientador de larga duración y limpiador multiusos de pH neutro. Limpia y refresca pisos y superficies mientras elimina olores.",
      },
      benefits: {
        en: ["Long-lasting fresh scent", "Neutral pH formula", "Cleans and deodorizes", "Safe for many surfaces"],
        es: ["Aroma fresco duradero", "Fórmula de pH neutro", "Limpia y desodoriza", "Seguro para múltiples superficies"],
      },
      howToUse: {
        en: "Dilute as needed, apply to surfaces or floors, and wipe or mop clean.",
        es: "Diluir según necesidad, aplicar en superficies o pisos y limpiar con paño o trapeador.",
      },
    },
  },
  {
    id: "falconpro-new-car",
    brandSlug: "falconpro",
    slug: "new-car",
    name: "New Car",
    image: "/placeholder.jpg",
    variants: [
      { size: "16 oz", image: "/placeholder.jpg" },
      { size: "1 Gal", image: "/placeholder.jpg" },
    ],
    content: {
      description: {
        en: "Long-lasting “new car” scent air freshener and neutral pH cleaner. Can be mixed with other FalconPro products or used alone.",
        es: "Ambientador de aroma “auto nuevo” y limpiador de pH neutro. Puede mezclarse con otros productos FalconPro o usarse solo.",
      },
      benefits: {
        en: ["Long-lasting new car scent", "Neutral pH cleaner", "Mixable with other FalconPro products", "Use on floors and surfaces"],
        es: ["Aroma duradero a auto nuevo", "Limpiador de pH neutro", "Mezclable con otros productos FalconPro", "Uso en pisos y superficies"],
      },
      howToUse: {
        en: "Use alone or diluted as needed. Apply to surfaces or floors and wipe or mop clean.",
        es: "Usar solo o diluido según necesidad. Aplicar en superficies o pisos y limpiar con paño o trapeador.",
      },
    },
  },
  {
    id: "falconpro-baby-powder",
    brandSlug: "falconpro",
    slug: "baby-powder",
    name: "Baby Powder",
    image: "/placeholder.jpg",
    variants: [{ size: "1 Gal", image: "/placeholder.jpg" }],
    content: {
      description: {
        en: "Fresh baby powder-scented air freshener and neutral pH cleaner suitable for floors and surfaces.",
        es: "Ambientador con aroma a talco y limpiador de pH neutro apto para pisos y superficies.",
      },
      benefits: {
        en: ["Fresh baby powder scent", "Neutral pH cleaner", "Cleans and deodorizes", "Safe for floors and surfaces"],
        es: ["Aroma fresco a talco", "Limpiador de pH neutro", "Limpia y desodoriza", "Seguro para pisos y superficies"],
      },
      howToUse: {
        en: "Dilute as needed, apply to surfaces or floors, and wipe or mop clean.",
        es: "Diluir según necesidad, aplicar en superficies o pisos y limpiar con paño o trapeador.",
      },
    },
  },
  {
    id: "falconpro-wash-wax",
    brandSlug: "falconpro",
    slug: "wash-wax",
    name: "Wash & Wax",
    image: "/images/Wash&Wax1Gal.png",
    variants: [
      { size: "1 Gal", image: "/images/Wash&Wax1Gal.png" },
      { size: "5 Gal", image: "/images/Wash&Wax1Gal.png" },
    ],
    content: {
      description: {
        en: "High-foaming, pH-balanced wash and wax shampoo that cleans and protects in one step. Infused with premium carnauba wax, it enhances gloss while leaving a protective, water-repellent layer for a just-waxed finish.",
        es: "Champú de alto espumado con pH balanceado que limpia y encera en un solo paso. Enriquecido con cera de carnauba premium, realza el brillo y deja una capa protectora con efecto repelente al agua para un acabado como recién encerado.",
      },
      benefits: {
        en: [
          "Cleans and waxes in one step",
          "High foam for safe, scratch-free washing",
          "Enriched with premium carnauba wax for shine",
          "pH-balanced and safe for all surfaces",
          "Leaves a slick, water-repellent finish",
          "Streak-free and easy to rinse",
          "Safe for cars, boats, and RVs",
        ],
        es: [
          "Lava y encera en un solo paso",
          "Espuma abundante para un lavado seguro",
          "Contiene cera de carnauba premium para mayor brillo",
          "pH balanceado, seguro para todas las superficies",
          "Acabado suave y repelente al agua",
          "Sin marcas ni residuos",
          "Apto para autos, botes y RVs",
        ],
      },
      howToUse: {
        en: "Dilute according to desired foam level. Apply with wash mitt or foam cannon, wash the surface, then rinse thoroughly.",
        es: "Diluir según el nivel de espuma deseado. Aplicar con guante de lavado o foam cannon, lavar la superficie y enjuagar completamente.",
      },
    },
  },
  {
    id: "falconpro-car-wash",
    brandSlug: "falconpro",
    slug: "car-wash",
    name: "Car Wash",
    image: "/images/CarWash1Gal.png",
    variants: [
      { size: "1 Gal", image: "/images/CarWash1Gal.png" },
      { size: "5 Gal", image: "/images/CarWash1Gal.png" },
    ],
    content: {
      description: {
        en: "Premium high-foaming car wash shampoo that produces a rich, deep-cleaning lather to safely remove dirt and grime. Tough on contamination yet gentle on all vehicle surfaces, leaving a sparkling, scratch-free finish.",
        es: "Champú premium de alto espumado que genera una espuma rica para una limpieza profunda y segura. Elimina suciedad y grasa sin dañar las superficies, dejando un acabado brillante y sin rayones.",
      },
      benefits: {
        en: [
          "Rich, high-foaming formula",
          "Deep cleans dirt and road grime",
          "Safe for all vehicle surfaces",
          "Gentle, scratch-free washing",
          "Leaves a bright, clean finish",
          "Ideal for hand wash and foam cannons",
        ],
        es: [
          "Fórmula de alta espuma",
          "Limpieza profunda de suciedad y contaminantes",
          "Seguro para todas las superficies del vehículo",
          "Lavado suave sin rayar",
          "Deja un acabado limpio y brillante",
          "Ideal para lavado a mano y foam cannon",
        ],
      },
      howToUse: {
        en: "Dilute with water according to desired foam level. Apply with wash mitt or foam cannon, wash the vehicle, then rinse thoroughly.",
        es: "Diluir con agua según el nivel de espuma deseado. Aplicar con guante de lavado o foam cannon, lavar el vehículo y enjuagar completamente.",
      },
    },
  },
  {
    id: "falconpro-speed-wax",
    brandSlug: "falconpro",
    slug: "speed-wax",
    name: "Speed Wax",
    image: "/images/SpeedWax32oz.png",
    variants: [
      { size: "32 oz", image: "/images/SpeedWax32oz.png" },
      { size: "1 Gal", image: "/images/SpeedWax1gal.png" },
    ],
    content: {
      description: {
        en: "Fast and easy spray wax for all painted surfaces, clear coat, plastic, glass, metal, vinyl, and rubber trim. This advanced formula safely removes dust, light road grime, fingerprints, and water spots while leaving a deep wet-look shine. Ideal for waterless washing, spot cleaning, or full vehicle wipe-downs. Body shop safe, anti-static, and streak-free.",
        es: "Cera en spray rápida y fácil para todas las superficies pintadas, clear coat, plástico, vidrio, metal, vinilo y molduras de goma. Esta fórmula avanzada elimina de forma segura polvo, suciedad ligera, huellas y manchas de agua, dejando un brillo profundo tipo “wet look”. Ideal para lavado sin agua, limpieza puntual o detallado completo. Segura para taller de pintura, antiestática y sin marcas.",
      },
      benefits: {
        en: [
          "Cleans and waxes without water",
          "Safe on paint, clear coat, plastic, glass, metal, vinyl, and rubber",
          "Removes dust, fingerprints, light grime, and water spots",
          "Leaves a deep wet-look shine",
          "Anti-static and anti-streak formula",
          "Non-abrasive and non-silicone",
          "VOC compliant and body shop safe",
        ],
        es: [
          "Limpia y encera sin usar agua",
          "Segura para pintura, plástico, vidrio, metal, vinilo y goma",
          "Elimina polvo, huellas, suciedad ligera y manchas de agua",
          "Deja un brillo intenso efecto mojado",
          "Fórmula antiestática y sin rayas",
          "No abrasiva y sin silicona",
          "Cumple normas VOC y es segura para body shop",
        ],
      },
      howToUse: {
        en: "Spray directly onto surface and wipe with a clean microfiber towel. Flip towel and buff to a high-gloss finish. Use as a waterless wash or quick detailer.",
        es: "Rociar directamente sobre la superficie y limpiar con una toalla de microfibra. Voltear la toalla y pulir hasta obtener alto brillo. Usar como lavado sin agua o detallador rápido.",
      },
    },
  },
  {
    id: "falconpro-ceramic-quick-detailer",
    brandSlug: "falconpro",
    slug: "ceramic-quick-detailer",
    name: "Ceramic Quick Detailer",
    image: "/images/CeramicQuickDetailer16Oz.png",
    variants: [{ size: "16 oz", image: "/images/CeramicQuickDetailer16Oz.png" }],
    content: {
      description: {
        en: "Advanced ceramic quick detailer designed to maintain a sleek, high-gloss finish between washes. This professional formula enhances shine while adding ceramic protection, removing light dust, fingerprints, and water spots. Leaves a durable, hydrophobic layer that repels dirt and water, keeping your vehicle looking freshly detailed and protected.",
        es: "Detallador rápido con tecnología cerámica diseñado para mantener un brillo intenso entre lavados. Esta fórmula profesional realza el acabado y añade una capa protectora hidrofóbica que repele el agua y la suciedad, eliminando polvo ligero, huellas y manchas de agua. Mantiene el vehículo protegido y con apariencia de exhibición.",
      },
      benefits: {
        en: [
          "Enhances gloss with ceramic technology",
          "Adds hydrophobic, water-repellent protection",
          "Removes light dust, fingerprints, and water spots",
          "Safe for paint, glass, and exterior trim",
          "Quick and easy spray-on, wipe-off application",
          "Leaves a slick, showroom-ready finish",
          "Ideal for maintenance between washes and car shows",
        ],
        es: [
          "Aumenta el brillo con tecnología cerámica",
          "Protección hidrofóbica repelente al agua",
          "Elimina polvo ligero, huellas y manchas de agua",
          "Seguro para pintura, vidrio y molduras exteriores",
          "Aplicación rápida tipo spray y limpieza",
          "Deja un acabado suave y de alto brillo",
          "Ideal para mantenimiento entre lavados y exhibiciones",
        ],
      },
      howToUse: {
        en: "Spray lightly onto the surface and wipe with a clean microfiber towel. Buff with a second towel for maximum gloss and protection.",
        es: "Rociar ligeramente sobre la superficie y limpiar con una toalla de microfibra. Pulir con otra toalla para máximo brillo y protección.",
      },
    },
  },
  {
    id: "falconpro-better-wax",
    brandSlug: "falconpro",
    slug: "better-wax",
    name: "Better Wax",
    image: "/images/BetterWax1Gal.png",
    variants: [
      { size: "1 Gal", image: "/images/BetterWax1Gal.png" },
      { size: "1 Pint", image: "/images/BetterWax1Gal.png" },
    ],
    content: {
      description: {
        en: "Premium wax formulated with high-quality yellow carnauba, blended with silicones, polymers, and advanced waxes to deliver durable paint protection and an intense, high-gloss finish. Enhances depth and richness of color while providing long-lasting shine. Easy wipe-on, wipe-off formula for professional results.",
        es: "Cera premium formulada con carnauba amarilla de alta calidad, combinada con siliconas, polímeros y ceras avanzadas para brindar protección duradera y un brillo intenso. Realza la profundidad y riqueza del color, dejando un acabado de alto brillo. Fórmula fácil de aplicar y retirar.",
      },
      benefits: {
        en: [
          "Premium yellow carnauba wax formula",
          "Enhances gloss, depth, and color richness",
          "Durable protection for painted surfaces",
          "Easy wipe-on, wipe-off application",
          "High-gloss, slick finish",
          "Safe for all glossy paint and clear coat finishes",
          "Suitable for hand application and DA polisher use",
        ],
        es: [
          "Contiene carnauba amarilla premium",
          "Aumenta el brillo, la profundidad y la intensidad del color",
          "Protección duradera para superficies pintadas",
          "Aplicación fácil: poner y retirar",
          "Acabado suave y de alto brillo",
          "Segura para pintura brillante y clear coat",
          "Apta para aplicación a mano y con pulidora DA",
        ],
      },
      howToUse: {
        en: "Apply a thin, even layer by hand or with a DA polisher. Allow to haze, then wipe off with a clean microfiber towel to reveal a deep, glossy finish.",
        es: "Aplicar una capa fina y uniforme a mano o con pulidora DA. Dejar secar ligeramente y retirar con una toalla de microfibra limpia para revelar un brillo profundo.",
      },
    },
  },
  {
    id: "falconpro-foam-pad-polish",
    brandSlug: "falconpro",
    slug: "foam-pad-polish",
    name: "Foam Pad Polish",
    image: "/images/FoamPadPolish1Quart.png",
    variants: [
            { size: "1 Quart", image: "/images/FoamPadPolish1Quart.png" },
            { size: "1 Gal", image: "/images/FoamPadPolish1Gal.png" },
    ],
    content: {
      description: {
        en: "Final-step finishing polish designed to deliver a brilliant, high-gloss finish while removing buffer swirls, light oxidation, and micro-surface imperfections. Effectively eliminates 3000-grit sanding marks and similar defects. This advanced formula buffs clean without gumming or clogging foam pads and contains no silicones or waxes, leaving a clean, non-oily surface ready for protection.",
        es: "Pulimento de acabado final diseñado para proporcionar un brillo intenso mientras elimina marcas de pulido, oxidación ligera e imperfecciones microscópicas. Remueve rayas de lijado de grano 3000 y defectos similares. Su fórmula avanzada no empasta ni obstruye las esponjas y no contiene siliconas ni ceras, dejando una superficie limpia y sin residuos grasos.",
      },
      benefits: {
        en: [
          "Ideal as the final polishing step",
          "Removes swirl marks and micro-imperfections",
          "Eliminates 3000-grit sanding scratches",
          "Restores clarity and deep gloss",
          "No silicones or waxes",
          "Non-gumming, non-clogging formula",
          "Leaves a clean, non-oily finish",
          "Safe for use with foam polishing pads",
        ],
        es: [
          "Ideal como último paso de pulido",
          "Elimina remolinos y microimperfecciones",
          "Remueve marcas de lija grano 3000",
          "Restaura claridad y alto brillo",
          "No contiene siliconas ni ceras",
          "No obstruye ni satura las almohadillas",
          "Deja un acabado limpio y sin aceite",
          "Seguro para uso con pads de espuma",
        ],
      },
      howToUse: {
        en: "Apply with a foam polishing pad using a DA or rotary polisher. Work at moderate speed until defects are removed and gloss is achieved. Wipe residue with a clean microfiber towel.",
        es: "Aplicar con un pad de espuma usando pulidora DA o rotativa. Trabajar a velocidad moderada hasta eliminar los defectos y obtener brillo. Retirar residuos con una toalla de microfibra limpia.",
      },
    },
  },
  {
    id: "falconpro-big-bite-compound",
    brandSlug: "falconpro",
    slug: "big-bite-compound",
    name: "Big Bite Compound",
    image: "/images/BigBiteGallon.png",
    variants: [
      { size: "1 Gal", image: "/images/BigBiteGallon.png" },
      { size: "1 Quart", image: "/images/BigBiteGallon.png" },
    ],
    content: {
      description: {
        en: "High-performance heavy-cut compound formulated with advanced technology to remove deep scratches and severe paint defects while restoring a high-gloss finish. Effectively eliminates 1000 to 1500 grit sanding marks on freshly painted or fully cured paint. Silicone-free and body shop safe.",
        es: "Compuesto de alto rendimiento y corte agresivo formulado con tecnología avanzada para eliminar rayones profundos y defectos severos de pintura, devolviendo un acabado de alto brillo. Remueve marcas de lijado de grano 1000 a 1500 en pinturas recién aplicadas o ya curadas. Libre de siliconas y seguro para talleres de pintura.",
      },
      benefits: {
        en: [
          "Heavy-cut compound for deep scratch removal",
          "Removes 1000–1500 grit sanding marks",
          "Restores clarity and high gloss",
          "Advanced fast-cut technology",
          "No silicones – body shop safe",
          "Suitable for fresh and cured paint",
          "Works with rotary and DA polishers",
        ],
        es: [
          "Compuesto de corte fuerte para rayones profundos",
          "Elimina marcas de lija grano 1000–1500",
          "Restaura brillo y claridad",
          "Tecnología avanzada de alto poder de corte",
          "Sin siliconas, seguro para body shop",
          "Apto para pintura fresca y curada",
          "Compatible con pulidoras rotativas y DA",
        ],
      },
      howToUse: {
        en: "Apply with a cutting pad using a rotary or DA polisher. Work at moderate speed until defects are removed, then wipe clean with a microfiber towel.",
        es: "Aplicar con pad de corte usando pulidora rotativa o DA. Trabajar a velocidad media hasta eliminar defectos y retirar residuos con toalla de microfibra.",
      },
    },
  },
  {
    id: "falconpro-miracle-cut-1000",
    brandSlug: "falconpro",
    slug: "miracle-cut-1000",
    name: "Miracle Cut 1000",
    image: "/images/MiracleCutquart.png",
    variants: [
        { size: "1 Quart", image: "/images/MiracleCutquart.png" },
        { size: "1 Gal", image: "/images/MiracleCutGallon.png" },
    ],
    content: {
      description: {
        en: "Fast-cutting abrasive compound designed to remove 1000 to 1200 grit sanding scratches, oxidation, and water spots. This quick-acting formula restores clarity and gloss with minimal surface swirling and easy cleanup. Ideal for use on all types of painted surfaces.",
        es: "Compuesto abrasivo de corte rápido diseñado para eliminar marcas de lija de grano 1000 a 1200, oxidación y manchas de agua. Su fórmula de acción rápida restaura el brillo con mínimos remolinos y fácil limpieza. Ideal para todo tipo de superficies pintadas.",
      },
      benefits: {
        en: [
          "Removes 1000–1200 grit sanding marks",
          "Eliminates oxidation and water spots",
          "Fast-cutting, high-performance compound",
          "Restores high gloss with minimal swirl marks",
          "Easy wipe-off and clean-up",
          "Safe for all painted substrates",
          "Suitable for rotary and DA polishers",
        ],
        es: [
          "Elimina marcas de lija grano 1000–1200",
          "Remueve oxidación y manchas de agua",
          "Compuesto de alto rendimiento y corte rápido",
          "Restaura alto brillo con pocos remolinos",
          "Limpieza fácil",
          "Seguro para todo tipo de pintura",
          "Compatible con pulidoras rotativas y DA",
        ],
      },
      howToUse: {
        en: "Apply with a cutting or polishing pad using a rotary or DA polisher. Work at moderate speed until defects are removed, then wipe residue with a clean microfiber towel.",
        es: "Aplicar con pad de corte o pulido usando pulidora rotativa o DA. Trabajar a velocidad media hasta eliminar defectos y retirar residuos con una toalla de microfibra limpia.",
      },
    },
  },
]
