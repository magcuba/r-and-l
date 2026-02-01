"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Youtube } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container max-w-7xl mx-auto py-12 md:py-16 px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Image src="/images/logo.png" alt="R&L Logo" width={140} height={70} className="h-16 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground text-pretty">{t("footer_tagline")}</p>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-sm font-semibold">{t("footer_quick_links")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("shop_by_brand")}
                </Link>
              </li>
              <li>
                <Link href="/#location" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("store_hours_location")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-sm font-semibold">{t("footer_contact")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t("footer_address_line_1")}</li>
              <li>{t("footer_address_line_2")}</li>
              <li>
                <a href="tel:8136029576" className="hover:text-foreground transition-colors">
                  813-602-9576
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-sm font-semibold">{t("footer_follow_us")}</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="https://www.instagram.com/rluniversalsuppliesen/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>

              <Link
                href="https://www.tiktok.com/@rluniversalsupplies?_r=1&_t=ZP-9356bCPOkJy"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>

              <Link
                href="https://www.facebook.com/share/17yRkRphLn/?mibextid=wwXIfr"
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
          <p>{t("footer_copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
