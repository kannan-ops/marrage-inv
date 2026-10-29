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

  const isTa = lang === 'ta';

  useEffect(() => {
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
      time: isTa ? 'இப்போது' : 'Just now'
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('wedding_wishes_v2', JSON.stringify(updated));

    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#DFB756', '#FFE894', '#A31822', '#FFFFFF', '#083437']
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
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={14} style={{ color: '#DFB756' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#85141C', fontWeight: 800 }}>
            {content.wishesTitle}
          </span>
          <Sparkles size={14} style={{ color: '#DFB756' }} />
        </div>

        {/* Couple Names with Degree */}
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.4rem, 4.8vw, 1.95rem)',
          fontWeight: 800,
          color: '#85141C',
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

        {/* Subtitle Note */}
        <p style={{
          fontFamily: "'Cormorant Garamond', 'Noto Serif Tamil', Georgia, serif",
          fontSize: '15px',
          fontStyle: 'italic',
          color: '#5C4834',
          fontWeight: 600,
          maxWidth: '500px'
        }}>
          {isTa
            ? 'மணமக்களுக்கு உங்கள் இதயப்பூர்வமான வாழ்த்துகளைப் பதிவிடுங்கள் 💍💐'
            : 'Leave a heartfelt wish or blessing for the beautiful couple 💍💐'}
        </p>

        {/* Gold Separator */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '4px' }}>
          <div style={{ height: '1.5px', width: '36px', background: 'linear-gradient(90deg, transparent, #DFB756)' }}></div>
          <Heart size={14} style={{ fill: '#85141C', color: '#DFB756' }} />
          <div style={{ height: '1.5px', width: '36px', background: 'linear-gradient(90deg, #DFB756, transparent)' }}></div>
        </div>
      </div>

      {/* Wishes Form Card */}
      <div style={{
        background: 'linear-gradient(155deg, rgba(255, 253, 248, 0.97) 0%, rgba(252, 245, 230, 0.98) 100%)',
        backdropFilter: 'blur(20px)',
        border: '2px solid rgba(223, 183, 86, 0.75)',
        borderRadius: '30px',
        padding: '28px 22px',
        boxShadow: 'var(--shadow-royal-card)',
        marginBottom: '36px',
        position: 'relative'
      }}>
        <div className="gold-corner-tl"></div>
        <div className="gold-corner-tr"></div>
        <div className="gold-corner-bl"></div>
        <div className="gold-corner-br"></div>

        {/* Tab Selection: Wish | Advice */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '22px'
        }}>
          <div style={{
            display: 'inline-flex',
            gap: '6px',
            padding: '4px',
            background: 'rgba(238, 226, 204, 0.75)',
            border: '1.5px solid rgba(223, 183, 86, 0.5)',
            borderRadius: '9999px'
          }}>
            <button
              type="button"
              onClick={() => setActiveTab('wish')}
              style={{
                padding: '8px 22px',
                borderRadius: '9999px',
                border: 'none',
                background: activeTab === 'wish' ? 'linear-gradient(135deg, #85141C 0%, #5C0B12 100%)' : 'transparent',
                color: activeTab === 'wish' ? '#FFFDF8' : '#5C4834',
                fontSize: '13px',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: activeTab === 'wish' ? '0 2px 10px rgba(133, 20, 28, 0.35)' : 'none'
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
                background: activeTab === 'advice' ? 'linear-gradient(135deg, #85141C 0%, #5C0B12 100%)' : 'transparent',
                color: activeTab === 'advice' ? '#FFFDF8' : '#5C4834',
                fontSize: '13px',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: activeTab === 'advice' ? '0 2px 10px rgba(133, 20, 28, 0.35)' : 'none'
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
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#85141C', marginBottom: '6px', letterSpacing: '0.04em' }}>
              {isTa ? 'உங்கள் பெயர்:' : 'Your Name:'}
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
                  padding: '14px 16px 14px 44px',
                  borderRadius: '16px',
                  border: '1.5px solid rgba(223, 183, 86, 0.65)',
                  backgroundColor: '#FFFFFF',
                  fontSize: '14px',
                  color: '#3A2612',
                  outline: 'none',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.04)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
              />
              <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#DFB756' }} />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#85141C', marginBottom: '6px', letterSpacing: '0.04em' }}>
              {isTa ? 'உங்கள் வாழ்த்துச் செய்தி:' : 'Your Message / Blessings:'}
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
                  padding: '14px 16px 14px 44px',
                  borderRadius: '16px',
                  border: '1.5px solid rgba(223, 183, 86, 0.65)',
                  backgroundColor: '#FFFFFF',
                  fontSize: '14px',
                  color: '#3A2612',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.04)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
              />
              <Edit3 size={18} style={{ position: 'absolute', left: '16px', top: '16px', color: '#DFB756' }} />
            </div>
          </div>

          {successMsg && (
            <div style={{
              padding: '12px',
              borderRadius: '14px',
              background: 'rgba(16, 185, 129, 0.12)',
              color: '#065F46',
              fontSize: '13px',
              fontWeight: 800,
              border: '1.5px solid #10B981',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <Sparkles size={16} />
              <span>
                {isTa ? 'நன்றி! உங்கள் வாழ்த்து சேர்க்கப்பட்டது.' : 'Thank you! Your heartfelt message has been added.'}
              </span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '15px 24px',
              fontSize: '14px',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            <Send size={16} />
            <span>{content.submitWish}</span>
          </button>
        </form>
      </div>

      {/* Filter and Count Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '15px', color: '#85141C', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MessageSquare size={17} style={{ color: '#DFB756' }} />
          <span>{content.wishesCount} ({wishes.length})</span>
        </h3>

        <div style={{ display: 'flex', gap: '6px' }}>
          {['all', 'wish', 'advice'].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              style={{
                padding: '6px 16px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: 800,
                border: '1.5px solid rgba(223, 183, 86, 0.6)',
                background: filter === item ? 'linear-gradient(135deg, #85141C, #5C0B12)' : 'rgba(255, 255, 255, 0.85)',
                color: filter === item ? '#FFFDF8' : '#5C4834',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {item === 'all' ? (isTa ? 'அனைத்தும்' : 'All') : item === 'wish' ? content.tabWish : content.tabAdvice}
            </button>
          ))}
        </div>
      </div>

      {/* Wishes List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredWishes.length === 0 ? (
          <div style={{
            backgroundColor: 'rgba(255, 253, 248, 0.9)',
            border: '1.5px dashed rgba(223, 183, 86, 0.6)',
            borderRadius: '24px',
            padding: '36px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'rgba(223, 183, 86, 0.2)',
              border: '1px solid #DFB756',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#85141C'
            }}>
              <Sparkles size={22} />
            </div>
            <p style={{
              fontSize: '15px',
              fontWeight: 800,
              color: '#85141C',
              fontFamily: "'Playfair Display', Georgia, serif"
            }}>
              {isTa ? 'முதல் வாழ்த்தைப் பதிவிடுங்கள்!' : 'Be the first to leave a wish!'}
            </p>
            <p style={{ fontSize: '13px', color: '#684824', maxWidth: '340px', lineHeight: '1.5' }}>
              {isTa
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
                  background: 'linear-gradient(155deg, #FFFFFF 0%, #FDF9F0 100%)',
                  border: '1.5px solid rgba(223, 183, 86, 0.55)',
                  borderRadius: '20px',
                  padding: '22px 24px',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '1.15rem', color: '#85141C', fontStyle: 'italic', fontWeight: 800 }}>
                    {wish.name}
                  </h4>

                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '11px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: '#FFFDF8',
                    background: 'linear-gradient(135deg, #85141C, #5C0B12)',
                    padding: '3px 12px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(223, 183, 86, 0.5)'
                  }}>
                    <Heart size={11} style={{ fill: '#DFB756', color: '#DFB756' }} />
                    <span>{wish.type === 'wish' ? (isTa ? 'வாழ்த்து' : 'Wish') : (isTa ? 'அறிவுரை' : 'Advice')}</span>
                  </span>
                </div>

                <p style={{ fontSize: '14px', color: '#4A3319', lineHeight: '1.65' }}>
                  {wish.message}
                </p>

                <div style={{ marginTop: '12px', fontSize: '11.5px', color: '#8C5F12', textAlign: 'right', fontWeight: 700 }}>
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
