import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

export default function FloatingMusicPlayer({ autoPlayTrigger }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConsole, setShowConsole] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const audioRef = useRef(null);

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Autoplay deferred awaiting touch gesture:", err);
        });
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
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

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  // 1. Initial gesture listener
  useEffect(() => {
    playAudio();

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

  // 2. Triggered when user opens the splash screen
  useEffect(() => {
    if (autoPlayTrigger) {
      playAudio();
    }
  }, [autoPlayTrigger]);

  return (
    <>
      {/* Primary Audio Player with Full 4m 33s Idicha Pacharisi Wedding Song */}
      <audio
        ref={audioRef}
        loop
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={getAssetUrl('wedding-bgm.mp4?v=full-song-track')} type="audio/mp4" />
        <source src={getAssetUrl('audio/idicha-pacharisi-full-song.mp4?v=full-song-track')} type="audio/mp4" />
        <source src={getAssetUrl('audio/idicha-pacharisi.mp4?v=full-song-track')} type="audio/mp4" />
        <source src={getAssetUrl('audio/new-wedding-bgm.mp4?v=full-song-track')} type="audio/mp4" />
      </audio>

      {/* Floating Audio Controller */}
      <div
        style={{
          position: 'fixed',
          bottom: '18px',
          right: '16px',
          zIndex: 9990,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '8px'
        }}
      >
        {/* Expanded VIP Music Console Dropup */}
        {showConsole && (
          <div
            style={{
              background: 'linear-gradient(145deg, #FFFDF8 0%, #FAF2E3 100%)',
              border: '2px solid #DFB756',
              borderRadius: '20px',
              padding: '16px 18px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 25px rgba(223, 183, 86, 0.4)',
              width: '280px',
              backdropFilter: 'blur(16px)',
              animation: 'scaleIn 0.25s ease-out'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{
                fontSize: '10.5px',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#85141C'
              }}>
                WEDDING SPECIAL SONG
              </span>
              <button
                onClick={() => setShowConsole(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#85141C',
                  cursor: 'pointer',
                  padding: '2px',
                  fontWeight: 'bold'
                }}
              >
                ✕
              </button>
            </div>

            {/* Track Info Card */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(133, 20, 28, 0.08)',
              borderRadius: '12px',
              padding: '10px 12px',
              border: '1.5px solid rgba(223, 183, 86, 0.5)',
              marginBottom: '12px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #85141C, #DFB756)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(133, 20, 28, 0.3)'
              }}>
                <Music size={15} />
              </div>
              <div style={{ overflow: 'hidden', flex: 1 }}>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 900,
                  color: '#85141C',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  இடிச்ச பச்சரிசி • Full Song (4m 33s)
                </div>
                <div style={{ fontSize: '10px', color: '#684824', fontWeight: 600 }}>
                  Kannan &amp; Suruthika Wedding Song
                </div>
              </div>
            </div>

            {/* Volume Control Slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Volume2 size={13} style={{ color: '#85141C' }} />
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                style={{
                  flex: 1,
                  accentColor: '#85141C',
                  height: '4px',
                  borderRadius: '2px',
                  cursor: 'pointer'
                }}
              />
              <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#85141C', minWidth: '28px', textAlign: 'right' }}>
                {Math.round(volume * 100)}%
              </span>
            </div>

            {/* Quick Play/Pause Action */}
            <button
              onClick={toggleMusic}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '9px 12px',
                borderRadius: '10px',
                border: '1.5px solid #DFB756',
                background: isPlaying ? 'linear-gradient(135deg, #85141C, #5C0B12)' : 'linear-gradient(135deg, #DFB756, #AA771C)',
                color: '#FFFDF8',
                fontSize: '11.5px',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            >
              {isPlaying ? <><Pause size={13} /> Pause Song</> : <><Play size={13} /> Play Idicha Pacharisi Song</>}
            </button>
          </div>
        )}

        {/* Main Floating Capsule Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button
            onClick={() => setShowConsole(!showConsole)}
            title="Music Settings"
            style={{
              width: '28px',
              height: '36px',
              borderRadius: '12px 0 0 12px',
              background: 'linear-gradient(135deg, #85141C 0%, #5C0B12 100%)',
              border: '1.5px solid #DFB756',
              borderRight: 'none',
              color: '#FFE894',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)'
            }}
          >
            {showConsole ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
          </button>

          <button
            onClick={toggleMusic}
            className={`floating-audio-btn ${isPlaying ? 'playing' : ''}`}
            title={isPlaying ? "Mute Song" : "Play Idicha Pacharisi Full Song"}
            aria-label="Toggle Wedding Song"
            style={{
              padding: '8px 18px',
              fontSize: '12px',
              background: 'linear-gradient(135deg, #85141C 0%, #5E0C12 100%)',
              border: '1.5px solid #DFB756',
              borderRadius: '0 9999px 9999px 0',
              color: '#FFFDF8',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45), 0 0 20px rgba(223, 183, 86, 0.45)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '18px', color: '#FFE894' }}>
              {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </span>

            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, letterSpacing: '0.05em' }}>
              {isPlaying ? (
                <>
                  <span className="sound-bars">
                    <span className="bar bar-1"></span>
                    <span className="bar bar-2"></span>
                    <span className="bar bar-3"></span>
                  </span>
                  <span style={{ color: '#FFE894' }}>இடிச்ச பச்சரிசி ON</span>
                </>
              ) : (
                <>
                  <Music size={13} style={{ color: '#FFE894' }} />
                  <span>PLAY SONG</span>
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
