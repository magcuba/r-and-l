import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { VideoLinksSection } from "@/components/video-links-section"
import { BrandsSection } from "@/components/brands-section"
import { StoreLocation } from "@/components/store-location"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <VideoLinksSection />
        <BrandsSection />
        <StoreLocation />
      </main>
      <SiteFooter />
    </div>
  )
}
