import Header from "../components/Header";
import ModuleCard from "../components/ModuleCard";
import BottomNavigation from "../components/BottomNavigation";

const modules = [
  {
    emoji: "😊",
    title: "Følelser",
    subtitle: "Lær at forstå og udtrykke følelser",
    color: "#FFE7A3",
  },
  {
    emoji: "🧒",
    title: "BodyMap",
    subtitle: "Vis hvor kroppen føles glad, trist eller spændt",
    color: "#D7F8E8",
  },
  {
    emoji: "📖",
    title: "Social Stories",
    subtitle: "Historier der hjælper i hverdagen",
    color: "#DDEBFF",
  },
  {
    emoji: "🗣️",
    title: "Kommunikation",
    subtitle: "Brug billeder og ord til at udtrykke behov",
    color: "#F8DDF1",
  },
];

export default function Home() {
  return (
    <div className="home">

      <Header />

      <section className="hero">

        <span className="badge">
          🌿 Velkommen
        </span>

        <h1>Hvordan har du det i dag?</h1>

        <p>
          Små skridt gør en stor forskel.
        </p>

        <div className="moods">
          <button>😊</button>
          <button>😐</button>
          <button>😢</button>
        </div>

      </section>

      <section className="moduleGrid">

        {modules.map((module) => (
          <ModuleCard
            key={module.title}
            emoji={module.emoji}
            title={module.title}
            subtitle={module.subtitle}
            color={module.color}
          />
        ))}

      </section>

      <BottomNavigation />

    </div>
  );
}
