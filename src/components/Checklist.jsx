import { useState } from 'react';

export function Checklist({ content }) {
  const [checked, setChecked] = useState({});
  const toggle = i => setChecked(c => ({ ...c, [i]: !c[i] }));

  return (
    <div>
      <div className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: "var(--slate-900)", marginBottom: 6 }}>{content.title}</h2>
        <p style={{ fontSize: 14, color: "var(--slate-500)", lineHeight: 1.6 }}>{content.description}</p>
      </div>

      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        {content.items.map((item, i) => (
          <div key={i} className="checklist-item" onClick={() => toggle(i)}
            style={{ opacity: checked[i] ? 0.5 : 1 }}>
            <div className={`checklist-check${checked[i] ? " checked" : ""}`}>
              {checked[i] && <span style={{ color: "white", fontSize: 14 }}>✓</span>}
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, color: "var(--slate-700)",
              textDecoration: checked[i] ? "line-through" : "none" }}>{item}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 12, color: "var(--slate-400)", textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
        {content.footer}
      </p>
    </div>
  );
}
