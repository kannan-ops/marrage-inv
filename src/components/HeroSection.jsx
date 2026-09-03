import React from 'react';
import { Sparkles, Calendar, MapPin, Heart } from 'lucide-react';

export default function HeroSection({ content, lang }) {
  return (
    <section className="hero-section" style={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '60px',
      paddingBottom: '30px',
      width: '100%'
    }}>
      {/* Top Auspicious Floral & Gold Header Line */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        maxWidth: '480px',
        width: '100%',
        margin: '0 auto 16px'
      }}>
        <div style={{ flex: 1, height: '1.5px', background: 'linear-gradient(to right, transparent, #DFB756, transparent)' }}></div>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#91681E' }}>
          <Sparkles size={16} style={{ color: '#DFB756' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 800 }}>
            {content.presenting}
          </span>
          <Sparkles size={16} style={{ color: '#DFB756' }} />
        </div>
        <div style={{ flex: 1, height: '1.5px', background: 'linear-gradient(to right, transparent, #DFB756, transparent)' }}></div>
      </div>

      {/* Main Couple Royal Names with Professional Degrees */}
      <div style={{
        width: '100%',
        maxWidth: '680px',
        margin: '0 auto 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        {/* Groom Name */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          textAlign: 'center'
        }}>
          <span
            className="gold-shimmer-text"
            style={{
              fontFamily: lang === 'ta' ? "'Noto Serif Tamil', 'Mukta Malar', serif" : "'Playfair Display', 'Cinzel', Georgia, serif",
              fontSize: 'clamp(2.3rem, 7.5vw, 3.6rem)',
              fontWeight: 900,
              letterSpacing: lang === 'ta' ? '0' : '0.01em',
              lineHeight: '1.2',
              filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.15))'
            }}
          >
            {lang === 'ta' ? (content.groom.tamilName || content.groom.name) : content.groom.name}
          </span>
          <span style={{
            fontSize: '14px',
            fontWeight: 800,
            fontStyle: 'normal',
            color: '#7A1910',
            background: 'linear-gradient(135deg, #FFFDF8 0%, #FBF0D8 100%)',
            padding: '4px 14px',
            borderRadius: '12px',
            border: '2px solid #DFB756',
            letterSpacing: '0.06em',
            boxShadow: '0 4px 12px rgba(223, 183, 86, 0.4)'
          }}>
            {content.groom.degree}
          </span>
        </div>

        {/* Ampersand & Hearts */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          margin: '12px 0'
        }}>
          <div style={{ height: '2px', width: '54px', background: 'linear-gradient(90deg, transparent, #DFB756)' }}></div>
          <Heart size={22} style={{ fill: '#7A1910', color: '#7A1910', filter: 'drop-shadow(0 2px 5px rgba(122, 25, 16, 0.4))' }} />
          <span style={{
            fontFamily: "'Cinzel', 'Playfair Display', serif",
            color: '#B88523',
            fontWeight: 900,
            fontSize: '1.9rem',
            textShadow: '0 1px 4px rgba(223, 183, 86, 0.7)'
          }}>
            &amp;
          </span>
          <Heart size={22} style={{ fill: '#7A1910', color: '#7A1910', filter: 'drop-shadow(0 2px 5px rgba(122, 25, 16, 0.4))' }} />
          <div style={{ height: '2px', width: '54px', background: 'linear-gradient(90deg, #DFB756, transparent)' }}></div>
        </div>

        {/* Bride Name */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          textAlign: 'center'
        }}>
          <span
            className="gold-shimmer-text"
            style={{
              fontFamily: lang === 'ta' ? "'Noto Serif Tamil', 'Mukta Malar', serif" : "'Playfair Display', 'Cinzel', Georgia, serif",
              fontSize: 'clamp(2.3rem, 7.5vw, 3.6rem)',
              fontWeight: 900,
              letterSpacing: lang === 'ta' ? '0' : '0.01em',
              lineHeight: '1.2',
              filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.15))'
            }}
          >
            {lang === 'ta' ? (content.bride.tamilName || content.bride.name) : content.bride.name}
          </span>
          <span style={{
            fontSize: '14px',
            fontWeight: 800,
            fontStyle: 'normal',
            color: '#7A1910',
            background: 'linear-gradient(135deg, #FFFDF8 0%, #FBF0D8 100%)',
            padding: '4px 14px',
            borderRadius: '12px',
            border: '2px solid #DFB756',
            letterSpacing: '0.06em',
            boxShadow: '0 4px 12px rgba(223, 183, 86, 0.4)'
          }}>
            {content.bride.degree}
          </span>
        </div>
      </div>

      {/* Auspicious Invitation Note */}
      <p style={{
        maxWidth: '560px',
        margin: '0 auto 24px',
        fontSize: '14px',
        color: '#5C5243',
        lineHeight: '1.7',
        fontWeight: 500,
        textAlign: 'center',
        padding: '0 12px'
      }}>
        {content.invitationNote}
      </p>

      {/* Royal Palace Mandap Jharokha Photo Frame */}
      <div className="royal-palace-frame" style={{ width: '100%', margin: '0 auto 20px' }}>
        <div className="gold-corner-tl"></div>
        <div className="gold-corner-tr"></div>
        <div className="gold-corner-bl"></div>
        <div className="gold-corner-br"></div>

        <div className="royal-img-box">
          <img
            src="/images/couple-proposal.jpg"
            alt="S. Kannan, B.Sc. & R. Suruthika, D.M.E."
            style={{ objectPosition: 'center 30%' }}
          />
        </div>

        {/* 2-Line Clean Caption: Line 1 = Names, Line 2 = Poetry */}
        <div style={{
          marginTop: '16px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px'
        }}>
          {/* Line 1: Names with Qualification */}
          <div style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '15px',
            fontWeight: 700,
            color: 'var(--color-royal-peacock)',
            letterSpacing: '0.02em',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <span style={{ whiteSpace: 'nowrap' }}>{content.groom.name}, {content.groom.degree}</span>
            <span style={{ color: '#DFB756', fontWeight: 600 }}>&amp;</span>
            <span style={{ whiteSpace: 'nowrap' }}>{content.bride.name}, {content.bride.degree}</span>
          </div>

          {/* Line 2: Romantic Poetry Verse */}
          <div style={{
            fontFamily: "'Cormorant Garamond', 'Noto Serif Tamil', Georgia, serif",
            fontSize: '14px',
            fontStyle: 'italic',
            color: '#7A644D',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <span>{lang === 'ta' ? 'மலர் மாலை சூடும் மங்கல அன்புத் தருணம்' : 'A Beautiful Promise of Love & Togetherness'}</span>
            <span style={{ fontSize: '13px' }}>💍💐</span>
          </div>
        </div>
      </div>

      {/* Date & Location Pill Badge */}
      <div className="hero-pill-badge" style={{ margin: '0 auto' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={16} style={{ color: '#7A1910' }} />
          <span>10 &amp; 11 November 2026</span>
        </span>
        <span style={{ color: '#DFB756' }}>•</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin size={16} style={{ color: '#7A1910' }} />
          <span>Kabilarmalai, Namakkal</span>
        </span>
      </div>
    </section>
  );
}
