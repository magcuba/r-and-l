"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink } from "lucide-react"
import Image from "next/image"
import { withBasePath } from "@/lib/base-path"

interface VideoLinksCardProps {
  title: string
  platform: "youtube" | "tiktok" | "instagram"
  url: string
  thumbnail: string
  description: string
}

const platformStyles = {
  youtube: {
    bg: "bg-red-500",
    text: "YouTube",
  },
  tiktok: {
    bg: "bg-black",
    text: "TikTok",
  },
  instagram: {
    bg: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
    text: "Instagram",
  },
}

export function VideoLinksCard({ title, platform, url, thumbnail, description }: VideoLinksCardProps) {
  const platformStyle = platformStyles[platform]

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group">
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] h-full">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={thumbnail || withBasePath("/placeholder.svg")}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-4">
              <Play className="h-8 w-8 text-black fill-black" />
            </div>
          </div>
          <Badge className={`${platformStyle.bg} text-white absolute top-2 right-2 border-0`}>
            {platformStyle.text}
          </Badge>
        </div>
        <CardContent className="p-4 space-y-2">
  <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
    {title}
  </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          <div className="flex items-center gap-1 text-sm text-primary pt-2">
            <span className="font-medium">{"Watch Video"}</span>
            <ExternalLink className="h-3 w-3" />
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
