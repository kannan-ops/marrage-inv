import React from 'react';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus, Sparkles } from 'lucide-react';

export default function EventsSection({ content, lang }) {
  const handleAddToCalendar = (event) => {
    const startTime = event.id === 'reception' ? '20261110T183000' : '20261111T090000';
    const endTime = event.id === 'reception' ? '20261110T220000' : '20261111T110000';
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(`Wedding Celebration: ${event.title} at ${event.venue}`);
    const location = encodeURIComponent(`${event.venue}, ${event.address}`);

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(gcalUrl, '_blank');
  };

  const handleOpenMap = (query) => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <section style={{ padding: '36px 0 20px', maxWidth: '720px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
          <Sparkles size={15} style={{ color: 'var(--color-royal-maroon)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-royal-maroon)', fontWeight: 800 }}>
            {content.eventsTitle}
          </span>
          <Sparkles size={15} style={{ color: 'var(--color-royal-maroon)' }} />
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
          color: 'var(--color-royal-peacock)',
          fontWeight: 800
        }}>
          {lang === 'ta' ? 'சுப நிகழ்வுகள்' : 'Ceremony Schedule'}
        </h2>
        <p style={{ fontSize: '13.5px', color: '#5C4E3C', marginTop: '4px' }}>
          {content.eventsSubtitle}
        </p>
      </div>

      <div className="events-grid" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
        {content.events.map((event) => (
          <div key={event.id} className="event-card" style={{
            background: 'linear-gradient(180deg, #FFFDF9 0%, #FAF2E3 100%)',
            border: '2px solid #DFB756',
            borderRadius: '28px',
            padding: '28px 24px',
            boxShadow: 'var(--shadow-royal-card), var(--shadow-gold-glow)',
            position: 'relative'
          }}>
            <div className="gold-corner-tl"></div>
            <div className="gold-corner-tr"></div>
            <div className="gold-corner-bl"></div>
            <div className="gold-corner-br"></div>

            <div>
              <span className="event-tag" style={{
                background: 'linear-gradient(135deg, #0B3536 0%, #0E4446 100%)',
                color: '#FFF2B2',
                border: '1px solid #DFB756',
                padding: '4px 14px',
                borderRadius: '9999px',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '10px'
              }}>
                {event.tag}
              </span>

              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.35rem, 4vw, 1.75rem)',
                color: 'var(--color-royal-peacock)',
                fontWeight: 800,
                marginBottom: '14px'
              }}>
                {event.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '18px 0', fontSize: '13.5px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Calendar size={18} style={{ color: '#7A1910', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontWeight: 700, color: 'var(--color-royal-peacock)' }}>{event.date}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Clock size={18} style={{ color: '#7A1910', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: '#4A3B2C' }}>{event.time}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <MapPin size={18} style={{ color: '#7A1910', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-royal-peacock)', fontSize: '14.5px', fontWeight: 800 }}>{event.venue}</strong>
                    <span style={{ color: '#6A5844', fontSize: '12.5px' }}>{event.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '18px', paddingTop: '16px', borderTop: '1px solid rgba(223, 183, 86, 0.4)' }}>
              <button
                onClick={() => handleOpenMap(event.mapQuery)}
                className="btn-primary"
                style={{ flex: '1 1 140px', fontWeight: 800 }}
              >
                <Navigation size={15} />
                <span>{content.getDirections}</span>
              </button>

              <button
                onClick={() => handleAddToCalendar(event)}
                className="btn-secondary"
                title="Add to Google Calendar"
                style={{ flex: '1 1 140px', fontWeight: 800 }}
              >
                <CalendarPlus size={15} />
                <span>{content.addToCalendar}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
