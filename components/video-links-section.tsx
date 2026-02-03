"use client"

import { Play } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useMemo } from "react"
import Image from "next/image"
import { withBasePath } from "@/lib/base-path"

interface VideoLink {
  id: string
  platform: "tiktok" | "instagram" | "youtube" | "facebook"
  url: string
  thumbnail: string
  title: string
}

export function VideoLinksSection() {
  const { t, lang } = useLanguage()

  // Toggle to show/hide video titles
  const SHOW_VIDEO_TITLES = false

  const videos = useMemo<VideoLink[]>(() => {
    return [
      {
        id: "1",
        platform: "tiktok",
        url: "https://www.tiktok.com/@rluniversalsupplies?_r=1&_t=ZP-9356bCPOkJy",
        thumbnail: withBasePath("/car-wash-foam-cannon-action.jpg"),
        title: t("video_1_title"),
      },
      {
        id: "2",
        platform: "facebook",
        url: "https://www.facebook.com/share/17yRkRphLn/?mibextid=wwXIfr",
        thumbnail: withBasePath("/car-detailing-before-after.jpg"),
        title: t("video_2_title"),
      },
      {
        id: "3",
        platform: "instagram",
        url: "https://www.instagram.com/rluniversalsuppliesen/",
        thumbnail: withBasePath("/professional-car-wash-tutorial.jpg"),
        title: t("video_3_title"),
      },
      {
        id: "4",
        platform: "tiktok",
        url: "https://www.tiktok.com/@rluniversalsupplies?_r=1&_t=ZP-9356bCPOkJy",
        thumbnail: withBasePath("/ceramic-coating-application.png"),
        title: t("video_4_title"),
      },
    ]
  }, [lang, t])

  const platformColors = {
    tiktok: "bg-black",
    instagram: "bg-gradient-to-br from-purple-600 to-pink-600",
    youtube: "bg-red-600",
    facebook: "bg-blue-600",
  } as const

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("videos_title")}</h2>
          <p className="text-muted-foreground text-lg">{t("videos_subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={video.thumbnail || withBasePath("/placeholder.svg")}
                  alt={video.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-black fill-black" />
                  </div>
                </div>

                <div
                  className={`absolute top-3 right-3 ${platformColors[video.platform]} text-white text-xs font-semibold px-3 py-1 rounded-full uppercase`}
                >
                  {video.platform}
                </div>
              </div>

              {SHOW_VIDEO_TITLES && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">{video.title}</p>
                </div>
              )}
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">{t("videos_follow_text")}</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.tiktok.com/@rluniversalsupplies?_r=1&_t=ZP-9356bCPOkJy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              TikTok
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://www.facebook.com/share/17yRkRphLn/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Facebook
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://www.instagram.com/rluniversalsuppliesen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
