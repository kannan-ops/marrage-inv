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
          gap: '10px',
          textAlign: 'center'
        }}>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.9rem, 6vw, 2.9rem)',
            fontWeight: 800,
            fontStyle: 'italic',
            color: 'var(--color-royal-peacock)',
            letterSpacing: '0.02em',
            lineHeight: '1.2'
          }}>
            {content.groom.name}
          </span>
          <span style={{
            fontSize: '13px',
            fontWeight: 700,
            fontStyle: 'normal',
            color: '#8A5D13',
            background: 'linear-gradient(135deg, #FFFDF8, #F7EAD6)',
            padding: '3px 10px',
            borderRadius: '8px',
            border: '1.5px solid #DFB756',
            letterSpacing: '0.04em',
            boxShadow: '0 2px 6px rgba(223, 183, 86, 0.25)'
          }}>
            {content.groom.degree}
          </span>
        </div>

        {/* Ampersand & Hearts */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          margin: '8px 0'
        }}>
          <div style={{ height: '1.5px', width: '36px', background: 'linear-gradient(90deg, transparent, #DFB756)' }}></div>
          <Heart size={18} style={{ fill: '#7A1910', color: '#7A1910' }} />
          <span style={{
            fontFamily: "'Cinzel', serif",
            color: '#DFB756',
            fontWeight: 700,
            fontSize: '1.4rem'
          }}>
            &amp;
          </span>
          <Heart size={18} style={{ fill: '#7A1910', color: '#7A1910' }} />
          <div style={{ height: '1.5px', width: '36px', background: 'linear-gradient(90deg, #DFB756, transparent)' }}></div>
        </div>

        {/* Bride Name */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          textAlign: 'center'
        }}>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.9rem, 6vw, 2.9rem)',
            fontWeight: 800,
            fontStyle: 'italic',
            color: 'var(--color-royal-peacock)',
            letterSpacing: '0.02em',
            lineHeight: '1.2'
          }}>
            {content.bride.name}
          </span>
          <span style={{
            fontSize: '13px',
            fontWeight: 700,
            fontStyle: 'normal',
            color: '#8A5D13',
            background: 'linear-gradient(135deg, #FFFDF8, #F7EAD6)',
            padding: '3px 10px',
            borderRadius: '8px',
            border: '1.5px solid #DFB756',
            letterSpacing: '0.04em',
            boxShadow: '0 2px 6px rgba(223, 183, 86, 0.25)'
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
            gap: '6px',
            flexWrap: 'wrap'
          }}>
            <span>{content.groom.name}, {content.groom.degree}</span>
            <span style={{ color: '#DFB756', fontWeight: 600 }}>&amp;</span>
            <span>{content.bride.name}, {content.bride.degree}</span>
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
