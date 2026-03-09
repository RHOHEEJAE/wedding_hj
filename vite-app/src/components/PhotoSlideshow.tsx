import { useState, useEffect, useRef, useCallback } from "react"

const images = [
  "/images/88b9352ea768dfef0691a8c241f923d3_1568698432_96.jpg",
  "/images/shutterstock_119617003.jpg",
  "/images/wedding.png",
]

export default function PhotoSlideshow() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 8000)
  }, [])

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startTimer])

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-pink-200/60 bg-[#fff7f7]">
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-none"
          style={{
            opacity: current === index ? 1 : 0,
            animation:
              current === index ? "fadeZoom 8s ease-in-out forwards" : "none",
          }}
        >
          <img
            src={src}
            alt="결혼식 사진"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
