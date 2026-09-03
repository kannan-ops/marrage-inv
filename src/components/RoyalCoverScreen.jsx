import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RoyalCoverScreen({ onOpen, lang, content }) {
  // Opening stages: 'idle' | 'breaking' | 'unfolding' | 'sliding' | 'fadeout'
  const [stage, setStage] = useState('idle');
  const [touchStartY, setTouchStartY] = useState(0);

  const triggerCinematicOpen = () => {
    if (stage !== 'idle') return;

    // Stage 1: Breaking Wax Seal (0.0s - 0.8s)
    setStage('breaking');
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#DFB756', '#FFF0B8', '#AA771C']
      });
    } catch (e) {}

    // Stage 2: Flap Unfolds & Golden Light Erupts (0.8s - 1.8s)
    setTimeout(() => {
      setStage('unfolding');
    }, 800);

    // Stage 3: Royal Golden Letter Slides Out (1.8s - 2.7s)
    setTimeout(() => {
      setStage('sliding');
      try {
        confetti({
          particleCount: 80,
          spread: 90,
          origin: { y: 0.4 },
          colors: ['#DFB756', '#7A1910', '#FFF2B2', '#0B3536']
        });
      } catch (e) {}
    }, 1800);

    // Stage 4: Cinematic Fadeout into Main Wedding Template (2.7s - 3.4s)
    setTimeout(() => {
      setStage('fadeout');
    }, 2700);

    // Complete & Reveal Main Template
    setTimeout(() => {
      onOpen();
    }, 3400);
  };

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchStartY - touchEndY > 40) {
      triggerCinematicOpen();
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={triggerCinematicOpen}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDE5D8',
        backgroundImage: 'radial-gradient(ellipse at center, #F5ECE0 0%, #DED1BD 100%)',
        padding: '16px',
        cursor: stage === 'idle' ? 'pointer' : 'default',
        overflow: 'hidden',
        opacity: stage === 'fadeout' ? 0 : 1,
        transform: stage === 'fadeout' ? 'scale(1.08)' : 'scale(1)',
        transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s ease',
        pointerEvents: stage === 'fadeout' ? 'none' : 'auto'
      }}
    >
      {/* 3D Envelope Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '430px',
          width: '100%',
          aspectRatio: '9/16',
          maxHeight: '90vh',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 35px 90px rgba(0, 0, 0, 0.3), 0 12px 35px rgba(0, 0, 0, 0.2)',
          border: '1.5px solid rgba(255, 255, 255, 0.8)',
          perspective: '1200px',
          transform: stage === 'sliding' ? 'translateY(-20px) scale(1.02)' : 'translateY(0) scale(1)',
          transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Handmade Embossed KS Wax Envelope Background Base */}
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

        {/* ======================================================== */}
        {/* 📜 STAGE 3: ROYAL GOLD LETTER SLIDING OUT UPWARD         */}
        {/* ======================================================== */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '12%',
          right: '12%',
          height: '60%',
          borderRadius: '16px',
          background: 'linear-gradient(180deg, #FFFDF9 0%, #FAF1DF 100%)',
          border: '2px solid #DFB756',
          boxShadow: '0 20px 50px rgba(0,0,0,0.35), 0 0 30px rgba(223, 183, 86, 0.6)',
          zIndex: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 16px',
          textAlign: 'center',
          opacity: stage === 'sliding' || stage === 'fadeout' ? 1 : 0,
          transform: stage === 'sliding' || stage === 'fadeout'
            ? 'translateY(-70px) scale(1.05)'
            : 'translateY(40px) scale(0.9)',
          transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease'
        }}>
          <Sparkles size={20} style={{ color: '#DFB756', marginBottom: '8px' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#7A1910', fontWeight: 800 }}>
            {lang === 'ta' ? 'மங்கல அழைப்பிதழ்' : 'ROYAL INVITATION'}
          </span>
          <div style={{
            fontFamily: "'Noto Serif Tamil', 'Playfair Display', Georgia, serif",
            fontSize: '1.4rem',
            fontWeight: 900,
            color: 'var(--color-royal-peacock)',
            margin: '8px 0 4px',
            lineHeight: '1.2'
          }}>
            {lang === 'ta' ? 'கண்ணன் & சுருதிகா' : 'Kannan & Suruthika'}
          </div>
          <p style={{ fontSize: '11.5px', color: '#6A543B', fontStyle: 'italic' }}>
            {lang === 'ta' ? 'நவம்பர் 10 & 11, 2026' : 'November 10 & 11, 2026'}
          </p>
        </div>

        {/* ======================================================== */}
        {/* 💥 STAGE 1 & 2: WAX SEAL BREAKING & CRACK OVERLAY        */}
        {/* ======================================================== */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none'
          }}
        >
          {/* Breaking Wax Particle Flare */}
          {stage === 'breaking' && (
            <div style={{
              position: 'absolute',
              inset: '-20px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(223, 183, 86, 0.8) 0%, rgba(255, 240, 184, 0.5) 40%, transparent 70%)',
              animation: 'sealPulse 0.8s ease-out forwards'
            }}></div>
          )}

          {/* Golden Crack Flash Lines */}
          {(stage === 'breaking' || stage === 'unfolding') && (
            <svg
              viewBox="0 0 100 100"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                zIndex: 15,
                animation: 'scaleIn 0.5s ease forwards'
              }}
            >
              <line x1="50" y1="10" x2="50" y2="90" stroke="#FFF2B2" strokeWidth="3" filter="drop-shadow(0 0 6px #DFB756)" />
              <line x1="20" y1="50" x2="80" y2="50" stroke="#FFF2B2" strokeWidth="2" filter="drop-shadow(0 0 6px #DFB756)" />
            </svg>
          )}

          {/* Pulsing Ripple if Idle */}
          {stage === 'idle' && (
            <div
              className="ks-seal-glow"
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '2px solid rgba(223, 183, 86, 0.7)',
                animation: 'sealPulse 2.2s infinite'
              }}
            />
          )}
        </div>

        {/* ======================================================== */}
        {/* 🪧 BOTTOM INSTRUCTION TAG                               */}
        {/* ======================================================== */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            pointerEvents: 'none',
            zIndex: 8,
            opacity: stage === 'idle' ? 1 : 0,
            transform: stage === 'idle' ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.4s ease'
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.94)',
            border: '1.5px solid #DFB756',
            borderRadius: '9999px',
            padding: '7px 20px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            backdropFilter: 'blur(8px)',
            animation: 'bounceUp 2s infinite'
          }}>
            <Sparkles size={15} style={{ color: '#DFB756' }} />
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '12.5px',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-royal-maroon)'
            }}>
              {lang === 'ta' ? 'திறக்க தொடவும்' : 'Tap to Reveal'}
            </span>
            <Sparkles size={15} style={{ color: '#DFB756' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
