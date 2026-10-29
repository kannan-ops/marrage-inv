import React from 'react';
import { Globe } from 'lucide-react';

export default function LanguageToggle({ currentLang, onToggle, onSelectLang }) {
  return (
    <div style={{ position: 'fixed', top: '14px', right: '14px', zIndex: 9990 }}>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px',
        backgroundColor: 'rgba(255, 253, 248, 0.95)',
        backdropFilter: 'blur(16px)',
        border: '1.5px solid #DFB756',
        borderRadius: '9999px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15), 0 0 15px rgba(223, 183, 86, 0.35)',
        gap: '2px'
      }}>
        <div style={{ paddingLeft: '8px', paddingRight: '4px', display: 'flex', alignItems: 'center', color: '#85141C' }}>
          <Globe size={15} />
        </div>

        {/* Tamil Button */}
        <button
          type="button"
          onClick={() => onSelectLang ? onSelectLang('ta') : onToggle()}
          style={{
            padding: '6px 14px',
            borderRadius: '9999px',
            border: 'none',
            background: currentLang === 'ta'
              ? 'linear-gradient(135deg, #85141C 0%, #5C0B12 100%)'
              : 'transparent',
            color: currentLang === 'ta' ? '#FFFDF8' : '#684824',
            fontSize: '12px',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            boxShadow: currentLang === 'ta' ? '0 2px 10px rgba(133, 20, 28, 0.4)' : 'none'
          }}
        >
          தமிழ்
        </button>

        {/* English Button */}
        <button
          type="button"
          onClick={() => onSelectLang ? onSelectLang('en') : onToggle()}
          style={{
            padding: '6px 14px',
            borderRadius: '9999px',
            border: 'none',
            background: currentLang === 'en'
              ? 'linear-gradient(135deg, #85141C 0%, #5C0B12 100%)'
              : 'transparent',
            color: currentLang === 'en' ? '#FFFDF8' : '#684824',
            fontSize: '12px',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            boxShadow: currentLang === 'en' ? '0 2px 10px rgba(133, 20, 28, 0.4)' : 'none'
          }}
        >
          English
        </button>
      </div>
    </div>
  );
}
