import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function FloatingMusicPlayer({ autoPlayTrigger }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const oscillatorIntervalRef = useRef(null);

  // Celebratory wedding ragam frequencies (Hz)
  const melodyNotes = [
    261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25,
    440.00, 392.00, 349.23, 329.63, 293.66, 261.63, 329.63, 392.00
  ];

  const playSynthMelody = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      let noteIdx = 0;
      const playNextTone = () => {
        if (!ctx || ctx.state === 'closed') return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        const freq = melodyNotes[noteIdx % melodyNotes.length];
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.55);

        noteIdx++;
      };

      playNextTone();
      oscillatorIntervalRef.current = setInterval(playNextTone, 480);
    } catch (e) {
      console.warn("Audio Context:", e);
    }
  };

  const stopSynthMelody = () => {
    if (oscillatorIntervalRef.current) {
      clearInterval(oscillatorIntervalRef.current);
      oscillatorIntervalRef.current = null;
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopSynthMelody();
      setIsPlaying(false);
    } else {
      playSynthMelody();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (autoPlayTrigger && !isPlaying) {
      toggleMusic();
    }
    return () => {
      stopSynthMelody();
    };
  }, [autoPlayTrigger]);

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '20px', zIndex: 40 }}>
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
  );
}
