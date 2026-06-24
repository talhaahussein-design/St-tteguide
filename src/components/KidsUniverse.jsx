import React, { useState, useEffect } from 'react';

export function KidsUniverse({ content, onBack }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('kids_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('kids_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (itemTitle) => {
    setFavorites(prev => 
      prev.includes(itemTitle) 
        ? prev.filter(f => f !== itemTitle) 
        : [...prev, itemTitle]
    );
  };

  if (selectedCategory) {
    const category = content.categories.find(c => c.id === selectedCategory);
    
    return (
      <section className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
        <button 
          onClick={() => setSelectedCategory(null)}
          className="flex items-center text-teal-600 font-bold gap-2 group"
        >
          <span className="text-2xl transition-transform group-hover:-translate-x-1">←</span> 
          Tilbage til univers
        </button>

        <div className="space-y-2">
          <h2 className="text-3xl font-black text-teal-800">{category.title}</h2>
          <p className="text-slate-600 text-lg leading-relaxed">{category.description}</p>
        </div>

        <div className="grid gap-4">
          {category.items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 space-y-3 relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <span className="text-4xl">{item.emoji}</span>
                <button 
                  onClick={() => toggleFavorite(item.title)}
                  className={`text-2xl p-2 rounded-full transition-all ${favorites.includes(item.title) ? 'bg-amber-50 text-amber-500' : 'bg-slate-50 text-slate-300 hover:text-slate-400'}`}
                >
                  {favorites.includes(item.title) ? '⭐' : '☆'}
                </button>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h3>
                <p className="text-slate-600 leading-snug">{item.text}</p>
              </div>

              {item.tip && (
                <div className="bg-teal-50 p-3 rounded-2xl inline-block">
                  <p className="text-sm font-bold text-teal-700">
                    💡 Tip: <span className="font-medium">{item.tip}</span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8 animate-in fade-in duration-500">
      <button 
        onClick={onBack}
        className="flex items-center text-teal-600 font-bold gap-2 group"
      >
        <span className="text-2xl transition-transform group-hover:-translate-x-1">←</span> 
        Skift rolle
      </button>

      <div className="space-y-3">
        <h2 className="text-4xl font-black text-teal-900 leading-tight">
          {content.title}
        </h2>
        <p className="text-slate-600 text-xl font-medium">
          {content.description}
        </p>
      </div>

      <div className="grid gap-6">
        {content.categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className="w-full text-left bg-white p-8 rounded-[2.5rem] shadow-md border-b-8 border-teal-100 hover:border-teal-200 hover:-translate-y-1 transition-all active:scale-95 group"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-teal-800 group-hover:text-teal-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-500 font-medium">
                  {cat.description}
                </p>
              </div>
              <span className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity">➔</span>
            </div>
          </button>
        ))}
      </div>

      {favorites.length > 0 && (
        <div className="pt-8 border-t border-slate-200">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Dine favoritter ({favorites.length})</h3>
          <div className="flex flex-wrap gap-2">
            {favorites.map(fav => (
              <span key={fav} className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                ⭐ {fav}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
