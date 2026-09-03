import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function RomanticQuote({ englishQuote, tamilQuote, author }) {
  return (
    <div className="romantic-quote-banner" style={{
      position: 'relative',
      margin: '40px auto',
      padding: '36px 28px',
      maxWidth: '740px',
      borderRadius: '28px',
      background: 'linear-gradient(180deg, #FFFDF9 0%, #FAF2E3 100%)',
      border: '2px solid #DFB756',
      boxShadow: 'var(--shadow-royal-card), var(--shadow-gold-glow)',
      textAlign: 'center',
      overflow: 'hidden'
    }}>
      {/* 4 Golden Corner Accents */}
      <div className="gold-corner-tl"></div>
      <div className="gold-corner-tr"></div>
      <div className="gold-corner-bl"></div>
      <div className="gold-corner-br"></div>

      {/* Auspicious Center Symbol */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
        <div style={{ height: '1.5px', width: '36px', background: 'linear-gradient(90deg, transparent, #DFB756)' }}></div>
        <Sparkles size={16} style={{ color: '#DFB756' }} />
        <Heart size={16} style={{ fill: '#7A1910', color: '#7A1910' }} />
        <Sparkles size={16} style={{ color: '#DFB756' }} />
        <div style={{ height: '1.5px', width: '36px', background: 'linear-gradient(90deg, #DFB756, transparent)' }}></div>
      </div>

      {/* English Script Quote */}
      <p className="quote-script" style={{
        fontFamily: "'Great Vibes', cursive",
        fontSize: 'clamp(1.85rem, 5vw, 2.55rem)',
        color: 'var(--color-royal-peacock)',
        lineHeight: '1.3',
        textShadow: '0 1px 4px rgba(223, 183, 86, 0.35)',
        margin: '4px 0'
      }}>
        "{englishQuote}"
      </p>

      {/* Tamil Poetic Verse */}
      {tamilQuote && (
        <p style={{
          fontFamily: "'Noto Serif Tamil', Georgia, serif",
          fontSize: 'clamp(1rem, 3.4vw, 1.25rem)',
          color: '#5C442D',
          fontWeight: 700,
          fontStyle: 'normal',
          marginTop: '10px',
          lineHeight: '1.6',
          maxWidth: '560px',
          margin: '10px auto 0'
        }}>
          {tamilQuote}
        </p>
      )}

      {/* Author / Couple Tag */}
      {author && (
        <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <div style={{ height: '1px', width: '24px', backgroundColor: '#DFB756' }}></div>
          <span style={{
            fontSize: '11px',
            fontFamily: "'Playfair Display', serif",
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-gold-dark)',
            fontWeight: 800
          }}>
            {author}
          </span>
          <div style={{ height: '1px', width: '24px', backgroundColor: '#DFB756' }}></div>
        </div>
      )}
    </div>
  );
}
