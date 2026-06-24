import React, { useState } from 'react'

export function ServiceDetail({ category, details, onBack, onNavigate }) {
  const [openSection, setOpenSection] = useState(category.paragraphs[0])

  const handleCtaClick = (action) => {
    if (action === 'calculator') {
      alert('Beregner-funktionen kommer snart!')
      return
    }
    if (onNavigate) {
      onNavigate(action)
    }
  }

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
                    {detail.intro && (
                      <p className="text-slate-700 text-sm font-medium leading-relaxed italic border-l-4 border-teal-500 pl-4 py-1 bg-teal-50/50 rounded-r-lg">
                        {detail.intro}
                      </p>
                    )}

                    {detail.sections ? (
                      detail.sections.map((section, idx) => (
                        <div key={idx} className="space-y-2">
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{section.title}</h4>
                          {section.text && <p className="text-slate-600 text-sm leading-relaxed">{section.text}</p>}
                          {section.items && (
                            <ul className="list-disc list-inside text-slate-600 text-sm space-y-1 ml-1">
                              {section.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                          )}
                          {section.steps && (
                            <ol className="list-decimal list-inside text-slate-600 text-sm space-y-2 ml-1">
                              {section.steps.map((step, i) => (
                                <li key={i} className="pl-1">
                                  <span className="relative -left-1">{step}</span>
                                </li>
                              ))}
                            </ol>
                          )}
                        </div>
                      ))
                    ) : (
                      <>
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
                      </>
                    )}

                    {detail.ctas && (
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        {detail.ctas.map((cta, i) => (
                          <button
                            key={i}
                            onClick={() => handleCtaClick(cta.action)}
                            className="bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-200 text-slate-700 hover:text-teal-700 p-4 rounded-2xl text-xs font-bold transition-all flex flex-col items-center justify-center text-center gap-2"
                          >
                            <span>{cta.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
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
