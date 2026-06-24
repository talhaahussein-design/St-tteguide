import { useState, useEffect } from 'react'
import { content } from './data/content'
import { Welcome } from './components/Welcome'
import { Screening } from './components/Screening'
import { ServiceOverview } from './components/ServiceOverview'
import { ServiceDetail } from './components/ServiceDetail'
import { Checklist } from './components/Checklist'
import { Tools } from './components/Tools'
import { Rejection } from './components/Rejection'
import Calculator from './components/Calculator'

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem('lastSection') || 'welcome'
  })
  const [role, setRole] = useState(() => {
    return localStorage.getItem('userRole') || null
  })
  const [screeningAnswers, setScreeningAnswers] = useState(() => {
    const saved = localStorage.getItem('screeningAnswers')
    return saved ? JSON.parse(saved) : {}
  })
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [calculatorType, setCalculatorType] = useState(null)

  useEffect(() => {
    localStorage.setItem('lastSection', activeSection)
    if (role) localStorage.setItem('userRole', role)
    localStorage.setItem('screeningAnswers', JSON.stringify(screeningAnswers))
  }, [activeSection, role, screeningAnswers])

  const handleSelectRole = (roleId) => {
    setRole(roleId)
    setActiveSection('screening')
  }

  const handleScreeningComplete = (answers) => {
    setScreeningAnswers(answers)
    setActiveSection('services')
  }

  const handleReset = () => {
    if (confirm('Er du sikker på, at du vil nulstille alle dine valg?')) {
      localStorage.clear()
      window.location.reload()
    }
  }

  const handleNavigate = (action) => {
    if (action === 'calculator') {
      setCalculatorType('expenses')
      setActiveSection('calculator')
    } else if (action === 'calculator_tabt') {
      setCalculatorType('income')
      setActiveSection('calculator')
    } else if (action === 'templates') {
      setActiveSection('tools')
    } else {
      setActiveSection(action)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-teal-600 text-white p-4 shadow-md sticky top-0 z-10">
        <div className="max-w-md mx-auto flex justify-between items-center px-2">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight">StøtteGuide</h1>
            <span className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Vejviser til hjælp</span>
          </div>
          <button className="text-[11px] bg-teal-700/50 border border-teal-400/30 px-3 py-1.5 rounded-lg font-bold" onClick={handleReset}>Nulstil</button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 pb-24">
        {activeSection === 'welcome' && (
          <Welcome content={content.welcome} onSelectRole={handleSelectRole} />
        )}

        {activeSection === 'screening' && (
          <Screening 
            content={content.screening} 
            onComplete={handleScreeningComplete} 
            onBack={() => setActiveSection('welcome')}
          />
        )}

        {activeSection === 'services' && (
          <ServiceOverview 
            content={content.services} 
            answers={screeningAnswers}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat)
              setActiveSection('detail')
            }}
          />
        )}

        {activeSection === 'detail' && selectedCategory && (
          <ServiceDetail 
            category={selectedCategory} 
            details={content.serviceDetails}
            onBack={() => setActiveSection('services')}
            onNavigate={handleNavigate}
          />
        )}

        {activeSection === 'calculator' && (
          <Calculator 
            type={calculatorType}
            onBack={() => setActiveSection('detail')}
          />
        )}

        {activeSection === 'checklist' && (
          <Checklist content={content.checklist} />
        )}

        {activeSection === 'tools' && (
          <Tools 
            content={content.templates} 
            municipality={content.municipality} 
          />
        )}

        {activeSection === 'rejection' && (
          <Rejection content={content.rejection} />
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-200 p-2 shadow-2xl z-20">
        <div className="max-w-md mx-auto flex justify-around items-center">
          {[
            { id: 'welcome', label: 'Forside', icon: '🏠' },
            { id: 'services', label: 'Ydelser', icon: '📋' },
            { id: 'checklist', label: 'Tjekliste', icon: '✅' },
            { id: 'tools', label: 'Værktøjer', icon: '🛠️' },
            { id: 'rejection', label: 'Afslag', icon: '🛡️' },
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center p-2 rounded-xl transition-all ${activeSection === item.id || (activeSection === 'detail' && item.id === 'services') || (activeSection === 'calculator' && item.id === 'services') ? 'text-teal-600 bg-teal-50/50' : 'text-slate-400'}`}
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default App
