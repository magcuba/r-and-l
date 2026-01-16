"use client"

import { useEffect, useMemo, useState } from "react"
import { useLanguage } from "@/components/language-provider"

export function HeroSection() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const videos = useMemo(
    () => [
      { id: 1, title: t("hero_slide_1_title"), url: "/car-wash-foam-spray.jpg" },
      { id: 2, title: t("hero_slide_2_title"), url: "/car-detailing-polish.jpg" },
      { id: 3, title: t("hero_slide_3_title"), url: "/car-care-products-store.jpg" },
    ],
    [t],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [videos.length])

  return (
    <section className="relative w-full overflow-hidden bg-muted/30">
      <div className="container max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance text-center lg:text-left">
              {t("hero_title")}
            </h1>

            <p className="text-lg text-muted-foreground text-pretty max-w-[600px] text-center lg:text-left mx-auto lg:mx-0">
              {t("hero_subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#brands"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-xs sm:px-8 sm:py-3 sm:text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {t("shop_by_brand")}
              </a>

              <a
                href="#location"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-xs sm:px-8 sm:py-3 sm:text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {t("visit_our_store")}
              </a>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg border bg-card shadow-lg">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={video.url || "/placeholder.svg"} alt={video.title} className="h-full w-full object-cover" />
              </div>
            ))}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/50"
                  }`}
                  aria-label={`${t("hero_go_to_slide")} ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
