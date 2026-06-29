import { useState } from "react";
import PageLayout from "../components/PageLayout";

const stories = [
  {
    title: "Første skoledag",
    emoji: "🏫",
    color: "#DBEAFE",
    steps: [
      { emoji: "⏰", text: "Om morgenen vågner jeg og spiser morgenmad." },
      { emoji: "🎒", text: "Jeg pakker min rygsæk med bøger og madpakke." },
      { emoji: "🚶", text: "Jeg går til skolen med min forælder." },
      { emoji: "👋", text: "Jeg hilser på læreren og finder min plads." },
      { emoji: "😊", text: "Skoledagen slutter, og jeg tager hjem igen." },
    ],
  },
  {
    title: "Hos lægen",
    emoji: "🏥",
    color: "#D1FAE5",
    steps: [
      { emoji: "🚗", text: "Vi kører til lægehuset." },
      { emoji: "🪑", text: "Vi venter i venteværelset." },
      { emoji: "👨‍⚕️", text: "Lægen kalder mit navn, og vi går ind." },
      { emoji: "🩺", text: "Lægen undersøger mig. Det er ikke farligt." },
      { emoji: "🏠", text: "Vi tager hjem igen. Godt klaret!" },
    ],
  },
  {
    title: "Supermarkedet",
    emoji: "🛒",
    color: "#FEF3C7",
    steps: [
      { emoji: "📝", text: "Vi laver en indkøbsseddel hjemmefra." },
      { emoji: "🚪", text: "Vi går ind i butikken." },
      { emoji: "🛍️", text: "Vi finder varerne på listen." },
      { emoji: "💳", text: "Vi betaler ved kassen." },
      { emoji: "✅", text: "Vi er færdige og tager hjem!" },
    ],
  },
];

export default function Stories() {
  const [selected, setSelected] = useState(null);
  const [step, setStep] = useState(0);

  if (selected !== null) {
    const story = stories[selected];
    const current = story.steps[step];
    return (
      <PageLayout title={story.title}>
        <div className="card" style={{ textAlign: "center", padding: "32px 24px", marginBottom: 16 }}>
          <div style={{ fontSize: 80, marginBottom: 20 }}>{current.emoji}</div>
          <p style={{ fontSize: 19, fontWeight: 600, color: "var(--slate-700)", lineHeight: 1.5 }}>
            {current.text}
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 }}>
          {story.steps.map((_, i) => (
            <div key={i} style={{
              width: i === step ? 28 : 10,
              height: 10,
              borderRadius: 5,
              background: i === step ? "var(--teal-600)" : "var(--slate-200)",
              transition: "width .2s",
            }} />
          ))}
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {step > 0 && (
            <button className="moduleButton" style={{ flex: 1, marginTop: 0 }}
              onClick={() => setStep(s => s - 1)}>← Tilbage</button>
          )}
          {step < story.steps.length - 1 ? (
            <button className="moduleButton" style={{ flex: 1, marginTop: 0 }}
              onClick={() => setStep(s => s + 1)}>Næste →</button>
          ) : (
            <button className="moduleButton" style={{ flex: 1, marginTop: 0, background: "#16a34a" }}
              onClick={() => { setSelected(null); setStep(0); }}>Færdig ✓</button>
          )}
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Social Stories">
      <p style={{ color: "var(--slate-500)", fontSize: 14, marginBottom: 20 }}>
        Vælg en social story at øve
      </p>
      <div className="moduleGrid">
        {stories.map((story, i) => (
          <div key={story.title} className="moduleCard"
            onClick={() => { setSelected(i); setStep(0); }}>
            <div className="moduleTop">
              <div className="moduleIcon" style={{ background: story.color }}>
                {story.emoji}
              </div>
              <div className="moduleContent">
                <h2>{story.title}</h2>
                <p>{story.steps.length} trin</p>
              </div>
            </div>
            <button className="moduleButton">Start story →</button>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
