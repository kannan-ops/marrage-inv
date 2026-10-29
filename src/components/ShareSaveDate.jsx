import React, { useState } from 'react';
import { Share2, MessageCircle, Copy, Check, Heart, Sparkles } from 'lucide-react';

export default function ShareSaveDate({ content, lang }) {
  const [copied, setCopied] = useState(false);
  const isTa = lang === 'ta';

  const inviteMessage = isTa
    ? `💍 *ROYAL WEDDING INVITATION* 💍\n\n*S. Kannan, B.Sc.* (Software Developer, Elevada Softwares)\n& *R. Suruthika, ECE.*\n\n🗓️ *சுப பிரம்ம முகூர்த்தம்:*\n11 நவம்பர் 2026 புதன்கிழமை (அதிகாலை 5:00 - 6:00 மணி)\n📍 *இடம்:* அருள்மிகு பாலசுப்ரமணிய சுவாமி திருக்கோவில், கபிலர்மலை\n\n🗓️ *வரவேற்பும் விருந்தும்:*\n11 நவம்பர் 2026 (காலை 7:00 மணி முதல்)\n📍 *இடம்:* கண்ணன் இல்லம் (மணமகன் இல்லம்), பரமத்தி வேலூர், நாமக்கல்\n\nதாங்களும் தங்கள் சுற்றமும் நட்பும் சூழ வருகைதந்து மணமக்களை வாழ்த்தியருள அன்புடன் அழைக்கின்றோம்! 🙏\n\n🔗 *அழைப்பிதழைப் பார்க்க:*\n${window.location.href}`
    : `💍 *ROYAL WEDDING INVITATION* 💍\n\n*S. Kannan, B.Sc.* (Software Developer, Elevada Softwares)\n& *R. Suruthika, ECE.*\n\n🗓️ *Subha Brahma Muhurtham:*\nWednesday, 11th November 2026 (5:00 AM – 6:00 AM)\n📍 *Venue:* Arulmigu Balasubramanya Swamy Temple, Kabilarmalai\n\n🗓️ *Reception & Feast:*\nWednesday, 11th November 2026 (7:00 AM Onwards)\n📍 *Venue:* Kannan Home (Groom's Residence), Paramathi Velur, Namakkal\n\nWe cordially invite you with family to shower your sacred blessings! 🙏\n\n🔗 *View Digital Invitation:*\n${window.location.href}`;

  const handleNativeOrWhatsAppShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'S. Kannan & R. Suruthika — Wedding Invitation',
          text: inviteMessage
        });
        return;
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.log('Share error:', err);
        }
      }
    }
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(inviteMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section style={{ padding: '36px 0 20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{
        background: 'linear-gradient(155deg, rgba(255, 253, 248, 0.97) 0%, rgba(252, 245, 230, 0.98) 100%)',
        backdropFilter: 'blur(20px)',
        border: '2px solid rgba(223, 183, 86, 0.75)',
        borderRadius: '30px',
        padding: '32px 22px',
        boxShadow: 'var(--shadow-royal-card)',
        position: 'relative'
      }}>
        <div className="gold-corner-tl"></div>
        <div className="gold-corner-tr"></div>
        <div className="gold-corner-bl"></div>
        <div className="gold-corner-br"></div>

        <div style={{
          width: '56px',
          height: '56px',
          margin: '0 auto 16px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #85141C 0%, #5C0B12 100%)',
          border: '2px solid #DFB756',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFE894',
          boxShadow: '0 8px 22px rgba(133, 20, 28, 0.35)'
        }}>
          <Share2 size={24} />
        </div>

        <h3 style={{ fontSize: '1.55rem', color: '#85141C', fontWeight: 800, marginBottom: '6px' }}>
          {content.shareTitle}
        </h3>
        <p style={{ fontSize: '14px', color: '#5C4834', marginBottom: '24px', maxWidth: '420px', margin: '0 auto 24px' }}>
          {content.shareSubtitle}
        </p>

        {/* Action Buttons for Mobile Sharing */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <button
            onClick={handleNativeOrWhatsAppShare}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '13px 26px',
              borderRadius: '9999px',
              backgroundColor: '#25D366',
              color: '#fff',
              border: 'none',
              fontSize: '13.5px',
              fontWeight: 800,
              letterSpacing: '0.04em',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.35)',
              transition: 'all 0.25s ease'
            }}
          >
            <MessageCircle size={19} />
            <span>{content.whatsappShare}</span>
          </button>

          <button
            onClick={handleCopyLink}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '13px 24px',
              borderRadius: '9999px',
              backgroundColor: '#FFFFFF',
              color: '#85141C',
              border: '1.5px solid #DFB756',
              fontSize: '13.5px',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
              transition: 'all 0.25s ease'
            }}
          >
            {copied ? <Check size={18} style={{ color: '#10B981' }} /> : <Copy size={18} style={{ color: '#85141C' }} />}
            <span>{copied ? content.linkCopied : content.copyLink}</span>
          </button>
        </div>

        {/* Closing Blessing Note */}
        <div style={{ marginTop: '30px', paddingTop: '22px', borderTop: '1px solid rgba(223, 183, 86, 0.35)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
            <Sparkles size={14} style={{ color: '#DFB756' }} />
            <Heart size={14} style={{ fill: '#85141C', color: '#DFB756' }} />
            <Sparkles size={14} style={{ color: '#DFB756' }} />
          </div>
          <p style={{ fontSize: '14.5px', fontStyle: 'italic', color: '#4A3319', lineHeight: '1.6', maxWidth: '480px', margin: '0 auto', fontWeight: 600 }}>
            "{content.weddingBlessing}"
          </p>
          <p style={{ marginTop: '12px', fontSize: '10.5px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#85141C', fontWeight: 800 }}>
            — WITH LOVE &amp; GRATITUDE —
          </p>
        </div>
      </div>
    </section>
  );
}
