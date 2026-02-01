import { VideoLinksCard } from "@/components/video-links-card"
import { Instagram, Facebook } from "lucide-react"

const howToVideos = [
  {
    title: "How to Apply Ceramic Coating",
    platform: "youtube" as const,
    url: "https://youtube.com/watch?v=example1",
    thumbnail: "/ceramic-coating-application.png",
    description: "Step-by-step guide to applying ceramic coating for long-lasting protection",
  },
  {
    title: "Perfect Foam Cannon Technique",
    platform: "tiktok" as const,
    url: "https://tiktok.com/@example/video/1",
    thumbnail: "/car-wash-foam-cannon-action.jpg",
    description: "Master the foam cannon for the ultimate pre-wash",
  },
  {
    title: "Interior Detailing Like a Pro",
    platform: "instagram" as const,
    url: "https://www.instagram.com/rluniversalsuppliesen/",
    thumbnail: "/car-detailing-polish.jpg",
    description: "Professional interior detailing tips and tricks",
  },
  {
    title: "Paint Correction Basics",
    platform: "youtube" as const,
    url: "https://youtube.com/watch?v=example2",
    thumbnail: "/professional-car-wash-tutorial.jpg",
    description: "Learn the fundamentals of paint correction and polishing",
  },
]

const recommendations = [
  {
    title: "Best Products for Black Cars",
    platform: "youtube" as const,
    url: "https://youtube.com/watch?v=example3",
    thumbnail: "/car-wash-foam-spray.jpg",
    description: "Our top product recommendations for maintaining black paint",
  },
  {
    title: "Winter Car Care Essentials",
    platform: "instagram" as const,
    url: "https://www.instagram.com/rluniversalsuppliesen/",
    thumbnail: "/car-detailing-before-after.jpg",
    description: "Must-have products to protect your car during winter months",
  },
  {
    title: "Quick Detail Between Washes",
    platform: "tiktok" as const,
    url: "https://tiktok.com/@example/video/2",
    thumbnail: "/car-detailing-polish.jpg",
    description: "Fast and effective products for maintaining your car's shine",
  },
  {
    title: "Wheel Cleaning Product Guide",
    platform: "youtube" as const,
    url: "https://youtube.com/watch?v=example4",
    thumbnail: "/car-wash-foam-cannon-action.jpg",
    description: "The best wheel cleaners for different types of wheels",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 py-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              {"Car Care Blog"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {"Expert tips, how-to guides, and product recommendations for keeping your vehicle in pristine condition"}
            </p>
          </div>
        </div>
      </section>

      {/* How To Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{"How To Guides"}</h2>
              <p className="text-muted-foreground text-lg">
                {"Learn professional car care techniques from our expert tutorials"}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {howToVideos.map((video, index) => (
                <VideoLinksCard key={index} {...video} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{"Product Recommendations"}</h2>
              <p className="text-muted-foreground text-lg">{"Discover our top picks for every car care situation"}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {recommendations.map((video, index) => (
                <VideoLinksCard key={index} {...video} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">{"Stay Updated with Our Latest Content"}</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto text-pretty">
              {"Follow us on social media for daily tips, product reviews, and exclusive car care content"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="https://www.facebook.com/share/17yRkRphLn/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-foreground hover:bg-background/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Facebook className="h-5 w-5" />
                {"Facebook"}
              </a>
              <a
                href="https://www.instagram.com/rluniversalsuppliesen/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-foreground hover:bg-background/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Instagram className="h-5 w-5" />
                {"Instagram"}
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-foreground hover:bg-background/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                {"TikTok"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
