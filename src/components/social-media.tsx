import { Button } from "@/components/ui/button"
import { DATA } from "@/lib/utils"

export function SocialMedia() {
  return (
    <>
      {DATA.social_media.map((sm, index) => (
        <Button
          key={index}
          className="pixel-box h-full bg-fuchsia-600 p-3 text-white"
          asChild
        >
          <a href={sm.link} target="_blank">
            <sm.icon />
          </a>
        </Button>
      ))}
    </>
  )
}
