import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 5 + (i * 12.5),
      top: 10 + (i % 3) * 35,
      size: 20 + (i % 3) * 10,
      delay: i * 0.4,
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-pulse-glow"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            filter: "drop-shadow(0 0 6px hsl(340 82% 65% / 0.6))",
            opacity: 0.3,
            WebkitTextStroke: "1.5px hsl(340, 82%, 65%)",
            color: "transparent",
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
