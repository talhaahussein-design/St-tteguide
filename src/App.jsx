import { useState } from "react";
import "./index.css";

export default function App() {
  const [role, setRole] = useState("Barn");

  const cards = [
    {
      emoji: "😊",
      title: "Følelser",
      text: "Lær at genkende og udtrykke følelser."
    },
    {
      emoji: "🧒",
      title: "BodyMap",
      text: "Vis hvor kroppen føles glad, spændt eller gør ondt."
    },
    {
      emoji: "📖",
      title: "Social Stories",
      text: "Historier der hjælper med hverdagens situationer."
    },
    {
      emoji: "🗣️",
      title: "Kommunikation",
      text: "Brug billeder og ord til at fortælle hvad du har brug for."
    }
  ];

  return (
    <div className="app">

      <header className="hero">
        <h1>🌿 Støtteguiden</h1>
        <p>Små skridt gør en stor forskel.</p>
      </header>

      <section className="checkin">
        <h2>Hvordan har du det i dag?</h2>

        <div className="moods">
          <button>😊 Godt</button>
          <button>😐 Usikker</button>
          <button>😢 Har brug for hjælp</button>
        </div>
      </section>

      <section className="grid">

        {cards.map((card) => (
          <div className="card" key={card.title}>
            <div className="emoji">{card.emoji}</div>

            <h3>{card.title}</h3>

            <p>{card.text}</p>

            <button>Åbn</button>
          </div>
        ))}

      </section>

      <section className="roles">

        <h2>Profil</h2>

        <div className="roleButtons">

          {["Barn", "Forælder", "Fagperson", "Kommune"].map((r) => (
            <button
              key={r}
              className={role === r ? "active" : ""}
              onClick={() => setRole(r)}
            >
              {r}
            </button>
          ))}

        </div>

        <p>Aktiv profil: <strong>{role}</strong></p>

      </section>

    </div>
  );
}
