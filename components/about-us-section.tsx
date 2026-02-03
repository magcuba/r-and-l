"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { withBasePath } from "@/lib/base-path"

export function AboutUsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16">{t("about_title")}</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <Image src={withBasePath("/store-front.jpg")} alt={t("about_image_alt")} fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">{t("about_paragraph_1")}</p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("about_paragraph_2_prefix")}{" "}
              <span className="font-semibold text-foreground">P&amp;S</span>,{" "}
              <span className="font-semibold text-foreground">Koch-Chemie</span>,{" "}
              <span className="font-semibold text-foreground">FalconPro</span>,{" "}
              <span className="font-semibold text-foreground">Lake Country</span>{" "}
              {t("about_paragraph_2_suffix")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
