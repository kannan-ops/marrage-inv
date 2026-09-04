import React, { useState, useEffect, useRef } from 'react';
import { Camera, X, Heart, Sparkles, ChevronLeft, ChevronRight, Users, Play, Pause } from 'lucide-react';

/* ======================================================== */
/* 📸 1. SINGLE-COLUMN COUPLE POLAROID CARD                 */
/* ======================================================== */
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
          fontSize: 'clamp(1.15rem, 3.8vw, 1.45rem)',
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
          fontSize: 'clamp(0.96rem, 3.2vw, 1.15rem)',
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

/* ======================================================== */
/* 👨‍👩‍👧‍👦 2. INTERACTIVE FAMILY & ELDERS PHOTO SLIDER / CAROUSEL */
/* ======================================================== */
function FamilyPhotoSlider({ photos = [], onSelect, lang }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const total = photos.length;

  // Auto-play timer (slides every 4.5s)
  useEffect(() => {
    if (!isAutoPlay || total <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay, total]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  if (!photos.length) return null;
  const currentPhoto = photos[currentIndex];

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        position: 'relative'
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Slider Outer Royal Frame Card */}
      <div
        className="royal-photo-card"
        onClick={() => onSelect(currentPhoto)}
        style={{
          width: '100%',
          padding: '16px 14px 20px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF3E6 100%)',
          borderRadius: '26px',
          border: '2px solid #DFB756',
          boxShadow: 'var(--shadow-royal-card), var(--shadow-gold-glow)',
          position: 'relative',
          cursor: 'pointer'
        }}
      >
        <div className="gold-corner-tl"></div>
        <div className="gold-corner-tr"></div>
        <div className="gold-corner-bl"></div>
        <div className="gold-corner-br"></div>

        {/* Top Header Badge & Slide Counter */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2px 8px 12px'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Users size={15} style={{ color: 'var(--color-royal-maroon)' }} />
            <span style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-royal-maroon)'
            }}>
              {lang === 'ta' ? 'குடும்ப ஆசிகள்' : 'FAMILY ALBUM'}
            </span>
          </div>

          <span style={{
            fontSize: '11.5px',
            fontWeight: 800,
            color: '#8C5F12',
            background: '#FFF5DC',
            border: '1px solid #E5CCA0',
            padding: '2px 10px',
            borderRadius: '9999px',
            letterSpacing: '0.08em'
          }}>
            {currentIndex + 1} / {total}
          </span>
        </div>

        {/* Feathered Main Photo Viewport */}
        <div className="feathered-photo-frame" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="photo-vignette-overlay"></div>
          <div className="photo-filigree-border"></div>

          <img
            key={currentPhoto.src}
            src={currentPhoto.src}
            alt={currentPhoto.line1}
            className="feathered-photo-img"
            style={{
              animation: 'scaleIn 0.4s ease-out'
            }}
          />

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Family Photo"
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 253, 248, 0.92)',
              border: '1.5px solid #DFB756',
              color: 'var(--color-royal-peacock)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 15,
              boxShadow: '0 4px 15px rgba(0,0,0,0.25)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.25s ease'
            }}
            className="hover-pop"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Family Photo"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 253, 248, 0.92)',
              border: '1.5px solid #DFB756',
              color: 'var(--color-royal-peacock)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 15,
              boxShadow: '0 4px 15px rgba(0,0,0,0.25)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.25s ease'
            }}
            className="hover-pop"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* 2-Line Clean Caption for Slider Photo */}
        <div style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 10px 4px'
        }}>
          <div style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.15rem, 3.8vw, 1.45rem)',
            fontWeight: 700,
            color: 'var(--color-royal-peacock)',
            letterSpacing: '0.02em',
            lineHeight: '1.25'
          }}>
            {currentPhoto.line1}
          </div>

          <div style={{
            fontFamily: "'Cormorant Garamond', 'Noto Serif Tamil', Georgia, serif",
            fontSize: 'clamp(0.96rem, 3.2vw, 1.15rem)',
            fontStyle: 'italic',
            color: '#5C4834',
            fontWeight: 600,
            lineHeight: '1.45',
            maxWidth: '460px'
          }}>
            "{currentPhoto.line2}"
          </div>

          {/* Dot Navigation Indicators */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '12px'
          }}>
            {photos.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to photo ${idx + 1}`}
                style={{
                  width: currentIndex === idx ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: currentIndex === idx ? 'var(--color-royal-maroon)' : '#D6C4AD',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  padding: 0
                }}
              />
            ))}
          </div>
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

  // Split photos into Couple Column Stream & Family Slider
  const couplePhotos = content.photos.filter((p) => p.category === 'couple' || p.category === 'ceremony');
  const familyPhotos = content.photos.filter((p) => p.category === 'family');

  return (
    <section style={{ padding: '36px 0 20px', maxWidth: '640px', margin: '0 auto', overflow: 'hidden', width: '100%' }}>
      {/* ---------------------------------------------------- */}
      {/* 1. MAIN GALLERY SECTION HEADER                       */}
      {/* ---------------------------------------------------- */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
          <Camera size={15} style={{ color: 'var(--color-royal-maroon)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 800 }}>
            {content.galleryTitle}
          </span>
          <Camera size={15} style={{ color: 'var(--color-royal-maroon)' }} />
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.6rem, 4.5vw, 2.3rem)',
          color: 'var(--color-royal-peacock)',
          fontWeight: 800
        }}>
          {lang === 'ta' ? 'இனிய பொன்னான தருணங்கள்' : 'Moments of Love & Blessings'}
        </h2>
        <p style={{ fontSize: '13px', color: '#5C5243', marginTop: '4px' }}>
          {content.gallerySubtitle}
        </p>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. COUPLE PHOTOS — SINGLE COLUMN VERTICAL STREAM     */}
      {/* ---------------------------------------------------- */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '36px',
        alignItems: 'center',
        width: '100%',
        marginBottom: '48px'
      }}>
        {couplePhotos.map((photo, index) => (
          <ScrollPolaroidCard
            key={`couple_${index}`}
            photo={photo}
            index={index}
            onSelect={setSelectedPhoto}
          />
        ))}
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. FAMILY & ELDERS PHOTOS — INTERACTIVE SLIDER        */}
      {/* ---------------------------------------------------- */}
      {familyPhotos.length > 0 && (
        <div style={{ marginTop: '20px', width: '100%' }}>
          {/* Family Section Divider Heading */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ height: '1.5px', width: '40px', background: 'linear-gradient(90deg, transparent, #DFB756)' }}></div>
              <Sparkles size={16} style={{ color: '#DFB756' }} />
              <span style={{
                fontSize: '11px',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--color-royal-maroon)',
                fontWeight: 800
              }}>
                {lang === 'ta' ? 'குடும்பமும் பெரியோரின் நல்லாசியும்' : 'FAMILY & ELDERS BLESSINGS'}
              </span>
              <Sparkles size={16} style={{ color: '#DFB756' }} />
              <div style={{ height: '1.5px', width: '40px', background: 'linear-gradient(90deg, #DFB756, transparent)' }}></div>
            </div>

            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.3rem, 4vw, 1.7rem)',
              color: 'var(--color-royal-peacock)',
              fontWeight: 800
            }}>
              {lang === 'ta' ? 'பாசமிகு குடும்ப ஆல்பம்' : 'Cherished Family Memories'}
            </h3>
            <p style={{ fontSize: '12.5px', color: '#6A5844', fontStyle: 'italic', marginTop: '3px' }}>
              {lang === 'ta' ? 'படங்களை வலது-இடமாக நகர்த்திப் பாருங்கள் 👈 👉' : 'Swipe left or right to explore family moments 👈 👉'}
            </p>
          </div>

          {/* Touch-Swipe Slider Component */}
          <FamilyPhotoSlider
            photos={familyPhotos}
            onSelect={setSelectedPhoto}
            lang={lang}
          />
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 4. LIGHTBOX MODAL (FOR BOTH COUPLE & FAMILY PHOTOS)  */}
      {/* ---------------------------------------------------- */}
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
