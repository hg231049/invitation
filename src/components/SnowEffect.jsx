import { useEffect, useState } from "react";

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = Array.from({ length: 28 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      size: Math.random() * 7 + 7,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.45 + 0.35,
      drift: Math.random() * 80 - 40,
      type: Math.random() > 0.25 ? "❄" : "✦",
    }));

    setSnowflakes(flakes);
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-[999]
        overflow-hidden
      "
      aria-hidden="true"
    >
      {snowflakes.map((flake) => (
        <span
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `-${flake.delay}s`,
            "--drift": `${flake.drift}px`,
          }}
        >
          {flake.type}
        </span>
      ))}
    </div>
  );
};

export default SnowEffect;