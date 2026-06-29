import PageLayout from "../components/PageLayout";

export default function Profile() {
  return (
    <PageLayout title="Profil">
      <div className="card" style={{ textAlign: "center", padding: "32px 24px", marginBottom: 16 }}>
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: "var(--teal-50)", border: "2px solid var(--teal-100)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 36, margin: "0 auto 16px",
        }}>👤</div>
        <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 6 }}>Din profil</h2>
        <p style={{ color: "var(--slate-500)", fontSize: 14 }}>
          StøtteGuide gemmer ikke dine personlige oplysninger.
        </p>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 10 }}>Om appen</h3>
        <p style={{ color: "var(--slate-500)", fontSize: 14, lineHeight: 1.7 }}>
          StøtteGuide er en uafhængig vejviser til forældre, børn og fagpersoner
          i det kommunale støttesystem. Dine data forbliver på din enhed.
        </p>
        <p style={{ color: "var(--slate-400)", fontSize: 12, marginTop: 12 }}>Version 1.0.0</p>
      </div>
    </PageLayout>
  );
}
