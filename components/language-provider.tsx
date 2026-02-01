"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Lang = "en" | "es"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const DICT: Record<Lang, Record<string, string>> = {
  en: {
    follow_us: "Follow us:",
    home: "Home",
    shop_by_brand: "Shop By Brand",
    blog: "Blog",
    store_hours_location: "Store Hours & Location",
    english: "English",
    spanish: "Spanish",

    // Hero
    visit_our_store: "Visit Our Store",
    hero_title: "Premium Car Care Products",
    hero_subtitle:
      "Discover professional-grade car wash and detailing products from the world's leading brands. Quality supplies for professionals and enthusiasts.",
    hero_slide_1_title: "Premium Car Wash Products",
    hero_slide_2_title: "Professional Detailing",
    hero_slide_3_title: "Quality Supplies",
    hero_go_to_slide: "Go to slide",

    // About Us
    about_title: "About Us",
    about_image_alt: "Store Front",
    about_paragraph_1:
      "At R&L, we believe you should have access to the best detailing brands at the best prices — all in one place. Whether you're a car enthusiast or a professional detailer, we have the products to elevate your car-washing experience and make your vehicle look brand new, every single time.",
    about_paragraph_2_prefix: "We are proud distributors of top national and international detailing brands such as",
    about_paragraph_2_suffix:
     "and many more. With a carefully curated selection and a commitment to quality, R&L is your trusted source for all car care.",

     // Store Location
store_visit_title: "Visit Our Store",
store_visit_subtitle: "Stop by our Tampa location for expert advice and hands-on product demonstrations",
store_map_alt: "Store location map",
store_card_title: "Florida Store",
store_hours_label: "Store Hours",
store_hours_mon_fri: "Monday - Friday: 8am - 5pm",
store_hours_sat: "Saturday: 8am - 2pm",
store_hours_sun: "Sunday: Closed",
store_get_directions: "Get Directions",

// Brands Section
brands_title: "Trusted Brands",
brands_subtitle: "We carry premium products from the industry's most respected brands",


// Videos Section
videos_title: "Watch Our Latest Videos",
videos_subtitle: "Follow us on social media for car care tips and product demonstrations",
videos_follow_text: "Follow us for more content",
video_1_title: "Foam Cannon Technique",
video_2_title: "Before & After Results",
video_3_title: "Complete Wash Tutorial",
video_4_title: "Ceramic Coating Demo",

// Blog
blog_title: "Car Care Blog",
blog_subtitle: "Expert tips, how-to guides, and product recommendations for keeping your vehicle in pristine condition",
blog_how_to_title: "How To Guides",
blog_how_to_subtitle: "Learn professional car care techniques from our expert tutorials",
blog_recommendations_title: "Product Recommendations",
blog_recommendations_subtitle: "Discover our top picks for every car care situation",
blog_cta_title: "Stay Updated with Our Latest Content",
blog_cta_subtitle: "Follow us on social media for daily tips, product reviews, and exclusive car care content",
blog_cta_facebook: "Facebook",
blog_cta_instagram: "Instagram",
blog_cta_tiktok: "TikTok",


// Footer
footer_tagline: "Your trusted source for premium car wash and detailing products.",
footer_quick_links: "Quick Links",
footer_contact: "Contact",
footer_follow_us: "Follow Us",
footer_address_line_1: "1100 N 50th St Unit 3A",
footer_address_line_2: "Tampa, FL 33619",
footer_copyright: "© R&L UNIVERSAL SUPPLIES. All rights reserved.",


// Best Sellers
best_sellers_title: "Best Selling Products",
best_sellers_subtitle: "Top-rated products trusted by professionals and enthusiasts",
best_sellers_badge: "Best Seller",

// Optional: category labels (only if you want categories translated)
category_washing: "Washing",
category_protection: "Protection",
category_interior: "Interior",
category_cleaning: "Cleaning",


  },
  es: {
    follow_us: "Síguenos:",
    home: "Inicio",
    shop_by_brand: "Comprar por Marca",
    blog: "Blog",
    store_hours_location: "Horario y Ubicación",
    english: "Inglés",
    spanish: "Español",

    // Hero
    visit_our_store: "Visita Nuestra Tienda",
    hero_title: "Productos Premium para el Cuidado del Auto",
    hero_subtitle:
      "Descubre productos profesionales para lavado y detallado de autos de las mejores marcas del mundo. Calidad para profesionales y entusiastas.",
    hero_slide_1_title: "Productos Premium de Lavado",
    hero_slide_2_title: "Detallado Profesional",
    hero_slide_3_title: "Suministros de Calidad",
    hero_go_to_slide: "Ir a la diapositiva",

    // About Us
   about_title: "Sobre Nosotros",
   about_image_alt: "Fachada de la tienda",
   about_paragraph_1:
     "En R&L creemos que debes tener acceso a las mejores marcas de detallado al mejor precio, todo en un solo lugar. Ya seas un entusiasta del automóvil o un detallista profesional, tenemos los productos para elevar tu experiencia de lavado y hacer que tu vehículo luzca como nuevo, cada vez.",
   about_paragraph_2_prefix: "Somos distribuidores orgullosos de las mejores marcas nacionales e internacionales como",
   about_paragraph_2_suffix:
     "y muchas más. Con una selección cuidadosamente curada y un compromiso con la calidad, R&L es tu fuente confiable para todo el cuidado automotriz.",

     // Store Location
store_visit_title: "Visita Nuestra Tienda",
store_visit_subtitle: "Visítanos en Tampa para recibir asesoría experta y demostraciones de productos",
store_map_alt: "Mapa de ubicación de la tienda",
store_card_title: "Tienda en Florida",
store_hours_label: "Horario",
store_hours_mon_fri: "Lunes a Viernes: 8am - 5pm",
store_hours_sat: "Sábado: 8am - 2pm",
store_hours_sun: "Domingo: Cerrado",
store_get_directions: "Cómo llegar",

// Brands Section
brands_title: "Marcas de Confianza",
brands_subtitle: "Ofrecemos productos premium de las marcas más reconocidas de la industria",


// Videos Section
videos_title: "Mira Nuestros Últimos Videos",
videos_subtitle: "Síguenos en redes sociales para consejos de cuidado automotriz y demostraciones de productos",
videos_follow_text: "Síguenos para más contenido",
video_1_title: "Técnica de Cañón de Espuma",
video_2_title: "Resultados Antes y Después",
video_3_title: "Tutorial Completo de Lavado",
video_4_title: "Demostración de Recubrimiento Cerámico",

// Blog
blog_title: "Blog de Cuidado Automotriz",
blog_subtitle:
  "Consejos expertos, guias practicas y recomendaciones de productos para mantener tu vehiculo en excelente estado",
blog_how_to_title: "Guias Practicas",
blog_how_to_subtitle: "Aprende tecnicas profesionales de cuidado del auto con nuestros tutoriales",
blog_recommendations_title: "Recomendaciones de Productos",
blog_recommendations_subtitle: "Descubre nuestras mejores opciones para cada situacion",
blog_cta_title: "Mantente al Dia con Nuestro Contenido",
blog_cta_subtitle:
  "Siguenos en redes sociales para consejos diarios, reseñas de productos y contenido exclusivo",
blog_cta_facebook: "Facebook",
blog_cta_instagram: "Instagram",
blog_cta_tiktok: "TikTok",


// Footer
footer_tagline: "Tu tienda de confianza para productos premium de lavado y detallado automotriz.",
footer_quick_links: "Enlaces Rápidos",
footer_contact: "Contacto",
footer_follow_us: "Síguenos",
footer_address_line_1: "1100 N 50th St Unit 3A",
footer_address_line_2: "Tampa, FL 33619",
footer_copyright: "© R&L UNIVERSAL SUPPLIES. Todos los derechos reservados.",


// Best Sellers
best_sellers_title: "Productos Más Vendidos",
best_sellers_subtitle: "Productos mejor valorados, confiables para profesionales y entusiastas",
best_sellers_badge: "Más Vendido",

// Optional: category labels (only if you want categories translated)
category_washing: "Lavado",
category_protection: "Protección",
category_interior: "Interior",
category_cleaning: "Limpieza",


  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null
    if (saved === "en" || saved === "es") setLang(saved)
  }, [])

  useEffect(() => {
    window.localStorage.setItem("lang", lang)
  }, [lang])

  const value = useMemo<LanguageContextValue>(() => {
    return {
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === "en" ? "es" : "en")),
      t: (key: string) => DICT[lang][key] ?? key,
    }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>")
  return ctx
}
