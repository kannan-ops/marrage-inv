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
        backdropFilter: 'blur(12px)',
        border: '1.5px solid #DFB756',
        borderRadius: '9999px',
        boxShadow: '0 8px 25px rgba(5, 26, 27, 0.18), var(--shadow-gold-glow)',
        gap: '2px'
      }}>
        <div style={{ paddingLeft: '8px', paddingRight: '4px', display: 'flex', alignItems: 'center', color: '#8A5D13' }}>
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
              ? 'linear-gradient(135deg, var(--color-royal-peacock) 0%, var(--color-royal-emerald) 100%)'
              : 'transparent',
            color: currentLang === 'ta' ? '#FFFDF4' : '#5C5243',
            fontSize: '12px',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            boxShadow: currentLang === 'ta' ? '0 2px 8px rgba(11, 53, 54, 0.35)' : 'none'
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
              ? 'linear-gradient(135deg, var(--color-royal-peacock) 0%, var(--color-royal-emerald) 100%)'
              : 'transparent',
            color: currentLang === 'en' ? '#FFFDF4' : '#5C5243',
            fontSize: '12px',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            boxShadow: currentLang === 'en' ? '0 2px 8px rgba(11, 53, 54, 0.35)' : 'none'
          }}
        >
          English
        </button>
      </div>
    </div>
  );
}
