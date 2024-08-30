"use client";

import { useEffect, useState, useRef } from "react";

export default function Audio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const handleMuteToggle = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handlePlayToggle = () => {
    if (audioRef.current) {
      if (!isPlay) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlay(!isPlay);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <div className="flex items-end justify-end">
      <audio ref={audioRef} src="/lain-opening.mp3" loop className="hidden" />
      <div className="flex gap-4 opacity-50">
        <button onClick={handlePlayToggle}>{isPlay ? "stop" : "play"}</button>
        <button onClick={handleMuteToggle}>
          {isMuted ? "unmute" : "mute"}
        </button>
      </div>
    </div>
  );
}
