import { useState } from "react";
import PageLayout from "../components/PageLayout";

const moods = [
  { emoji: "😁", title: "Glad",       color: "#FEF9C3", message: "Fantastisk! Husk at nyde de gode øjeblikke 💛" },
  { emoji: "🙂", title: "Rolig",      color: "#D1FAE5", message: "Det er dejligt at føle ro 🌿" },
  { emoji: "😟", title: "Bekymret",   color: "#DBEAFE", message: "Prøv at tage 5 rolige vejrtrækninger 💙" },
  { emoji: "😢", title: "Ked af det", color: "#EDE9FE", message: "Det er okay at være ked af det. Du er ikke alene 💜" },
  { emoji: "😡", title: "Vred",       color: "#FEE2E2", message: "Tag en pause og træk vejret langsomt ❤️" },
  { emoji: "😴", title: "Træt",       color: "#F1F5F9", message: "Kroppen siger stop — det er okay at hvile 🌙" },
];

export default function Feelings() {
  const [selected, setSelected] = useState(null);

  return (
    <PageLayout title="Følelser" subtitle="Hvordan har du det?">
      <div className="feelings-grid">
        {moods.map(mood => (
          <button
            key={mood.title}
            className={`feeling-btn${selected?.title === mood.title ? " selected" : ""}`}
            style={{ background: mood.color }}
            onClick={() => setSelected(mood)}
          >
            <span className="feeling-emoji">{mood.emoji}</span>
            <span className="feeling-label">{mood.title}</span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="card" style={{ marginTop: 16, textAlign: "center", padding: "24px 20px" }}>
          <div style={{ fontSize: 48, marginBottom: 10 }}>{selected.emoji}</div>
          <p style={{ fontSize: 16, fontWeight: 700, color: "var(--slate-700)", lineHeight: 1.5, marginBottom: 18 }}>
            {selected.message}
          </p>
          <button className="btn-primary">Start øvelse</button>
        </div>
      )}
    </PageLayout>
  );
}
