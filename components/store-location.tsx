"use client"

import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function StoreLocation() {
  const { t } = useLanguage()

  return (
    <section id="location" className="w-full py-16 md:py-24 border-t">
      <div className="container max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
            {t("store_visit_title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto text-pretty">{t("store_visit_subtitle")}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-lg border bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.9385976447985!2d-82.40687!3d27.986236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c0b5e0c8e999%3A0x0!2s1100%20N%2050th%20St%20Unit%203A%2C%20Tampa%2C%20FL%2033619!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="R&L Store Location Map"
            />
          </div>

          <Card className="bg-accent/50 border-border/50">
            <CardContent className="p-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-accent-foreground">{t("store_card_title")}</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="h-5 w-5 text-accent-foreground/70 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-accent-foreground">{"1100 N 50th St Unit 3A"}</p>
                      <p className="text-accent-foreground/80">{"Tampa, FL 33619"}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-5 w-5 text-accent-foreground/70 flex-shrink-0 mt-1" />
                    <div>
                      <a href="tel:8136029576" className="font-medium text-accent-foreground hover:underline">
                        {"813-602-9576"}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="h-5 w-5 text-accent-foreground/70 flex-shrink-0 mt-1" />
                    <div className="space-y-1">
                      <p className="font-medium text-accent-foreground">{t("store_hours_label")}</p>
                      <p className="text-sm text-accent-foreground/80">{t("store_hours_mon_fri")}</p>
                      <p className="text-sm text-accent-foreground/80">{t("store_hours_sat")}</p>
                      <p className="text-sm text-accent-foreground/80">{t("store_hours_sun")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a
                  href="https://maps.google.com/?q=1100+N+50th+St+Unit+3A,+Tampa,+FL+33619"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-5 w-5 mr-2" />
                  {t("store_get_directions")}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
