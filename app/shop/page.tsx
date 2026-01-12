import Link from "next/link"
import Image from "next/image"
import { BRANDS } from "@/lib/brands"

export default function ShopByBrandPage() {
  return (
    <main className="container max-w-7xl mx-auto px-4 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Shop by Brand</h1>
        <p className="text-muted-foreground">
          Browse our featured detailing brands. More brands will be added as our catalog grows.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BRANDS.map((brand) => (
          <Link
            key={brand.slug}
            href={`/shop/${brand.slug}`}
            className="group rounded-xl border bg-background hover:bg-muted/40 transition-colors p-5"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg border bg-muted">
                <Image
                  src={brand.logo || "/images/placeholder-logo.png"}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="space-y-1">
                <div className="font-semibold group-hover:text-primary transition-colors">{brand.name}</div>
                <div className="text-sm text-muted-foreground">View products</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
