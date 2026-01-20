import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BRANDS, type Brand } from "@/lib/brands"
import { PRODUCTS } from "@/lib/products"

export function generateStaticParams() {
  return BRANDS.map((b) => ({ brand: b.slug }))
}

export const dynamicParams = false

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>
}) {
  const { brand: brandSlug } = await params

  const brand = BRANDS.find((b: Brand) => b.slug === brandSlug)
  if (!brand) return notFound()

  const brandProducts = PRODUCTS.filter((p) => p.brandSlug === brandSlug)

  return (
    <main className="container max-w-7xl mx-auto px-4 py-12 space-y-10">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-xl border bg-muted">
          <Image
            src={brand.logo || "/placeholder.png"}
            alt={`${brand.name} logo`}
            fill
            className="object-contain p-2"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{brand.name}</h1>
          <p className="text-muted-foreground max-w-2xl">
            Browse products from {brand.name}. We’ll keep expanding this catalog over time.
          </p>

          <div className="flex gap-3 pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              Back to all brands
            </Link>

            <Link
              href="/store"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Visit the store
            </Link>
          </div>
        </div>
      </div>

      {/* Products */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Products</h2>
            <p className="text-sm text-muted-foreground">
              Showing {brandProducts.length} item{brandProducts.length === 1 ? "" : "s"}.
            </p>
          </div>
        </div>

        {brandProducts.length === 0 ? (
          <div className="rounded-xl border bg-muted/20 p-6">
            <p className="text-muted-foreground">
              No products added yet for {brand.name}. We can add them next.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brandProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-xl border bg-background hover:bg-muted/40 transition-colors overflow-hidden"
              >
                {/* Image area */}
                <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                  <Image
                    src={product.image || "/placeholder.png"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* Text area */}
                <div className="p-4 space-y-1">
                  <div className="font-semibold leading-snug group-hover:text-primary transition-colors">
                    {product.name}
                  </div>
                  <div className="text-sm text-muted-foreground">View details (coming soon)</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
