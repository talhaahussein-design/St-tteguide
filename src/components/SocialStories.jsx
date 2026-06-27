import React, { useState, useEffect } from 'react';
import SocialStoryPlayer from './SocialStoryPlayer';

export const SocialStories = ({ content, onBack }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [activeStory, setActiveStory] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('social_stories_settings');
    return saved ? JSON.parse(saved) : {
      nonVerbal: false,
      sensoryMode: false
    };
  });

  const [completedStories, setCompletedStories] = useState(() => {
    const saved = localStorage.getItem('completed_stories');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('social_stories_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('completed_stories');
      if (saved) setCompletedStories(JSON.parse(saved));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const refreshCompleted = () => {
    const saved = localStorage.getItem('completed_stories');
    if (saved) setCompletedStories(JSON.parse(saved));
  };

  if (activeStory) {
    return (
      <SocialStoryPlayer 
        story={activeStory} 
        settings={settings}
        onBack={() => {
          setActiveStory(null);
          refreshCompleted();
        }} 
      />
    );
  }

  const renderSettings = () => (
    <div className="fixed inset-0 bg-black/20 z-[90] flex items-center justify-center p-6 backdrop-blur-md animate-soft-fade">
      <div className="bg-white/95 backdrop-blur-2xl w-full max-w-xs rounded-[3rem] p-10 shadow-2xl border border-white animate-slide-up">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl font-black text-[#2D3436] tracking-tight">Indstillinger</h3>
          <button onClick={() => setShowSettings(false)} className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-full text-slate-400 hover:text-slate-600 transition-colors">✕</button>
        </div>

        <div className="space-y-10">
          <div className="flex items-center justify-between group">
            <div className="flex flex-col">
              <span className="font-black text-[#2D3436] text-lg">Non-verbal 🧏</span>
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-1">Skjul tekst</span>
            </div>
            <button
              onClick={() => setSettings({...settings, nonVerbal: !settings.nonVerbal})}
              className={`w-14 h-8 rounded-full transition-all relative border-2 ${settings.nonVerbal ? 'bg-[#FF6B6B] border-[#FF6B6B]' : 'bg-slate-100 border-slate-200'}`}
            >
              <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${settings.nonVerbal ? 'left-6.5' : 'left-0.5'}`}></div>
            </button>
          </div>

          <div className="flex items-center justify-between group">
            <div className="flex flex-col">
              <span className="font-black text-[#2D3436] text-lg">Sansevenlig 🧘</span>
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-1">Langsom tale</span>
            </div>
            <button
              onClick={() => setSettings({...settings, sensoryMode: !settings.sensoryMode})}
              className={`w-14 h-8 rounded-full transition-all relative border-2 ${settings.sensoryMode ? 'bg-[#4ECDC4] border-[#4ECDC4]' : 'bg-slate-100 border-slate-200'}`}
            >
              <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${settings.sensoryMode ? 'left-6.5' : 'left-0.5'}`}></div>
            </button>
          </div>
        </div>

        <button 
          onClick={() => setShowSettings(false)}
          className="w-full mt-12 py-5 bg-[#2D3436] text-white rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-[10px] shadow-xl active:scale-95 transition-all duration-300"
        >
          Gem og luk
        </button>
      </div>
    </div>
  );

  if (selectedCategoryId) {
    const category = content.categories.find(c => c.id === selectedCategoryId);
    return (
      <section className="space-y-8 animate-soft-fade pb-20">
        <button 
          onClick={() => setSelectedCategoryId(null)}
          className="flex items-center text-[#2D3436] font-black gap-2 group bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl w-fit hover:bg-white transition-all shadow-sm border border-white active:scale-95"
        >
          <span className="text-xl transition-transform group-hover:-translate-x-1 leading-none">←</span> 
          <span className="text-xs uppercase tracking-[0.2em]">Tilbage</span>
        </button>

        <div className="px-2 space-y-2">
          <h2 className="text-4xl font-black text-[#2D3436] leading-[1.1] tracking-tight">{category.title}</h2>
          <p className="text-slate-300 font-black text-[10px] uppercase tracking-[0.3em]">Vælg en historie</p>
        </div>

        <div className="grid gap-4">
          {category.stories.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setActiveStory({...story, emoji: category.title.split(' ')[0]})}
              className="w-full bg-white p-8 rounded-[3rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-white hover:border-[#FF6B6B]/20 transition-all duration-500 text-left flex justify-between items-center group active:scale-[0.98] animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex-1 pr-4">
                <h3 className="text-xl font-black text-[#2D3436] group-hover:text-[#FF6B6B] transition-colors duration-500">{story.title}</h3>
                <div className="flex gap-2 mt-3">
                  {[1, 2, 3].map(i => (
                    <span key={i} className={`text-sm transition-all duration-700 ${completedStories[story.id] >= i ? 'opacity-100 scale-110' : 'opacity-10 grayscale'}`}>⭐</span>
                  ))}
                </div>
              </div>
              <div className="w-14 h-14 bg-slate-50 text-slate-200 rounded-[1.2rem] flex items-center justify-center text-2xl group-hover:bg-[#FF6B6B] group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                ▶️
              </div>
            </button>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-12 animate-soft-fade pb-20">
      <div className="flex justify-between items-center px-2">
        <button 
          onClick={onBack}
          className="flex items-center text-[#2D3436] font-black gap-2 group bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl w-fit hover:bg-white transition-all shadow-sm border border-white active:scale-95"
        >
          <span className="text-xl transition-transform group-hover:-translate-x-1 leading-none">←</span> 
          <span className="text-xs uppercase tracking-[0.2em]">Hovedmenu</span>
        </button>
        <button 
          onClick={() => setShowSettings(true)}
          className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-sm text-2xl border border-white hover:rotate-90 transition-all duration-1000 active:scale-90"
        >
          ⚙️
        </button>
      </div>

      <div className="px-2 space-y-4 text-center">
        <div className="inline-block px-4 py-1.5 bg-[#FF6B6B]/10 text-[#FF6B6B] rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4">
          Social læring
        </div>
        <h2 className="text-5xl font-black text-[#2D3436] leading-[0.95] tracking-tighter">Sociale Historier</h2>
        <p className="text-slate-400 text-xl font-bold opacity-80 leading-relaxed max-w-[280px] mx-auto">Lær om hverdagen gennem små historier med billeder og lyd.</p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {content.categories.map((cat, idx) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategoryId(cat.id)}
            className="bg-white p-8 py-12 rounded-[4rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-white hover:border-[#FF6B6B]/20 transition-all duration-500 flex flex-col items-center text-center group active:scale-[0.98]"
          >
            <div className="w-20 h-20 bg-[#FFF8F0] rounded-[2rem] flex items-center justify-center text-5xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner border border-white">
              <span className="animate-float-slow" style={{ animationDelay: `${idx * 0.2}s` }}>
                {cat.title.split(' ')[0]}
              </span>
            </div>
            <h3 className="font-black text-[#2D3436] text-[10px] uppercase tracking-[0.2em] leading-tight group-hover:text-[#FF6B6B] transition-colors">{cat.title.split(' ').slice(1).join(' ')}</h3>
            <div className="mt-3 bg-slate-50 px-4 py-1 rounded-full">
               <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">{cat.stories.length} historier</span>
            </div>
          </button>
        ))}
      </div>

      {showSettings && renderSettings()}
    </section>
  );
};
