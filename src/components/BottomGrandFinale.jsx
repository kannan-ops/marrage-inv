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
      textAlign: 'center'
    }}>
      {/* Romantic HD Couple Image with Seamless Velvety Black Gradient Fade */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '460px',
        overflow: 'hidden'
      }}>
        <img
          src="/images/couple-forehead.jpg"
          alt="S. Kannan & R. Suruthika Romantic Moment"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 22%',
            display: 'block'
          }}
        />

        {/* Seamless Multi-Layer Dark Gradient Shadows (No hard cutoffs) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(248, 243, 232, 0.65) 0%, rgba(5, 30, 31, 0.1) 25%, rgba(5, 30, 31, 0.6) 55%, rgba(5, 30, 31, 0.96) 82%, #051E1F 100%)'
        }}></div>

        {/* Subtle vignette radial glow */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 30%, transparent 40%, rgba(5, 30, 31, 0.8) 100%)'
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
          fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '0.04em',
          marginBottom: '18px'
        }}>
          S. KANNAN, B.Sc. <span style={{ color: '#DFB756', margin: '0 6px' }}>&amp;</span> R. SURUTHIKA, D.M.E.
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
