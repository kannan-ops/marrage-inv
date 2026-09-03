import React from 'react';

export default function RoyalBackground() {
  return (
    <div className="royal-bg-layer" aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {/* 1. Ultra-Luxury Top Golden Palace Aura & Header Arch */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '140px',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 2
      }}>
        {/* Central Crown Light Halo */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '140px',
          background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(223, 183, 86, 0.42) 0%, rgba(255, 240, 184, 0.2) 50%, transparent 80%)',
          filter: 'blur(20px)',
          borderRadius: '50%'
        }}></div>

        {/* 24K Gold Filigree Curved Thread */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(223, 183, 86, 0.4) 15%, #FFF0B8 30%, #DFB756 50%, #FFF0B8 70%, rgba(223, 183, 86, 0.4) 85%, transparent 100%)',
          boxShadow: '0 0 15px rgba(223, 183, 86, 0.8)'
        }}></div>
      </div>

      {/* 2. Left Side Royal Palace Golden Vine Border Pillar */}
      <div style={{
        position: 'absolute',
        top: '120px',
        bottom: '120px',
        left: '12px',
        width: '28px',
        opacity: 0.35,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <svg key={i} width="22" height="48" viewBox="0 0 22 48" fill="none">
            <path d="M11 0 C4 12 0 24 11 48 C22 24 18 12 11 0 Z" fill="none" stroke="#B88523" strokeWidth="1.2" />
            <circle cx="11" cy="24" r="2.5" fill="#DFB756" />
          </svg>
        ))}
      </div>

      {/* 3. Right Side Royal Palace Golden Vine Border Pillar */}
      <div style={{
        position: 'absolute',
        top: '120px',
        bottom: '120px',
        right: '12px',
        width: '28px',
        opacity: 0.35,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <svg key={i} width="22" height="48" viewBox="0 0 22 48" fill="none">
            <path d="M11 0 C4 12 0 24 11 48 C22 24 18 12 11 0 Z" fill="none" stroke="#B88523" strokeWidth="1.2" />
            <circle cx="11" cy="24" r="2.5" fill="#DFB756" />
          </svg>
        ))}
      </div>

      {/* 4. Ambient Floating Golden Dust Fireflies */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {[
          { top: '15%', left: '10%', size: '6px', delay: '0s' },
          { top: '28%', left: '85%', size: '8px', delay: '1.5s' },
          { top: '45%', left: '8%', size: '5px', delay: '2.8s' },
          { top: '62%', left: '90%', size: '7px', delay: '0.8s' },
          { top: '78%', left: '15%', size: '6px', delay: '2.2s' },
          { top: '88%', left: '82%', size: '8px', delay: '1.1s' }
        ].map((dot, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              borderRadius: '50%',
              backgroundColor: '#FFF0B8',
              boxShadow: '0 0 12px 3px rgba(223, 183, 86, 0.85)',
              animation: `sealPulse 4s ease-in-out infinite`,
              animationDelay: dot.delay,
              opacity: 0.75
            }}
          />
        ))}
      </div>
    </div>
  );
}
