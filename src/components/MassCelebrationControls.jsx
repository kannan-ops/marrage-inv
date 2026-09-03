import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function MassCelebrationControls({ lang }) {
  const [isSparking, setIsSparking] = useState(false);

  // 1. Holy Akshadhai & Jasmine/Rose Flower Petal Shower
  const handleFlowerShower = () => {
    setIsSparking(true);
    setTimeout(() => setIsSparking(false), 1200);

    // Left Cannon - Yellow Akshadhai & Red Rose Petals
    confetti({
      particleCount: 70,
      angle: 60,
      spread: 75,
      origin: { x: 0, y: 0.8 },
      colors: ['#FFE066', '#FFD166', '#E63946', '#FF758F', '#DFB756'],
      shapes: ['circle', 'square']
    });

    // Right Cannon - Sacred Golden Flower Petals
    confetti({
      particleCount: 70,
      angle: 120,
      spread: 75,
      origin: { x: 1, y: 0.8 },
      colors: ['#FFE066', '#FFD166', '#E63946', '#FF758F', '#DFB756'],
      shapes: ['circle', 'square']
    });
  };

  // 2. Grand Sky Fireworks (வானவேடிக்கை)
  const handleFireworks = () => {
    const end = Date.now() + 1.8 * 1000;
    const colors = ['#DFB756', '#E63946', '#06D6A0', '#118AB2', '#FFF5C0'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '22px',
        left: '20px',
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      {/* Button 1: Sacred Flower & Akshadhai Shower */}
      <button
        onClick={handleFlowerShower}
        title={lang === 'ta' ? 'அட்சதை & மலர் தூவ' : 'Shower Blessings & Flowers'}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'linear-gradient(135deg, #FFFDF8 0%, #F5E8CC 100%)',
          color: '#7A1910',
          border: '2px solid #DFB756',
          borderRadius: '9999px',
          padding: '9px 16px',
          fontWeight: 800,
          fontSize: '12px',
          letterSpacing: '0.04em',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(122, 25, 16, 0.25), 0 0 15px rgba(223, 183, 86, 0.4)',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: isSparking ? 'scale(1.1)' : 'scale(1)'
        }}
        className="hover-pop"
      >
        <span style={{ fontSize: '16px' }}>🌸</span>
        <span>{lang === 'ta' ? 'மலர் தூவ' : 'Bless Flowers'}</span>
      </button>

      {/* Button 2: Grand Fireworks (வானவேடிக்கை) */}
      <button
        onClick={handleFireworks}
        title={lang === 'ta' ? 'வானவேடிக்கை வெடிக்க' : 'Burst Fireworks'}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'linear-gradient(135deg, #0A3D3F 0%, #051A1B 100%)',
          color: '#FFF2B2',
          border: '2px solid #DFB756',
          borderRadius: '9999px',
          padding: '9px 16px',
          fontWeight: 800,
          fontSize: '12px',
          letterSpacing: '0.04em',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(5, 26, 27, 0.35), 0 0 15px rgba(223, 183, 86, 0.35)',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        className="hover-pop"
      >
        <span style={{ fontSize: '16px' }}>🎆</span>
        <span>{lang === 'ta' ? 'வானவேடிக்கை' : 'Fireworks'}</span>
      </button>
    </div>
  );
}
