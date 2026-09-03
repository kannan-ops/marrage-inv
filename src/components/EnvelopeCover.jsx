import React, { useState } from 'react';
import { Heart, Sparkles, Send } from 'lucide-react';

export default function EnvelopeCover({ onOpen, lang, content }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 600);
  };

  return (
    <div className={`envelope-overlay ${isOpening ? 'opening' : ''}`}>
      <div className="envelope-card">
        {/* Corner Ornaments */}
        <div className="corner-tl"></div>
        <div className="corner-tr"></div>
        <div className="corner-bl"></div>
        <div className="corner-br"></div>

        {/* Embellishment icon */}
        <div style={{
          width: '54px',
          height: '54px',
          margin: '0 auto 12px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--color-gold) 0%, #FAF5EC 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <Sparkles style={{ color: 'var(--color-gold-dark)', width: '26px', height: '26px' }} />
        </div>

        <p style={{
          fontSize: '11px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--color-gold-dark)',
          fontWeight: 700,
          marginBottom: '8px'
        }}>
          {content.tagline}
        </p>

        {/* Professional Names & Qualifications */}
        <div style={{ margin: '8px 0 12px' }}>
          <div style={{
            fontSize: 'clamp(1.4rem, 4.5vw, 1.85rem)',
            fontWeight: 700,
            color: 'var(--color-peacock)',
            fontFamily: "'Playfair Display', Georgia, serif",
            lineHeight: '1.3'
          }}>
            <span style={{ fontStyle: 'italic' }}>{content.groom.name}</span>
            <span style={{
              fontSize: '0.6em',
              fontWeight: 600,
              fontStyle: 'normal',
              color: 'var(--color-gold-dark)',
              marginLeft: '6px',
              letterSpacing: '0.04em',
              verticalAlign: 'middle',
              background: '#FAF2E6',
              padding: '2px 7px',
              borderRadius: '6px',
              border: '1px solid #EADBCE'
            }}>
              {content.groom.degree}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '6px 0' }}>
            <div style={{ height: '1px', width: '32px', backgroundColor: 'var(--color-border)' }}></div>
            <Heart size={14} style={{ fill: 'var(--color-maroon)', color: 'var(--color-maroon)' }} />
            <span style={{ color: 'var(--color-gold-dark)', fontSize: '0.9em', fontStyle: 'italic' }}>&amp;</span>
            <Heart size={14} style={{ fill: 'var(--color-maroon)', color: 'var(--color-maroon)' }} />
            <div style={{ height: '1px', width: '32px', backgroundColor: 'var(--color-border)' }}></div>
          </div>

          <div style={{
            fontSize: 'clamp(1.4rem, 4.5vw, 1.85rem)',
            fontWeight: 700,
            color: 'var(--color-peacock)',
            fontFamily: "'Playfair Display', Georgia, serif",
            lineHeight: '1.3'
          }}>
            <span style={{ fontStyle: 'italic' }}>{content.bride.name}</span>
            <span style={{
              fontSize: '0.6em',
              fontWeight: 600,
              fontStyle: 'normal',
              color: 'var(--color-gold-dark)',
              marginLeft: '6px',
              letterSpacing: '0.04em',
              verticalAlign: 'middle',
              background: '#FAF2E6',
              padding: '2px 7px',
              borderRadius: '6px',
              border: '1px solid #EADBCE'
            }}>
              {content.bride.degree}
            </span>
          </div>
        </div>

        <p style={{
          fontSize: '13px',
          color: 'var(--color-ink-soft)',
          lineHeight: '1.6',
          marginBottom: '22px',
          padding: '0 8px'
        }}>
          {lang === 'ta' 
            ? 'அன்புடையீர், எங்கள் இல்லத் திருமண விழாவிற்கு தங்களை அன்போடு அழைக்கிறோம்.'
            : 'You are cordially invited to celebrate the joyful union of our lives.'}
        </p>

        {/* Seal Open button */}
        <button
          onClick={handleOpen}
          className="envelope-seal-btn"
        >
          <span>{content.tapToOpen}</span>
          <Send size={15} style={{ color: 'var(--color-gold-light)' }} />
        </button>

        <p style={{
          marginTop: '16px',
          fontSize: '11px',
          letterSpacing: '0.08em',
          color: 'var(--color-ink-soft)',
          textTransform: 'uppercase'
        }}>
          10 &amp; 11 November 2026 • Kabilarmalai
        </p>
      </div>
    </div>
  );
}
