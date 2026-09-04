import React, { useState, useEffect, useRef } from 'react';
import { Camera, X, Heart, Sparkles } from 'lucide-react';

function ScrollPolaroidCard({ photo, index, onSelect }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [likes, setLikes] = useState(() => {
    const saved = localStorage.getItem(`photo_likes_${photo.src}`);
    return saved ? parseInt(saved, 10) : 12 + (index * 3);
  });
  const [isLiked, setIsLiked] = useState(() => {
    return localStorage.getItem(`photo_is_liked_${photo.src}`) === 'true';
  });

  const isLeft = index % 2 === 0;
  const baseTilt = isLeft ? '-1deg' : '1deg';

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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
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

      {/* Luxury Feathered Photo Frame (Melted soft edge fade) */}
      <div className="feathered-photo-frame">
        {/* Soft Vignette Overlay */}
        <div className="photo-vignette-overlay"></div>

        {/* Inner Gold Filigree Inset Border */}
        <div className="photo-filigree-border"></div>

        {/* Feathered Image with smooth 4-side radial dissolve */}
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
            gap: '5px',
            padding: '5px 12px',
            borderRadius: '9999px',
            backgroundColor: isLiked ? 'rgba(122, 25, 16, 0.92)' : 'rgba(255, 255, 255, 0.9)',
            color: isLiked ? '#FFF' : '#7A1910',
            border: '1px solid #DFB756',
            boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
            cursor: 'pointer',
            fontSize: '11.5px',
            fontWeight: 800,
            backdropFilter: 'blur(6px)',
            transition: 'all 0.25s ease'
          }}
          title="Like this moment"
        >
          <Heart size={13} style={{ fill: isLiked ? '#FFF' : '#7A1910', color: isLiked ? '#FFF' : '#7A1910' }} />
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
        padding: '4px 10px 6px'
      }}>
        {/* Line 1: Title / Names */}
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.18rem, 3.8vw, 1.48rem)',
          fontWeight: 700,
          color: 'var(--color-royal-peacock)',
          letterSpacing: '0.02em',
          lineHeight: '1.25'
        }}>
          {photo.line1}
        </div>

        {/* Line 2: Heart-touching Poetic Kavithai */}
        <div style={{
          fontFamily: "'Cormorant Garamond', 'Noto Serif Tamil', Georgia, serif",
          fontSize: 'clamp(0.98rem, 3.2vw, 1.18rem)',
          fontStyle: 'italic',
          color: '#5C4834',
          fontWeight: 600,
          lineHeight: '1.45',
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
            color: 'var(--color-royal-maroon)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            background: '#FCF2F0',
            padding: '3px 10px',
            borderRadius: '9999px',
            border: '1px solid #F3D4CE'
          }}>
            <Heart size={10} style={{ fill: 'var(--color-royal-maroon)' }} />
            <span>{photo.tag}</span>
          </div>
          <div style={{ height: '1px', width: '28px', background: 'linear-gradient(90deg, #DFB756, transparent)' }}></div>
        </div>
      </div>
    </div>
  );
}

export default function MomentsGallery({ content, lang }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPhotos = activeCategory === 'all'
    ? content.photos
    : content.photos.filter((p) => p.category === activeCategory);

  return (
    <section style={{ padding: '40px 0 20px', maxWidth: '640px', margin: '0 auto', overflow: 'hidden' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
          <Camera size={15} style={{ color: 'var(--color-royal-maroon)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 800 }}>
            {content.galleryTitle}
          </span>
          <Camera size={15} style={{ color: 'var(--color-royal-maroon)' }} />
        </div>

        <h2 style={{ fontSize: 'clamp(1.7rem, 4.5vw, 2.4rem)', color: 'var(--color-royal-peacock)', fontWeight: 700 }}>
          {lang === 'ta' ? 'இனிய பொன்னான தருணங்கள்' : 'Moments of Love & Blessings'}
        </h2>
        <p style={{ fontSize: '13px', color: '#5C5243', marginTop: '4px' }}>
          {content.gallerySubtitle}
        </p>

        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '18px' }}>
          <button
            onClick={() => setActiveCategory('all')}
            style={{
              padding: '6px 16px',
              borderRadius: '9999px',
              border: '1.5px solid #DFB756',
              background: activeCategory === 'all' ? 'var(--color-royal-peacock)' : '#fff',
              color: activeCategory === 'all' ? 'var(--color-gold-light)' : '#5C5243',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: activeCategory === 'all' ? '0 2px 8px rgba(11, 53, 54, 0.25)' : 'none'
            }}
          >
            {content.galleryFilterAll || (lang === 'ta' ? 'அனைத்தும்' : 'All Photos')} ({content.photos.length})
          </button>

          <button
            onClick={() => setActiveCategory('couple')}
            style={{
              padding: '6px 16px',
              borderRadius: '9999px',
              border: '1.5px solid #DFB756',
              background: activeCategory === 'couple' ? 'var(--color-royal-peacock)' : '#fff',
              color: activeCategory === 'couple' ? 'var(--color-gold-light)' : '#5C5243',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {content.galleryFilterCouple || (lang === 'ta' ? 'மணமக்கள்' : 'Couple')}
          </button>

          <button
            onClick={() => setActiveCategory('ceremony')}
            style={{
              padding: '6px 16px',
              borderRadius: '9999px',
              border: '1.5px solid #DFB756',
              background: activeCategory === 'ceremony' ? 'var(--color-royal-peacock)' : '#fff',
              color: activeCategory === 'ceremony' ? 'var(--color-gold-light)' : '#5C5243',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {content.galleryFilterCeremony || (lang === 'ta' ? 'சுப நிகழ்வுகள்' : 'Ceremony')}
          </button>

          <button
            onClick={() => setActiveCategory('family')}
            style={{
              padding: '6px 16px',
              borderRadius: '9999px',
              border: '1.5px solid #DFB756',
              background: activeCategory === 'family' ? 'var(--color-royal-peacock)' : '#fff',
              color: activeCategory === 'family' ? 'var(--color-gold-light)' : '#5C5243',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {content.galleryFilterFamily || (lang === 'ta' ? 'குடும்பம் & ஆசிகள்' : 'Family & Elders')}
          </button>
        </div>
      </div>

      {/* Dynamic Left & Right Scroll Slide-In Stream */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '44px', alignItems: 'center', width: '100%' }}>
        {filteredPhotos.map((photo, index) => (
          <ScrollPolaroidCard
            key={index}
            photo={photo}
            index={index}
            onSelect={setSelectedPhoto}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
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
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(10px)',
            padding: '16px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '680px',
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: '20px',
              padding: '18px',
              border: '3px solid #DFB756',
              boxShadow: 'var(--shadow-deep), var(--shadow-gold-glow)'
            }}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <X size={18} />
            </button>

            <div style={{ maxHeight: '72vh', overflow: 'hidden', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0c0c0c' }}>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.line1}
                style={{ maxHeight: '70vh', maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>

            {/* Modal 2-Line Caption */}
            <div style={{ textAlign: 'center', marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--color-royal-peacock)', fontWeight: 700 }}>
                {selectedPhoto.line1}
              </h4>
              <p style={{ fontSize: '13.5px', fontStyle: 'italic', color: '#7A644D', fontWeight: 600 }}>
                {selectedPhoto.line2}
              </p>
              <span style={{ fontSize: '10.5px', color: '#DFB756', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '2px', fontWeight: 800 }}>
                {selectedPhoto.tag}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
