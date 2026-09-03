import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function BottomGrandFinale({ lang, content }) {
  return (
    <section style={{
      position: 'relative',
      margin: '60px -16px -60px -16px',
      overflow: 'hidden',
      backgroundColor: '#051E1F',
      color: '#FFF9ED',
      textAlign: 'center',
      borderTop: '3px solid #DFB756',
      borderRadius: '40px 40px 0 0',
      boxShadow: '0 -15px 40px rgba(5, 30, 31, 0.4), var(--shadow-gold-glow)'
    }}>
      {/* Romantic HD Couple Image with 100% Seamless Velvety Black Dissolve */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '460px',
        overflow: 'hidden',
        backgroundColor: '#051E1F'
      }}>
        <img
          src="/images/couple-forehead.jpg"
          alt="S. Kannan & R. Suruthika Romantic Moment"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 22%',
            display: 'block',
            // Deep radial black feathering mask so NO borders or lines show
            WebkitMaskImage: 'radial-gradient(ellipse 92% 85% at 50% 45%, black 35%, rgba(0,0,0,0.7) 65%, transparent 95%)',
            maskImage: 'radial-gradient(ellipse 92% 85% at 50% 45%, black 35%, rgba(0,0,0,0.7) 65%, transparent 95%)'
          }}
        />

        {/* 100% Pure Velvety Dark Black Overlays on all sides (Top, Bottom, Left, Right) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #051E1F 0%, rgba(5, 30, 31, 0.15) 30%, rgba(5, 30, 31, 0.75) 65%, #051E1F 100%)',
          pointerEvents: 'none'
        }}></div>

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 90% 80% at 50% 40%, transparent 35%, rgba(5, 30, 31, 0.85) 75%, #051E1F 100%)',
          pointerEvents: 'none'
        }}></div>
      </div>

      {/* Grand Dark Bottom Finale Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        padding: '0 20px 70px',
        maxWidth: '640px',
        margin: '-80px auto 0'
      }}>
        {/* Soft Golden Sparkle Icon */}
        <div style={{
          width: '42px',
          height: '42px',
          margin: '0 auto 16px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(223, 183, 86, 0.3), rgba(223, 183, 86, 0.05))',
          border: '1px solid rgba(223, 183, 86, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(223, 183, 86, 0.2)'
        }}>
          <Sparkles size={18} style={{ color: '#DFB756' }} />
        </div>

        {/* Italic Romantic Quote */}
        <p style={{
          fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
          fontStyle: 'italic',
          fontSize: 'clamp(1.4rem, 4.5vw, 2.05rem)',
          color: '#FFF6E3',
          lineHeight: '1.4',
          marginBottom: '26px',
          textShadow: '0 3px 12px rgba(0,0,0,0.6)'
        }}>
          {lang === 'ta'
            ? 'அன்புடன், தங்களை வரவேற்க காத்திருக்கிறோம்.'
            : 'With love, we look forward to celebrating with you.'}
        </p>

        {/* Small Golden Tagline */}
        <p style={{
          fontSize: '11px',
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: '#DFB756',
          fontWeight: 800,
          marginBottom: '10px'
        }}>
          MADE WITH LOVE FOR
        </p>

        {/* Couple Names */}
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.15rem, 3.8vw, 1.65rem)',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '0.04em',
          marginBottom: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '6px 12px',
          textAlign: 'center'
        }}>
          <span style={{ whiteSpace: 'nowrap' }}>S. KANNAN, B.Sc.</span>
          <span style={{ color: '#DFB756', fontWeight: 600 }}>&amp;</span>
          <span style={{ whiteSpace: 'nowrap' }}>R. SURUTHIKA, D.M.E.</span>
        </h3>

        {/* Gold Underline Divider */}
        <div style={{
          width: '80px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #DFB756, transparent)',
          margin: '0 auto 16px'
        }}></div>

        {/* Wedding Date */}
        <p style={{
          fontSize: '12px',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: '#D1C2A5',
          fontWeight: 700
        }}>
          10 &amp; 11 NOVEMBER 2026 • KABILARMALAI
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '18px', opacity: 0.8 }}>
          <Sparkles size={12} style={{ color: '#DFB756' }} />
          <Heart size={12} style={{ fill: '#DFB756', color: '#DFB756' }} />
          <Sparkles size={12} style={{ color: '#DFB756' }} />
        </div>
      </div>
    </section>
  );
}
