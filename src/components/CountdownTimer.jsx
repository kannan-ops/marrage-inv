import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Clock, Calendar, CalendarPlus, MapPin, PartyPopper, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import ScratchCardDate from './ScratchCardDate';

export default function CountdownTimer({ targetDate, content, lang }) {
  const [isDateRevealed, setIsDateRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0
  });

  const isTa = lang === 'ta';

  // Calculate Countdown to Brahma Muhurtham (11-11-2026 5:00 AM)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate || "2026-11-11T05:00:00+05:30") - +new Date();
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

  const handleCelebrate = () => {
    try {
      confetti({
        particleCount: 95,
        spread: 85,
        origin: { y: 0.55 },
        colors: ['#DFB756', '#FFE894', '#85141C', '#FFFFFF', '#0B3C3E']
      });
    } catch (e) {}
  };

  const handleAddToCalendar = () => {
    const startTime = '20261111T050000';
    const endTime = '20261111T070000';
    const title = encodeURIComponent(isTa ? 'S. கண்ணன் & R. சுருதிகா திருமண முகூர்த்தம்' : 'S. Kannan & R. Suruthika Wedding Muhurtham');
    const details = encodeURIComponent(isTa ? 'கபிலர்மலை அருள்மிகு பாலசுப்ரமணிய சுவாமி திருக்கோவிலில் நடைபெறும் சுப பிரம்ம முகூர்த்தம்' : 'Sacred Subha Brahma Muhurtham at Arulmigu Balasubramanya Swamy Temple, Kabilarmalai');
    const location = encodeURIComponent('Arulmigu Balasubramanya Swamy Temple, Kabilarmalai, Namakkal');
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(gcalUrl, '_blank');
  };

  return (
    <section style={{ padding: '36px 0 24px', maxWidth: '640px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
      {/* ========================================================================= */}
      {/* 📅 FEATURE 1: 3D ROYAL LUXURY SAVE THE DATE SHOWCASE CARD                 */}
      {/* ========================================================================= */}
      <div style={{
        background: 'linear-gradient(160deg, #FFFFFF 0%, #FDFBF7 60%, #FAF2E3 100%)',
        border: '2px solid #DFB756',
        borderRadius: '32px',
        padding: '28px 20px',
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
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Sparkles size={14} style={{ color: '#DFB756' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#7A1910', fontWeight: 800 }}>
            {isTa ? 'சுப முகூர்த்த நன்னாள்' : 'SAVE THE SACRED DATE'}
          </span>
          <Sparkles size={14} style={{ color: '#DFB756' }} />
        </div>

        {/* Interactive Scratch Card to Reveal Wedding Date */}
        <ScratchCardDate
          lang={lang}
          onReveal={() => {
            setIsDateRevealed(true);
            handleCelebrate();
          }}
          onReset={() => {
            setIsDateRevealed(false);
          }}
        />

        {/* Interactive Action Buttons - Visible when date is unlocked */}
        {isDateRevealed && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            animation: 'scaleIn 0.4s ease-out'
          }}>
            <button
              type="button"
              onClick={handleAddToCalendar}
              className="btn-primary"
              style={{ padding: '11px 22px', fontSize: '13px' }}
            >
              <CalendarPlus size={16} />
              <span>{isTa ? 'கேலெண்டரில் குறிக்கவும்' : 'Add to Google Calendar'}</span>
            </button>

            <button
              type="button"
              onClick={handleCelebrate}
              className="btn-secondary"
              style={{ padding: '11px 20px', fontSize: '13px' }}
            >
              <PartyPopper size={16} style={{ color: '#85141C' }} />
              <span>{isTa ? 'வாழ்த்துகள் 🎉' : 'Celebrate 🎉'}</span>
            </button>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* ⏳ FEATURE 2: MASS ROYAL CELESTIAL CIRCULAR COUNTDOWN CLOCK               */}
      {/* ========================================================================= */}
      {isDateRevealed ? (
        <div style={{
          background: 'linear-gradient(160deg, #FFFFFF 0%, #FDFBF7 60%, #FAF2E3 100%)',
          border: '2px solid #DFB756',
          borderRadius: '36px',
          padding: '36px 20px',
          boxShadow: 'var(--shadow-royal-card), var(--shadow-gold-glow)',
          textAlign: 'center',
          position: 'relative',
          animation: 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
        <div className="gold-corner-tl"></div>
        <div className="gold-corner-tr"></div>
        <div className="gold-corner-bl"></div>
        <div className="gold-corner-br"></div>

        {/* Top Auspicious Header */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Clock size={15} style={{ color: '#7A1910' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#7A1910', fontWeight: 800 }}>
            {isTa ? 'காத்திருப்பு தொடங்குகிறது' : 'THE SACRED COUNTDOWN'}
          </span>
          <Clock size={15} style={{ color: '#7A1910' }} />
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.45rem, 4.5vw, 2.1rem)',
          fontWeight: 800,
          color: '#7A1910',
          marginBottom: '26px'
        }}>
          {isTa ? 'நாங்கள் இணையும் மங்கல நேரம் வரை' : 'Until We Become One Forever'}
        </h2>

        {/* Celestial Circular Dial Clock */}
        <div style={{
          position: 'relative',
          width: 'min(280px, 76vw)',
          height: 'min(280px, 76vw)',
          margin: '0 auto 26px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Rotating Celestial Star Ring */}
          <svg
            viewBox="0 0 320 320"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              animation: 'rotateClockwise 90s linear infinite',
              pointerEvents: 'none',
              opacity: 0.6
            }}
          >
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              const cx = 160 + 152 * Math.cos(angle);
              const cy = 160 + 152 * Math.sin(angle);
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={i % 2 === 0 ? "2.2" : "1.4"}
                  fill={i % 3 === 0 ? "#DFB756" : "#8C5F12"}
                />
              );
            })}
          </svg>

          {/* SVG Animated Glowing Outer Dial */}
          <svg
            viewBox="0 0 300 300"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              transform: 'rotate(-90deg)'
            }}
          >
            <defs>
              <linearGradient id="goldDialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DFB756" />
                <stop offset="50%" stopColor="#FFF5C0" />
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
              stroke="#E8D5B5"
              strokeWidth="3.5"
            />

            {/* Dial Tick Marks */}
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
                  stroke="#DFB756"
                  strokeWidth={i % 3 === 0 ? "2.5" : "1.2"}
                  opacity={i % 3 === 0 ? 0.9 : 0.5}
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

          {/* Center Circular Vault Display */}
          <div style={{
            position: 'relative',
            zIndex: 5,
            width: 'min(195px, 54vw)',
            height: 'min(195px, 54vw)',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 30%, #FFFFFF 0%, #FAF3E6 70%, #F5E5CF 100%)',
            border: '3px solid #DFB756',
            boxShadow: '0 12px 35px rgba(45, 25, 15, 0.12), inset 0 0 25px rgba(223, 183, 86, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px'
          }}>
            {/* Days Big Number with Gold Shimmer */}
            <span
              className="gold-shimmer-text"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.6rem, 8.5vw, 4.4rem)',
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
              fontSize: 'clamp(11px, 2.8vw, 13px)',
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
              width: '60px',
              height: '1.5px',
              background: 'linear-gradient(90deg, transparent, #DFB756, transparent)',
              margin: '6px 0 4px'
            }}></div>

            {/* Mini Ticking Second Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#7A1910', fontWeight: 800 }}>
              <Heart size={10} style={{ fill: '#7A1910', color: '#7A1910', animation: 'sealPulse 1s infinite' }} />
              <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>
        </div>

        {/* 3 Sub-Counters (Hours, Minutes, Seconds) with 3D Gold Borders */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          maxWidth: '460px',
          margin: '0 auto'
        }}>
          {/* Hours Box */}
          <div style={{
            background: '#FFFFFF',
            border: '1.5px solid #DFB756',
            borderRadius: '18px',
            padding: '14px 6px',
            boxShadow: '0 4px 12px rgba(45, 25, 15, 0.06)'
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.4rem, 4.5vw, 1.95rem)',
              fontWeight: 900,
              color: '#7A1910',
              display: 'block',
              lineHeight: '1.1'
            }}>
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#8C5F12', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {content.hours}
            </span>
          </div>

          {/* Minutes Box */}
          <div style={{
            background: '#FFFFFF',
            border: '1.5px solid #DFB756',
            borderRadius: '18px',
            padding: '14px 6px',
            boxShadow: '0 4px 12px rgba(45, 25, 15, 0.06)'
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.4rem, 4.5vw, 1.95rem)',
              fontWeight: 900,
              color: '#7A1910',
              display: 'block',
              lineHeight: '1.1'
            }}>
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#8C5F12', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {content.minutes}
            </span>
          </div>

          {/* Seconds Box */}
          <div style={{
            background: '#FFFFFF',
            border: '1.5px solid #DFB756',
            borderRadius: '18px',
            padding: '14px 6px',
            boxShadow: '0 4px 12px rgba(45, 25, 15, 0.06)'
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.4rem, 4.5vw, 1.95rem)',
              fontWeight: 900,
              color: '#A31822',
              display: 'block',
              lineHeight: '1.1'
            }}>
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#8C5F12', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {content.seconds}
            </span>
          </div>
        </div>
      </div>
      ) : (
        /* Locked Countdown Card until Date is Scratched */
        <div style={{
          background: 'linear-gradient(150deg, rgba(255, 253, 248, 0.98) 0%, rgba(250, 242, 227, 0.98) 100%)',
          border: '2px dashed rgba(223, 183, 86, 0.7)',
          borderRadius: '30px',
          padding: '32px 20px',
          textAlign: 'center',
          boxShadow: '0 8px 25px rgba(45, 25, 15, 0.05)',
          position: 'relative'
        }}>
          <div style={{
            width: '52px',
            height: '52px',
            margin: '0 auto 14px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #85141C 0%, #5C0B12 100%)',
            border: '2px solid #DFB756',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFE894',
            boxShadow: '0 6px 18px rgba(133, 20, 28, 0.35)'
          }}>
            <Lock size={22} />
          </div>

          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '16px',
            fontWeight: 800,
            color: '#85141C',
            letterSpacing: '0.04em',
            marginBottom: '6px'
          }}>
            {isTa ? 'கவுண்ட்டவுன் கடிகாரம் பூட்டப்பட்டுள்ளது ⏳' : 'The Sacred Countdown is Locked ⏳'}
          </h3>

          <p style={{
            fontSize: '13px',
            color: '#5C4834',
            fontWeight: 600,
            maxWidth: '430px',
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            {isTa
              ? 'மேலே உள்ள தங்க அட்டையை விரலால் தேய்த்து தேதியைத் திறந்தவுடன், திருமணத்திற்கான நேரலை கவுண்ட்டவுன் கடிகாரம் தானாகவே திறக்கும்!'
              : 'Scratch the golden date card above to reveal the sacred date and unlock the live countdown timer!'}
          </p>
        </div>
      )}
    </section>
  );
}
