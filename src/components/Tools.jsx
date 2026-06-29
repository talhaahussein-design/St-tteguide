import { useState } from 'react';

export function Tools({ content, municipality }) {
  const [tab, setTab] = useState('municipality');
  const copy = text => { navigator.clipboard.writeText(text); alert('Kopieret!'); };

  return (
    <div>
      <div className="tabs">
        <button className={`tab-btn${tab === 'municipality' ? " active" : ""}`} onClick={() => setTab('municipality')}>Find kommune</button>
        <button className={`tab-btn${tab === 'templates' ? " active" : ""}`} onClick={() => setTab('templates')}>Skabeloner</button>
      </div>

      {tab === 'municipality' ? (
        <>
          <div className="card" style={{ marginBottom: 12 }}>
            <h2 style={{ fontSize: 17, fontWeight: 800, color: "var(--slate-900)", marginBottom: 5 }}>{municipality.title}</h2>
            <p style={{ fontSize: 13, color: "var(--slate-500)", lineHeight: 1.6, marginBottom: 16 }}>{municipality.description}</p>
            {municipality.steps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--blue-soft)", border: "1.5px solid var(--blue-mid)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, fontWeight: 800, color: "var(--blue)" }}>{i+1}</div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "var(--slate-800)" }}>{s.title}</p>
                  <p style={{ fontSize: 13, color: "var(--slate-500)", marginTop: 2, lineHeight: 1.5 }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="card" style={{ background: "var(--slate-800)", border: "none" }}>
            <p style={{ fontWeight: 800, color: "white", marginBottom: 12 }}>{municipality.adviceTitle}</p>
            {municipality.advice.map((a, i) => (
              <p key={i} style={{ fontSize: 13, color: "rgba(255,255,255,.75)", lineHeight: 1.6, marginBottom: 8 }}>
                <span style={{ color: "#5eead4", fontWeight: 700 }}>• </span>{a}
              </p>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="card" style={{ marginBottom: 12 }}>
            <h2 style={{ fontSize: 17, fontWeight: 800, color: "var(--slate-900)", marginBottom: 5 }}>{content.title}</h2>
            <p style={{ fontSize: 13, color: "var(--slate-500)", lineHeight: 1.6 }}>{content.description}</p>
          </div>
          {content.items.map((item, i) => (
            <div key={i} className="template-card">
              <p style={{ fontWeight: 800, color: "var(--slate-800)", marginBottom: 10 }}>{item.title}</p>
              {item.subject && (
                <div className="template-subject-box">
                  <p className="template-subject-label">Emne</p>
                  <p className="template-subject-value">{item.subject}</p>
                </div>
              )}
              <pre className="template-body">{item.body}</pre>
              <button className="btn-primary" style={{ fontSize: 14 }}
                onClick={() => copy(item.subject ? `Emne: ${item.subject}\n\n${item.body}` : item.body)}>
                Kopiér skabelon
              </button>
            </div>
          ))}
          <div className="card" style={{ background: "var(--blue-soft)", border: "1.5px solid var(--blue-mid)" }}>
            <p style={{ fontWeight: 800, color: "#1e40af", marginBottom: 8 }}>{content.rulesTitle}</p>
            {content.rules.map((r, i) => (
              <p key={i} style={{ fontSize: 13, color: "var(--blue)", lineHeight: 1.6, marginBottom: 5 }}>• {r}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
