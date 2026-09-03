import React, { useState } from 'react';
import { weddingData } from './data/weddingData';
import RoyalBackground from './components/RoyalBackground';
import RoyalCoverScreen from './components/RoyalCoverScreen';
import PetalAnimation from './components/PetalAnimation';
import FloatingMusicPlayer from './components/FloatingMusicPlayer';
import LanguageToggle from './components/LanguageToggle';
import MassCelebrationControls from './components/MassCelebrationControls';
import HeroSection from './components/HeroSection';
import RingCeremonyBanner from './components/RingCeremonyBanner';
import CountdownTimer from './components/CountdownTimer';
import RomanticQuote from './components/RomanticQuote';
import EventsSection from './components/EventsSection';
import MomentsGallery from './components/MomentsGallery';
import WishesSection from './components/WishesSection';
import ShareSaveDate from './components/ShareSaveDate';
import BottomGrandFinale from './components/BottomGrandFinale';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('wedding_lang') || 'ta';
  });
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

  const content = weddingData[lang];

  const handleOpenInvitation = () => {
    setIsCoverOpen(true);
    setAutoPlayMusic(true);
  };

  const handleSelectLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('wedding_lang', newLang);
  };

  const handleToggleLang = () => {
    const next = lang === 'ta' ? 'en' : 'ta';
    handleSelectLang(next);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* 1. Interactive Royal Front Cover Screen (Slide/Tap to Open for Mobile & Desktop) */}
      {!isCoverOpen && (
        <RoyalCoverScreen
          onOpen={handleOpenInvitation}
          lang={lang}
          content={content}
        />
      )}

      {/* 2. Grand Royal Background with Garland & Temple Bells Arch */}
      <RoyalBackground />

      {/* 3. Falling Rose Petals Ambient Layer */}
      <PetalAnimation />

      {/* 4. Floating Action Controls (Language, Music & Mass Celebration Dock) */}
      <LanguageToggle currentLang={lang} onToggle={handleToggleLang} onSelectLang={handleSelectLang} />
      <FloatingMusicPlayer autoPlayTrigger={autoPlayMusic} />
      <MassCelebrationControls lang={lang} />

      {/* 5. Main Wedding Content Container */}
      <main className="wedding-container">
        {/* Hero & Professional Names Presentation with Palace Arch */}
        <HeroSection content={content} lang={lang} />

        {/* Ring Ceremony Sacred Highlight Banner */}
        <RingCeremonyBanner content={content} lang={lang} />

        {/* Live Countdown Timer & Interactive Date Reveal */}
        <CountdownTimer
          targetDate={weddingData.dates.targetCountdown}
          content={content}
          lang={lang}
        />

        {/* Romantic Poetry Quote Divider */}
        <RomanticQuote
          englishQuote="Every love story is beautiful, but ours is our favorite."
          tamilQuote={lang === 'ta' ? "அன்பும் காதலும் நிறைந்த எங்கள் புதிய இல்லற வாழ்வின் தொடக்கம்..." : null}
          author="S. Kannan & R. Suruthika"
        />

        {/* Event Schedule: Reception (Nov 10) & Muhurtham (Nov 11) */}
        <EventsSection content={content} lang={lang} />

        {/* Second Romantic Poetry Verse */}
        <RomanticQuote
          englishQuote="Hand in hand, heart to heart, on this day our forever starts."
          tamilQuote={lang === 'ta' ? "உள்ளங்கள் இணைந்து, கரங்கள் கோர்த்து, என்றும் மாறா அன்போடு..." : null}
          author="The Journey of Love"
        />

        {/* Vertical Single-Column Polaroid Moments Gallery */}
        <MomentsGallery content={content} lang={lang} />

        {/* Memory Book & Guest Wishes Wall */}
        <WishesSection
          initialWishes={weddingData.initialWishes}
          content={content}
          lang={lang}
        />

        {/* WhatsApp Share & Save The Date for Mobile */}
        <ShareSaveDate content={content} lang={lang} />

        {/* Grand Finale Dark Peacock Section with Gradient Couple Shot */}
        <BottomGrandFinale lang={lang} content={content} />
      </main>
    </div>
  );
}