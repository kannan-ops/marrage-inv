import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function RingCeremonyBanner({ content, lang }) {
  return (
    <section className="ring-ceremony-card" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      padding: '28px 24px',
      borderRadius: '30px',
      background: 'linear-gradient(135deg, #FFFDF9 0%, #FAF2E3 100%)',
      border: '2px solid #DFB756',
      boxShadow: 'var(--shadow-royal-card), var(--shadow-gold-glow)',
      margin: '32px auto 40px',
      maxWidth: '720px',
      position: 'relative'
    }}>
      <div className="gold-corner-tl"></div>
      <div className="gold-corner-tr"></div>
      <div className="gold-corner-bl"></div>
      <div className="gold-corner-br"></div>

      {/* Ring Ceremony Photo with Golden Aura */}
      <div className="ring-img-thumb" style={{
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '4px solid #DFB756',
        boxShadow: '0 0 30px rgba(223, 183, 86, 0.5), inset 0 0 15px rgba(0,0,0,0.2)',
        flexShrink: 0
      }}>
        <img
          src="/images/ring-ceremony.jpg"
          alt="The Sacred Ring Exchange — S. Kannan & R. Suruthika"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Romantic Sacred Poetry & Content */}
      <div style={{ textAlign: 'center', flex: 1, padding: '4px 8px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
          <Sparkles size={15} style={{ color: '#DFB756' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-royal-maroon)', fontWeight: 800 }}>
            {lang === 'ta' ? 'சுப நிச்சயதார்த்த மங்கல தருணம்' : 'THE SACRED ENGAGEMENT & VOW'}
          </span>
          <Sparkles size={15} style={{ color: '#DFB756' }} />
        </div>

        <p className="quote-script" style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: 'clamp(1.6rem, 4.2vw, 2.2rem)',
          margin: '4px 0 8px',
          color: 'var(--color-royal-peacock)',
          lineHeight: '1.3'
        }}>
          "Two souls with but a single thought, two hearts that beat as one."
        </p>

        <p style={{
          fontFamily: "'Noto Serif Tamil', Georgia, serif",
          fontSize: 'clamp(0.95rem, 3vw, 1.15rem)',
          color: '#5A4632',
          fontWeight: 700,
          fontStyle: 'normal',
          maxWidth: '520px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          {lang === 'ta'
            ? 'மோதிர மாற்றத்தோடு தொடங்கிய எங்கள் காதல் பயணம், திருமண மங்கல பந்தத்தில் முழுமை பெறுகிறது! 💍❤️'
            : 'Sealed with a sacred ring, our promise of eternal love, trust & togetherness begins! 💍❤️'}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '14px' }}>
          <div style={{ height: '1.5px', width: '36px', background: 'linear-gradient(90deg, transparent, #DFB756)' }}></div>
          <Heart size={14} style={{ fill: '#7A1910', color: '#7A1910' }} />
          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--color-gold-dark)', fontWeight: 800 }}>
            FOREVER &amp; ALWAYS
          </span>
          <Heart size={14} style={{ fill: '#7A1910', color: '#7A1910' }} />
          <div style={{ height: '1.5px', width: '36px', background: 'linear-gradient(90deg, #DFB756, transparent)' }}></div>
        </div>
      </div>
    </section>
  );
}
