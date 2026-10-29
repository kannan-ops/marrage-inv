import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, Clock, MapPin, Gift, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ScratchCardDate({ lang, onReveal, onReset }) {
  const isTa = lang === 'ta';
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchedPercent, setScratchedPercent] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);

  // Initialize Canvas with Shimmering Gold Foil Overlay
  const initCanvas = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const width = container.offsetWidth || 340;
    const height = container.offsetHeight || 300;

    // Support Retina displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // 1. Rich Metallic 24K Gold Gradient Base
    const goldGrad = ctx.createLinearGradient(0, 0, width, height);
    goldGrad.addColorStop(0, '#E5C068');
    goldGrad.addColorStop(0.25, '#FFF2B2');
    goldGrad.addColorStop(0.5, '#C6922C');
    goldGrad.addColorStop(0.75, '#F9E491');
    goldGrad.addColorStop(1, '#9E6D15');

    ctx.fillStyle = goldGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Subtle Gold Stardust Sparkles Pattern
    ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const r = Math.random() * 2 + 1;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // 3. Ornate Double Gold Border
    ctx.strokeStyle = '#85141C';
    ctx.lineWidth = 3;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    ctx.strokeStyle = '#FFE894';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(14, 14, width - 28, height - 28);

    // 4. Center Gold Stamp / Scratch Emblem
    ctx.fillStyle = 'rgba(133, 20, 28, 0.9)';
    ctx.beginPath();
    ctx.arc(width / 2, height / 2 - 20, 42, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#DFB756';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(width / 2, height / 2 - 20, 42, 0, Math.PI * 2);
    ctx.stroke();

    // Gift Icon or Sparkle Text
    ctx.font = '26px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🪙', width / 2, height / 2 - 20);

    // 5. Instruction Call To Action Text
    ctx.font = 'bold 15px "Playfair Display", Georgia, serif';
    ctx.fillStyle = '#610B11';
    ctx.fillText(
      isTa ? '👆 விரலால் தேய்த்து பார்க்கவும்' : '👆 Scratch with finger to reveal',
      width / 2,
      height / 2 + 46
    );

    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#7C4F13';
    ctx.fillText(
      isTa ? 'மங்கலத் தேதியை அறிய தேய்க்கவும்' : 'Scratch to reveal the sacred date',
      width / 2,
      height / 2 + 70
    );
  };

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      if (!isRevealed) initCanvas();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isRevealed, isTa]);

  // Handle Scratching Gesture (Touch & Mouse)
  const scratch = (clientX, clientY) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    checkScratchProgress();
  };

  const checkScratchProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext('2d');
    // Sample a 40x40 downscaled grid to calculate scratched percentage efficiently
    const sampleW = 40;
    const sampleH = 40;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    let transparentPixels = 0;
    const step = 4 * 16; // Skip samples for speed
    const totalSamples = data.length / step;

    for (let i = 3; i < data.length; i += step) {
      if (data[i] < 128) {
        transparentPixels++;
      }
    }

    const percent = Math.round((transparentPixels / totalSamples) * 100);
    setScratchedPercent(percent);

    // Once > 38% is scratched, automatically reveal everything cleanly
    if (percent >= 38) {
      handleCompleteReveal();
    }
  };

  const handleCompleteReveal = () => {
    if (isRevealed) return;
    setIsRevealed(true);
    setScratchedPercent(100);

    try {
      confetti({
        particleCount: 110,
        spread: 90,
        origin: { y: 0.55 },
        colors: ['#DFB756', '#FFE894', '#85141C', '#FFFFFF', '#0B3C3E']
      });
    } catch (e) {}

    if (onReveal) onReveal();
  };

  // Mouse Listeners
  const handleMouseDown = (e) => {
    setIsDrawing(true);
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  // Touch Listeners
  const handleTouchStart = (e) => {
    setIsDrawing(true);
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    if (!isDrawing) return;
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    setIsDrawing(false);
  };

  return (
    <div style={{ position: 'relative', maxWidth: '380px', margin: '0 auto 20px', width: '100%' }}>
      {/* Container Card */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '2px solid #DFB756',
          boxShadow: '0 16px 45px rgba(45, 25, 15, 0.12), var(--shadow-gold-glow)',
          userSelect: 'none'
        }}
      >
        {/* ======================================================== */}
        {/* 📜 REVEALED WEDDING DATE CONTENT (UNDERNEATH FOIL)       */}
        {/* ======================================================== */}
        <div>
          {/* Calendar Top Header Ribbon */}
          <div style={{
            background: 'linear-gradient(135deg, #85141C 0%, #A31822 100%)',
            color: '#FFF2C6',
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid #DFB756'
          }}>
            <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFEAA5' }}>
              {isTa ? 'ஐப்பசி 25 (ஸ்ரீ பராபவ)' : 'AIPPASI 25'}
            </span>
            <span style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.12em', color: '#FFFFFF' }}>
              NOVEMBER 2026
            </span>
          </div>

          {/* Calendar Center Stage */}
          <div style={{
            background: 'radial-gradient(circle at 50% 30%, #FFFFFF 0%, #FDF9EE 75%, #F7ECDA 100%)',
            padding: '24px 16px 22px',
            textAlign: 'center'
          }}>
            {/* Day of Week */}
            <div style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#85141C',
              background: '#FFF3DB',
              padding: '4px 18px',
              borderRadius: '9999px',
              border: '1px solid #DFB756',
              marginBottom: '10px'
            }}>
              {isTa ? 'புதன்கிழமை' : 'WEDNESDAY'}
            </div>

            {/* Giant Shimmering 3D Date Number 11 */}
            <div
              className="gold-shimmer-text"
              style={{
                fontFamily: "'Playfair Display', 'Cinzel', Georgia, serif",
                fontSize: 'clamp(5.4rem, 16vw, 7.8rem)',
                fontWeight: 900,
                lineHeight: '0.9',
                letterSpacing: '-0.04em',
                margin: '4px 0 12px',
                filter: 'drop-shadow(0 4px 15px rgba(223, 183, 86, 0.4))'
              }}
            >
              11
            </div>

            {/* Sacred Time & Muhurtham Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12.5px',
              fontWeight: 800,
              color: '#85141C',
              background: '#FFFFFF',
              border: '1.5px solid #DFB756',
              padding: '6px 18px',
              borderRadius: '9999px',
              marginBottom: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <Clock size={14} style={{ color: '#85141C' }} />
              <span>{isTa ? 'அதிகாலை 5:00 - 6:00 மணி (பிரம்ம முகூர்த்தம்)' : '5:00 AM – 6:00 AM (Brahma Muhurtham)'}</span>
            </div>

            {/* Sacred Venue */}
            <div style={{
              fontSize: '12.5px',
              fontWeight: 700,
              color: '#5C4834',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginTop: '4px'
            }}>
              <MapPin size={14} style={{ color: '#85141C' }} />
              <span>{isTa ? 'பாலசுப்ரமணிய சுவாமி கோவில், கபிலர்மலை' : 'Balasubramanya Temple, Kabilarmalai'}</span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 🪙 SHIMMERING SCRATCH FOIL CANVAS OVERLAY               */}
        {/* ======================================================== */}
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'absolute',
            inset: 0,
            cursor: isRevealed ? 'default' : 'pointer',
            touchAction: 'none',
            opacity: isRevealed ? 0 : 1,
            pointerEvents: isRevealed ? 'none' : 'auto',
            transition: isRevealed ? 'opacity 0.6s ease-out' : 'none',
            zIndex: 10
          }}
        />
      </div>

      {/* Instant Reveal / Re-scratch Controls */}
      {!isRevealed ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '10px' }}>
          <span style={{ fontSize: '11px', color: '#85141C', fontWeight: 700 }}>
            {isTa ? `தேய்த்தது: ${scratchedPercent}%` : `Scratched: ${scratchedPercent}%`}
          </span>
          <button
            type="button"
            onClick={handleCompleteReveal}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              background: 'transparent',
              border: '1px dashed #85141C',
              color: '#85141C',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <Eye size={12} />
            <span>{isTa ? 'உடனே திறக்க' : 'Reveal Instantly'}</span>
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '10px' }}>
          <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 800 }}>
            {isTa ? '✨ தேதி வெற்றிகரமாக திறக்கப்பட்டது!' : '✨ Date Unlocked Successfully!'}
          </span>
          <button
            type="button"
            onClick={() => {
              setIsRevealed(false);
              setScratchedPercent(0);
              setTimeout(initCanvas, 50);
              if (onReset) onReset();
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#85141C',
              fontSize: '11px',
              fontWeight: 700,
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            {isTa ? 'மீண்டும் தேய்க்க' : 'Scratch Again'}
          </button>
        </div>
      )}
    </div>
  );
}
