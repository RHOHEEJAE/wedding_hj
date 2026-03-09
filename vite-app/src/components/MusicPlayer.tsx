import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.play().then(() => setIsPlaying(true)).catch(() => {})
  }, [])

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="mt-2">
      <div className="text-sm tracking-wider text-[var(--text-sub)]">Music</div>
      <Button
        type="button"
        variant="secondary"
        size="lg"
        onClick={toggleMusic}
        className="mt-1 font-nanum-pen"
        aria-label="배경음 재생"
      >
        <span className="text-lg">{isPlaying ? "⏸" : "▶"}</span>
        <span>{isPlaying ? "음악 일시정지" : "음악 재생"}</span>
      </Button>
      <audio ref={audioRef} loop preload="metadata">
        <source src="/music/wedding_invitation_music.wav" />
      </audio>
    </div>
  )
}
