import React from 'react'

export function ServiceOverview({ content, answers, onSelectCategory }) {
  const presserendeBehov = answers['needs'] || []

  const behovToCategoryId = {
    'Økonomi': 'economy',
    'Aflastning': 'respite',
    'Skole/Institution': 'school',
    'Fritid': 'leisure',
  }

  const filteredCategories = content.categories.filter(cat => {
    if (presserendeBehov.length === 0) return true
    return presserendeBehov.some(behov => behovToCategoryId[behov] === cat.id)
  })

  return (
    <section className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-teal-800 mb-2">{content.title}</h2>
        <p className="text-slate-600 text-sm">{content.description}</p>
      </div>

      <div className="grid gap-4">
        {filteredCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat)}
            className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 text-left hover:border-teal-500 transition-colors group"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-slate-800">{cat.title}</h3>
              <span className="text-teal-500 group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <p className="text-slate-600 text-sm mb-3 line-clamp-2">{cat.description}</p>
            <div className="flex gap-2">
              {cat.paragraphs.map(p => (
                <span key={p} className="bg-teal-50 text-teal-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  {p}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
        <h4 className="font-bold text-teal-900 mb-2">Ikke det du søgte?</h4>
        <p className="text-teal-800 text-sm mb-4">Du kan altid se alle ydelser eller prøve screeningen igen.</p>
        <button onClick={() => window.location.reload()} className="text-teal-700 font-bold text-sm underline">
          Prøv igen
        </button>
      </div>
    </section>
  )
}
