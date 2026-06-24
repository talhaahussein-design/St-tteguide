import React, { useState } from 'react'

export function ServiceDetail({ category, details, onBack }) {
  const [openSection, setOpenSection] = useState(category.paragraphs[0])

  return (
    <section className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-2 mb-2">
        <button onClick={onBack} className="text-teal-600 font-bold flex items-center gap-1">
          <span className="text-lg">←</span> Tilbage til overblik
        </button>
      </div>

      <div className="bg-white p-1 rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 pb-4">
          <h2 className="text-2xl font-bold text-teal-800 mb-2">{category.title}</h2>
          <p className="text-slate-600 text-sm leading-relaxed">{category.description}</p>
        </div>
        
        <div className="divide-y divide-slate-100">
          {category.paragraphs.map(p => {
            const detail = details[p]
            if (!detail) return null
            const isOpen = openSection === p
            
            return (
              <div key={p} className="group">
                <button 
                  onClick={() => setOpenSection(isOpen ? null : p)}
                  className={`w-full flex justify-between items-center p-6 text-left transition-colors ${isOpen ? 'bg-teal-50/30' : 'hover:bg-slate-50'}`}
                >
                  <h3 className="text-lg font-bold text-slate-800">{detail.title}</h3>
                  <span className={`text-teal-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-8 space-y-5 animate-in slide-in-from-top-2 duration-300">
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Hvad er det?</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{detail.what}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Hvem kan få det?</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{detail.who}</p>
                    </div>
                    
                    <div className="bg-teal-600 text-white p-5 rounded-2xl shadow-lg shadow-teal-100">
                      <h4 className="text-[10px] font-bold text-teal-200 uppercase tracking-widest mb-1.5">Næste skridt</h4>
                      <p className="text-sm font-medium leading-relaxed">{detail.next}</p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
