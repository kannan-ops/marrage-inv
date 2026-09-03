import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function FloatingMusicPlayer({ autoPlayTrigger }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const mediaRef = useRef(null);

  const playAudio = () => {
    const media = mediaRef.current;
    if (!media) return;
    media.volume = 0.85;
    const promise = media.play();
    if (promise !== undefined) {
      promise
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Auto-play waiting for user interaction:", err);
        });
    }
  };

  const pauseAudio = () => {
    const media = mediaRef.current;
    if (!media) return;
    media.pause();
    setIsPlaying(false);
  };

  const toggleMusic = (e) => {
    if (e) e.stopPropagation();
    const media = mediaRef.current;
    if (!media) return;

    if (isPlaying || !media.paused) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  // 1. Initial attempt on load
  useEffect(() => {
    playAudio();

    // 2. Fallback on first touch or click anywhere on the page
    const handleFirstGesture = () => {
      const media = mediaRef.current;
      if (media && media.paused) {
        playAudio();
      }
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };

    window.addEventListener('click', handleFirstGesture, { passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true });

    return () => {
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };
  }, []);

  // 3. Triggered when user opens the cover screen / envelope
  useEffect(() => {
    if (autoPlayTrigger) {
      playAudio();
    }
  }, [autoPlayTrigger]);

  return (
    <>
      {/* Hidden audio element with fallback MP4/MP3 sources */}
      <audio
        ref={mediaRef}
        loop
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/wedding-bgm.mp4" type="video/mp4" />
        <source src="/wedding-bgm.mp4" type="audio/mp4" />
        <source src="/audio/wedding-bgm.mp4" type="video/mp4" />
        <source src="/wedding-bgm.mp3" type="audio/mpeg" />
      </audio>

      <div style={{ position: 'fixed', bottom: '24px', right: '20px', zIndex: 9999 }}>
        <button
          onClick={toggleMusic}
          className={`floating-audio-btn ${isPlaying ? 'playing' : ''}`}
          title={isPlaying ? "Mute Music" : "Play Music"}
          aria-label="Toggle Wedding Music"
        >
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px' }}>
            {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </span>

          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {isPlaying ? (
              <>
                <span className="sound-bars">
                  <span className="bar bar-1"></span>
                  <span className="bar bar-2"></span>
                  <span className="bar bar-3"></span>
                </span>
                <span>BGM</span>
              </>
            ) : (
              <>
                <Music size={13} />
                <span>Music</span>
              </>
            )}
          </span>
        </button>
      </div>
    </>
  );
}
