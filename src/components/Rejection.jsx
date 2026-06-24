import React from 'react'

export function Rejection({ content }) {
  return (
    <section className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-red-800 mb-2">{content.title}</h2>
        <p className="text-slate-600 text-sm">{content.description}</p>
      </div>

      <div className="space-y-4">
        {content.sections.map((section, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-2">{section.title}</h3>
            <p className="text-slate-600 text-xs leading-relaxed">{section.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
        <h4 className="font-bold text-slate-800 mb-4">{content.helpTitle}</h4>
        <div className="space-y-4">
          {content.help.map((h, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="font-bold text-teal-700 text-sm">{h.name}</span>
                {h.link && (
                  <a href={h.link} target="_blank" rel="noreferrer" className="text-[10px] text-teal-600 underline">
                    Besøg hjemmeside
                  </a>
                )}
              </div>
              <p className="text-slate-500 text-[11px]">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
