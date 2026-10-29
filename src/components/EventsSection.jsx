import React from 'react';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus, Sparkles } from 'lucide-react';

export default function EventsSection({ content, lang }) {
  const isTa = lang === 'ta';

  const handleAddToCalendar = (event) => {
    const startTime = event.id === 'reception' ? '20261111T070000' : '20261111T050000';
    const endTime = event.id === 'reception' ? '20261111T140000' : '20261111T070000';
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(`Wedding Celebration: ${event.title} at ${event.venue}`);
    const location = encodeURIComponent(`${event.venue}, ${event.address}`);

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(gcalUrl, '_blank');
  };

  const handleOpenMap = (event) => {
    if (event.mapUrl) {
      window.open(event.mapUrl, '_blank');
      return;
    }
    const query = event.mapQuery || event.venue;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <section style={{ padding: '36px 0 20px', maxWidth: '720px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Sparkles size={15} style={{ color: '#DFB756' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#7A1910', fontWeight: 800 }}>
            {content.eventsTitle}
          </span>
          <Sparkles size={15} style={{ color: '#DFB756' }} />
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.9rem, 5.2vw, 2.6rem)',
          color: '#7A1910',
          fontWeight: 800
        }}>
          {isTa ? 'சுப நிகழ்வுகள்' : 'Ceremony Schedule'}
        </h2>
        <p style={{ fontSize: '14px', color: '#5C4834', marginTop: '6px' }}>
          {content.eventsSubtitle}
        </p>
      </div>

      <div className="events-grid" style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
        {content.events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="gold-corner-tl"></div>
            <div className="gold-corner-tr"></div>
            <div className="gold-corner-bl"></div>
            <div className="gold-corner-br"></div>

            <div>
              <span className="event-tag">
                {event.tag}
              </span>

              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.4rem, 4.2vw, 1.85rem)',
                color: '#7A1910',
                fontWeight: 800,
                marginBottom: '16px'
              }}>
                {event.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '18px 0', fontSize: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Calendar size={18} style={{ color: '#7A1910', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontWeight: 800, color: '#2D2319' }}>{event.date}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Clock size={18} style={{ color: '#7A1910', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontWeight: 700, color: '#7A1910' }}>{event.time}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <MapPin size={18} style={{ color: '#7A1910', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', color: '#2D2319', fontSize: '15px', fontWeight: 800 }}>{event.venue}</strong>
                    <span style={{ color: '#5C4834', fontSize: '13px', lineHeight: '1.5', display: 'block', marginTop: '2px' }}>{event.address}</span>
                  </div>
                </div>

                {/* Auspicious Astrology Confluence for Muhurtham */}
                {event.id === 'muhurtham' && (
                  <div style={{
                    marginTop: '4px',
                    padding: '10px 16px',
                    background: '#FFF3DB',
                    borderRadius: '14px',
                    border: '1px solid #DFB756',
                    fontSize: '12.5px',
                    color: '#7A1910',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}>
                    <Sparkles size={16} style={{ color: '#DFB756', flexShrink: 0 }} />
                    <span>{isTa ? 'அனுஷம் நட்சத்திரம் • துவிதியை திதி • சித்தயோகம் கூடிய சுபயோக சுபதினம்' : 'Anusham Star • Thvithiyai Thithi • Siddhayogam Confluence'}</span>
                  </div>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '20px', paddingTop: '18px', borderTop: '1px solid rgba(223, 183, 86, 0.4)' }}>
              <button
                onClick={() => handleOpenMap(event)}
                className="btn-primary"
                style={{ flex: '1 1 140px' }}
              >
                <Navigation size={16} />
                <span>{content.getDirections}</span>
              </button>

              <button
                onClick={() => handleAddToCalendar(event)}
                className="btn-secondary"
                title="Add to Google Calendar"
                style={{ flex: '1 1 140px' }}
              >
                <CalendarPlus size={16} style={{ color: '#7A1910' }} />
                <span>{content.addToCalendar}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
