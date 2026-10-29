import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function RomanticQuote({ englishQuote, tamilQuote, author }) {
  return (
    <div className="romantic-quote-banner">
      <div className="gold-corner-tl"></div>
      <div className="gold-corner-tr"></div>
      <div className="gold-corner-bl"></div>
      <div className="gold-corner-br"></div>

      {/* Auspicious Center Symbol */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '14px' }}>
        <div style={{ height: '1.5px', width: '40px', background: 'linear-gradient(90deg, transparent, #DFB756)' }}></div>
        <Sparkles size={16} style={{ color: '#DFB756' }} />
        <Heart size={16} style={{ fill: '#7A1910', color: '#7A1910' }} />
        <Sparkles size={16} style={{ color: '#DFB756' }} />
        <div style={{ height: '1.5px', width: '40px', background: 'linear-gradient(90deg, #DFB756, transparent)' }}></div>
      </div>

      {/* English Script Quote */}
      <p className="quote-script" style={{
        margin: '4px 0 10px'
      }}>
        "{englishQuote}"
      </p>

      {/* Tamil Poetic Verse */}
      {tamilQuote && (
        <p style={{
          fontFamily: "'Noto Serif Tamil', Georgia, serif",
          fontSize: 'clamp(1.05rem, 3.4vw, 1.25rem)',
          color: '#5C4834',
          fontWeight: 700,
          fontStyle: 'normal',
          marginTop: '12px',
          lineHeight: '1.7',
          maxWidth: '580px',
          margin: '12px auto 0'
        }}>
          {tamilQuote}
        </p>
      )}

      {/* Author/Couple Signature Tag */}
      {author && (
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '16px',
          fontSize: '11.5px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#8C5F12',
          fontWeight: 800
        }}>
          <span>✦</span>
          <span>{author}</span>
          <span>✦</span>
        </div>
      )}
    </div>
  );
}
