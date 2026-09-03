import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function CountdownTimer({ targetDate, content }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date("2026-11-11T09:00:00") - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: content.days, value: timeLeft.days },
    { label: content.hours, value: timeLeft.hours },
    { label: content.minutes, value: timeLeft.minutes },
    { label: content.seconds, value: timeLeft.seconds }
  ];

  return (
    <section style={{ padding: '24px 0' }}>
      <div className="countdown-box">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
          <Clock size={16} style={{ color: 'var(--color-maroon)' }} />
          <h2 style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 700 }}>
            {content.countdownTitle}
          </h2>
        </div>

        <div className="countdown-grid">
          {units.map((unit, index) => (
            <div key={index} className="countdown-item">
              <span className="countdown-val">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="countdown-lbl">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
