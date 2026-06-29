import { useState } from 'react';

export function Screening({ content, onComplete, onBack }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const q = content.questions[step];
  const progress = ((step + 1) / content.questions.length) * 100;

  const handleSelect = (option) => {
    if (q.multi) {
      const cur = answers[q.id] || [];
      const label = option.label || option;
      setAnswers({ ...answers, [q.id]: cur.includes(label) ? cur.filter(s => s !== label) : [...cur, label] });
    } else {
      setAnswers({ ...answers, [q.id]: option });
    }
  };

  const canNext = q.multi ? (answers[q.id] || []).length > 0 : !!answers[q.id];

  return (
    <div>
      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <p style={{ fontSize: 12, color: "var(--slate-400)", marginBottom: 14 }}>
        Spørgsmål {step + 1} af {content.questions.length}
      </p>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: "var(--slate-900)", marginBottom: 16, letterSpacing: "-0.3px" }}>
        {q.question}
      </h2>

      {q.options.map((option, i) => {
        const label = option.label || option;
        const isSel = q.multi ? (answers[q.id] || []).includes(label) : answers[q.id] === option;
        return (
          <button key={i} className={`screening-option${isSel ? " selected" : ""}`} onClick={() => handleSelect(option)}>
            <div className="screening-option-title">{label}</div>
            {option.description && <div className="screening-option-desc">{option.description}</div>}
          </button>
        );
      })}

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <button className="btn-secondary" style={{ flex: 1 }} onClick={() => step === 0 ? onBack() : setStep(s => s - 1)}>
          ← Tilbage
        </button>
        <button
          className="btn-primary"
          style={{ flex: 2, opacity: canNext ? 1 : 0.4 }}
          disabled={!canNext}
          onClick={() => step < content.questions.length - 1 ? setStep(s => s + 1) : onComplete(answers)}
        >
          {step === content.questions.length - 1 ? "Se resultater" : "Næste →"}
        </button>
      </div>
    </div>
  );
}
