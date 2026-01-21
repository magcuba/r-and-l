"use client"

import { useLanguage } from "@/components/language-provider"

type Content = {
  description: { en: string; es: string }
  benefits: { en: string[]; es: string[] }
  howToUse: { en: string; es: string }
}

export function ProductContent({ content }: { content?: Content }) {
  const { lang } = useLanguage()

  if (!content) {
    return (
      <div className="p-6">
        <p className="text-muted-foreground">Product details coming soon.</p>
      </div>
    )
  }

  const description = content.description[lang]
  const benefits = content.benefits[lang]
  const howToUse = content.howToUse[lang]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold">
          {lang === "es" ? "Descripción" : "Description"}
        </h2>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          {lang === "es" ? "Beneficios" : "Key Benefits"}
        </h3>
        <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
          {benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          {lang === "es" ? "Modo de uso" : "How to Use"}
        </h3>
        <p className="text-muted-foreground mt-1">{howToUse}</p>
      </div>
    </div>
  )
}
