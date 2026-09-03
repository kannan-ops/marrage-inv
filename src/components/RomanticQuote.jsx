import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function RomanticQuote({ englishQuote, tamilQuote, author }) {
  return (
    <div className="romantic-quote-banner">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '6px' }}>
        <Sparkles size={14} style={{ color: 'var(--color-gold)' }} />
        <Heart size={14} style={{ fill: 'var(--color-maroon)', color: 'var(--color-maroon)' }} />
        <Sparkles size={14} style={{ color: 'var(--color-gold)' }} />
      </div>

      <p className="quote-script">
        "{englishQuote}"
      </p>

      {tamilQuote && (
        <p style={{ fontSize: '13px', color: 'var(--color-ink-soft)', fontStyle: 'italic', marginTop: '6px', lineHeight: '1.5' }}>
          {tamilQuote}
        </p>
      )}

      {author && (
        <p className="quote-subtext">
          — {author} —
        </p>
      )}
    </div>
  );
}
