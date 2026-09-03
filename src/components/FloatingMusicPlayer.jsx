import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function FloatingMusicPlayer({ autoPlayTrigger }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  const getActiveMedia = () => {
    return audioRef.current || videoRef.current;
  };

  const playAudio = () => {
    const audio = audioRef.current;
    const video = videoRef.current;

    if (audio) {
      audio.volume = 0.9;
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If audio tag fails on mp4 format, fallback to video element
          if (video) {
            video.volume = 0.9;
            video.play()
              .then(() => setIsPlaying(true))
              .catch((err) => console.warn("Waiting for user tap to play audio:", err));
          }
        });
    } else if (video) {
      video.volume = 0.9;
      video.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("Waiting for user tap to play audio:", err));
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) audioRef.current.pause();
    if (videoRef.current) videoRef.current.pause();
    setIsPlaying(false);
  };

  const toggleMusic = (e) => {
    if (e) e.stopPropagation();
    if (isPlaying) {
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
      playAudio();
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
      {/* Primary Audio Player */}
      <audio
        ref={audioRef}
        loop
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/wedding-bgm.mp3" type="audio/mpeg" />
        <source src="/wedding-bgm.mp4" type="audio/mp4" />
      </audio>

      {/* Hidden Video Audio Fallback */}
      <video
        ref={videoRef}
        loop
        playsInline
        preload="auto"
        style={{ display: 'none' }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/wedding-bgm.mp4" type="video/mp4" />
        <source src="/audio/wedding-bgm.mp4" type="video/mp4" />
      </video>

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
