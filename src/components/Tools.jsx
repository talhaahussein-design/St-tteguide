import React, { useState } from 'react'

export function Tools({ content, municipality }) {
  const [activeTab, setActiveTab] = useState('municipality')

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert('Kopieret til udklipsholder!')
  }

  return (
    <section className="space-y-6 animate-in fade-in duration-500">
      <div className="flex bg-slate-200 p-1 rounded-xl">
        <button 
          onClick={() => setActiveTab('municipality')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'municipality' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-500'}`}
        >
          Find kommune
        </button>
        <button 
          onClick={() => setActiveTab('templates')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'templates' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-500'}`}
        >
          Skabeloner
        </button>
      </div>

      {activeTab === 'municipality' ? (
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-teal-800 mb-2">{municipality.title}</h2>
            <p className="text-slate-600 text-sm mb-6">{municipality.description}</p>
            
            <div className="space-y-6">
              {municipality.steps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-teal-100 text-teal-700 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">{idx + 1}</div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{step.title}</h4>
                    <p className="text-slate-500 text-xs mt-1">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-lg">
            <h4 className="font-bold mb-4">{municipality.adviceTitle}</h4>
            <ul className="space-y-3">
              {municipality.advice.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-xs leading-relaxed opacity-90">
                  <span className="text-teal-400 font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-teal-800 mb-2">{content.title}</h2>
            <p className="text-slate-600 text-sm">{content.description}</p>
          </div>

          {content.items.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-3">{item.title}</h3>
              {item.subject && (
                <div className="mb-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Emne</div>
                  <div className="text-xs text-slate-700 font-medium">{item.subject}</div>
                </div>
              )}
              <div className="relative group">
                <pre className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 whitespace-pre-wrap font-sans border border-slate-100">
                  {item.body}
                </pre>
                <button 
                  onClick={() => copyToClipboard(item.subject ? `Emne: ${item.subject}\n\n${item.body}` : item.body)}
                  className="mt-3 w-full bg-teal-600 text-white py-2 rounded-lg text-xs font-bold shadow-md hover:bg-teal-700 active:scale-95 transition-all"
                >
                  Kopiér skabelon
                </button>
              </div>
            </div>
          ))}

          <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
            <h4 className="font-bold text-teal-900 mb-2">{content.rulesTitle}</h4>
            <ul className="space-y-2">
              {content.rules.map((rule, idx) => (
                <li key={idx} className="text-teal-800 text-xs flex gap-2">
                  <span className="font-bold">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}
