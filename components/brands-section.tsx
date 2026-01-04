"use client"

import { useEffect, useRef, useState } from "react"

const brands = [
  { name: "Meguiar's", logo: "/meguiars-logo.jpg" },
  { name: "Chemical Guys", logo: "/chemical-guys-logo.jpg" },
  { name: "Turtle Wax", logo: "/turtle-wax-logo.jpg" },
  { name: "Mothers", logo: "/mothers-car-care-logo.jpg" },
  { name: "3M", logo: "/3m-automotive-logo.jpg" },
  { name: "Griot's Garage", logo: "/griots-garage-logo.jpg" },
]

export function BrandsSection() {
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
            {"Trusted Brands"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto text-pretty">
            {"We carry premium products from the industry's most respected brands"}
          </p>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="overflow-hidden"
        >
          <div className="flex gap-12 py-8">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-40 h-20 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
