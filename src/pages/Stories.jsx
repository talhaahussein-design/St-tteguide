import { useState } from "react";
import PageLayout from "../components/PageLayout";

const stories = [
  { title: "Første skoledag", emoji: "🏫", color: "#DBEAFE", steps: [
    { emoji: "⏰", text: "Om morgenen vågner jeg og spiser morgenmad." },
    { emoji: "🎒", text: "Jeg pakker min rygsæk med bøger og madpakke." },
    { emoji: "🚶", text: "Jeg går til skolen med min forælder." },
    { emoji: "👋", text: "Jeg hilser på læreren og finder min plads." },
    { emoji: "😊", text: "Skoledagen slutter, og jeg tager hjem igen." },
  ]},
  { title: "Hos lægen", emoji: "🏥", color: "#D1FAE5", steps: [
    { emoji: "🚗", text: "Vi kører til lægehuset." },
    { emoji: "🪑", text: "Vi venter i venteværelset." },
    { emoji: "👨‍⚕️", text: "Lægen kalder mit navn, og vi går ind." },
    { emoji: "🩺", text: "Lægen undersøger mig. Det er ikke farligt." },
    { emoji: "🏠", text: "Vi tager hjem igen. Godt klaret!" },
  ]},
  { title: "Supermarkedet", emoji: "🛒", color: "#FEF3C7", steps: [
    { emoji: "📝", text: "Vi laver en indkøbsseddel hjemmefra." },
    { emoji: "🚪", text: "Vi går ind i butikken." },
    { emoji: "🛍️", text: "Vi finder varerne på listen." },
    { emoji: "💳", text: "Vi betaler ved kassen." },
    { emoji: "✅", text: "Vi er færdige og tager hjem!" },
  ]},
];

export default function Stories() {
  const [selected, setSelected] = useState(null);
  const [step, setStep] = useState(0);

  if (selected !== null) {
    const story = stories[selected];
    const cur = story.steps[step];
    return (
      <PageLayout title={story.title} subtitle={`Trin ${step + 1} af ${story.steps.length}`}>
        <div className="card story-step-card">
  {cur.image && (
    <img
      src={cur.image}
      alt=""
      style={{
        width: "100%",
        borderRadius: "16px",
        marginBottom: "1rem"
      }}
    />
  )}
  <div className="story-step-emoji">{cur.emoji}</div>
  <p className="story-step-text">{cur.text}</p>
</div>
        <div className="dot-row">
          {story.steps.map((_, i) => (
            <div key={i} className={`dot${i === step ? " active" : ""}`}
              style={{ width: i === step ? 28 : 9 }} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {step > 0 && (
            <button className="btn-secondary" style={{ flex: 1 }}
              onClick={() => setStep(s => s - 1)}>← Tilbage</button>
          )}
          {step < story.steps.length - 1 ? (
            <button className="btn-primary" style={{ flex: 1 }}
              onClick={() => setStep(s => s + 1)}>Næste →</button>
          ) : (
            <button className="btn-primary" style={{ flex: 1, background: "#16a34a", boxShadow: "0 4px 14px rgba(22,163,74,.28)" }}
              onClick={() => { setSelected(null); setStep(0); }}>Færdig ✓</button>
          )}
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Social Stories" subtitle="Vælg en story at øve">
      {stories.map((story, i) => (
        <div key={story.title} className="module-row" onClick={() => { setSelected(i); setStep(0); }}>
          <div className="module-row-icon" style={{ background: story.color }}>{story.emoji}</div>
          <div className="module-row-body">
            <h3>{story.title}</h3>
            <p>{story.steps.length} trin</p>
          </div>
          <span className="module-row-arrow">›</span>
        </div>
      ))}
    </PageLayout>
  );
}
