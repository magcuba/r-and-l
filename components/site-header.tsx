"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Youtube, Globe } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [language, setLanguage] = useState<"en" | "es">("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"))
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="border-b bg-muted/30">
        <div className="container max-w-7xl mx-auto flex h-10 items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">{"Follow us:"}</span>
            <div className="flex gap-2">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={toggleLanguage} className="h-8 text-xs">
            <Globe className="h-3 w-3 mr-1" />
            {language === "en" ? "Spanish" : "English"}
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <div className="container max-w-7xl mx-auto">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
              {"R&L"}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight">{"R&L"}</span>
              <span className="text-xs text-muted-foreground leading-tight">{"Car Care Products"}</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              {"Home"}
            </Link>
            <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">
              {"Shop By Brand"}
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              {"Blog"}
            </Link>
            <Link href="/store" className="text-sm font-medium hover:text-primary transition-colors">
              {"Store Hours & Location"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
