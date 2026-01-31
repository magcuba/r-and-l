"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Youtube, Globe, Menu, X, ChevronDown, ChevronRight, Moon, Sun } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { FEATURED_BRANDS } from "@/lib/brands"
import { useLanguage } from "@/components/language-provider"
import { useRouter, usePathname } from "next/navigation"
import { useTheme } from "next-themes"

export function SiteHeader() {
  const { lang, toggleLang, t } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false)
  const sortedFeaturedBrands = [...FEATURED_BRANDS].sort((a, b) => a.name.localeCompare(b.name))

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev)

  const scrollToStore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (pathname !== "/") {
      // If not on home page, navigate to home with hash
      router.push("/#location")
    } else {
      // If already on home page, scroll to the section
      const storeSection = document.getElementById("location")
      if (storeSection) {
        storeSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (pathname !== "/") {
      // If not on home page, navigate to home first
      router.push("/")
    } else {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="border-b bg-muted/30">
        <div className="container max-w-7xl mx-auto flex h-10 items-center justify-between text-sm px-4">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground hidden sm:inline">{t("follow_us")}</span>
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
                href="https://www.tiktok.com/@rluniversalsupplies?_r=1&_t=ZP-9356bCPOkJy"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>

              <Link
                href="https://www.facebook.com/share/17yRkRphLn/?mibextid=wwXIfr"
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

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="h-8 w-8 rounded-md hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <Button variant="ghost" size="sm" onClick={toggleLang} className="h-8 text-xs">
              <Globe className="h-3 w-3 mr-1" />
              {lang === "en" ? "Español" : "English"}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex h-20 items-center justify-between lg:justify-between">
          {/* Hamburger menu on left for mobile */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Logo */}
          <Link
            href="/"
            onClick={scrollToTop}
            className="flex items-center space-x-2 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <Image
              src="/images/logo.png"
              alt="R&L Logo"
              width={240}
              height={120}
              className="h-[135px] md:!h-[135px] lg:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" onClick={scrollToTop} className="text-sm font-medium hover:text-primary transition-colors">
              {t("home")}
            </Link>

            {/* Shop By Brand: Hover Dropdown */}
            <div className="relative group">
              <Link
                href="/shop"
                className="text-sm font-medium hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                {t("shop_by_brand")}
                <ChevronDown className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Dropdown panel */}
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="w-64 rounded-lg border bg-background shadow-md p-2">
                  <div className="px-2 py-2 text-xs font-semibold text-muted-foreground">Featured Brands</div>

                  <div className="flex flex-col">
                    {sortedFeaturedBrands.map((brand) => (
                      <Link
                        key={brand.slug}
                        href={`/shop/${brand.slug}`}
                        className="rounded-md px-3 py-2 text-sm hover:bg-muted transition-colors"
                      >
                        {brand.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-2 border-t pt-2">
                    <Link
                      href="/shop"
                      className="rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-muted transition-colors flex items-center justify-between"
                    >
                      View all brands
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              {t("blog")}
            </Link>

            <a
              href="#location"
              onClick={scrollToStore}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              {t("store_hours_location")}
            </a>
          </nav>

          {/* Placeholder for layout balance on mobile */}
          <div className="w-10 lg:hidden" />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            <Link
              href="/"
              onClick={scrollToTop}
              className="text-base font-medium hover:text-primary transition-colors py-2 border-b border-muted"
            >
              {t("home")}
            </Link>

            {/* Mobile: Shop By Brand Accordion */}
            <button
              type="button"
              className="w-full text-left text-base font-medium hover:text-primary transition-colors py-2 border-b border-muted flex items-center justify-between"
              onClick={() => setMobileBrandsOpen((prev) => !prev)}
            >
              <span>{t("shop_by_brand")}</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${mobileBrandsOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileBrandsOpen && (
              <div className="pb-2 border-b border-muted">
                <div className="flex flex-col gap-1 py-2">
                  {sortedFeaturedBrands.map((brand) => (
                    <Link
                      key={brand.slug}
                      href={`/shop/${brand.slug}`}
                      className="px-3 py-2 rounded-md text-sm hover:bg-muted transition-colors"
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setMobileBrandsOpen(false)
                      }}
                    >
                      {brand.name}
                    </Link>
                  ))}

                  <Link
                    href="/shop"
                    className="px-3 py-2 rounded-md text-sm font-medium text-primary hover:bg-muted transition-colors"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setMobileBrandsOpen(false)
                    }}
                  >
                    View all brands
                  </Link>
                </div>
              </div>
            )}

            <Link
              href="/blog"
              className="text-base font-medium hover:text-primary transition-colors py-2 border-b border-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("blog")}
            </Link>

            <a
              href="#location"
              onClick={scrollToStore}
              className="text-base font-medium hover:text-primary transition-colors py-2 border-b border-muted cursor-pointer"
            >
              {t("store_hours_location")}
            </a>

            {/* Theme and Language toggles for mobile */}
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{t("theme") || "Theme"}</span>
                <button
                  onClick={toggleTheme}
                  className="h-10 w-10 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center"
                  aria-label="Toggle theme"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>
              </div>
              <Button variant="outline" size="sm" onClick={toggleLang} className="h-9 text-sm">
                <Globe className="h-4 w-4 mr-2" />
                {lang === "en" ? "Español" : "English"}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
