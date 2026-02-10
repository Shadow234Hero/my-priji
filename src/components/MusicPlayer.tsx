import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play().catch(() => {});
        setIsMuted(false);
        setHasInteracted(true);
      }
    };
    document.addEventListener("click", handleClick, { once: true });
    return () => document.removeEventListener("click", handleClick);
  }, [hasInteracted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <>
      <audio ref={audioRef} src="/audio/bgmusic.mp3" loop autoPlay muted />
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsMuted(!isMuted);
          if (isMuted && audioRef.current) {
            audioRef.current.play().catch(() => {});
          }
        }}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-romantic animate-pulse-glow transition-transform hover:scale-110"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </>
  );
};

export default MusicPlayer;
