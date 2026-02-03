"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import Link from "next/link"
import { withBasePath } from "@/lib/base-path"

const brands = [
  { name: "P&S", slug: "ps", logo: withBasePath("/ps-logo.png") },
  { name: "Koch-Chemie", slug: "koch-chemie", logo: withBasePath("/koch-chemie-logo.png") },
  { name: "FalconPro", slug: "falconpro", logo: withBasePath("/falconpro-logo.png") },
  { name: "Lake Country", slug: "lake-country", logo: withBasePath("/lake-country-logo.png") },
  { name: "Power Kleen", slug: "power-kleen", logo: withBasePath("/power-kleen-logo.png") },
]

export function BrandsSection() {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isPaused) return

    let scrollInterval: NodeJS.Timeout

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }, 30)
    }

    startScroll()

    return () => clearInterval(scrollInterval)
  }, [isPaused])

  return (
    <section id="brands" className="w-full py-16 md:py-24 border-t bg-muted/20">
      <div className="container max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
            {t("brands_title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto text-pretty">{t("brands_subtitle")}</p>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="overflow-x-auto overflow-y-hidden group scrollbar-hide hover:scrollbar-show"
          style={{ cursor: "grab" }}
          onMouseDown={(e) => {
            const el = e.currentTarget
            el.style.cursor = "grabbing"
          }}
          onMouseUp={(e) => {
            const el = e.currentTarget
            el.style.cursor = "grab"
          }}
        >
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              width: 0px;
              height: 0px;
            }
            .scrollbar-hide:hover::-webkit-scrollbar {
              height: 8px;
            }
            .scrollbar-hide::-webkit-scrollbar-track {
              background: var(--muted);
            }
            .scrollbar-hide::-webkit-scrollbar-thumb {
              background: var(--border);
              border-radius: 4px;
            }
            .scrollbar-hide::-webkit-scrollbar-thumb:hover {
              background: var(--muted-foreground);
            }
          `}</style>
          <div className="flex gap-12 py-8">
            {[...brands, ...brands].map((brand, index) => (
              <Link
                key={`${brand.name}-${index}`}
                href={`/shop/${brand.slug}`}
                className="flex-shrink-0 flex items-center justify-center w-40 h-20 transition-all opacity-100 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`Shop ${brand.name}`}
              >
                <Image
                  src={brand.logo || withBasePath("/placeholder.svg")}
                  alt={brand.name}
                  width={160}
                  height={80}
                  className="max-w-full max-h-full object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
