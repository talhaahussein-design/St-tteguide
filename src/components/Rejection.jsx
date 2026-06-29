export function Rejection({ content }) {
  return (
    <div>
      <div className="card" style={{ borderLeft: "4px solid #ef4444", marginBottom: 16 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: "#991b1b", marginBottom: 6 }}>{content.title}</h2>
        <p style={{ fontSize: 14, color: "var(--slate-500)", lineHeight: 1.6 }}>{content.description}</p>
      </div>

      {content.sections.map((s, i) => (
        <div key={i} className="card" style={{ marginBottom: 10 }}>
          <p style={{ fontSize: 14, fontWeight: 800, color: "var(--slate-800)", marginBottom: 5 }}>{s.title}</p>
          <p style={{ fontSize: 13, color: "var(--slate-500)", lineHeight: 1.6 }}>{s.text}</p>
        </div>
      ))}

      <div className="card" style={{ background: "var(--slate-50)", marginTop: 6 }}>
        <p style={{ fontWeight: 800, color: "var(--slate-800)", marginBottom: 14 }}>{content.helpTitle}</p>
        {content.help.map((h, i) => (
          <div key={i} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: i < content.help.length - 1 ? "1px solid var(--slate-100)" : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 800, color: "var(--blue)", fontSize: 14 }}>{h.name}</span>
              {h.link && <a href={h.link} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: "var(--blue)" }}>Besøg →</a>}
            </div>
            <p style={{ fontSize: 13, color: "var(--slate-500)", marginTop: 3 }}>{h.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
