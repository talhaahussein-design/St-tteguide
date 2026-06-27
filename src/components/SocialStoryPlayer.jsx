import React, { useState, useEffect, useRef } from 'react';

const SocialStoryPlayer = ({ story, onBack, settings }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [helpChoices, setHelpChoices] = useState(() => {
    const saved = localStorage.getItem('social_stories_help');
    return saved ? JSON.parse(saved) : [];
  });
  
  const voices = useRef([]);
  const synth = window.speechSynthesis;

  useEffect(() => {
    const loadVoices = () => {
      voices.current = synth.getVoices().filter(v => v.lang.startsWith('da'));
    };
    loadVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = loadVoices;
    }
    return () => synth.cancel();
  }, [synth]);

  useEffect(() => {
    localStorage.setItem('social_stories_help', JSON.stringify(helpChoices));
  }, [helpChoices]);

  const speak = (text) => {
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const danishVoice = voices.current.find(v => v.lang.startsWith('da')) || voices.current[0];
    if (danishVoice) utterance.voice = danishVoice;
    utterance.lang = 'da-DK';
    utterance.rate = settings.sensoryMode ? 0.5 : 0.8;
    synth.speak(utterance);
  };

  const handleNext = () => {
    if (currentPage < story.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setIsFinished(true);
      const completedStories = JSON.parse(localStorage.getItem('completed_stories') || '{}');
      completedStories[story.id] = 3;
      localStorage.setItem('completed_stories', JSON.stringify(completedStories));
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleHelp = (helpId) => {
    setHelpChoices(prev => 
      prev.includes(helpId) ? prev.filter(h => h !== helpId) : [...prev, helpId]
    );
  };

  const helpItems = [
    { id: 'headphones', icon: '🎧', label: 'Høretelefoner' },
    { id: 'teddy', icon: '🧸', label: 'Min bamse' },
    { id: 'water', icon: '💧', label: 'Drikke vand' },
    { id: 'parents', icon: '🤝', label: 'Mor eller far' },
    { id: 'break', icon: '🪑', label: 'Pause' },
  ];

  if (isFinished) {
    return (
      <div className="fixed inset-0 bg-[#FFF8F0] z-[100] flex flex-col items-center justify-center p-12 text-center animate-soft-fade">
        <div className="w-64 h-64 bg-white rounded-full shadow-2xl flex items-center justify-center text-9xl animate-star-reward mb-12 border-8 border-[#FFEAA7]">
          ⭐
        </div>
        <h2 className="text-5xl font-black text-[#2D3436] mb-6 tracking-tight">Fantastisk!</h2>
        <p className="text-slate-400 text-2xl font-bold mb-12 max-w-[300px]">Du har læst hele historien og lært noget nyt.</p>
        
        <button 
          onClick={onBack}
          className="w-full max-w-xs py-8 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white rounded-[2.5rem] font-black text-2xl shadow-xl hover:shadow-2xl transition-all active:scale-95 animate-slow-pulse"
        >
          Se flere historier
        </button>
      </div>
    );
  }

  const page = story.pages[currentPage];

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col max-w-md mx-auto overflow-hidden animate-soft-fade">
      {/* Navigation Header */}
      <div className="p-8 flex justify-between items-center border-b border-slate-50">
        <button onClick={onBack} className="w-14 h-14 flex items-center justify-center bg-[#FFF8F0] rounded-2xl text-[#2D3436] shadow-sm active:scale-95 transition-all">
          <span className="text-3xl font-black">✕</span>
        </button>
        <div className="flex gap-2">
          {story.pages.map((_, i) => (
            <div 
              key={i} 
              className={`w-3 h-3 rounded-full transition-all duration-1000 ${i <= currentPage ? 'bg-[#FF6B6B] scale-110 shadow-sm' : 'bg-slate-100'}`}
            ></div>
          ))}
        </div>
        <div className="w-14 h-14 flex items-center justify-center text-slate-300 font-black text-lg">
          {currentPage + 1}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center p-8 overflow-y-auto">
        {/* Large Image (60% equivalent) */}
        <div className="w-full aspect-[4/5] bg-[#FFF8F0] rounded-[4rem] flex items-center justify-center text-[10rem] shadow-inner border-4 border-white relative overflow-hidden group transition-all duration-1000 mb-10">
          {page.image ? (
            <img src={page.image} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="animate-float-slow group-hover:scale-110 transition-transform duration-1000">
               {story.emoji || '📖'}
            </div>
          )}
        </div>

        {/* Large Text Area */}
        <div className="min-h-[120px] text-center w-full px-4 mb-8 flex items-center justify-center">
          {!settings.nonVerbal && (
            <p className="text-4xl font-black text-[#2D3436] leading-[1.15] tracking-tight">
              {page.text}
            </p>
          )}
        </div>

        {/* Breathing Circle Helper */}
        <div className="flex items-center gap-4 mb-10 p-6 bg-[#FFF8F0] rounded-[2.5rem] border border-white shadow-sm w-full">
          <div className="w-16 h-16 bg-[#4ECDC4]/20 rounded-full animate-breathing flex items-center justify-center">
            <div className="w-10 h-10 bg-white rounded-full shadow-inner"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-[#4ECDC4] uppercase tracking-widest">Træk vejret</span>
            <span className="text-sm font-bold text-slate-500">Tag det helt roligt</span>
          </div>
        </div>

        {/* Speaker Button */}
        <button 
          onClick={() => speak(page.text)}
          className="w-32 h-32 bg-[#4ECDC4] text-white rounded-full flex flex-col items-center justify-center shadow-2xl active:scale-90 transition-all hover:bg-[#45B7D1] animate-slow-pulse group"
        >
          <span className="text-6xl group-active:scale-125 transition-transform">🔊</span>
          <span className="text-[10px] font-black uppercase tracking-widest mt-2 opacity-60">Lyt nu</span>
        </button>

        {/* Help Choices */}
        <div className="mt-12 w-full">
           <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-widest mb-6">Det hjælper mig lige nu</p>
           <div className="flex flex-wrap justify-center gap-3">
             {helpItems.map(item => (
               <button
                key={item.id}
                onClick={() => toggleHelp(item.id)}
                className={`px-5 py-3 rounded-2xl text-sm font-black transition-all duration-700 border-2 ${
                  helpChoices.includes(item.id) 
                    ? 'bg-[#2D3436] text-white border-[#2D3436] shadow-lg scale-105' 
                    : 'bg-white text-slate-300 border-slate-100 opacity-60'
                }`}
               >
                 {item.icon} {item.label}
               </button>
             ))}
           </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="p-8 bg-[#FFF8F0]/80 backdrop-blur-md flex gap-6 border-t border-white shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
        <button 
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="w-20 h-20 flex items-center justify-center bg-white text-[#2D3436] rounded-[2rem] shadow-sm disabled:opacity-20 transition-all active:scale-95"
        >
          <span className="text-3xl font-black">←</span>
        </button>
        <button 
          onClick={handleNext}
          className="flex-1 h-20 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white rounded-[2rem] font-black text-xl shadow-xl shadow-[#FF6B6B]/20 transition-all active:scale-95 animate-slow-pulse duration-500"
        >
          {currentPage === story.pages.length - 1 ? 'Jeg er færdig! ⭐' : 'Næste side →'}
        </button>
      </div>
    </div>
  );
};

export default SocialStoryPlayer;
