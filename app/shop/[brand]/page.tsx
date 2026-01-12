import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BRANDS, type Brand } from "@/lib/brands"

export function generateStaticParams() {
  return BRANDS.map((b) => ({ brand: b.slug }))
}

export const dynamicParams = false

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: brandSlug } = await params

  const brand = BRANDS.find((b: Brand) => b.slug === brandSlug)
  if (!brand) return notFound()

  return (
    <main className="container max-w-7xl mx-auto px-4 py-12 space-y-10">
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-xl border bg-muted">
          <Image
            src={brand.logo || "/images/placeholder-logo.png"}
            alt={`${brand.name} logo`}
            fill
            className="object-contain p-2"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{brand.name}</h1>
          <p className="text-muted-foreground max-w-2xl">
            This is a sample brand page. Later, you can display products, collections, and filters for {brand.name}.
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

      <section className="rounded-xl border bg-muted/20 p-6">
        <h2 className="text-xl font-semibold">Featured items (coming soon)</h2>
        <p className="text-muted-foreground mt-2">
          When you’re ready, we can connect this page to your product data and render real product cards here.
        </p>
      </section>
    </main>
  )
}
