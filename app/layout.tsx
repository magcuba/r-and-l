import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LanguageProvider } from "@/components/language-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { withBasePath } from "@/lib/base-path"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "R&L Car Care Products | Premium Auto Detailing Supplies",
  description: "Premium car wash and detailing products from top brands. Visit our Tampa, FL store or shop online.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: withBasePath("/favicon.png"), type: "image/png", sizes: "32x32" },
      { url: withBasePath("/images/logo.png"), type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: withBasePath("/apple-touch-icon.png"), type: "image/png", sizes: "180x180" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </LanguageProvider>
        </ThemeProvider>

      </body>
    </html>
  )
}
