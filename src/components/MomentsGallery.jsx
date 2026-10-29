import React, { useState, useEffect, useRef } from 'react';
import { Camera, X, Heart, Sparkles } from 'lucide-react';

/* ======================================================== */
/* 📸 1. SINGLE-COLUMN COUPLE ROYAL PHOTO CARD              */
/* ======================================================== */
function ScrollPolaroidCard({ photo, index, onSelect }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem(`photo_likes_${photo.src}`);
    return saved ? parseInt(saved, 10) : 24 + (index * 5);
  });
  const [isLiked, setIsLiked] = useState(() => {
    return localStorage.getItem(`photo_is_liked_${photo.src}`) === 'true';
  });

  const isLeft = index % 2 === 0;
  const baseTilt = isLeft ? '-0.8deg' : '0.8deg';

  const handleLike = (e) => {
    e.stopPropagation();
    if (!isLiked) {
      const newCount = likes + 1;
      setLikes(newCount);
      setIsLiked(true);
      localStorage.setItem(`photo_likes_${photo.src}`, newCount.toString());
      localStorage.setItem(`photo_is_liked_${photo.src}`, 'true');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(photo)}
      style={{
        maxWidth: '520px',
        width: '100%',
        position: 'relative',
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? `translateY(0) rotate(${baseTilt}) scale(1)`
          : `translateY(30px) rotate(${isLeft ? '-2deg' : '2deg'}) scale(0.96)`,
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity'
      }}
      className="royal-photo-card"
    >
      {/* 4 Golden Corner Accents on Card */}
      <div className="gold-corner-tl"></div>
      <div className="gold-corner-tr"></div>
      <div className="gold-corner-bl"></div>
      <div className="gold-corner-br"></div>

      {/* Luxury Feathered Photo Frame */}
      <div className="feathered-photo-frame">
        <div className="photo-vignette-overlay"></div>
        <div className="photo-filigree-border"></div>

        <img
          src={photo.src}
          alt={photo.line1}
          className="feathered-photo-img"
          loading="lazy"
        />

        {/* Interactive Floating Heart Reaction Button */}
        <button
          type="button"
          onClick={handleLike}
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            zIndex: 10,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '9999px',
            backgroundColor: isLiked ? '#85141C' : 'rgba(255, 255, 255, 0.92)',
            color: isLiked ? '#FFF' : '#7A1910',
            border: '1.5px solid #DFB756',
            boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 800,
            backdropFilter: 'blur(8px)',
            transition: 'all 0.25s ease'
          }}
          title="Like this moment"
        >
          <Heart size={14} style={{ fill: isLiked ? '#FFF' : '#7A1910', color: isLiked ? '#FFF' : '#7A1910' }} />
          <span>{likes}</span>
        </button>
      </div>

      {/* 2-Line Clean Caption with Tamil Kavithai */}
      <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 10px 4px'
      }}>
        {/* Line 1: Title / Names */}
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.2rem, 4vw, 1.55rem)',
          fontWeight: 800,
          color: '#7A1910',
          letterSpacing: '0.02em',
          lineHeight: '1.25'
        }}>
          {photo.line1}
        </div>

        {/* Line 2: Heart-touching Poetic Kavithai */}
        <div style={{
          fontFamily: "'Cormorant Garamond', 'Noto Serif Tamil', Georgia, serif",
          fontSize: 'clamp(1rem, 3.2vw, 1.2rem)',
          fontStyle: 'italic',
          color: '#5C4834',
          fontWeight: 600,
          lineHeight: '1.5',
          maxWidth: '460px'
        }}>
          "{photo.line2}"
        </div>

        {/* Small Auspicious Badge with Gold Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '6px' }}>
          <div style={{ height: '1px', width: '28px', background: 'linear-gradient(90deg, transparent, #DFB756)' }}></div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '10.5px',
            fontWeight: 800,
            color: '#7A1910',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            background: '#FFF3DB',
            padding: '3px 12px',
            borderRadius: '9999px',
            border: '1px solid #DFB756'
          }}>
            <Heart size={10} style={{ fill: '#7A1910', color: '#7A1910' }} />
            <span>{photo.tag}</span>
          </div>
          <div style={{ height: '1px', width: '28px', background: 'linear-gradient(90deg, #DFB756, transparent)' }}></div>
        </div>
      </div>
    </div>
  );
}

/* ======================================================== */
/* 🌟 MAIN MOMENTS GALLERY COMPONENT                        */
/* ======================================================== */
export default function MomentsGallery({ content, lang }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const isTa = lang === 'ta';

  const photos = content.photos || [];

  return (
    <section style={{ padding: '36px 0 20px', maxWidth: '640px', margin: '0 auto', overflow: 'hidden', width: '100%' }}>
      {/* 1. Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Camera size={15} style={{ color: '#DFB756' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#7A1910', fontWeight: 800 }}>
            {content.galleryTitle}
          </span>
          <Camera size={15} style={{ color: '#DFB756' }} />
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.8rem, 4.8vw, 2.4rem)',
          color: '#7A1910',
          fontWeight: 800
        }}>
          {isTa ? 'இனிய பொன்னான தருணங்கள்' : 'Moments of Love & Togetherness'}
        </h2>
        <p style={{ fontSize: '14px', color: '#5C4834', marginTop: '6px' }}>
          {content.gallerySubtitle}
        </p>
      </div>

      {/* 2. Photo Stream */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '36px',
        alignItems: 'center',
        width: '100%',
        marginBottom: '24px'
      }}>
        {photos.map((photo, index) => (
          <ScrollPolaroidCard
            key={`photo_${index}`}
            photo={photo}
            index={index}
            onSelect={setSelectedPhoto}
          />
        ))}
      </div>

      {/* 3. Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 120,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(25, 12, 8, 0.92)',
            backdropFilter: 'blur(16px)',
            padding: '16px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '680px',
              width: '100%',
              background: '#FFFDF9',
              borderRadius: '24px',
              padding: '20px',
              border: '2px solid #DFB756',
              boxShadow: 'var(--shadow-deep), var(--shadow-gold-glow)'
            }}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.65)',
                color: '#FFEAA5',
                border: '1.5px solid #DFB756',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            <div style={{ maxHeight: '72vh', overflow: 'hidden', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FAF4E8' }}>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.line1}
                style={{ maxHeight: '70vh', maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>

            {/* Modal Caption */}
            <div style={{ textAlign: 'center', marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <h4 style={{ fontSize: '1.35rem', color: '#7A1910', fontWeight: 800 }}>
                {selectedPhoto.line1}
              </h4>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#5C4834', fontWeight: 600 }}>
                {selectedPhoto.line2}
              </p>
              <span style={{ fontSize: '11px', color: '#8C5F12', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '2px', fontWeight: 800 }}>
                {selectedPhoto.tag}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
