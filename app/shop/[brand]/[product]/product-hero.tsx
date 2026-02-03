"use client"
// test push from VS Code
import Image from "next/image"
import { useMemo, useState } from "react"
import type { Product, Variant } from "@/lib/products"
import { withBasePath } from "@/lib/base-path"

type Size = Variant["size"]

function getDefaultSize(product: Product): Size {
  if (product.variants?.length) {
    return product.variants[0].size
  }
  return "1L"
}

function getSizes(product: Product): Size[] {
  if (!product.variants?.length) return ["1L"]

  const sizes: Size[] = []
  const seen = new Set<Size>()
  for (const variant of product.variants) {
    if (!seen.has(variant.size)) {
      seen.add(variant.size)
      sizes.push(variant.size)
    }
  }
  return sizes.length ? sizes : ["1L"]
}

function getImageForSize(product: Product, size: Size): string {
  const v = product.variants?.find((x) => x.size === size)
  return v?.image || product.image || "/placeholder.png"
}

export function ProductHero({ product }: { product: Product }) {
  const sizes = useMemo(() => getSizes(product), [product])
  const [size, setSize] = useState<Size>(() => getDefaultSize(product))
  const img = useMemo(() => withBasePath(getImageForSize(product, size)), [product, size])

  const hasVariants = sizes.length > 1

  return (
    <div className="space-y-4">
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-xl bg-muted">
        <Image
          src={img}
          alt={product.name}
          fill
          className="object-contain p-3 sm:p-6"
          priority
        />
      </div>

      {/* Size selector */}
      {hasVariants && (
        <div className="flex items-center gap-2 px-4">
          <span className="text-sm text-muted-foreground">Size:</span>
          {sizes.map((s) => {
            const active = s === size
            return (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={[
                  "text-sm font-medium rounded-md px-4 py-1.5 transition-colors border",
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background hover:bg-muted border-border",
                ].join(" ")}
              >
                {s}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
