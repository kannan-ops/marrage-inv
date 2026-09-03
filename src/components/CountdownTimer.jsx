import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Heart, Clock, Lock, CheckCircle2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

function GoldScratchHeart({ isRevealed, onRevealed, title, subtitle, value, tapHint, lang, id }) {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);

  // Initialize Canvas Gold Foil Layer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    if (isRevealed) {
      ctx.clearRect(0, 0, width, height);
      return;
    }

    // Draw Gold Foil Gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#FFF5C0');
    grad.addColorStop(0.25, '#DFB756');
    grad.addColorStop(0.65, '#996B1F');
    grad.addColorStop(1, '#E6BA54');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Draw Heart Pattern on Gold Foil
    ctx.fillStyle = '#7A1910';
    ctx.font = 'bold 18px serif';
    ctx.textAlign = 'center';
    ctx.fillText('❤️', width / 2, height / 2 - 8);

    // Draw Scratch Hint
    ctx.fillStyle = '#4A2F05';
    ctx.font = 'bold 11px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(lang === 'ta' ? 'தேய்க்கவும் ✨' : 'SCRATCH ✨', width / 2, height / 2 + 15);
  }, [isRevealed, lang]);

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentCount = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] < 128) {
        transparentCount++;
      }
    }

    const percent = (transparentCount / (pixels.length / 4)) * 100;
    if (percent > 30 && !isRevealed) {
      onRevealed();
    }
  };

  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const rect = canvas.getBoundingClientRect();
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercentage();
  };

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleTouchStart = (e) => {
    isDrawing.current = true;
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDrawing.current) return;
    if (e.touches[0]) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTapQuickReveal = () => {
    if (!isRevealed) {
      onRevealed();
    }
  };

  const heartPath = "M 70,20 C 52,-8 6,-4 2,34 C -2,70 42,98 70,126 C 98,98 142,70 138,34 C 134,-4 88,-8 70,20 Z";

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        userSelect: 'none'
      }}
    >
      {/* 3D Heart Shaped Container */}
      <div
        onClick={handleTapQuickReveal}
        style={{
          position: 'relative',
          width: '135px',
          height: '125px',
          cursor: isRevealed ? 'default' : 'pointer',
          filter: isRevealed
            ? 'drop-shadow(0 10px 24px rgba(11, 53, 54, 0.35)) drop-shadow(0 0 15px rgba(223, 183, 86, 0.5))'
            : 'drop-shadow(0 10px 22px rgba(223, 183, 86, 0.45))',
          transition: 'all 0.4s ease'
        }}
        className="hover-pop"
      >
        {/* SVG Wrapper with Clip-Path Heart Mask */}
        <svg
          viewBox="0 0 140 130"
          style={{
            width: '100%',
            height: '100%',
            overflow: 'visible'
          }}
        >
          <defs>
            {/* Heart Clip Path for Scratch Card Content */}
            <clipPath id={`heartClip_${id}`}>
              <path d={heartPath} />
            </clipPath>

            <linearGradient id={`goldBorderGrad_${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF5D0" />
              <stop offset="35%" stopColor="#DFB756" />
              <stop offset="70%" stopColor="#AA771C" />
              <stop offset="100%" stopColor="#FFF2B2" />
            </linearGradient>
          </defs>

          {/* Group Clipped to Genuine Heart Shape */}
          <g clipPath={`url(#heartClip_${id})`}>
            {/* 1. UNDERNEATH LAYER: Revealed Emerald & Gold Heart Content */}
            <foreignObject x="0" y="0" width="140" height="130">
              <div style={{
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 35%, #0E4446 0%, #0B3536 60%, #051A1B 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 10px 16px',
                textAlign: 'center',
                boxSizing: 'border-box'
              }}>
                <span style={{
                  fontSize: '9.5px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#DFB756',
                  fontWeight: 800,
                  marginTop: '6px'
                }}>
                  {subtitle}
                </span>

                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.18rem, 3.8vw, 1.48rem)',
                  fontWeight: 900,
                  color: '#FFF8DD',
                  lineHeight: '1.1',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  marginTop: '2px'
                }}>
                  {value}
                </div>

                <div style={{
                  marginTop: '4px',
                  width: '28px',
                  height: '1.5px',
                  background: 'linear-gradient(90deg, transparent, #DFB756, transparent)'
                }}></div>
              </div>
            </foreignObject>

            {/* 2. TOP LAYER: Scratchable Gold Foil Canvas */}
            {!isRevealed && (
              <foreignObject x="0" y="0" width="140" height="130" style={{ zIndex: 10 }}>
                <canvas
                  ref={canvasRef}
                  width={140}
                  height={130}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleMouseUp}
                  style={{
                    width: '100%',
                    height: '100%',
                    touchAction: 'none',
                    display: 'block'
                  }}
                />
              </foreignObject>
            )}
          </g>

          {/* 3. 24K GOLD 3D EMBOSSED HEART OUTLINE BORDER */}
          <path
            d={heartPath}
            fill="none"
            stroke={`url(#goldBorderGrad_${id})`}
            strokeWidth="3.5"
            style={{ pointerEvents: 'none' }}
          />
        </svg>
      </div>

      {/* Label under Heart */}
      <span style={{
        marginTop: '10px',
        fontSize: '13px',
        fontWeight: 800,
        color: isRevealed ? 'var(--color-royal-maroon)' : 'var(--color-royal-peacock)',
        letterSpacing: '0.04em',
        transition: 'color 0.3s ease'
      }}>
        {title}
      </span>
    </div>
  );
}

