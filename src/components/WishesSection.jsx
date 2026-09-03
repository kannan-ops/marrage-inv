import React, { useState, useEffect } from 'react';
import { Heart, MessageSquare, Send, Sparkles, User, Edit3 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WishesSection({ initialWishes = [], content, lang }) {
  const [wishes, setWishes] = useState([]);
  const [activeTab, setActiveTab] = useState('wish');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [filter, setFilter] = useState('all');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    // Clear legacy dummy cache if present
    localStorage.removeItem('wedding_guestbook_wishes');

    const saved = localStorage.getItem('wedding_wishes_v2');
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch (e) {
        setWishes(initialWishes || []);
      }
    } else {
      setWishes(initialWishes || []);
    }
  }, [initialWishes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const newWish = {
      id: `wish_${Date.now()}`,
      name: name.trim(),
      type: activeTab,
      message: message.trim(),
      time: lang === 'ta' ? 'இப்போது' : 'Just now'
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('wedding_wishes_v2', JSON.stringify(updated));

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#0b3536', '#dfb756', '#7a1910', '#fff2b2']
      });
    } catch (e) {
      console.log('Confetti trigger:', e);
    }

    setName('');
    setMessage('');
    setIsSubmitting(false);
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 4000);
  };

  const filteredWishes = filter === 'all' ? wishes : wishes.filter(w => w.type === filter);

  return (
    <section style={{ padding: '36px 0', maxWidth: '640px', margin: '0 auto', width: '100%' }}>
      {/* 2-Line Clean Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        {/* Top Auspicious Tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={14} style={{ color: '#DFB756' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 800 }}>
            {content.wishesTitle}
          </span>
          <Sparkles size={14} style={{ color: '#DFB756' }} />
        </div>

        {/* Line 1: Couple Names with Qualification */}
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.35rem, 4.5vw, 1.85rem)',
          fontWeight: 700,
          color: 'var(--color-royal-peacock)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '8px 12px',
          margin: '4px 0',
          textAlign: 'center'
        }}>
          <span style={{ whiteSpace: 'nowrap' }}>{content.groom.name}, {content.groom.degree}</span>
          <span style={{ color: '#DFB756', fontWeight: 600 }}>&amp;</span>
          <span style={{ whiteSpace: 'nowrap' }}>{content.bride.name}, {content.bride.degree}</span>
        </h2>

        {/* Line 2: Subtitle Note */}
        <p style={{
          fontFamily: "'Cormorant Garamond', 'Noto Serif Tamil', Georgia, serif",
          fontSize: '14.5px',
          fontStyle: 'italic',
          color: '#5C5243',
          fontWeight: 600,
          maxWidth: '480px'
        }}>
          {lang === 'ta'
            ? 'மணமக்களுக்கு உங்கள் இதயப்பூர்வமான வாழ்த்துகளைப் பதிவிடுங்கள் 💍💐'
            : 'Leave a heartfelt wish or advice for the beautiful couple 💍💐'}
        </p>

        {/* Gold Separator */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '4px' }}>
          <div style={{ height: '1.5px', width: '36px', background: 'linear-gradient(90deg, transparent, #DFB756)' }}></div>
          <Heart size={14} style={{ fill: '#7A1910', color: '#7A1910' }} />
          <div style={{ height: '1.5px', width: '36px', background: 'linear-gradient(90deg, #DFB756, transparent)' }}></div>
        </div>
      </div>

      {/* Spacious, Ultra-Clean Wishes Form Card */}
      <div style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FCF8F2 100%)',
        border: '2px solid #DFB756',
        borderRadius: '28px',
        padding: '28px 22px',
        boxShadow: 'var(--shadow-royal-card), var(--shadow-gold-glow)',
        marginBottom: '36px',
        position: 'relative'
      }}>
        {/* Corner Accents */}
        <div className="gold-corner-tl"></div>
        <div className="gold-corner-tr"></div>
        <div className="gold-corner-bl"></div>
        <div className="gold-corner-br"></div>

        {/* Tab Selection: Wish | Advice */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <div style={{
            display: 'inline-flex',
            gap: '6px',
            padding: '4px',
            background: '#F5ECE0',
            border: '1.5px solid #E2D3BE',
            borderRadius: '9999px'
          }}>
            <button
              type="button"
              onClick={() => setActiveTab('wish')}
              style={{
                padding: '8px 22px',
                borderRadius: '9999px',
                border: 'none',
                background: activeTab === 'wish' ? 'linear-gradient(135deg, #0B3536, #0E4446)' : 'transparent',
                color: activeTab === 'wish' ? '#FFFDF4' : '#5C5243',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: activeTab === 'wish' ? '0 2px 8px rgba(11, 53, 54, 0.3)' : 'none'
              }}
            >
              ❤️ {content.tabWish}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('advice')}
              style={{
                padding: '8px 22px',
                borderRadius: '9999px',
                border: 'none',
                background: activeTab === 'advice' ? 'linear-gradient(135deg, #0B3536, #0E4446)' : 'transparent',
                color: activeTab === 'advice' ? '#FFFDF4' : '#5C5243',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: activeTab === 'advice' ? '0 2px 8px rgba(11, 53, 54, 0.3)' : 'none'
              }}
            >
              💡 {content.tabAdvice}
            </button>
          </div>
        </div>

        {/* Input Form Fields */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
          {/* Name Field */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--color-royal-peacock)', marginBottom: '6px', letterSpacing: '0.04em' }}>
              {lang === 'ta' ? 'உங்கள் பெயர்:' : 'Your Name:'}
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={content.namePlaceholder}
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 42px',
                  borderRadius: '14px',
                  border: '1.5px solid #DFB756',
                  backgroundColor: '#FFFDF9',
                  fontSize: '14px',
                  color: '#26211B',
                  outline: 'none',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.03)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
              />
              <User size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#8A5D13' }} />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--color-royal-peacock)', marginBottom: '6px', letterSpacing: '0.04em' }}>
              {lang === 'ta' ? 'உங்கள் வாழ்த்துச் செய்தி:' : 'Your Message / Blessings:'}
            </label>
            <div style={{ position: 'relative' }}>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={content.messagePlaceholder}
                style={{
                  width: '100%',
                  minHeight: '110px',
                  padding: '14px 16px 14px 42px',
                  borderRadius: '14px',
                  border: '1.5px solid #DFB756',
                  backgroundColor: '#FFFDF9',
                  fontSize: '14px',
                  color: '#26211B',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.03)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
              />
              <Edit3 size={18} style={{ position: 'absolute', left: '14px', top: '16px', color: '#8A5D13' }} />
            </div>
          </div>

          {successMsg && (
            <div style={{
              padding: '12px',
              borderRadius: '12px',
              background: '#ecfdf5',
              color: '#065f46',
              fontSize: '13px',
              fontWeight: 700,
              border: '1.5px solid #a7f3d0',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <Sparkles size={16} />
              <span>
                {lang === 'ta' ? 'நன்றி! உங்கள் வாழ்த்து சேர்க்கப்பட்டது.' : 'Thank you! Your heartfelt message has been added.'}
              </span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '15px 24px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, var(--color-royal-peacock) 0%, var(--color-royal-emerald) 100%)',
              color: '#FFFDF4',
              border: '1.5px solid #DFB756',
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 6px 20px rgba(11, 53, 54, 0.35)',
              transition: 'all 0.25s ease'
            }}
          >
            <Send size={16} style={{ color: 'var(--color-gold-light)' }} />
            <span>{content.submitWish}</span>
          </button>
        </form>
      </div>

      {/* Filter and Count Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '18px' }}>
        <h3 style={{ fontSize: '15px', color: 'var(--color-royal-peacock)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MessageSquare size={17} style={{ color: 'var(--color-royal-maroon)' }} />
          <span>{content.wishesCount} ({wishes.length})</span>
        </h3>

        <div style={{ display: 'flex', gap: '6px' }}>
          {['all', 'wish', 'advice'].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              style={{
                padding: '5px 14px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: 700,
                border: '1px solid #DFB756',
                background: filter === item ? 'var(--color-royal-peacock)' : '#fff',
                color: filter === item ? '#fff' : '#5C5243',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {item === 'all' ? (lang === 'ta' ? 'அனைத்தும்' : 'All') : item === 'wish' ? content.tabWish : content.tabAdvice}
            </button>
          ))}
        </div>
      </div>

      {/* Wishes List (Polaroid Note Cards) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredWishes.length === 0 ? (
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1.5px dashed #DFB756',
            borderRadius: '20px',
            padding: '32px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#FCF8F2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#DFB756'
            }}>
              <Sparkles size={22} />
            </div>
            <p style={{
              fontSize: '14.5px',
              fontWeight: 700,
              color: 'var(--color-royal-peacock)',
              fontFamily: "'Playfair Display', Georgia, serif"
            }}>
              {lang === 'ta' ? 'முதல் வாழ்த்தைப் பதிவிடுங்கள்!' : 'Be the first to leave a wish!'}
            </p>
            <p style={{ fontSize: '12.5px', color: '#7A6B58', maxWidth: '340px', lineHeight: '1.5' }}>
              {lang === 'ta'
                ? 'மேலே உள்ள படிவத்தை நிரப்பி மணமக்களுக்கு உங்கள் ஆசிகளை வழங்குங்கள்.'
                : 'Fill out the form above to share your love and blessings with the couple.'}
            </p>
          </div>
        ) : (
          filteredWishes.map((wish) => {
            return (
              <div
                key={wish.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #EADBCE',
                  borderRadius: '18px',
                  padding: '20px 22px',
                  boxShadow: '0 4px 15px rgba(5, 26, 27, 0.06)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-royal-peacock)', fontStyle: 'italic', fontWeight: 700 }}>
                    {wish.name}
                  </h4>

                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '11px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: 'var(--color-royal-maroon)',
                    background: '#FCF2F0',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    border: '1px solid #F3D4CE'
                  }}>
                    <Heart size={11} style={{ fill: 'var(--color-royal-maroon)' }} />
                    <span>{wish.type === 'wish' ? (lang === 'ta' ? 'வாழ்த்து' : 'Wish') : (lang === 'ta' ? 'அறிவுரை' : 'Advice')}</span>
                  </span>
                </div>

                <p style={{ fontSize: '13.5px', color: '#26211B', lineHeight: '1.65' }}>
                  {wish.message}
                </p>

                <div style={{ marginTop: '10px', fontSize: '11px', color: '#998D7D', textAlign: 'right', fontWeight: 600 }}>
                  {wish.time}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
