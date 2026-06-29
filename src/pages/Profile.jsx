import PageLayout from "../components/PageLayout";

export default function Profile() {
  return (
    <PageLayout title="Profil">
      <div className="card" style={{ textAlign: "center", padding: "28px 20px", marginBottom: 12 }}>
        <div style={{
          width: 76, height: 76, borderRadius: "50%",
          background: "var(--blue-soft)", border: "2px solid var(--blue-mid)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 34, margin: "0 auto 14px",
        }}>👤</div>
        <h2 style={{ fontSize: 19, fontWeight: 800, marginBottom: 5 }}>Din profil</h2>
        <p style={{ color: "var(--slate-500)", fontSize: 14 }}>
          StøtteGuide gemmer ikke dine personlige oplysninger.
        </p>
      </div>

      <div className="card">
        <p className="section-label" style={{ marginTop: 0 }}>Om appen</p>
        <p style={{ color: "var(--slate-500)", fontSize: 14, lineHeight: 1.7 }}>
          StøtteGuide er en uafhængig vejviser til forældre, børn og fagpersoner
          i det kommunale støttesystem. Dine data forbliver på din enhed.
        </p>
        <p style={{ color: "var(--slate-400)", fontSize: 12, marginTop: 12 }}>Version 1.0.0</p>
      </div>
    </PageLayout>
  );
}
