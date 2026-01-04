import Image from "next/image"

export function AboutUsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16">About Us</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <Image src="/store-front.jpg" alt="Store Front" fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are a specialized distributor of professional-grade products for automotive washing and detailing, as
              well as cleaning solutions for restaurants, offices, and residential environments. Our mission is to
              provide high-quality, dependable products at accessible prices for professionals and enthusiasts alike.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              We partner with trusted manufacturers such as{" "}
              <span className="font-semibold text-foreground">FalcoPro Industries</span> and{" "}
              <span className="font-semibold text-foreground">Huerta Chemicals</span>, the producer of the H7 brand, to
              ensure superior performance, consistency, and reliability in every product we offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
