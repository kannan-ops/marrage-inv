import React, { useState } from 'react';
import { Sparkles, Heart, ChevronUp, Send } from 'lucide-react';

export default function RoyalCoverScreen({ onOpen, lang, content }) {
  const [isOpening, setIsOpening] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);

  const triggerOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 700);
  };

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    // Swipe up gesture
    if (touchStartY - touchEndY > 50) {
      triggerOpen();
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`royal-cover-screen ${isOpening ? 'cover-sliding-up' : ''}`}
    >
      {/* Royal Background Texture */}
      <div className="cover-bg-mandala"></div>

      {/* Floating Sparkles & Light Beams */}
      <div className="cover-ambient-glow"></div>

      {/* Main Luxury Front Card Envelope */}
      <div className="royal-cover-card">
        {/* 4 Corner Ornaments */}
        <div className="gold-corner-tl"></div>
        <div className="gold-corner-tr"></div>
        <div className="gold-corner-bl"></div>
        <div className="gold-corner-br"></div>

        {/* Auspicious Invocation */}
        <div className="cover-invocation">
          <Sparkles size={14} className="text-[#DFB756]" />
          <span>{lang === 'ta' ? 'ஸ்ரீ முருகனருள் முன்னிற்க' : 'WITH THE BLESSINGS OF ALMIGHTY'}</span>
          <Sparkles size={14} className="text-[#DFB756]" />
        </div>

        {/* Auspicious Emblem */}
        <div className="cover-emblem">
          <div className="emblem-inner">
            <span className="emblem-symbol">🪷</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="cover-subheading">
          {lang === 'ta' ? 'இனிய திருமண அழைப்பிதழ்' : 'WEDDING INVITATION'}
        </p>

        {/* Couple Names with Royal Styling */}
        <div className="cover-names-box">
          <div className="cover-name-line">
            <span className="cover-name">{content.groom.name}</span>
            <span className="cover-degree-badge">{content.groom.degree}</span>
          </div>

          <div className="cover-ampersand-divider">
            <div className="gold-line"></div>
            <Heart size={16} className="heart-icon" />
            <span className="ampersand">&amp;</span>
            <Heart size={16} className="heart-icon" />
            <div className="gold-line"></div>
          </div>

          <div className="cover-name-line">
            <span className="cover-name">{content.bride.name}</span>
            <span className="cover-degree-badge">{content.bride.degree}</span>
          </div>
        </div>

        {/* Wedding Date & Venue Tag */}
        <div className="cover-date-pill">
          <span>10 &amp; 11 NOVEMBER 2026</span>
          <span className="pill-dot">•</span>
          <span>KABILARMALAI</span>
        </div>

        {/* Interactive Open Action Button */}
        <div className="cover-action-area">
          <button
            onClick={triggerOpen}
            className="royal-open-btn"
            aria-label="Open Wedding Invitation"
          >
            <span className="btn-sparkle"><Sparkles size={16} /></span>
            <span className="btn-text">
              {lang === 'ta' ? 'அழைப்பிதழைத் திறக்க' : 'TAP TO OPEN INVITATION'}
            </span>
            <Send size={15} className="btn-arrow" />
          </button>

          {/* Swipe Up Hint for Mobile */}
          <div className="swipe-hint" onClick={triggerOpen}>
            <ChevronUp size={20} className="swipe-chevron animate-bounce" />
            <span>{lang === 'ta' ? 'திறக்க மேலே ஸ்வைப் செய்யவும்' : 'Swipe up or tap to open'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
