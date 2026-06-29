import { useState } from 'react';

export function ServiceDetail({ category, details, onBack, onNavigate }) {
  const [open, setOpen] = useState(category.paragraphs[0]);

  return (
    <div>
      <button className="btn-secondary" style={{ marginBottom: 16 }} onClick={onBack}>← Tilbage til overblik</button>

      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ padding: "16px 18px 14px" }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, color: "var(--slate-900)", marginBottom: 5 }}>{category.title}</h2>
          <p style={{ fontSize: 13, color: "var(--slate-500)", lineHeight: 1.6 }}>{category.description}</p>
        </div>

        {category.paragraphs.map(p => {
          const detail = details[p];
          if (!detail) return null;
          const isOpen = open === p;
          return (
            <div key={p} className="accordion-item">
              <button className="accordion-trigger" onClick={() => setOpen(isOpen ? null : p)}>
                <h3>{detail.title}</h3>
                <span style={{ color: "var(--slate-400)", fontSize: 14, transform: isOpen ? "rotate(180deg)" : "none", display: "inline-block", transition: "transform .2s" }}>▼</span>
              </button>

              {isOpen && (
                <div className="accordion-body">
                  {detail.intro && (
                    <p style={{ fontSize: 14, color: "var(--slate-600)", fontStyle: "italic", borderLeft: "3px solid var(--blue)", paddingLeft: 12, marginBottom: 12, lineHeight: 1.6 }}>
                      {detail.intro}
                    </p>
                  )}

                  {detail.sections ? detail.sections.map((s, i) => (
                    <div key={i} style={{ marginBottom: 12 }}>
                      <p className="detail-label">{s.title}</p>
                      {s.text && <p className="detail-text">{s.text}</p>}
                      {s.items && <ul style={{ paddingLeft: 16, color: "var(--slate-600)", fontSize: 14, lineHeight: 1.8 }}>{s.items.map((it, j) => <li key={j}>{it}</li>)}</ul>}
                      {s.steps && <ol style={{ paddingLeft: 16, color: "var(--slate-600)", fontSize: 14, lineHeight: 1.8 }}>{s.steps.map((st, j) => <li key={j}>{st}</li>)}</ol>}
                    </div>
                  )) : (
                    <>
                      <p className="detail-label">Hvad er det?</p>
                      <p className="detail-text">{detail.what}</p>
                      <p className="detail-label">Hvem kan få det?</p>
                      <p className="detail-text">{detail.who}</p>
                      <div className="next-step-box">
                        <p className="detail-label" style={{ color: "rgba(255,255,255,.6)" }}>Næste skridt</p>
                        <p>{detail.next}</p>
                      </div>
                    </>
                  )}

                  {detail.ctas && (
                    <div className="cta-grid">
                      {detail.ctas.map((cta, i) => (
                        <button key={i} className="cta-btn" onClick={() => onNavigate?.(cta.action)}>{cta.label}</button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
