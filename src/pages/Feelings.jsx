import { useState } from "react";
import PageLayout from "../components/PageLayout";

const moods = [
  {
    emoji: "😁",
    title: "Glad",
    color: "#FFE082",
    message: "Fantastisk! Husk at nyde de gode øjeblikke 💛",
  },
  {
    emoji: "🙂",
    title: "Rolig",
    color: "#C8E6C9",
    message: "Det er dejligt at føle ro 🌿",
  },
  {
    emoji: "😟",
    title: "Bekymret",
    color: "#BBDEFB",
    message: "Prøv at tage 5 rolige vejrtrækninger 💙",
  },
  {
    emoji: "😢",
    title: "Ked af det",
    color: "#E1BEE7",
    message: "Det er okay at være ked af det. Du er ikke alene 💜",
  },
  {
    emoji: "😡",
    title: "Vred",
    color: "#FFCDD2",
    message: "Tag en pause og træk vejret langsomt ❤️",
  },
];

export default function Feelings() {
  const [selected, setSelected] = useState(null);

  return (
    <PageLayout title="Følelser">

      <h2 className="sectionTitle">
        Hvordan har du det?
      </h2>

      <div className="moduleGrid">
        {moods.map((mood) => (
          <div
            key={mood.title}
            className="moduleCard"
            onClick={() => setSelected(mood)}
            style={{ cursor: "pointer" }}
          >
            <div className="moduleTop">

              <div
                className="moduleIcon"
                style={{ background: mood.color }}
              >
                {mood.emoji}
              </div>

              <div className="moduleContent">
                <h2>{mood.title}</h2>
                <p>Tryk for forslag</p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="card"
          style={{ marginTop: 24 }}
        >
          <h2>
            {selected.emoji} {selected.title}
          </h2>

          <p style={{ marginTop: 16 }}>
            {selected.message}
          </p>

          <button className="moduleButton">
            Start øvelse
          </button>
        </div>
      )}

    </PageLayout>
  );
}
