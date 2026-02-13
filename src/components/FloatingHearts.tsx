import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 5 + (i * 12),
      top: 8 + ((i * 37) % 80),
      size: 24 + (i % 3) * 12,
      delay: i * 0.5,
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {hearts.map((heart) => (
        <svg
          key={heart.id}
          className="absolute animate-pulse-glow"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            filter: "drop-shadow(0 0 8px hsl(340 82% 65% / 0.7)) drop-shadow(0 0 16px hsl(340 82% 65% / 0.4))",
          }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            stroke="hsl(340, 82%, 65%)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          />
        </svg>
      ))}
    </div>
  );
};

export default FloatingHearts;
