"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="mt-2">
      <div className="text-sm tracking-wider text-[var(--text-sub)]">Music</div>
      <button
        type="button"
        onClick={toggleMusic}
        className="mt-1 inline-flex cursor-pointer items-center gap-2 rounded-full border-none bg-[var(--accent-soft)] px-4 py-2.5 text-base font-semibold text-[var(--accent)] transition-colors hover:bg-pink-200"
        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif" }}
        aria-label="배경음 재생"
      >
        <span className="text-lg">
          {isPlaying ? "⏸" : "▶"}
        </span>
        <span>{isPlaying ? "음악 일시정지" : "음악 재생"}</span>
      </button>
      <audio ref={audioRef} loop preload="metadata">
        <source src="/music/wedding_invitation_music.wav" />
      </audio>
    </div>
  );
}
