import React from 'react';
import { Sparkles, Calendar, MapPin, Heart, Briefcase, GraduationCap } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

export default function HeroSection({ content, lang }) {
  const isTa = lang === 'ta';

  return (
    <section className="hero-section" style={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '20px',
      paddingBottom: '30px',
      width: '100%',
      position: 'relative'
    }}>

      {/* 1. Elegant Wedding Tagline Badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '7px 22px',
        borderRadius: '9999px',
        background: 'linear-gradient(135deg, rgba(255, 253, 248, 0.98) 0%, rgba(247, 237, 220, 0.98) 100%)',
        border: '1.5px solid #DFB756',
        boxShadow: '0 4px 15px rgba(223, 183, 86, 0.25)',
        marginBottom: '20px'
      }}>
        <Sparkles size={14} style={{ color: '#DFB756' }} />
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '12.5px',
          fontWeight: 800,
          color: '#85141C',
          letterSpacing: '0.06em'
        }}>
          {isTa ? 'இரு மனங்களின் இனிய திருமண நல்வாழ்த்து மடல்' : 'Two Hearts • One Soul • A Lifetime of Togetherness'}
        </span>
        <Sparkles size={14} style={{ color: '#DFB756' }} />
      </div>

      {/* 2. Grand Imperial Royal Monogram Crest */}
      <div style={{
        position: 'relative',
        width: '92px',
        height: '92px',
        margin: '0 auto 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Rotating Outer Gold Filigree Ring */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '1.5px dashed #DFB756',
          animation: 'rotateClockwise 25s linear infinite',
          boxShadow: '0 0 25px rgba(223, 183, 86, 0.35)'
        }}></div>

        {/* Counter-rotating Inner Ring */}
        <div style={{
          position: 'absolute',
          inset: '6px',
          borderRadius: '50%',
          border: '1px solid rgba(223, 183, 86, 0.5)',
          animation: 'rotateCounterClockwise 18s linear infinite'
        }}></div>

        {/* Central Royal Medallion */}
        <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #FFFDF8 0%, #FAF0E1 100%)',
          border: '2px solid #DFB756',
          boxShadow: '0 8px 25px rgba(45, 25, 15, 0.15), inset 0 0 15px rgba(223, 183, 86, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2
        }}>
          <span style={{ fontSize: '12px', lineHeight: 1 }}>👑</span>
          <span style={{
            fontFamily: "'Cinzel', 'Playfair Display', serif",
            fontWeight: 900,
            fontSize: '17px',
            letterSpacing: '0.06em',
            background: 'var(--gold-foil-text)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginTop: '2px'
          }}>
            K &amp; S
          </span>
        </div>
      </div>

      {/* 3. Auspicious Gold Header Tag */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        maxWidth: '520px',
        width: '100%',
        margin: '0 auto 16px'
      }}>
        <div style={{ flex: 1, height: '1.5px', background: 'linear-gradient(to right, transparent, #DFB756, transparent)' }}></div>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#8C5F12' }}>
          <Sparkles size={16} style={{ color: '#DFB756' }} />
          <span style={{
            fontSize: '12px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            fontWeight: 800,
            color: '#7A1910'
          }}>
            {content.presenting}
          </span>
          <Sparkles size={16} style={{ color: '#DFB756' }} />
        </div>
        <div style={{ flex: 1, height: '1.5px', background: 'linear-gradient(to right, transparent, #DFB756, transparent)' }}></div>
      </div>

      {/* 4. Main Couple Royal Names Presentation */}
      <div style={{
        width: '100%',
        maxWidth: '720px',
        margin: '0 auto 18px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        {/* Groom Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '8px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <span
              className="gold-shimmer-text"
              style={{
                fontFamily: isTa ? "'Noto Serif Tamil', 'Mukta Malar', serif" : "'Playfair Display', 'Cinzel', Georgia, serif",
                fontSize: 'clamp(2.4rem, 8vw, 3.8rem)',
                fontWeight: 900,
                letterSpacing: isTa ? '0' : '0.01em',
                lineHeight: '1.2',
                filter: 'drop-shadow(0 2px 8px rgba(223, 183, 86, 0.4))'
              }}
            >
              {isTa ? (content.groom.tamilName || content.groom.name) : content.groom.name}
            </span>
            <span style={{
              fontSize: '14px',
              fontWeight: 900,
              fontStyle: 'normal',
              color: '#7A1910',
              background: 'linear-gradient(135deg, #FFFDF8 0%, #FAF0E1 100%)',
              padding: '4px 14px',
              borderRadius: '12px',
              border: '1.5px solid #DFB756',
              letterSpacing: '0.06em',
              boxShadow: '0 4px 12px rgba(223, 183, 86, 0.35)'
            }}>
              {content.groom.degree}
            </span>
          </div>

          {/* Software Developer Profession Pill */}
          {content.groom.job && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontWeight: 700,
              color: '#5C442D',
              background: 'linear-gradient(135deg, #FFFDF8 0%, #FAF2E3 100%)',
              border: '1.5px solid #DFB756',
              padding: '5px 16px',
              borderRadius: '9999px',
              letterSpacing: '0.04em',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
            }}>
              <Briefcase size={13} style={{ color: '#8C5F12' }} />
              <span>{content.groom.job}</span>
            </div>
          )}
        </div>

        {/* Romantic Sacred Connector & Pulsing Hearts */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          margin: '14px 0'
        }}>
          <div style={{ height: '2px', width: '50px', background: 'linear-gradient(90deg, transparent, #DFB756)' }}></div>
          <Heart size={22} style={{ fill: '#7A1910', color: '#DFB756', filter: 'drop-shadow(0 0 6px rgba(122, 25, 16, 0.4))' }} />
          <span style={{
            fontFamily: "'Cinzel', 'Playfair Display', serif",
            color: '#8C5F12',
            fontWeight: 900,
            fontSize: '2rem'
          }}>
            &amp;
          </span>
          <Heart size={22} style={{ fill: '#7A1910', color: '#DFB756', filter: 'drop-shadow(0 0 6px rgba(122, 25, 16, 0.4))' }} />
          <div style={{ height: '2px', width: '50px', background: 'linear-gradient(90deg, #DFB756, transparent)' }}></div>
        </div>

        {/* Bride Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '8px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <span
              className="gold-shimmer-text"
              style={{
                fontFamily: isTa ? "'Noto Serif Tamil', 'Mukta Malar', serif" : "'Playfair Display', 'Cinzel', Georgia, serif",
                fontSize: 'clamp(2.4rem, 8vw, 3.8rem)',
                fontWeight: 900,
                letterSpacing: isTa ? '0' : '0.01em',
                lineHeight: '1.2',
                filter: 'drop-shadow(0 2px 8px rgba(223, 183, 86, 0.4))'
              }}
            >
              {isTa ? (content.bride.tamilName || content.bride.name) : content.bride.name}
            </span>
            <span style={{
              fontSize: '14px',
              fontWeight: 900,
              fontStyle: 'normal',
              color: '#7A1910',
              background: 'linear-gradient(135deg, #FFFDF8 0%, #FAF0E1 100%)',
              padding: '4px 14px',
              borderRadius: '12px',
              border: '1.5px solid #DFB756',
              letterSpacing: '0.06em',
              boxShadow: '0 4px 12px rgba(223, 183, 86, 0.35)'
            }}>
              {content.bride.degree}
            </span>
          </div>

          {/* Bride Qualification Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#5C442D',
            background: 'linear-gradient(135deg, #FFFDF8 0%, #FAF2E3 100%)',
            border: '1.5px solid #DFB756',
            padding: '5px 16px',
            borderRadius: '9999px',
            letterSpacing: '0.04em',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
          }}>
            <GraduationCap size={14} style={{ color: '#8C5F12' }} />
            <span>{isTa ? 'Graduate in Electronics & Communication Engg.' : 'Graduate in Electronics & Communication Engg.'}</span>
          </div>
        </div>
      </div>

      {/* 5. Royal Parents Honor Tribute Plaque */}
      <div style={{
        maxWidth: '620px',
        width: '100%',
        margin: '0 auto 24px',
        padding: '18px 22px',
        borderRadius: '24px',
        background: 'linear-gradient(160deg, #FFFFFF 0%, #FDFBF7 60%, #FAF2E3 100%)',
        border: '1.5px solid #DFB756',
        boxShadow: 'var(--shadow-royal-card), var(--shadow-gold-glow)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {/* Groom Parents */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C5F12', fontWeight: 800 }}>
            {isTa ? 'மணமகன் பெற்றோர்' : "Groom's Parents"}
          </span>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#7A1910' }}>
            {isTa ? 'P. செந்தில்குமார் - S. சுமதி' : 'Thiru P. Senthilkumar & Smt. S. Sumathi'}
          </span>
          <span style={{ fontSize: '12.5px', color: '#5C4834', fontWeight: 600 }}>
            📍 {isTa ? 'ஜங்கமநாயக்கன்பட்டி, வில்லிபாளையம், பரமத்தி வேலூர்' : 'Jangamanaickenpatti, Paramathi Velur, Namakkal'}
          </span>
        </div>

        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(223, 183, 86, 0.6), transparent)' }}></div>

        {/* Bride Parents */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8C5F12', fontWeight: 800 }}>
            {isTa ? 'மணமகள் பெற்றோர்' : "Bride's Parents"}
          </span>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#7A1910' }}>
            {isTa ? 'P. ரவி - R. பிரபாவதி' : 'Thiru P. Ravi & Smt. R. Prabavathi'}
          </span>
          <span style={{ fontSize: '12.5px', color: '#5C4834', fontWeight: 600 }}>
            📍 {isTa ? 'கரட்டுப்பாளையம், திருச்செங்கோடு' : 'Karattupalayam, Tiruchengode, Namakkal'}
          </span>
        </div>
      </div>

      {/* 6. Auspicious Invitation Note */}
      <p style={{
        maxWidth: '580px',
        margin: '0 auto 24px',
        fontSize: '14.5px',
        color: '#5C4834',
        lineHeight: '1.7',
        fontWeight: 600,
        textAlign: 'center',
        padding: '0 12px'
      }}>
        {content.invitationNote}
      </p>

      {/* 7. Grand 24K Gold Royal Palace Mandap Jharokha Photo Arch */}
      <div className="royal-palace-frame" style={{ width: '100%', margin: '0 auto 24px' }}>
        <div className="gold-corner-tl"></div>
        <div className="gold-corner-tr"></div>
        <div className="gold-corner-bl"></div>
        <div className="gold-corner-br"></div>

        <div className="royal-img-box">
          <img
            src={getAssetUrl('/images/couple-proposal.jpg')}
            alt="S. Kannan, B.Sc. & R. Suruthika, ECE."
            style={{ objectPosition: 'center 30%' }}
          />
        </div>

        {/* Caption beneath couple hero photo */}
        <div style={{
          marginTop: '16px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px'
        }}>
          {/* Names with Qualification */}
          <div style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '16px',
            fontWeight: 800,
            color: '#7A1910',
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

          {/* Romantic Poetry Verse */}
          <div style={{
            fontFamily: "'Cormorant Garamond', 'Noto Serif Tamil', Georgia, serif",
            fontSize: '14.5px',
            fontStyle: 'italic',
            color: '#5C4834',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <span>{isTa ? 'மலர் மாலை சூடும் மங்கல அன்புத் தருணம்' : 'A Sacred Promise of Eternal Love & Togetherness'}</span>
            <span style={{ fontSize: '13px' }}>💍💐</span>
          </div>
        </div>
      </div>

      {/* 8. Date & Sacred Venue Pill Badge */}
      <div className="hero-pill-badge" style={{ margin: '0 auto' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={16} style={{ color: '#7A1910' }} />
          <span style={{ fontWeight: 800 }}>{isTa ? 'புதன்கிழமை, 11 நவம்பர் 2026' : 'Wednesday, 11 November 2026'}</span>
        </span>
        <span style={{ color: '#DFB756' }}>•</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin size={16} style={{ color: '#7A1910' }} />
          <span style={{ fontWeight: 800 }}>{isTa ? 'கபிலர்மலை அருள்மிகு பாலசுப்ரமணிய சுவாமி கோவில்' : 'Kabilarmalai Balasubramanya Swamy Temple'}</span>
        </span>
      </div>
    </section>
  );
}
