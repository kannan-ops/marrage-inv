import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

export default function RingCeremonyBanner({ content, lang }) {
  const isTa = lang === 'ta';

  return (
    <section className="ring-ceremony-card">
      <div className="gold-corner-tl"></div>
      <div className="gold-corner-tr"></div>
      <div className="gold-corner-bl"></div>
      <div className="gold-corner-br"></div>

      {/* Ring Ceremony Photo with 24K Golden Sunburst Aura */}
      <div className="ring-img-thumb">
        <img
          src={getAssetUrl('/images/ring-ceremony.jpg')}
          alt="The Sacred Ring Exchange — S. Kannan & R. Suruthika"
        />
      </div>

      {/* Romantic Sacred Poetry & Content */}
      <div style={{ textAlign: 'center', flex: 1, padding: '4px 8px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Sparkles size={15} style={{ color: '#DFB756' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#7A1910', fontWeight: 800 }}>
            {isTa ? 'சுப நிச்சயதார்த்த மங்கல தருணம்' : 'THE SACRED ENGAGEMENT & VOW'}
          </span>
          <Sparkles size={15} style={{ color: '#DFB756' }} />
        </div>

        <p className="quote-script" style={{
          margin: '4px 0 10px',
          lineHeight: '1.3'
        }}>
          "Two souls with but a single thought, two hearts that beat as one."
        </p>

        <p style={{
          fontFamily: "'Noto Serif Tamil', Georgia, serif",
          fontSize: 'clamp(0.95rem, 3.2vw, 1.15rem)',
          color: '#5C4834',
          fontWeight: 700,
          fontStyle: 'normal',
          maxWidth: '520px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          {isTa
            ? 'மோதிர மாற்றத்தோடு தொடங்கிய எங்கள் காதல் பயணம், திருமண மங்கல பந்தத்தில் முழுமை பெறுகிறது! 💍❤️'
            : 'Sealed with a sacred ring, our promise of eternal love, trust & togetherness begins! 💍❤️'}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '16px' }}>
          <div style={{ height: '1.5px', width: '42px', background: 'linear-gradient(90deg, transparent, #DFB756)' }}></div>
          <Heart size={15} style={{ fill: '#7A1910', color: '#7A1910' }} />
          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#8C5F12', fontWeight: 800 }}>
            FOREVER &amp; ALWAYS
          </span>
          <Heart size={15} style={{ fill: '#7A1910', color: '#7A1910' }} />
          <div style={{ height: '1.5px', width: '42px', background: 'linear-gradient(90deg, #DFB756, transparent)' }}></div>
        </div>
      </div>
    </section>
  );
}
