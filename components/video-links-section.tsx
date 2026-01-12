"use client"

import { Play } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useMemo } from "react"

interface VideoLink {
  id: string
  platform: "tiktok" | "instagram" | "youtube" | "facebook"
  url: string
  thumbnail: string
  title: string
}

export function VideoLinksSection() {
  const { t, lang } = useLanguage()

  const videos = useMemo<VideoLink[]>(() => {
    return [
      {
        id: "1",
        platform: "tiktok",
        url: "https://www.tiktok.com/@yourhandle",
        thumbnail: "/car-wash-foam-cannon-action.jpg",
        title: t("video_1_title"),
      },
      {
        id: "2",
        platform: "instagram",
        url: "https://www.instagram.com/p/yourpost",
        thumbnail: "/car-detailing-before-after.jpg",
        title: t("video_2_title"),
      },
      {
        id: "3",
        platform: "youtube",
        url: "https://www.youtube.com/watch?v=yourvideo",
        thumbnail: "/professional-car-wash-tutorial.jpg",
        title: t("video_3_title"),
      },
      {
        id: "4",
        platform: "tiktok",
        url: "https://www.tiktok.com/@yourhandle",
        thumbnail: "/ceramic-coating-application.png",
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
                <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="w-full h-full object-cover" />

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

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-semibold text-sm">{video.title}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">{t("videos_follow_text")}</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.tiktok.com/@yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              TikTok
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://www.instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://www.youtube.com/@yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
