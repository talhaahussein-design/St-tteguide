const modules = [
  {
    emoji: "😊",
    title: "Følelser",
    description: "Lær at forstå og udtrykke dine følelser."
  },
  {
    emoji: "🧒",
    title: "BodyMap",
    description: "Vis hvor kroppen føles glad, spændt eller gør ondt."
  },
  {
    emoji: "📖",
    title: "Social Stories",
    description: "Historier der hjælper i svære hverdagssituationer."
  },
  {
    emoji: "🗣️",
    title: "Kommunikation",
    description: "Brug billeder og ord til at fortælle hvad du har brug for."
  }
];

export default function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="heroContent">

          <span className="welcome">
            🌿 Velkommen til
          </span>

          <h1>Støtteguiden</h1>

          <p>
            Små skridt gør en stor forskel.
          </p>

        </div>

      </section>

      <section className="checkin">

        <h2>Hvordan har du det i dag?</h2>

        <div className="moodRow">

          <button>😊</button>
          <button>😐</button>
          <button>😢</button>

        </div>

      </section>

      <section className="modules">

        {modules.map((module) => (

          <div className="moduleCard" key={module.title}>

            <div className="icon">
              {module.emoji}
            </div>

            <h3>{module.title}</h3>

            <p>{module.description}</p>

            <button>Åbn</button>

          </div>

        ))}

      </section>

    </div>
  );
}
