import { useState } from 'react';

export function KidsUniverse({ content, onBack }) {
  const [cat, setCat] = useState(null);
  const [item, setItem] = useState(null);

  if (item !== null) {
    const category = content.categories.find(c => c.id === cat);
    const cur = category.items[item];
    return (
      <div className="kids-shell">
        <header className="kids-header">
          <p className="kids-header-title">📖 {cur.title}</p>
        </header>
        <div style={{ padding: "16px 16px 100px" }}>
          <button className="kids-btn" style={{ justifyContent: "flex-start", gap: 10, marginBottom: 16 }}
            onClick={() => setItem(null)}>
            <span style={{ fontSize: 20 }}>←</span> Tilbage til listen
          </button>

          <div className="kids-card" style={{ padding: 28, textAlign: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 72, marginBottom: 14, lineHeight: 1 }}>{cur.emoji}</div>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#1a237e", marginBottom: 10 }}>{cur.title}</h2>
            <p style={{ fontSize: 16, color: "#37474f", lineHeight: 1.7 }}>{cur.text}</p>
            {cur.tip && (
              <div style={{ background: "#e8f5e9", border: "2px solid #a5d6a7", borderRadius: 14, padding: "12px 16px", marginTop: 16 }}>
                <p style={{ fontSize: 14, color: "#2e7d32", fontWeight: 800 }}>💡 Tip: {cur.tip}</p>
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
            <button className="kids-btn" style={{ flex: 1, opacity: item === 0 ? 0.3 : 1 }}
              disabled={item === 0} onClick={() => setItem(i => i - 1)}>← Forrige</button>
            <button className="kids-btn" style={{ flex: 1, opacity: item === category.items.length - 1 ? 0.3 : 1 }}
              disabled={item === category.items.length - 1} onClick={() => setItem(i => i + 1)}>Næste →</button>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 7 }}>
            {category.items.map((_, i) => (
              <button key={i} onClick={() => setItem(i)} style={{
                width: i === item ? 28 : 9, height: 9, borderRadius: 5, border: "none", padding: 0,
                background: i === item ? "#3949ab" : "#c5cae9", cursor: "pointer", transition: "width .2s",
              }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (cat !== null) {
    const category = content.categories.find(c => c.id === cat);
    return (
      <div className="kids-shell">
        <header className="kids-header">
          <p className="kids-header-title">{category.title}</p>
        </header>
        <div style={{ padding: "16px 16px 100px" }}>
          <button className="kids-btn" style={{ justifyContent: "flex-start", gap: 10, marginBottom: 16 }}
            onClick={() => setCat(null)}>
            <span style={{ fontSize: 20 }}>←</span> Tilbage til kategorier
          </button>
          <p style={{ fontSize: 14, color: "#546e7a", marginBottom: 14 }}>{category.description}</p>
          {category.items.map((it, i) => (
            <button key={i} className="kids-card" onClick={() => setItem(i)} style={{
              display: "flex", alignItems: "center", gap: 14, padding: "14px 18px",
              width: "100%", background: "white", textAlign: "left", cursor: "pointer",
              marginBottom: 10, border: "2.5px solid #e8eaf6",
            }}>
              <span style={{ fontSize: 34, flexShrink: 0 }}>{it.emoji}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 16, fontWeight: 800, color: "#1a237e" }}>{it.title}</p>
                <p style={{ fontSize: 12, color: "#546e7a", marginTop: 2 }}>{it.text.slice(0, 55)}…</p>
              </div>
              <span style={{ color: "#9fa8da", fontSize: 20 }}>›</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="kids-shell">
      <header className="kids-header">
        <p className="kids-header-title">🌟 {content.title}</p>
      </header>
      <div style={{ padding: "16px 16px 100px" }}>
        <button className="kids-btn" style={{ justifyContent: "flex-start", gap: 10, marginBottom: 18 }}
          onClick={onBack}>
          <span style={{ fontSize: 20 }}>←</span> Skift rolle
        </button>
        <div style={{ background: "#e8eaf6", border: "2.5px solid #c5cae9", borderRadius: 20, padding: "22px 18px", textAlign: "center", marginBottom: 18 }}>
          <div style={{ fontSize: 52, marginBottom: 10 }}>🌟</div>
          <p style={{ fontSize: 15, color: "#37474f" }}>{content.description}</p>
        </div>
        <p style={{ fontSize: 11, fontWeight: 800, color: "#7986cb", textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 10 }}>
          Vælg en kategori
        </p>
        {content.categories.map(c => (
          <button key={c.id} className="kids-btn" onClick={() => setCat(c.id)}
            style={{ flexDirection: "column", alignItems: "flex-start", padding: "18px 20px", gap: 3, marginBottom: 10 }}>
            <span style={{ fontSize: 17, fontWeight: 900 }}>{c.title}</span>
            <span style={{ fontSize: 13, color: "#5c6bc0", fontWeight: 500 }}>{c.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