export default function CountdownTimer({ targetDate, content, lang }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0
  });

  // Interactive 3-Heart Secret State
  const [revealedHearts, setRevealedHearts] = useState({
    date: false,
    month: false,
    year: false
  });

  const allRevealed = revealedHearts.date && revealedHearts.month && revealedHearts.year;

  const handleRevealHeart = (key) => {
    if (revealedHearts[key]) return;
    const nextState = { ...revealedHearts, [key]: true };
    setRevealedHearts(nextState);

    // If all are revealed now, trigger celebratory confetti
    if (nextState.date && nextState.month && nextState.year) {
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.55 },
          colors: ['#DFB756', '#0B3536', '#7A1910', '#FFF2B2']
        });
      } catch (e) {}
    }
  };

  const handleRevealAll = () => {
    setRevealedHearts({ date: true, month: true, year: true });
    try {
      confetti({
        particleCount: 90,
        spread: 90,
        origin: { y: 0.55 },
        colors: ['#DFB756', '#0B3536', '#7A1910', '#FFF2B2']
      });
    } catch (e) {}
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date("2026-11-11T09:00:00+05:30") - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          totalSeconds: Math.floor(difference / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Second progress for smooth circular dial animation (0 to 60)
  const secondsProgress = ((60 - timeLeft.seconds) / 60) * 100;
  const radius = 135;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (secondsProgress / 100) * circumference;

  return (
    <section style={{ padding: '36px 0 24px', maxWidth: '640px', margin: '0 auto', width: '100%' }}>
      {/* ========================================================================= */}
      {/* 💌 FEATURE 1: INTERACTIVE 3-GOLDEN HEARTS DATE SECRET REVEAL CARD         */}
      {/* ========================================================================= */}
      <div style={{
        background: 'linear-gradient(180deg, #FFFDF9 0%, #FAF2E3 100%)',
        border: '2px solid #DFB756',
        borderRadius: '30px',
        padding: '30px 20px',
        boxShadow: 'var(--shadow-royal-card), var(--shadow-gold-glow)',
        marginBottom: '36px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Corner Accents */}
        <div className="gold-corner-tl"></div>
        <div className="gold-corner-tr"></div>
        <div className="gold-corner-bl"></div>
        <div className="gold-corner-br"></div>

        {/* Auspicious Tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
          <Sparkles size={14} style={{ color: '#DFB756' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-royal-maroon)', fontWeight: 800 }}>
            {lang === 'ta' ? 'ஒரு சிறு ரகசியம்' : 'A SACRED SECRET'}
          </span>
          <Sparkles size={14} style={{ color: '#DFB756' }} />
        </div>

        {/* Section Heading */}
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.25rem, 4vw, 1.65rem)',
          fontWeight: 700,
          color: 'var(--color-royal-peacock)',
          marginBottom: '6px'
        }}>
          {lang === 'ta' ? 'ஒவ்வொரு இதயத்தையும் தொட்டுத் திறவுங்கள்' : 'Tap Each Heart to Reveal The Wedding Date'}
        </h3>
        <p style={{ fontSize: '13px', color: '#6A5844', fontStyle: 'italic', marginBottom: '24px' }}>
          {lang === 'ta' ? 'கண்ணன் & சுருதிகா திருமண நாள் ரகசியத்தை வெளிப்படுத்துங்கள் ✨' : 'Unlock the auspicious wedding moment of Kannan & Suruthika ✨'}
        </p>

        {/* 3 Interactive Real HTML5 Gold Scratch Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '14px',
          maxWidth: '480px',
          margin: '0 auto 26px'
        }}>
          {/* Card 1: Date */}
          <GoldScratchHeart
            id="date"
            isRevealed={revealedHearts.date}
            onRevealed={() => handleRevealHeart('date')}
            title={lang === 'ta' ? 'தேதி' : 'Date'}
            subtitle={lang === 'ta' ? 'முகூர்த்தம்' : 'DAYS'}
            value="10 & 11"
            lang={lang}
          />

          {/* Card 2: Month */}
          <GoldScratchHeart
            id="month"
            isRevealed={revealedHearts.month}
            onRevealed={() => handleRevealHeart('month')}
            title={lang === 'ta' ? 'மாதம்' : 'Month'}
            subtitle={lang === 'ta' ? 'மங்கலம்' : 'MONTH'}
            value={lang === 'ta' ? 'நவம்பர்' : 'NOV'}
            lang={lang}
          />

          {/* Card 3: Year */}
          <GoldScratchHeart
            id="year"
            isRevealed={revealedHearts.year}
            onRevealed={() => handleRevealHeart('year')}
            title={lang === 'ta' ? 'வருடம்' : 'Year'}
            subtitle={lang === 'ta' ? 'திருமணம்' : 'YEAR'}
            value="2026"
            lang={lang}
          />
        </div>

        {/* Reveal All or Reset Option */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          {!allRevealed ? (
            <button
              type="button"
              onClick={handleRevealAll}
              style={{
                background: 'none',
                border: 'none',
                color: '#8A5D13',
                fontSize: '12.5px',
                fontWeight: 700,
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Sparkles size={14} style={{ color: '#DFB756' }} />
              <span>{lang === 'ta' ? 'அனைத்தையும் ஒரே தட்டலில் திறக்க' : 'Reveal All Instantly'}</span>
            </button>
          ) : (
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#065F46', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} style={{ color: '#059669' }} />
              <span>{lang === 'ta' ? 'மங்கல நாள் உறுதி செய்யப்பட்டது!' : 'Auspicious Date Unlocked!'}</span>
            </span>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ⏳ FEATURE 2: MASS ROYAL CELESTIAL CIRCULAR COUNTDOWN CLOCK               */}
      {/* ========================================================================= */}
      <div style={{
        background: 'linear-gradient(180deg, #FFFDF9 0%, #F5ECE0 100%)',
        border: '2px solid #DFB756',
        borderRadius: '36px',
        padding: '36px 20px',
        boxShadow: 'var(--shadow-royal-card), var(--shadow-gold-glow)',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Top Auspicious Header */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
          <Clock size={15} style={{ color: 'var(--color-royal-maroon)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-royal-maroon)', fontWeight: 800 }}>
            {lang === 'ta' ? 'காத்திருப்பு தொடங்குகிறது' : 'THE SACRED COUNTDOWN'}
          </span>
          <Clock size={15} style={{ color: 'var(--color-royal-maroon)' }} />
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.4rem, 4.5vw, 2rem)',
          fontWeight: 800,
          color: 'var(--color-royal-peacock)',
          marginBottom: '26px'
        }}>
          {lang === 'ta' ? 'நாங்கள் இணையும் மங்கல நேரம் வரை' : 'Until We Become One Forever'}
        </h2>

        {/* Celestial Circular Dial Clock */}
        <div style={{
          position: 'relative',
          width: '310px',
          height: '310px',
          margin: '0 auto 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* 1. ROTATING ASTRONOMICAL GOLDEN CONSTELLATION WHEEL */}
          <svg
            width="310"
            height="310"
            viewBox="0 0 320 320"
            style={{
              position: 'absolute',
              inset: 0,
              animation: 'rotateClockwise 90s linear infinite',
              pointerEvents: 'none',
              opacity: 0.6
            }}
          >
            {/* Outer Star Constellation Dots */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              const cx = 160 + 152 * Math.cos(angle);
              const cy = 160 + 152 * Math.sin(angle);
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={i % 2 === 0 ? "2" : "1.2"}
                  fill={i % 3 === 0 ? "#DFB756" : "#AA771C"}
                />
              );
            })}
          </svg>

          {/* 2. SVG Animated Glowing Outer Dial */}
          <svg
            width="290"
            height="290"
            viewBox="0 0 300 300"
            style={{
              position: 'absolute',
              inset: 10,
              transform: 'rotate(-90deg)'
            }}
          >
            <defs>
              <linearGradient id="goldDialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2B2" />
                <stop offset="50%" stopColor="#DFB756" />
                <stop offset="100%" stopColor="#8C5F12" />
              </linearGradient>

              <filter id="goldDialGlow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Outer Static Track */}
            <circle
              cx="150"
              cy="150"
              r={radius}
              fill="none"
              stroke="#E0CDAF"
              strokeWidth="3.5"
            />

            {/* Astrological Dial Tick Marks (12 Hours Clock Marks) */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = 150 + (radius - 14) * Math.cos(angle);
              const y1 = 150 + (radius - 14) * Math.sin(angle);
              const x2 = 150 + (radius + 2) * Math.cos(angle);
              const y2 = 150 + (radius + 2) * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#B88523"
                  strokeWidth={i % 3 === 0 ? "2.5" : "1.2"}
                />
              );
            })}

            {/* Live Animated Golden Second Progress Arc */}
            <circle
              cx="150"
              cy="150"
              r={radius}
              fill="none"
              stroke="url(#goldDialGrad)"
              strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              filter="url(#goldDialGlow)"
              style={{
                transition: 'stroke-dashoffset 1s linear'
              }}
            />
          </svg>

          {/* 3. Center Circular Palace Card Display */}
          <div style={{
            position: 'relative',
            zIndex: 5,
            width: '215px',
            height: '215px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 30%, #FFFFFF 0%, #FAF3E6 70%, #F5E5CF 100%)',
            border: '3px solid #DFB756',
            boxShadow: '0 12px 35px rgba(5, 26, 27, 0.15), inset 0 0 25px rgba(223, 183, 86, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}>
            {/* Days Big Number with Gold Shimmer */}
            <span
              className="gold-shimmer-text"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(3.4rem, 11vw, 4.6rem)',
                fontWeight: 900,
                lineHeight: '0.95',
                letterSpacing: '-0.02em',
                filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.15))'
              }}
            >
              {timeLeft.days}
            </span>

            {/* Days Label */}
            <span style={{
              fontSize: '13px',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 900,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#8C5F12',
              marginTop: '4px'
            }}>
              {content.days}
            </span>

            {/* Gold Divider Line */}
            <div style={{
              width: '70px',
              height: '1.5px',
              background: 'linear-gradient(90deg, transparent, #DFB756, transparent)',
              margin: '8px 0 6px'
            }}></div>

            {/* Mini Ticking Second Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--color-royal-maroon)', fontWeight: 800 }}>
              <Heart size={11} style={{ fill: 'var(--color-royal-maroon)', animation: 'sealPulse 1s infinite' }} />
              <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>
        </div>

        {/* 3 Sub-Counters (Hours, Minutes, Seconds) with 3D Gold Borders */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          maxWidth: '460px',
          margin: '0 auto'
        }}>
          {/* Hours Box */}
          <div style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF4E8 100%)',
            border: '2px solid #DFB756',
            borderRadius: '20px',
            padding: '16px 10px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.06)'
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.85rem',
              fontWeight: 900,
              color: 'var(--color-royal-peacock)',
              display: 'block',
              lineHeight: '1.1'
            }}>
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#8C5F12', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {content.hours}
            </span>
          </div>

          {/* Minutes Box */}
          <div style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF4E8 100%)',
            border: '2px solid #DFB756',
            borderRadius: '20px',
            padding: '16px 10px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.06)'
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.85rem',
              fontWeight: 900,
              color: 'var(--color-royal-peacock)',
              display: 'block',
              lineHeight: '1.1'
            }}>
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#8C5F12', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {content.minutes}
            </span>
          </div>

          {/* Seconds Box */}
          <div style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF4E8 100%)',
            border: '2px solid #DFB756',
            borderRadius: '20px',
            padding: '16px 10px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.06)'
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.85rem',
              fontWeight: 900,
              color: 'var(--color-royal-maroon)',
              display: 'block',
              lineHeight: '1.1'
            }}>
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#8C5F12', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {content.seconds}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
