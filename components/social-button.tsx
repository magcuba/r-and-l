"use client"

import { Instagram, Facebook, Link as LinkIcon } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

type SocialButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function SocialButton({ className, ...props }: SocialButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const shareButtons = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/rluniversalsuppliesen/",
    },
    {
      icon: TikTokIcon,
      label: "TikTok",
      href: "https://www.tiktok.com/@rluniversalsupplies?_r=1&_t=ZP-9356bCPOkJy",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/share/17yRkRphLn/?mibextid=wwXIfr",
    },
  ]

  const handlePress = (index: number) => {
    setActiveIndex(index)
    setTimeout(() => setActiveIndex(null), 300)
  }

  const toggleVisible = () => setIsVisible((v) => !v)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <motion.div
        animate={{ opacity: isVisible ? 0 : 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Button
          type="button"
          className={cn(
            "relative min-w-36",
            "bg-white dark:bg-black",
            "hover:bg-gray-50 dark:hover:bg-gray-950",
            "text-black dark:text-white",
            "border border-black/10 dark:border-white/10",
            "transition-colors duration-200",
            className,
          )}
          onClick={toggleVisible}
          {...props}
        >
          <span className="flex items-center gap-2">
            <LinkIcon className="h-4 w-4" />
            Social
          </span>
        </Button>
      </motion.div>

      <motion.div
        animate={{ width: isVisible ? "auto" : 0 }}
        className="absolute top-0 left-0 flex h-10 overflow-hidden"
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      >
        {shareButtons.map((button, i) => {
          const Icon = button.icon
          return (
            <motion.a
              key={`share-${button.label}`}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={button.label}
              className={cn(
                "h-10",
                "w-10",
                "flex items-center justify-center",
                "bg-black dark:bg-white",
                "text-white dark:text-black",
                i === 0 && "rounded-l-md",
                i === shareButtons.length - 1 && "rounded-r-md",
                "border-white/10 border-r last:border-r-0 dark:border-black/10",
                "hover:bg-gray-900 dark:hover:bg-gray-100",
                "outline-none",
                "relative overflow-hidden",
                "transition-colors duration-200",
              )}
              onClick={() => handlePress(i)}
              transition={{
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1],
                delay: isVisible ? i * 0.05 : 0,
              }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : -20,
              }}
            >
              <motion.div
                animate={{ scale: activeIndex === i ? 0.85 : 1 }}
                className="relative z-10"
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <Icon className="h-4 w-4" />
              </motion.div>
              <motion.div
                animate={{ opacity: activeIndex === i ? 0.15 : 0 }}
                className="absolute inset-0 bg-white dark:bg-black"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
            </motion.a>
          )
        })}
      </motion.div>
    </div>
  )
}
