import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BRANDS } from "@/lib/brands"
import { PRODUCTS } from "@/lib/products"
import { ProductContent } from "./product-content"

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ brand: p.brandSlug, product: p.id }))
}

export const dynamicParams = false

export default async function ProductPage({
  params,
}: {
  params: Promise<{ brand: string; product: string }>
}) {
  const { brand: brandSlug, product: productId } = await params

  const brand = BRANDS.find((b) => b.slug === brandSlug)
  if (!brand) return notFound()

  const product = PRODUCTS.find((p) => p.brandSlug === brandSlug && p.id === productId)
  if (!product) return notFound()

  return (
    <main className="container max-w-5xl mx-auto px-4 py-12 space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{brand.name}</p>
          <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
        </div>

        <Link
          href={`/shop/${brandSlug}`}
          className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
        >
          Back to {brand.name}
        </Link>
      </div>

      <div className="rounded-xl border overflow-hidden">
        <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
          <Image
            src={product.image || "/placeholder.png"}
            alt={product.name}
            fill
            className="object-contain p-8"
          />
        </div>

        <ProductContent content={product.content} />
      </div>
    </main>
  )
}
