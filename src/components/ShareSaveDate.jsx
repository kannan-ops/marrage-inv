import React, { useState } from 'react';
import { Share2, MessageCircle, Copy, Check, Heart, Sparkles, Send } from 'lucide-react';

export default function ShareSaveDate({ content, lang }) {
  const [copied, setCopied] = useState(false);

  const inviteMessage = lang === 'ta'
    ? `💐 *ஸ்ரீ முருகனருள் முன்னிற்க* 💐\n💍 *திருமண அழைப்பிதழ்* 💍\n\n*S. Kannan, B.Sc.* & *R. Suruthika, D.M.E.*\n\n🗓️ *வரவேற்பு:* 10 நவம்பர் 2026 (மாலை 6:30 முதல்) - மாப்பிள்ளை இல்லம்\n🗓️ *சுப முகூர்த்தம்:* 11 நவம்பர் 2026 (காலை 9:00 - 10:30) - அருள்மிகு முருகன் திருக்கோவில், கபிலர்மலை\n\nதாங்களும் தங்கள் குடும்பத்தாரும் வருகை தந்து மணமக்களை வாழ்த்தி அருள வேண்டுகிறோம்! 🙏\n\n🔗 *அழைப்பிதழைப் பார்க்க:* ${window.location.href}`
    : `💐 *Wedding Invitation* 💍✨\n\n*S. Kannan, B.Sc.* & *R. Suruthika, D.M.E.*\n\n🗓️ *Reception:* 10th November 2026 (6:30 PM Onwards) - Groom's Residence\n🗓️ *Muhurtham:* 11th November 2026 (9:00 AM - 10:30 AM) - Arulmigu Murugan Temple, Kabilarmalai\n\nJoin us to celebrate our sacred union and shower your blessings!\n\n🔗 *View Digital Invitation:* ${window.location.href}`;

  const handleNativeOrWhatsAppShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'S. Kannan & R. Suruthika — Wedding Invitation',
          text: inviteMessage,
          url: window.location.href
        });
        return;
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.log('Share error:', err);
        }
      }
    }
    // Fallback directly to WhatsApp
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
        background: 'linear-gradient(180deg, #FFFDF8 0%, #FAF3E5 100%)',
        border: '2px solid #DFB756',
        borderRadius: '28px',
        padding: '32px 20px',
        boxShadow: 'var(--shadow-royal-card), var(--shadow-gold-glow)',
        position: 'relative'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          margin: '0 auto 12px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #DFB756, #AA771C)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFF',
          boxShadow: '0 4px 15px rgba(223, 183, 86, 0.4)'
        }}>
          <Share2 size={22} />
        </div>

        <h3 style={{ fontSize: '1.45rem', color: 'var(--color-royal-peacock)', fontWeight: 800, marginBottom: '6px' }}>
          {content.shareTitle}
        </h3>
        <p style={{ fontSize: '13px', color: '#5C5243', marginBottom: '22px', maxWidth: '400px', margin: '0 auto 22px' }}>
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
              padding: '13px 24px',
              borderRadius: '9999px',
              backgroundColor: '#25D366',
              color: '#fff',
              border: 'none',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '0.04em',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)',
              transition: 'all 0.25s ease'
            }}
          >
            <MessageCircle size={18} />
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
              backgroundColor: '#ffffff',
              color: 'var(--color-royal-peacock)',
              border: '1.5px solid #DFB756',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              transition: 'all 0.25s ease'
            }}
          >
            {copied ? <Check size={17} style={{ color: '#059669' }} /> : <Copy size={17} />}
            <span>{copied ? content.linkCopied : content.copyLink}</span>
          </button>
        </div>

        {/* Closing Blessing Note */}
        <div style={{ marginTop: '30px', paddingTop: '22px', borderTop: '1px solid #E8DAC4' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
            <Sparkles size={14} style={{ color: '#DFB756' }} />
            <Heart size={14} style={{ fill: '#7A1910', color: '#7A1910' }} />
            <Sparkles size={14} style={{ color: '#DFB756' }} />
          </div>
          <p style={{ fontSize: '13.5px', fontStyle: 'italic', color: '#4E4334', lineHeight: '1.5' }}>
            "{content.weddingBlessing}"
          </p>
          <p style={{ marginTop: '10px', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8A7B69', fontWeight: 700 }}>
            — WITH LOVE &amp; GRATITUDE —
          </p>
        </div>
      </div>
    </section>
  );
}
