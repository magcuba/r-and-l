"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
}

const bestSellers: Product[] = [
  {
    id: 1,
    name: "Falcon Pro Wash & Wax Concentrate",
    price: "$19.99",
    image: "/falcon-pro-wash-wax.png",
    category: "Washing",
  },
  {
    id: 2,
    name: "Koch Chemie Protector Wax",
    price: "$34.99",
    image: "/koch-chemie-protector-wax.png",
    category: "Protection",
  },
  {
    id: 3,
    name: "P&S Xpress Interior Cleaner",
    price: "$24.99",
    image: "/ps-xpress-interior-cleaner.png",
    category: "Interior",
  },
  {
    id: 4,
    name: "WAB Aluminum & Stainless Steel Cleaner",
    price: "$16.99",
    image: "/wab-aluminum-cleaner.png",
    category: "Cleaning",
  },
  {
    id: 5,
    name: "Falcon Pro Wash & Wax Concentrate",
    price: "$19.99",
    image: "/falcon-pro-wash-wax.png",
    category: "Washing",
  },
  {
    id: 6,
    name: "Koch Chemie Protector Wax",
    price: "$34.99",
    image: "/koch-chemie-protector-wax.png",
    category: "Protection",
  },
  {
    id: 7,
    name: "P&S Xpress Interior Cleaner",
    price: "$24.99",
    image: "/ps-xpress-interior-cleaner.png",
    category: "Interior",
  },
  {
    id: 8,
    name: "WAB Aluminum & Stainless Steel Cleaner",
    price: "$16.99",
    image: "/wab-aluminum-cleaner.png",
    category: "Cleaning",
  },
]

function categoryKey(category: string) {
  switch (category) {
    case "Washing":
      return "category_washing"
    case "Protection":
      return "category_protection"
    case "Interior":
      return "category_interior"
    case "Cleaning":
      return "category_cleaning"
    default:
      return null
  }
}

export function BestSellersSection() {
  const { t } = useLanguage()
  const duplicatedProducts = [...bestSellers, ...bestSellers]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t("best_sellers_title")}
          </h2>
          <p className="text-lg text-gray-600">{t("best_sellers_subtitle")}</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="best-sellers-scroll overflow-x-auto cursor-grab active:cursor-grabbing pb-4">
            <div className="best-sellers-track flex gap-6" style={{ width: "max-content" }}>
              {duplicatedProducts.map((product, index) => {
                const key = categoryKey(product.category)
                const categoryLabel = key ? t(key) : product.category

                return (
                  <div
                    key={`${product.id}-${index}`}
                    className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="relative h-56 bg-gray-100 p-4">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                      <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {t("best_sellers_badge")}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-blue-600 font-medium mb-1">{categoryLabel}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .best-sellers-track {
          animation: scroll 60s linear infinite;
        }

        .best-sellers-scroll:hover .best-sellers-track {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .best-sellers-scroll::-webkit-scrollbar {
          height: 0px;
        }

        .best-sellers-scroll:hover::-webkit-scrollbar {
          height: 8px;
        }

        .best-sellers-scroll::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }

        .best-sellers-scroll::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }

        .best-sellers-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  )
}
