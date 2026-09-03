import React, { useState } from 'react';
import { Sparkles, ChevronUp } from 'lucide-react';

export default function RoyalCoverScreen({ onOpen, lang, content }) {
  const [isOpening, setIsOpening] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);

  const triggerOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    onOpen(); // Trigger immediately to unlock browser audio context synchronously
  };

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchStartY - touchEndY > 40) {
      triggerOpen();
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={triggerOpen}
      className={`ks-envelope-overlay ${isOpening ? 'envelope-revealed' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDE5D8',
        backgroundImage: 'radial-gradient(ellipse at center, #F4ECE0 0%, #E3D7C5 100%)',
        padding: '16px',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease'
      }}
    >
      {/* 3D Envelope Card Container */}
      <div
        className="ks-envelope-card"
        style={{
          position: 'relative',
          maxWidth: '430px',
          width: '100%',
          aspectRatio: '9/16',
          maxHeight: '90vh',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.25), 0 10px 30px rgba(0, 0, 0, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          transform: isOpening ? 'scale(1.08) translateY(-40px)' : 'scale(1)',
          transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Photorealistic Handmade Embossed KS Wax Envelope Background */}
        <img
          src="/images/ks-wax-envelope.jpg"
          alt="K & S Royal Wedding Envelope"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />

        {/* Pulsing Touch Target over the Wax Seal */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          {/* Subtle Golden Glow Ripple */}
          <div
            className="ks-seal-glow"
            style={{
              position: 'absolute',
              inset: '-8px',
              borderRadius: '50%',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              animation: 'sealPulse 2s infinite cubic-bezier(0.4, 0, 0.6, 1)'
            }}
          ></div>
        </div>

        {/* Floating Tap to Open Hint at the bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        >
          <ChevronUp
            size={22}
            style={{
              color: '#9B7026',
              animation: 'bounceUp 1.5s infinite'
            }}
          />
          <span style={{
            fontSize: '11px',
            fontFamily: "'Cinzel', 'Playfair Display', serif",
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#7A5E2E',
            fontWeight: 700,
            textShadow: '0 1px 2px rgba(255,255,255,0.8)'
          }}>
            {lang === 'ta' ? 'திறக்க தொடவும்' : 'Tap or Swipe to Open'}
          </span>
        </div>
      </div>
    </div>
  );
}
