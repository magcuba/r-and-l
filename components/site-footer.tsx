import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container max-w-7xl mx-auto py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                {"R&L"}
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">{"R&L"}</span>
                <span className="text-xs text-muted-foreground leading-tight">{"Car Care Products"}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              {"Your trusted source for premium car wash and detailing products."}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">{"Quick Links"}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  {"Home"}
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
                  {"Shop By Brand"}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  {"Blog"}
                </Link>
              </li>
              <li>
                <Link href="/store" className="text-muted-foreground hover:text-foreground transition-colors">
                  {"Store Hours & Location"}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">{"Contact"}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{"8009 Benjamin Road"}</li>
              <li>{"Tampa, FL 33634"}</li>
              <li>
                <a href="tel:813-819-7900" className="hover:text-foreground transition-colors">
                  {"813-819-7900"}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">{"Follow Us"}</h3>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>{"© 2025 R&L Car Care Products. All rights reserved."}</p>
        </div>
      </div>
    </footer>
  )
}
