"use client"

import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function StoreLocation() {
  return (
    <section id="location" className="w-full py-16 md:py-24 border-t">
      <div className="container max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
            {"Visit Our Store"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto text-pretty">
            {"Stop by our Tampa location for expert advice and hands-on product demonstrations"}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-lg border bg-muted">
            <img
              src="/google-maps-tampa-florida-store-location.jpg"
              alt="Store location map"
              className="h-full w-full object-cover"
            />
          </div>

          <Card className="bg-accent/50 border-border/50">
            <CardContent className="p-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-accent-foreground">{"Florida Store"}</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="h-5 w-5 text-accent-foreground/70 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-accent-foreground">{"8009 Benjamin Road"}</p>
                      <p className="text-accent-foreground/80">{"Tampa, FL 33634"}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-5 w-5 text-accent-foreground/70 flex-shrink-0 mt-1" />
                    <div>
                      <a href="tel:813-819-7900" className="font-medium text-accent-foreground hover:underline">
                        {"813-819-7900"}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="h-5 w-5 text-accent-foreground/70 flex-shrink-0 mt-1" />
                    <div className="space-y-1">
                      <p className="font-medium text-accent-foreground">{"Store Hours"}</p>
                      <p className="text-sm text-accent-foreground/80">{"Monday - Friday: 8am - 4pm"}</p>
                      <p className="text-sm text-accent-foreground/80">{"Saturday: 8am - 12pm"}</p>
                      <p className="text-sm text-accent-foreground/80">{"Sunday: Closed"}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a
                  href="https://maps.google.com/?q=8009+Benjamin+Road,+Tampa,+FL+33634"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-5 w-5 mr-2" />
                  {"Get Directions"}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
