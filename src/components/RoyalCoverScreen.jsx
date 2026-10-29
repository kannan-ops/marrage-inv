import React, { useState, useRef } from 'react';
import { Sparkles, Heart, ChevronUp, ArrowUp, Lock, Unlock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RoyalCoverScreen({ onOpen, lang, content }) {
  const isTa = lang === 'ta';
  // 'idle' | 'opening' | 'fadeout'
  const [stage, setStage] = useState('idle');
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startYRef = useRef(0);

  const triggerOpen = () => {
    if (stage !== 'idle') return;
    setStage('opening');

    try {
      confetti({
        particleCount: 100,
        spread: 85,
        origin: { y: 0.6 },
        colors: ['#DFB756', '#FFE894', '#85141C', '#FFFFFF', '#0B3C3E']
      });
    } catch (e) {}

    setTimeout(() => {
      setStage('fadeout');
    }, 600);

    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  // Touch Swipe Up handling
  const handleTouchStart = (e) => {
    if (stage !== 'idle') return;
    setIsDragging(true);
    startYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!isDragging || stage !== 'idle') return;
    const currentY = e.touches[0].clientY;
    const diff = currentY - startYRef.current;
    if (diff < 0) {
      // Swiping up
      setDragY(Math.max(diff, -150));
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging || stage !== 'idle') return;
    setIsDragging(false);
    if (dragY < -50) {
      triggerOpen();
    } else {
      setDragY(0);
    }
  };

  // Mouse Drag handling
  const handleMouseDown = (e) => {
    if (stage !== 'idle') return;
    setIsDragging(true);
    startYRef.current = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!isDragging || stage !== 'idle') return;
    const currentY = e.clientY;
    const diff = currentY - startYRef.current;
    if (diff < 0) {
      setDragY(Math.max(diff, -150));
    }
  };

  const handleMouseUp = () => {
    if (!isDragging || stage !== 'idle') return;
    setIsDragging(false);
    if (dragY < -50) {
      triggerOpen();
    } else {
      setDragY(0);
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#120204',
        backgroundImage: 'radial-gradient(ellipse 90% 75% at 50% 35%, #3B060C 0%, #1A0306 60%, #0A0102 100%)',
        padding: '20px',
        overflow: 'hidden',
        cursor: isDragging ? 'grabbing' : 'pointer',
        opacity: stage === 'fadeout' ? 0 : 1,
        transform: stage === 'fadeout' ? 'scale(1.06)' : 'scale(1)',
        transition: stage === 'fadeout' ? 'opacity 0.6s ease-out, transform 0.6s ease-out' : 'none',
        pointerEvents: stage === 'fadeout' ? 'none' : 'auto'
      }}
    >
      {/* Ambient Pulsing Gold Glow */}
      <div style={{
        position: 'absolute',
        width: '550px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(223, 183, 86, 0.22) 0%, rgba(133, 20, 28, 0.25) 45%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        animation: 'sealPulse 3s ease-in-out infinite'
      }} />

      {/* Floating Stardust Petals */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(2px 2px at 25px 35px, rgba(247, 206, 104, 0.6), transparent), radial-gradient(2px 2px at 50px 80px, rgba(255, 230, 160, 0.5), transparent)',
        backgroundSize: '100px 100px',
        opacity: 0.55
      }} />

      {/* ======================================================== */}
      {/* 👑 VIP LUXURY WEDDING PORTAL CARD                        */}
      {/* ======================================================== */}
      <div
        style={{
          position: 'relative',
          maxWidth: '410px',
          width: '100%',
          background: 'linear-gradient(160deg, rgba(255, 253, 248, 0.98) 0%, rgba(252, 244, 228, 0.96) 65%, rgba(245, 230, 200, 0.98) 100%)',
          borderRadius: '32px',
          border: '2px solid #DFB756',
          boxShadow: '0 30px 90px rgba(0, 0, 0, 0.8), 0 0 50px rgba(223, 183, 86, 0.45)',
          padding: '38px 24px 30px',
          textAlign: 'center',
          backdropFilter: 'blur(20px)',
          transform: `translateY(${dragY}px) ${stage === 'opening' ? 'translateY(-120px) scale(0.96)' : ''}`,
          transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          userSelect: 'none'
        }}
      >
        {/* Gold Corner Filigree */}
        <div className="gold-corner-tl" />
        <div className="gold-corner-tr" />
        <div className="gold-corner-bl" />
        <div className="gold-corner-br" />

        {/* Top Professional Tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Sparkles size={14} style={{ color: '#DFB756' }} />
          <span style={{
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#85141C',
            fontWeight: 800
          }}>
            {isTa ? 'மங்கலத் திருமண அழைப்பிதழ்' : 'THE WEDDING CELEBRATION'}
          </span>
          <Sparkles size={14} style={{ color: '#DFB756' }} />
        </div>

        {/* Monogram Crest with Double Gold Rings */}
        <div
          onClick={triggerOpen}
          style={{
            position: 'relative',
            width: '88px',
            height: '88px',
            margin: '0 auto 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px dashed #DFB756',
            animation: 'rotateClockwise 25s linear infinite'
          }} />
          <div style={{
            width: '74px',
            height: '74px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #85141C 0%, #5C0B12 100%)',
            border: '2px solid #DFB756',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 25px rgba(133, 20, 28, 0.4), 0 0 15px rgba(223, 183, 86, 0.5)'
          }}>
            <span style={{ fontSize: '13px', lineHeight: 1 }}>👑</span>
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '18px',
              fontWeight: 900,
              color: '#FFE894',
              letterSpacing: '0.06em',
              marginTop: '2px'
            }}>
              K &amp; S
            </span>
          </div>
        </div>

        {/* Couple Names - Bold, Royal & Modern */}
        <h1 style={{
          fontFamily: "'Playfair Display', 'Cinzel', Georgia, serif",
          fontSize: 'clamp(1.6rem, 5.2vw, 2.1rem)',
          fontWeight: 900,
          color: '#85141C',
          margin: '0 0 4px',
          lineHeight: '1.25'
        }}>
          {isTa ? 'S. கண்ணன், B.Sc.' : 'S. Kannan, B.Sc.'}
        </h1>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          margin: '4px 0'
        }}>
          <div style={{ height: '1.5px', width: '32px', background: 'linear-gradient(90deg, transparent, #DFB756)' }} />
          <Heart size={14} style={{ fill: '#85141C', color: '#DFB756' }} />
          <div style={{ height: '1.5px', width: '32px', background: 'linear-gradient(90deg, #DFB756, transparent)' }} />
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', 'Cinzel', Georgia, serif",
          fontSize: 'clamp(1.6rem, 5.2vw, 2.1rem)',
          fontWeight: 900,
          color: '#85141C',
          margin: '0 0 10px',
          lineHeight: '1.25'
        }}>
          {isTa ? 'R. சுருதிகா, ECE.' : 'R. Suruthika, ECE.'}
        </h1>

        {/* Professional Careers Badge */}
        <div style={{
          display: 'inline-block',
          background: 'rgba(133, 20, 28, 0.08)',
          border: '1px solid rgba(223, 183, 86, 0.6)',
          borderRadius: '9999px',
          padding: '5px 16px',
          fontSize: '11px',
          fontWeight: 700,
          color: '#4A3319',
          marginBottom: '16px'
        }}>
          Software Developer &amp; ECE Graduate
        </div>

        {/* Wedding Date & Sacred Venue */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          border: '1.5px solid #DFB756',
          padding: '12px 14px',
          marginBottom: '24px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)'
        }}>
          <div style={{ fontSize: '13px', fontWeight: 800, color: '#85141C' }}>
            {isTa ? 'புதன்கிழமை, 11 நவம்பர் 2026' : 'Wednesday, 11th November 2026'}
          </div>
          <div style={{ fontSize: '11.5px', color: '#684824', fontWeight: 600, marginTop: '3px' }}>
            {isTa ? 'கபிலர்மலை • நாமக்கல்' : 'Kabilarmalai • Namakkal'}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 🚀 INTERACTIVE SLIDE UP / TAP TO OPEN GESTURE            */}
        {/* ======================================================== */}
        <div
          onClick={triggerOpen}
          style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #85141C 0%, #5C0B12 100%)',
            border: '2px solid #DFB756',
            borderRadius: '9999px',
            padding: '13px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            color: '#FFFDF8',
            boxShadow: '0 10px 30px rgba(133, 20, 28, 0.45), 0 0 20px rgba(223, 183, 86, 0.5)',
            cursor: 'pointer',
            animation: 'bounceUp 2.2s infinite'
          }}
        >
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: '#FFE894',
            color: '#85141C',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
          }}>
            <ArrowUp size={16} />
          </div>

          <div style={{ textAlign: 'left' }}>
            <div style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FFFFFF'
            }}>
              {isTa ? 'மேலே தள்ளவும் / திறக்க தொடவும்' : 'SWIPE UP / TAP TO OPEN'}
            </div>
            <div style={{ fontSize: '9.5px', color: '#FFEAA5', letterSpacing: '0.05em' }}>
              {isTa ? 'இசையுடன் அழைப்பிதழ் திறக்கும்' : 'Opens with Wedding Music'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
