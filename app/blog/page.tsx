"use client"

import { VideoLinksCard } from "@/components/video-links-card"
import { useLanguage } from "@/components/language-provider"
import { Instagram, Facebook } from "lucide-react"
import { withBasePath } from "@/lib/base-path"

const howToVideos = [
  {
    title: {
      en: "How to Apply Ceramic Coating",
      es: "Cómo aplicar un recubrimiento cerámico",
    },
    platform: "youtube" as const,
    url: "https://youtube.com/watch?v=example1",
    thumbnail: withBasePath("/ceramic-coating-application.png"),
    description: {
      en: "Step-by-step guide to applying ceramic coating for long-lasting protection",
      es: "Guía paso a paso para aplicar recubrimiento cerámico y lograr protección duradera",
    },
  },
  {
    title: {
      en: "Perfect Foam Cannon Technique",
      es: "Técnica perfecta con foam cannon",
    },
    platform: "tiktok" as const,
    url: "https://tiktok.com/@example/video/1",
    thumbnail: withBasePath("/car-wash-foam-cannon-action.jpg"),
    description: {
      en: "Master the foam cannon for the ultimate pre-wash",
      es: "Domina el foam cannon para el prelavado perfecto",
    },
  },
  {
    title: {
      en: "Interior Detailing Like a Pro",
      es: "Detallado interior como un profesional",
    },
    platform: "instagram" as const,
    url: "https://www.instagram.com/rluniversalsuppliesen/",
    thumbnail: withBasePath("/car-detailing-polish.jpg"),
    description: {
      en: "Professional interior detailing tips and tricks",
      es: "Consejos y trucos de detallado interior profesional",
    },
  },
  {
    title: {
      en: "Paint Correction Basics",
      es: "Fundamentos de corrección de pintura",
    },
    platform: "youtube" as const,
    url: "https://youtube.com/watch?v=example2",
    thumbnail: withBasePath("/professional-car-wash-tutorial.jpg"),
    description: {
      en: "Learn the fundamentals of paint correction and polishing",
      es: "Aprende los fundamentos de la corrección y pulido de pintura",
    },
  },
]

const recommendations = [
  {
    title: {
      en: "Best Products for Black Cars",
      es: "Mejores productos para autos negros",
    },
    platform: "youtube" as const,
    url: "https://youtube.com/watch?v=example3",
    thumbnail: withBasePath("/car-wash-foam-spray.jpg"),
    description: {
      en: "Our top product recommendations for maintaining black paint",
      es: "Nuestras mejores recomendaciones para mantener la pintura negra",
    },
  },
  {
    title: {
      en: "Winter Car Care Essentials",
      es: "Esenciales de cuidado en invierno",
    },
    platform: "instagram" as const,
    url: "https://www.instagram.com/rluniversalsuppliesen/",
    thumbnail: withBasePath("/car-detailing-before-after.jpg"),
    description: {
      en: "Must-have products to protect your car during winter months",
      es: "Productos imprescindibles para proteger tu auto en invierno",
    },
  },
  {
    title: {
      en: "Quick Detail Between Washes",
      es: "Detalle rápido entre lavados",
    },
    platform: "tiktok" as const,
    url: "https://tiktok.com/@example/video/2",
    thumbnail: withBasePath("/car-detailing-polish.jpg"),
    description: {
      en: "Fast and effective products for maintaining your car's shine",
      es: "Productos rápidos y efectivos para mantener el brillo del auto",
    },
  },
  {
    title: {
      en: "Wheel Cleaning Product Guide",
      es: "Guía de productos para limpiar ruedas",
    },
    platform: "youtube" as const,
    url: "https://youtube.com/watch?v=example4",
    thumbnail: withBasePath("/car-wash-foam-cannon-action.jpg"),
    description: {
      en: "The best wheel cleaners for different types of wheels",
      es: "Los mejores limpiadores para diferentes tipos de ruedas",
    },
  },
]

export default function BlogPage() {
  const { lang, t } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="border-b bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 py-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              {t("blog_title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t("blog_subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* How To Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("blog_how_to_title")}</h2>
              <p className="text-muted-foreground text-lg">{t("blog_how_to_subtitle")}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {howToVideos.map((video, index) => (
                <VideoLinksCard
                  key={index}
                  {...video}
                  title={video.title[lang]}
                  description={video.description[lang]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("blog_recommendations_title")}</h2>
              <p className="text-muted-foreground text-lg">{t("blog_recommendations_subtitle")}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {recommendations.map((video, index) => (
                <VideoLinksCard
                  key={index}
                  {...video}
                  title={video.title[lang]}
                  description={video.description[lang]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">{t("blog_cta_title")}</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty">
              {t("blog_cta_subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="https://www.facebook.com/share/17yRkRphLn/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-foreground hover:bg-background/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Facebook className="h-5 w-5" />
                {t("blog_cta_facebook")}
              </a>
              <a
                href="https://www.instagram.com/rluniversalsuppliesen/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-foreground hover:bg-background/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Instagram className="h-5 w-5" />
                {t("blog_cta_instagram")}
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-foreground hover:bg-background/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                {t("blog_cta_tiktok")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
