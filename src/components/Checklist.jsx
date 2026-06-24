import React, { useState, useEffect } from 'react'

export function Checklist({ content }) {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('checklist_state')
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    localStorage.setItem('checklist_state', JSON.stringify(checkedItems))
  }, [checkedItems])

  const toggleItem = (idx) => {
    setCheckedItems({ ...checkedItems, [idx]: !checkedItems[idx] })
  }

  return (
    <section className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-teal-800 mb-2">{content.title}</h2>
        <p className="text-slate-600 text-sm">{content.description}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {content.items.map((item, idx) => (
          <label 
            key={idx}
            className={`flex gap-4 p-4 items-start border-b border-slate-100 last:border-0 cursor-pointer transition-colors ${checkedItems[idx] ? 'bg-slate-50 opacity-60' : 'hover:bg-teal-50/30'}`}
          >
            <input 
              type="checkbox" 
              checked={!!checkedItems[idx]} 
              onChange={() => toggleItem(idx)}
              className="mt-1 w-5 h-5 accent-teal-600"
            />
            <span className={`text-sm font-medium ${checkedItems[idx] ? 'line-through text-slate-400' : 'text-slate-700'}`}>
              {item}
            </span>
          </label>
        ))}
      </div>

      <p className="text-xs text-slate-400 italic text-center px-4">{content.footer}</p>
    </section>
  )
}
