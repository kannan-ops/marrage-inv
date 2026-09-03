import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function RingCeremonyBanner({ content, lang }) {
  return (
    <section className="ring-ceremony-card">
      <div className="corner-tl"></div>
      <div className="corner-tr"></div>
      <div className="corner-bl"></div>
      <div className="corner-br"></div>

      {/* Ring Ceremony Photo with Golden Aura */}
      <div className="ring-img-thumb">
        <img
          src="/images/ring-ceremony.jpg"
          alt="The Sacred Ring Exchange — S. Kannan & R. Suruthika"
        />
      </div>

      {/* Romantic Sacred Poetry & Content */}
      <div style={{ textAlign: 'center', flex: 1, padding: '4px 8px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
          <Sparkles size={14} style={{ color: 'var(--color-gold)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 800 }}>
            {lang === 'ta' ? 'சுப நிச்சயதார்த்த மங்கல தருணம்' : 'THE SACRED ENGAGEMENT & VOW'}
          </span>
          <Sparkles size={14} style={{ color: 'var(--color-gold)' }} />
        </div>

        <p className="quote-script" style={{ fontSize: 'clamp(1.4rem, 3.8vw, 1.9rem)', margin: '2px 0 4px', color: 'var(--color-peacock)' }}>
          "Two souls with but a single thought, two hearts that beat as one."
        </p>

        <p style={{ fontSize: '12px', color: 'var(--color-ink-soft)', fontStyle: 'italic', maxWidth: '440px', margin: '0 auto', lineHeight: '1.5' }}>
          {lang === 'ta'
            ? 'மோதிர மாற்றத்தோடு தொடங்கிய எங்கள் காதல் பயணம், திருமண பந்தத்தில் முழுமை பெறுகிறது.'
            : 'Sealed with a sacred ring, our promise of eternal love, trust & togetherness begins.'}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '8px' }}>
          <div style={{ height: '1px', width: '30px', backgroundColor: 'var(--color-border)' }}></div>
          <Heart size={12} style={{ fill: 'var(--color-maroon)', color: 'var(--color-maroon)' }} />
          <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold-dark)', fontWeight: 700 }}>
            FOREVER &amp; ALWAYS
          </span>
          <Heart size={12} style={{ fill: 'var(--color-maroon)', color: 'var(--color-maroon)' }} />
          <div style={{ height: '1px', width: '30px', backgroundColor: 'var(--color-border)' }}></div>
        </div>
      </div>
    </section>
  );
}
