import React from 'react';

export default function RoyalBackground() {
  return (
    <div className="royal-bg-layer" aria-hidden="true">
      {/* Top Hanging Royal Garland & Temple Bells Arch */}
      <div className="royal-garland-arch" style={{ height: '90px', pointerEvents: 'none' }}>
        <svg viewBox="0 0 1200 110" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="goldArchGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9B7026" />
              <stop offset="30%" stopColor="#DFB756" />
              <stop offset="50%" stopColor="#FFF2B2" />
              <stop offset="70%" stopColor="#DFB756" />
              <stop offset="100%" stopColor="#9B7026" />
            </linearGradient>

            <linearGradient id="marigoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF9800" />
              <stop offset="100%" stopColor="#E65100" />
            </linearGradient>

            <linearGradient id="jasmineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FFF9C4" />
            </linearGradient>
          </defs>

          {/* Scalloped Floral Garlands */}
          <path d="M0,0 Q150,60 300,5 Q450,60 600,5 Q750,60 900,5 Q1050,60 1200,0 L1200,0 L0,0 Z" fill="url(#marigoldGrad)" opacity="0.85" />
          <path d="M0,0 Q150,45 300,2 Q450,45 600,2 Q750,45 900,2 Q1050,45 1200,0" fill="none" stroke="url(#jasmineGrad)" strokeWidth="4" strokeDasharray="6 5" />
          <path d="M0,10 Q150,75 300,12 Q450,75 600,12 Q750,75 900,12 Q1050,75 1200,10" fill="none" stroke="url(#goldArchGrad)" strokeWidth="2" />

          {/* Hanging Golden Temple Bells */}
          {[150, 450, 600, 750, 1050].map((cx, i) => (
            <g key={i} className="hanging-bell" style={{ transformOrigin: `${cx}px 0px`, animationDelay: `${i * 0.4}s` }}>
              <line x1={cx} y1="0" x2={cx} y2="65" stroke="url(#goldArchGrad)" strokeWidth="1.5" />
              <circle cx={cx} cy="65" r="3" fill="#D4AF37" />
              {/* Bell shape */}
              <path d={`M${cx - 7},78 Q${cx},68 ${cx + 7},78 Q${cx + 10},90 ${cx - 10},90 Z`} fill="url(#goldArchGrad)" />
              <circle cx={cx} cy="92" r="2" fill="#FFE082" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
