import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const modules = [
  { title: "Følelser", subtitle: "Forstå og udtryk dine følelser", emoji: "😊", color: "#FEF3C7", path: "/feelings" },
  { title: "Min krop", subtitle: "Tryk hvor det gør ondt", emoji: "🧍", color: "#D1FAE5", path: "/bodymap" },
  { title: "Kommunikation", subtitle: "Vis hvad du har brug for", emoji: "💬", color: "#DBEAFE", path: "/communication" },
  { title: "Social Stories", subtitle: "Øv hverdagens situationer", emoji: "📖", color: "#EDE9FE", path: "/stories" },
];

const moods = [
  { emoji: "😊", label: "Glad" },
  { emoji: "😐", label: "Ok" },
  { emoji: "😢", label: "Ked af det" },
  { emoji: "😡", label: "Vred" },
];

export default function Home() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="topbar-logo">
          <div className="topbar-logo-icon">🌿</div>
          StøtteGuide
        </div>
        <div className="topbar-right">
          <Link to="/profile" className="topbar-btn">👤 Profil</Link>
        </div>
      </header>

      <div className="home-hero">
        <div className="home-hero-badge">🌿 Støtteguiden</div>
        <h2>Hvordan har du det i dag?</h2>
        <div className="mood-row">
          {moods.map(m => (
            <button key={m.label} className="mood-btn" title={m.label}>{m.emoji}</button>
          ))}
        </div>
      </div>

      <div className="page-content" style={{ paddingTop: 16 }}>
        <p className="section-label">Dine værktøjer</p>
        {modules.map(mod => (
          <Link key={mod.title} to={mod.path} className="module-row">
            <div className="module-row-icon" style={{ background: mod.color }}>{mod.emoji}</div>
            <div className="module-row-body">
              <h3>{mod.title}</h3>
              <p>{mod.subtitle}</p>
            </div>
            <span className="module-row-arrow">›</span>
          </Link>
        ))}

        <div className="help-box" style={{ marginTop: 20 }}>
          <span style={{ fontSize: 34 }}>👩‍👦</span>
          <div>
            <p>Har du brug for hjælp?</p>
            <span>Tal med en voksen</span>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
