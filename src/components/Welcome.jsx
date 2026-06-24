import React from 'react'

export function Welcome({ content, onSelectRole }) {
  return (
    <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-teal-800 mb-2">{content.title}</h2>
        <p className="text-slate-600 whitespace-pre-wrap">{content.description}</p>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-slate-700 ml-1">{content.rolesTitle}</h3>
        {content.roles.map(role => (
          <button 
            key={role.id}
            onClick={() => onSelectRole(role.id)}
            className="w-full bg-white p-4 rounded-xl shadow-sm border border-slate-200 text-left hover:border-teal-500 transition-colors"
          >
            <div className="font-bold text-teal-700 text-lg">{role.title}</div>
            <div className="text-sm text-slate-500">{role.description}</div>
          </button>
        ))}
      </div>

      <p className="text-xs text-slate-400 italic text-center px-4">{content.footer}</p>
    </section>
  )
}
