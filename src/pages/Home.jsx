import ModuleCard from "../components/ModuleCard";
import BottomNav from "../components/BottomNav";
const modules = [
  {
    emoji: "😊",
    title: "Følelser",
    subtitle: "Lær at forstå og udtrykke følelser.",
    color: "#FFE7A3",
  },
  {
    emoji: "🧍",
    title: "BodyMap",
    subtitle: "Hvor mærker du det i kroppen?",
    color: "#D6F5E8",
  },
  {
    emoji: "💬",
    title: "Kommunikation",
    subtitle: "Vis hvad du har brug for.",
    color: "#DCEBFF",
  },
  {
    emoji: "📖",
    title: "Social Stories",
    subtitle: "Forbered dig på hverdagens situationer.",
    color: "#F4D9FF",
  },
];

export default function Home() {
  return (
    <main className="home">

      <header className="topbar">
        <div>
          <h1>👋 God aften</h1>
          <p>Velkommen til Støtteguiden</p>
        </div>

        <div className="avatar">
          👤
        </div>
      </header>

      <section className="hero">

        <span className="badge">
          🌿 Små skridt hver dag
        </span>

        <h2>Hvordan har du det i dag?</h2>

        <div className="moods">
          <button>😊</button>
          <button>😐</button>
          <button>😢</button>
          <button>😡</button>
        </div>

      </section>

      <h3 className="sectionTitle">
        Dine værktøjer
      </h3>

      <div className="moduleGrid">
        {modules.map((module) => (
          <ModuleCard key={module.title} {...module} />
        ))}
      </div>
<BottomNav />
    </main>
  );
}
