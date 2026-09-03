import React from 'react';
import { Globe } from 'lucide-react';

export default function LanguageToggle({ currentLang, onToggle }) {
  return (
    <div style={{ position: 'fixed', bottom: '24px', left: '20px', zIndex: 40 }}>
      <button
        onClick={onToggle}
        className="floating-lang-btn"
        aria-label="Toggle Language"
      >
        <Globe size={16} style={{ color: 'var(--color-gold-dark)' }} />
        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
          {currentLang === 'en' ? 'தமிழ்' : 'English'}
        </span>
      </button>
    </div>
  );
}
