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
    <section style={{ padding: '32px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
          <Sparkles size={15} style={{ color: 'var(--color-maroon)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold-dark)', fontWeight: 700 }}>
            {content.eventsTitle}
          </span>
          <Sparkles size={15} style={{ color: 'var(--color-maroon)' }} />
        </div>

        <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: 'var(--color-peacock)', fontWeight: 700 }}>
          {lang === 'ta' ? 'சுப நிகழ்வுகள்' : 'Ceremony Schedule'}
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--color-ink-soft)', marginTop: '4px' }}>
          {content.eventsSubtitle}
        </p>
      </div>

      <div className="events-grid">
        {content.events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="corner-tl"></div>
            <div className="corner-tr"></div>

            <div>
              <span className="event-tag">{event.tag}</span>

              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-peacock)', fontWeight: 700, marginBottom: '12px' }}>
                {event.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '16px 0', fontSize: '13px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Calendar size={16} style={{ color: 'var(--color-maroon)', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontWeight: 600 }}>{event.date}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Clock size={16} style={{ color: 'var(--color-maroon)', marginTop: '2px', flexShrink: 0 }} />
                  <span>{event.time}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={16} style={{ color: 'var(--color-maroon)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--color-peacock)' }}>{event.venue}</strong>
                    <span style={{ color: 'var(--color-ink-soft)', fontSize: '12px' }}>{event.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--color-border-light)' }}>
              <button
                onClick={() => handleOpenMap(event.mapQuery)}
                className="btn-primary"
                style={{ flex: 1 }}
              >
                <Navigation size={14} />
                <span>{content.getDirections}</span>
              </button>

              <button
                onClick={() => handleAddToCalendar(event)}
                className="btn-secondary"
                title="Add to Google Calendar"
              >
                <CalendarPlus size={14} />
                <span>{content.addToCalendar}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
