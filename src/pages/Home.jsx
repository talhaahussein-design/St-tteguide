import ModuleCard from "../components/ModuleCard";
import BottomNav from "../components/BottomNav";

const modules = [
  {
    title: "Følelser",
    subtitle: "Forstå og udtryk dine følelser",
    emoji: "😊",
    color: "#FFE8A3",
    path: "/feelings",
  },
  {
    title: "BodyMap",
    subtitle: "Hvor mærker du det i kroppen?",
    emoji: "🧍",
    color: "#D7F8E7",
    path: "/bodymap",
  },
  {
    title: "Kommunikation",
    subtitle: "Vis hvad du har brug for",
    emoji: "💬",
    color: "#DCEBFF",
    path: "/communication",
  },
  {
    title: "Social Stories",
    subtitle: "Øv hverdagens situationer",
    emoji: "📖",
    color: "#F3D8FF",
    path: "/stories",
  },
];

export default function Home() {
  return (
    <main className="home">
      <header className="topbar">
        <div>
          <h1>Hej 👋</h1>
          <p>Hvordan har du det i dag?</p>
        </div>

        <div className="avatar">👤</div>
      </header>

      <section className="hero">
        <span className="badge">🌿 Støtteguiden</span>

        <h2>Vælg et værktøj</h2>

        <div className="moods">
          <button>😊</button>
          <button>😐</button>
          <button>😢</button>
          <button>😡</button>
        </div>
      </section>

      <h3 className="sectionTitle">Dine værktøjer</h3>

      <div className="moduleGrid">
        {modules.map((module) => (
          <ModuleCard key={module.title} {...module} />
        ))}
      </div>

      <BottomNav />
    </main>
  );
}
