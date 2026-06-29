export function ServiceOverview({ content, answers, onSelectCategory }) {
  const needs = answers['needs'] || [];
  const map = { 'Økonomi': 'economy', 'Aflastning': 'respite', 'Skole/Institution': 'school', 'Fritid': 'leisure' };
  const cats = content.categories.filter(c => !needs.length || needs.some(n => map[n] === c.id));

  return (
    <div>
      <div className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: "var(--slate-900)", marginBottom: 6 }}>{content.title}</h2>
        <p style={{ fontSize: 14, color: "var(--slate-500)", lineHeight: 1.6 }}>{content.description}</p>
      </div>

      <p className="section-label">Kategorier</p>
      {cats.map(cat => (
        <button key={cat.id} className="service-card" onClick={() => onSelectCategory(cat)}>
          <div className="service-card-header">
            <h3>{cat.title}</h3>
            <span style={{ color: "var(--slate-300)", fontSize: 20 }}>›</span>
          </div>
          <p>{cat.description}</p>
          <div>{cat.paragraphs.map(p => <span key={p} className="tag">{p}</span>)}</div>
        </button>
      ))}

      <div className="card" style={{ background: "var(--blue-soft)", border: "1.5px solid var(--blue-mid)", marginTop: 16 }}>
        <p style={{ fontWeight: 800, color: "#1e40af", marginBottom: 4 }}>Ikke det du søgte?</p>
        <p style={{ fontSize: 13, color: "var(--blue)", marginBottom: 10 }}>Du kan prøve screeningen igen.</p>
        <button className="btn-secondary" onClick={() => window.location.reload()}>Prøv igen</button>
      </div>
    </div>
  );
}
