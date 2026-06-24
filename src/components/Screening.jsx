import React, { useState } from 'react'

export function Screening({ content, onComplete, onBack }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})

  const question = content.questions[currentStep]
  const progress = ((currentStep + 1) / content.questions.length) * 100

  const handleOptionSelect = (option) => {
    if (question.multi) {
      const selected = answers[question.id] || []
      const newSelected = selected.includes(option.label)
        ? selected.filter(s => s !== option.label)
        : [...selected, option.label]
      setAnswers({ ...answers, [question.id]: newSelected })
    } else {
      setAnswers({ ...answers, [question.id]: option })
    }
  }

  const nextStep = () => {
    if (currentStep < content.questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete(answers)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else {
      onBack()
    }
  }

  return (
    <section className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="w-full bg-slate-100 h-2 rounded-full mb-6">
          <div 
            className="bg-teal-500 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <h2 className="text-xl font-bold text-teal-800 mb-4">{question.question}</h2>
        
        <div className="space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = question.multi 
              ? (answers[question.id] || []).includes(option.label || option)
              : answers[question.id] === option

            return (
              <button 
                key={idx}
                onClick={() => handleOptionSelect(option)}
                className={`w-full p-4 rounded-xl border text-left transition-colors ${
                  isSelected 
                    ? 'bg-teal-50 border-teal-500 text-teal-900' 
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="font-semibold">{option.label || option}</div>
                {option.description && <div className="text-sm text-slate-500 mt-1">{option.description}</div>}
              </button>
            )
          })}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button onClick={prevStep} className="text-slate-500 font-medium">
            {currentStep === 0 ? 'Forside' : 'Tilbage'}
          </button>
          <button 
            onClick={nextStep}
            disabled={!answers[question.id] || (question.multi && answers[question.id].length === 0)}
            className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-teal-100 disabled:opacity-50 disabled:shadow-none transition-all"
          >
            {currentStep === content.questions.length - 1 ? 'Se resultater' : 'Næste'}
          </button>
        </div>
      </div>
    </section>
  )
}
