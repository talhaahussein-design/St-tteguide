import React, { useState, useEffect, useRef } from 'react';

const KidsPlayer = ({ item, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [rate, setRate] = useState(1); // 1 = normal, 0.8 = slow
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [voices, setVoices] = useState([]);
  
  const synth = window.speechSynthesis;
  const lines = item.script.split('.').map(s => s.trim()).filter(s => s.length > 0);
  const images = item.images || [];
  const utteranceRef = useRef(null);

  const currentImageIndex = images.length > 0 && currentLineIndex !== -1
    ? Math.min(Math.floor(currentLineIndex * images.length / lines.length), images.length - 1)
    : 0;

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices.filter(v => v.lang.startsWith('da')));
    };

    loadVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
    }

    return () => {
      synth.cancel();
    };
  }, [synth]);

  const speakLine = (index) => {
    if (index >= lines.length) {
      setIsPlaying(false);
      setIsFinished(true);
      setProgress(100);
      return;
    }

    setCurrentLineIndex(index);
    setProgress((index / lines.length) * 100);

    const utterance = new SpeechSynthesisUtterance(lines[index] + ".");
    const danishVoice = voices.find(v => v.lang.startsWith('da')) || voices[0];
    
    if (danishVoice) {
      utterance.voice = danishVoice;
    }
    utterance.lang = 'da-DK';
    utterance.rate = rate;

    utterance.onend = () => {
      if (isPlaying) {
        speakLine(index + 1);
      }
    };

    utteranceRef.current = utterance;
    synth.speak(utterance);
  };

  const togglePlay = () => {
    if (isFinished) {
      setIsFinished(false);
      speakLine(0);
      setIsPlaying(true);
      return;
    }

    if (isPlaying) {
      synth.pause();
      setIsPlaying(false);
    } else {
      if (synth.paused) {
        synth.resume();
      } else {
        speakLine(currentLineIndex === -1 ? 0 : currentLineIndex);
      }
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#FFF8F0] z-[70] flex flex-col p-6 animate-soft-fade overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[#FF6B6B]/5 rounded-full animate-breathing -z-10 pointer-events-none"></div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <button 
          onClick={() => {
            synth.cancel();
            onClose();
          }}
          className="text-[#2D3436]/40 hover:text-[#2D3436] flex items-center gap-2 font-black uppercase tracking-[0.2em] text-[10px] transition-all"
        >
          <span className="text-xl">✕</span> Luk
        </button>
        <div className="text-[10px] font-black text-[#FF6B6B] bg-[#FF6B6B]/10 px-4 py-2 rounded-full uppercase tracking-[0.2em]">
          {item.title}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-12 max-w-md mx-auto w-full relative z-10">
        {/* Illustration / Sequential Image */}
        <div className="w-full aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white bg-white flex items-center justify-center relative">
          {images && images.length > 0 ? (
            <img 
              src={`/St-tteguide/images/seq/${images[currentImageIndex]}`}
              alt={item.title}
              className="w-full h-full object-cover animate-soft-fade"
              key={currentImageIndex}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `<span class="text-9xl animate-float-slow">${item.emoji}</span>`;
              }}
            />
          ) : (
            <span className="text-9xl animate-float-slow">{item.emoji}</span>
          )}
        </div>

        {/* Script Display */}
        <div className="w-full min-h-[160px] flex flex-col justify-center px-4">
          {isFinished ? (
            <div className="text-center animate-soft-fade">
              <div className="w-24 h-24 bg-[#FFEAA7] rounded-full flex items-center justify-center text-4xl mx-auto mb-6 animate-star-reward">⭐</div>
              <h3 className="text-4xl font-black text-[#2D3436] mb-3">Fantastisk!</h3>
              <p className="text-slate-400 text-xl font-bold">Du har hørt hele historien.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {lines.map((line, index) => (
                index === currentLineIndex && (
                  <p 
                    key={index}
                    className="text-4xl font-black text-[#2D3436] text-center leading-tight animate-slide-up"
                  >
                    {line}.
                  </p>
                )
              ))}
              {currentLineIndex === -1 && (
                 <p className="text-2xl font-bold text-slate-200 text-center uppercase tracking-[0.3em] animate-pulse">Klar til start...</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white/80 backdrop-blur-2xl -mx-6 -mb-6 p-10 rounded-t-[4rem] border-t border-white space-y-10 relative z-10">
        {/* Progress Bar (Dots style) */}
        <div className="flex justify-center gap-2">
          {lines.map((_, idx) => (
            <div 
              key={idx}
              className={`h-2 rounded-full transition-all duration-700 ${
                idx <= currentLineIndex ? 'w-8 bg-[#FF6B6B]' : 'w-2 bg-slate-100'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center justify-between gap-6">
          {/* Speed Toggle */}
          <button 
            onClick={() => setRate(rate === 1 ? 0.7 : 1)}
            className={`flex-1 h-20 rounded-3xl flex flex-col items-center justify-center transition-all ${rate === 1 ? 'bg-slate-50 text-slate-300' : 'bg-[#4ECDC4] text-white shadow-lg shadow-[#4ECDC4]/20'}`}
          >
            <span className="text-xl font-black">{rate === 1 ? '1x' : '0.7x'}</span>
            <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Fart</span>
          </button>

          {/* Play/Pause */}
          <button 
            onClick={togglePlay}
            className={`w-28 h-28 rounded-full flex items-center justify-center text-4xl shadow-2xl transition-all active:scale-90 ${
              isPlaying 
                ? 'bg-white text-[#FF6B6B] border-4 border-[#FF6B6B]' 
                : 'bg-[#FF6B6B] text-white shadow-[#FF6B6B]/40 animate-slow-pulse'
            }`}
          >
            {isFinished ? '🔄' : (isPlaying ? '⏸︎' : '▶︎')}
          </button>

          {/* Info/Tip */}
          <button 
            className="flex-1 h-20 bg-slate-50 text-slate-300 rounded-3xl flex flex-col items-center justify-center border border-white hover:bg-white transition-all"
            onClick={() => alert(`Tip: ${item.tip}`)}
          >
            <span className="text-2xl mb-1">💡</span>
            <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Råd</span>
          </button>
        </div>

        {isFinished && (
          <button 
            onClick={onClose}
            className="w-full py-6 bg-[#4ECDC4] text-white rounded-[2rem] font-black text-xl shadow-xl shadow-[#4ECDC4]/20 animate-slide-up"
          >
            Færdig - gå tilbage
          </button>
        )}
      </div>
    </div>
  );
};

export default KidsPlayer;
