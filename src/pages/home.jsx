const modules = [
  {
    emoji: "😊",
    title: "Følelser",
    subtitle: "Lær at forstå og udtrykke dine følelser",
    color: "#FFE7A3",
  },
  {
    emoji: "🧒",
    title: "BodyMap",
    subtitle: "Vis hvor kroppen føles glad, spændt eller gør ondt",
    color: "#D7F8E8",
  },
  {
    emoji: "📖",
    title: "Social Stories",
    subtitle: "Historier der hjælper i hverdagens situationer",
    color: "#DDEBFF",
  },
  {
    emoji: "🗣️",
    title: "Kommunikation",
    subtitle: "Brug billeder og ord til at fortælle hvad du har brug for",
    color: "#F8DDF1",
  },
];

export default function Home() {
  return (
    <main className="home">

      <section className="hero">

        <span className="badge">
          🌿 Støtteguiden
        </span>

        <h1>
          Hvordan har du det i dag?
        </h1>

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

          <div
            key={module.title}
            className="moduleCard"
          >

            <div
              className="moduleIcon"
              style={{
                background: module.color,
              }}
            >
              {module.emoji}
            </div>

            <h2>{module.title}</h2>

            <p>{module.subtitle}</p>

            <button>
              Åbn →
            </button>

          </div>

        ))}

      </section>

    </main>
  );
}
