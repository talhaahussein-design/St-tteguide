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
import { KidsUniverse } from './components/KidsUniverse'
import { SocialStories } from './components/SocialStories'

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem('lastSection') || 'welcome'
  })
  const [role, setRole] = useState(() => {
    return localStorage.getItem('userRole') || null
  })
  const [userFlow, setUserFlow] = useState(() => {
    return localStorage.getItem('userFlow') || null
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
    if (userFlow) localStorage.setItem('userFlow', userFlow)
    localStorage.setItem('screeningAnswers', JSON.stringify(screeningAnswers))
  }, [activeSection, role, userFlow, screeningAnswers])

  const handleSelectRole = (roleId) => {
    const selectedRole = content.welcome.roles.find(r => r.id === roleId)
    setRole(roleId)
    setUserFlow(selectedRole.flow)
    
    if (selectedRole.flow === 'parent') {
      setActiveSection('screening')
    } else if (selectedRole.flow === 'kids') {
      setActiveSection('kids-universe')
    } else if (selectedRole.flow === 'professional') {
      setActiveSection('professional')
    }
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
    <div className="min-h-screen bg-[#FFF8F0] text-[#2D3436] font-sans relative overflow-x-hidden transition-all duration-1000">
      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#FF8E53]/10 rounded-full blur-[100px] animate-float-slow"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[50%] h-[50%] bg-[#4ECDC4]/10 rounded-full blur-[100px] animate-float-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <header className="relative z-50 pt-8 pb-12 px-6 overflow-hidden">
        <div className="max-w-md mx-auto flex justify-between items-center relative z-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] rounded-lg shadow-lg animate-slow-rotate flex items-center justify-center text-white text-xs font-black">SG</div>
              <h1 className="text-2xl font-black tracking-tight leading-none">Støtte<span className="text-[#FF6B6B]">Guide</span></h1>
            </div>
            <span className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black mt-2">Vejviser til hjælp</span>
          </div>
          <button 
            className="text-[10px] bg-white hover:bg-white/80 text-[#FF6B6B] px-4 py-2.5 rounded-2xl font-black uppercase tracking-widest shadow-sm transition-all active:scale-95 border border-[#FF6B6B]/10" 
            onClick={handleReset}
          >
            Nulstil
          </button>
        </div>
        
        {/* Wavy Header Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-white/40 backdrop-blur-sm animate-wave opacity-50"></div>
      </header>

      <main className="max-w-md mx-auto p-6 pb-40 relative z-10 animate-soft-fade">
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

        {activeSection === 'kids-universe' && (
          <KidsUniverse 
            content={content.kidsUniverse} 
            onBack={() => setActiveSection('welcome')}
          />
        )}

        {activeSection === 'stories' && (
          <SocialStories 
            content={content.socialStories} 
            onBack={() => setActiveSection('welcome')}
          />
        )}

        {activeSection === 'professional' && (
          <div className="text-center py-20 animate-in zoom-in duration-700 bg-white rounded-[3rem] shadow-xl border border-white p-10">
            <div className="w-24 h-24 bg-purple-100 rounded-3xl flex items-center justify-center text-6xl mx-auto mb-8 animate-float">🏫</div>
            <h2 className="text-3xl font-black text-[#1a4d6b] mb-4">Pædagog-sektion</h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">Vi arbejder på højtryk for at skabe de bedste værktøjer til fagpersoner.</p>
            <div className="mt-10 p-6 bg-purple-50 rounded-2xl border border-purple-100">
               <p className="text-purple-800 font-bold">Kommer snart: Vidensdeling, observationsskabeloner og netværksguide.</p>
            </div>
            <button 
              onClick={() => setActiveSection('welcome')}
              className="mt-12 w-full py-4 bg-[#1a4d6b] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg active:scale-95 transition-all"
            >
              ← Tilbage til forsiden
            </button>
          </div>
        )}
      </main>

      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white/70 backdrop-blur-2xl border border-white/50 p-2.5 shadow-[0_20px_50px_rgba(255,107,107,0.15)] z-[60] rounded-[2.5rem]">
        <div className="flex justify-around items-center">
          {[
            { id: 'welcome', label: 'Hjem', icon: '🏠' },
            { id: 'services', label: 'Hjælp', icon: '📋' },
            ...(userFlow === 'kids' ? [{ id: 'stories', label: 'Læs', icon: '📖' }] : []),
            { id: 'checklist', label: 'Tjek', icon: '✅' },
            { id: 'tools', label: 'Værktøj', icon: '🛠️' },
            { id: 'rejection', label: 'Klage', icon: '🛡️' },
          ].map((item) => {
            const isActive = activeSection === item.id || (item.id === 'services' && ['services', 'detail', 'calculator', 'kids-universe', 'professional'].includes(activeSection) && activeSection !== 'welcome');
            return (
              <button 
                key={item.id}
                onClick={() => {
                  if (item.id === 'services' && userFlow === 'kids') {
                    setActiveSection('kids-universe')
                  } else if (item.id === 'services' && userFlow === 'professional') {
                    setActiveSection('professional')
                  } else {
                    setActiveSection(item.id)
                  }
                }}
                className={`flex flex-col items-center flex-1 py-2.5 rounded-[2rem] transition-all duration-700 ${isActive ? 'text-white bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] shadow-lg scale-105' : 'text-slate-400 hover:text-[#FF6B6B]'}`}
              >
                <span className={`text-xl mb-0.5 transition-transform ${isActive ? 'animate-slow-pulse' : ''}`}>{item.icon}</span>
                <span className={`text-[8px] font-black uppercase tracking-widest transition-opacity ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                  {item.id === 'services' && userFlow === 'kids' ? 'Univers' : item.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default App
