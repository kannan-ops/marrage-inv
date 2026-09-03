import React, { useEffect, useState } from 'react';

export default function PetalAnimation() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: `${(i * 6.2 + Math.random() * 2) % 100}%`,
      delay: `${(i * 0.8).toFixed(1)}s`,
      duration: `${(9 + (i % 5) * 1.5).toFixed(1)}s`,
      size: `${14 + (i % 4) * 4}px`,
      opacity: (0.4 + (i % 4) * 0.15).toFixed(2),
      rotation: `${(i * 45) % 360}deg`
    }));
    setPetals(items);
  }, []);

  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="falling-petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            width: petal.size,
            height: petal.size,
            opacity: petal.opacity,
            transform: `rotate(${petal.rotation})`
          }}
        >
          <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <path
              d="M15 0C15 0 25 8 25 18C25 24.6274 19.6274 30 15 30C10.3726 30 5 24.6274 5 18C5 8 15 0 15 0Z"
              fill="url(#petalGrad)"
            />
            <defs>
              <linearGradient id="petalGrad" x1="15" y1="0" x2="15" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5A89C" stopOpacity="0.85" />
                <stop offset="1" stopColor="#E26D5C" stopOpacity="0.65" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
