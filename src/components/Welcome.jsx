export function Welcome({ content, onSelectRole }) {
  return (
    <div>
      <div className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900, color: "#1d4ed8", marginBottom: 8, letterSpacing: "-0.3px" }}>
          {content.title}
        </h2>
        <p style={{ fontSize: 14, color: "var(--slate-500)", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
          {content.description}
        </p>
      </div>

      <p className="section-label">{content.rolesTitle}</p>
      {content.roles.map(role => (
        <button key={role.id} className="role-btn" onClick={() => onSelectRole(role.id)}>
          <div className="role-btn-title">{role.title}</div>
          <div className="role-btn-desc">{role.description}</div>
        </button>
      ))}
      <p style={{ fontSize: 12, color: "var(--slate-400)", textAlign: "center", marginTop: 16, lineHeight: 1.6 }}>
        {content.footer}
      </p>
    </div>
  );
}
