import { HeroSection } from "@/components/hero-section"
import { VideoLinksSection } from "@/components/video-links-section"
import { BrandsSection } from "@/components/brands-section"
import { AboutUsSection } from "@/components/about-us-section"
import { StoreLocation } from "@/components/store-location"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoLinksSection />
      <BrandsSection />
      <AboutUsSection />
      <StoreLocation />
    </>
  )
}
